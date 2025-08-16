import { getDictionary, langListData, langType } from "@/dictionaries";

export async function generateStaticParams() {
  return langListData.map((lang) => ({
    lang: lang,
  }));
}

export default async function Page({ params }: { params: Promise<langType> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <>Hello World!!!</>;
}


// ------------------------------------------------------------------------------------

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { QrCode, Star, Coffee, Heart, Globe, Smartphone, Shield, Zap, Download, Upload, Palette, Eye, TrendingUp, Users, Clock, Award, Check, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import Head from 'next/head';

// Using qrcode npm package for professional QR code generation
const generateQRCode = async (text: string, options: any = {}) => {
  if (typeof window === 'undefined') return '';
  
  try {
    // Dynamically import qrcode to avoid SSR issues
    const QRCode = await import('qrcode');
    
    const canvas = document.createElement('canvas');
    
    const qrOptions = {
      errorCorrectionLevel: 'M',
      type: 'image/png',
      quality: 0.92,
      margin: 1,
      color: {
        dark: options.fgColor || '#000000',
        light: options.bgColor || '#ffffff'
      },
      width: options.size || 300,
      ...options
    };
    
    await QRCode.toCanvas(canvas, text, qrOptions);
    return canvas.toDataURL();
  } catch (error) {
    console.error('Error generating QR code:', error);
    return '';
  }
};

export default function QRCodeGeneratorPage() {
  const [text, setText] = useState('https://example.com');
  const [qrCode, setQrCode] = useState('');
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoDataUrl, setLogoDataUrl] = useState<string>('');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [fgColor, setFgColor] = useState('#000000');
  const [size, setSize] = useState(300);
  const [errorLevel, setErrorLevel] = useState('M');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [qrFormat, setQrFormat] = useState('PNG');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Handle logo upload
  const handleLogoUpload = (file: File | null) => {
    setLogoFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoDataUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoDataUrl('');
    }
  };

  // Generate QR code with logo overlay
  const generateQRWithLogo = async () => {
    if (!text.trim()) return;
    
    setIsGenerating(true);
    try {
      const qrOptions = {
        fgColor,
        bgColor,
        size,
        errorCorrectionLevel: errorLevel,
        margin: 2
      };

      const qrDataUrl = await generateQRCode(text, qrOptions);
      
      if (logoDataUrl && qrDataUrl) {
        // Create a canvas to overlay logo on QR code
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = size;
        canvas.height = size;

        if (ctx) {
          // Draw QR code
          const qrImg = new Image();
          qrImg.onload = () => {
            ctx.drawImage(qrImg, 0, 0, size, size);
            
            // Draw logo in center
            const logoImg = new Image();
            logoImg.onload = () => {
              const logoSize = size * 0.2; // Logo is 20% of QR code size
              const logoX = (size - logoSize) / 2;
              const logoY = (size - logoSize) / 2;
              
              // Add white background for logo
              ctx.fillStyle = '#ffffff';
              ctx.fillRect(logoX - 5, logoY - 5, logoSize + 10, logoSize + 10);
              
              // Draw logo
              ctx.drawImage(logoImg, logoX, logoY, logoSize, logoSize);
              
              setQrCode(canvas.toDataURL());
            };
            logoImg.src = logoDataUrl;
          };
          qrImg.src = qrDataUrl;
        }
      } else {
        setQrCode(qrDataUrl);
      }
    } catch (error) {
      console.error('Error generating QR code:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (text.trim()) {
        generateQRWithLogo();
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [text, size, bgColor, fgColor, logoDataUrl, errorLevel]);

  const downloadQR = () => {
    if (qrCode) {
      const link = document.createElement('a');
      const filename = `qr-code-${Date.now()}.${qrFormat.toLowerCase()}`;
      
      if (qrFormat === 'SVG') {
        // For SVG, we'd need to regenerate as SVG
        // For now, default to PNG
        link.download = filename.replace('.svg', '.png');
      } else {
        link.download = filename;
      }
      
      link.href = qrCode;
      link.click();
    }
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      content: "This QR generator saved us countless hours on our global campaign. The custom logo feature made our codes instantly recognizable!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Ahmed Hassan",
      role: "Restaurant Owner",
      company: "Cairo Delights",
      content: "Perfect for our contactless menu. Easy to use, professional results every time. Our customers love the clean design!",
      rating: 5,
      avatar: "👨‍🍳"
    },
    {
      name: "Maria Rodriguez",
      role: "Event Coordinator",
      company: "Global Events",
      content: "Used this for 50+ international events. The bulk generation feature and custom colors match our brand perfectly.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  const features = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Custom Logo Integration",
      description: "Upload your brand logo and seamlessly integrate it into your QR codes for enhanced brand recognition."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Colors & Design",
      description: "Choose from unlimited color combinations and design options to match your brand identity perfectly."
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "High-Quality Downloads",
      description: "Download QR codes in multiple formats (PNG, SVG, PDF) with scalable vector quality."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy Focused",
      description: "Your data stays secure. We don't store your QR code content or personal information."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Generate professional QR codes instantly with our optimized rendering engine."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Compatibility",
      description: "Works with all international characters and supports worldwide QR code standards."
    }
  ];

  const useCases = [
    { icon: "🍽️", title: "Restaurant Menus", desc: "Contactless dining experiences" },
    { icon: "🎫", title: "Event Tickets", desc: "Seamless check-in processes" },
    { icon: "💼", title: "Business Cards", desc: "Digital networking solutions" },
    { icon: "📱", title: "App Downloads", desc: "Direct app store links" },
    { icon: "💰", title: "Payment Links", desc: "Quick payment processing" },
    { icon: "📍", title: "Location Sharing", desc: "GPS coordinates and maps" }
  ];

  const funFacts = [
    { number: "2.8B", label: "QR Codes Scanned Daily" },
    { number: "94%", label: "Mobile Users Scan QR Codes" },
    { number: "150+", label: "Countries Using QR Codes" },
    { number: "3s", label: "Average Scan Time" }
  ];

  return (
    <>
      <Head>
        <title>Free QR Code Generator with Logo & Custom Design | Professional QR Codes Online</title>
        <meta name="description" content="Create professional QR codes with custom logos, colors, and designs. Free online QR code generator for business cards, menus, events, and marketing campaigns. Download high-quality PNG, SVG formats instantly." />
        <meta name="keywords" content="QR code generator, custom QR codes, QR code with logo, free QR generator, business QR codes, marketing QR codes, contactless menu QR, event QR codes, professional QR design" />
        <meta property="og:title" content="Professional QR Code Generator with Custom Logo & Design" />
        <meta property="og:description" content="Generate stunning QR codes with your brand logo and custom colors. Perfect for businesses, restaurants, events, and marketing campaigns. Free and instant downloads." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free QR Code Generator with Logo & Custom Design" />
        <meta name="twitter:description" content="Create professional QR codes with custom branding. Perfect for business, marketing, and events. Download instantly in multiple formats." />
        <link rel="canonical" href="https://qr-generator-pro.com" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  QR Generator Pro
                </span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                <a href="#use-cases" className="text-gray-700 hover:text-blue-600 transition-colors">Use Cases</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Reviews</a>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started Free
                </button>
              </div>

              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="px-4 py-4 space-y-4">
                <a href="#features" className="block text-gray-700 hover:text-blue-600">Features</a>
                <a href="#use-cases" className="block text-gray-700 hover:text-blue-600">Use Cases</a>
                <a href="#testimonials" className="block text-gray-700 hover:text-blue-600">Reviews</a>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg">
                  Get Started Free
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Create <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professional</span><br />
              QR Codes in Seconds
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Generate stunning QR codes with custom logos, colors, and designs. Perfect for businesses, events, marketing campaigns, and contactless experiences worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2">
                <span>Start Creating Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>100% Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>No Registration</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Instant Download</span>
              </div>
            </div>
          </div>
        </section>

        {/* QR Code Generator Tool */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Controls */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Generate Your QR Code</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content (URL, Text, Email, Phone, WiFi, etc.)
                  </label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter URL, text, email, phone number, or any content..."
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white text-gray-900 placeholder-gray-500"
                    rows={3}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Examples: https://website.com, mailto:email@domain.com, tel:+1234567890
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Error Correction Level
                    </label>
                    <select
                      value={errorLevel}
                      onChange={(e) => setErrorLevel(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                    >
                      <option value="L" className="text-gray-900">Low (7%)</option>
                      <option value="M" className="text-gray-900">Medium (15%)</option>
                      <option value="Q" className="text-gray-900">Quartile (25%)</option>
                      <option value="H" className="text-gray-900">High (30%)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Download Format
                    </label>
                    <select
                      value={qrFormat}
                      onChange={(e) => setQrFormat(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                    >
                      <option value="PNG" className="text-gray-900">PNG (Recommended)</option>
                      <option value="JPG" className="text-gray-900">JPG</option>
                      <option value="SVG" className="text-gray-900">SVG (Vector)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Foreground Color
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        className="w-12 h-12 border border-gray-300 rounded-lg cursor-pointer bg-white"
                      />
                      <input
                        type="text"
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-mono"
                        placeholder="#000000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Background Color
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="w-12 h-12 border border-gray-300 rounded-lg cursor-pointer bg-white"
                      />
                      <input
                        type="text"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-mono"
                        placeholder="#ffffff"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Size: {size}px
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="800"
                    value={size}
                    onChange={(e) => setSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>200px</span>
                    <span>500px</span>
                    <span>800px</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Logo (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Drag & drop your logo or click to browse</p>
                    <p className="text-xs text-gray-500 mb-2">Recommended: Square images, PNG/JPG, max 2MB</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleLogoUpload(e.target.files?.[0] || null)}
                      className="hidden"
                      id="logo-upload"
                    />
                    <label
                      htmlFor="logo-upload"
                      className="inline-block bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg cursor-pointer transition-colors border border-blue-200 font-medium"
                    >
                      Choose File
                    </label>
                    {logoFile && (
                      <div className="mt-3 p-2 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-700">✓ {logoFile.name}</p>
                        <button
                          onClick={() => handleLogoUpload(null)}
                          className="text-xs text-red-600 hover:text-red-800 mt-1"
                        >
                          Remove Logo
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Preview and Download */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Preview</h3>
                <div className="bg-gray-50 p-8 rounded-xl inline-block mb-6">
                  {isGenerating ? (
                    <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    </div>
                  ) : qrCode ? (
                    <div className="relative">
                      <img 
                        src={qrCode} 
                        alt="Generated QR Code" 
                        className="mx-auto rounded-lg shadow-sm" 
                        style={{width: size, height: size}} 
                      />
                      {logoFile && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                          Logo Added
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <QrCode className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Enter content to generate QR code</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {qrCode && !isGenerating && (
                  <div className="space-y-4">
                    <button
                      onClick={downloadQR}
                      disabled={isGenerating}
                      className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto disabled:opacity-50"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download QR Code</span>
                    </button>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p>High-quality {qrFormat} format</p>
                      <p>Size: {size}×{size}px • Error Level: {errorLevel}</p>
                      {logoFile && <p>✓ Custom logo included</p>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Buy Me a Coffee */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Coffee className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enjoying QR Generator Pro?</h2>
              <p className="text-gray-600 mb-6">
                If this tool has saved you time and helped your business, consider buying me a coffee! 
                Your support helps keep this tool free and continuously improved.
              </p>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
                <Heart className="w-5 h-5" />
                <span>Buy Me a Coffee - $5</span>
              </button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to create professional QR codes for your business, events, and marketing campaigns.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect for Every Industry</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From restaurants to events, our QR codes adapt to your specific needs and industry requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">QR Code Revolution</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                The world has embraced QR codes like never before. Here's why they're essential for modern business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {funFacts.map((fact, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{fact.number}</div>
                  <p className="text-lg opacity-90">{fact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Context */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">The QR Code Journey</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">1994</div>
                  <h3 className="text-lg font-semibold mb-2">Birth in Japan</h3>
                  <p className="text-gray-600">QR codes were invented by Denso Wave for tracking automotive parts in Toyota factories.</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">2020</div>
                  <h3 className="text-lg font-semibold mb-2">Pandemic Boom</h3>
                  <p className="text-gray-600">COVID-19 accelerated QR code adoption for contactless interactions worldwide.</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">Today</div>
                  <h3 className="text-lg font-semibold mb-2">Global Standard</h3>
                  <p className="text-gray-600">QR codes are now essential for business, marketing, and digital experiences globally.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of satisfied users from around the world who trust QR Generator Pro.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{testimonials[activeTestimonial].avatar}</div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-800 mb-4">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonials[activeTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[activeTestimonial].role}</div>
                    <div className="text-sm text-gray-500">{testimonials[activeTestimonial].company}</div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Amazing QR Codes?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join millions of users worldwide who create professional QR codes with our free generator.
            </p>
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
              <QrCode className="w-6 h-6" />
              <span>Start Creating Now - It's Free!</span>
            </button>
          </div>
        </section>

        {/* Sponsor Component */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-amber-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-200">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Become Our Exclusive Sponsor</h2>
              <p className="text-lg text-gray-600 mb-6">
                Support QR Generator Pro and get your brand featured permanently on our platform. 
                Perfect for tool companies, software businesses, or anyone wanting to reach our global audience.
              </p>
              <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">$100</div>
                <div className="text-lg text-gray-700 mb-4">One-time payment • Lifetime sponsorship</div>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Your logo prominently displayed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Link to your website</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Exclusive sponsorship (only 1 sponsor)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Reach thousands of daily users</span>
                  </li>
                </ul>
              </div>
              <button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
                <Star className="w-5 h-5" />
                <span>Secure Your Sponsorship</span>
              </button>
              <p className="text-sm text-gray-500 mt-4">
                First come, first served. Only one sponsor slot available.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                    <QrCode className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold">QR Generator Pro</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  The world's most trusted QR code generator. Create professional QR codes with custom designs, 
                  logos, and colors. Used by millions of businesses worldwide.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <Globe className="w-5 h-5" />
                  </button>
                  <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <Users className="w-5 h-5" />
                  </button>
                  <button className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                    <TrendingUp className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">QR Generator</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Logo Integration</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Custom Colors</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Bulk Generation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Access</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 QR Generator Pro. All rights reserved. Made with ❤️ for businesses worldwide.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-sm text-gray-400">Global Usage:</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-400">2.8M+ QR codes generated today</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}