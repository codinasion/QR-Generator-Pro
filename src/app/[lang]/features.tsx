import { Upload, Palette, Download, Shield, Zap, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: "Custom Logo Integration",
      description:
        "Upload your brand logo and seamlessly integrate it into your QR codes for enhanced brand recognition.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Colors & Design",
      description:
        "Choose from unlimited color combinations and design options to match your brand identity perfectly.",
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "High-Quality Downloads",
      description:
        "Download QR codes in multiple formats (PNG, SVG, PDF) with scalable vector quality.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy Focused",
      description:
        "Your data stays secure. We don't store your QR code content or personal information.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Generate professional QR codes instantly with our optimized rendering engine.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Compatibility",
      description:
        "Works with all international characters and supports worldwide QR code standards.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create professional QR codes for your
            business, events, and marketing campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
