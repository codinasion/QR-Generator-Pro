"use client";

import { dictType } from "@/dictionaries";
import { Download, QrCode, Upload } from "lucide-react";
import React, { useState, useEffect } from "react";
import type { QRCodeToDataURLOptions } from "qrcode";

const generateQRCode = async (
  text: string,
  options: QRCodeToDataURLOptions = {},
) => {
  if (typeof window === "undefined") return "";

  try {
    const QRCode = await import("qrcode");

    const canvas = document.createElement("canvas");

    const qrOptions = {
      errorCorrectionLevel: "M",
      type: "image/png",
      quality: 0.92,
      margin: 1,
      color: {
        // @ts-expect-error ignore
        dark: options.fgColor || "#000000",
        // @ts-expect-error ignore
        light: options.bgColor || "#ffffff",
      },
      // @ts-expect-error ignore
      width: options.size || 300,
      ...options,
    };

    // @ts-expect-error ignore
    await QRCode.toCanvas(canvas, text, qrOptions);
    return canvas.toDataURL();
  } catch (error) {
    console.error("Error generating QR code:", error);
    return "";
  }
};

export default function Component({ dict }: { dict: dictType }) {
  const [text, setText] = useState("https://example.com");
  const [qrCode, setQrCode] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoDataUrl, setLogoDataUrl] = useState<string>("");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const [size, setSize] = useState(300);
  const [errorLevel, setErrorLevel] = useState("M");
  const [isGenerating, setIsGenerating] = useState(false);
  const [qrFormat, setQrFormat] = useState("PNG");

  const handleLogoUpload = (file: File | null) => {
    setLogoFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoDataUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setLogoDataUrl("");
    }
  };

  const generateQRWithLogo = async () => {
    if (!text.trim()) return;

    setIsGenerating(true);
    try {
      const qrOptions = {
        fgColor,
        bgColor,
        size,
        errorCorrectionLevel: errorLevel,
        margin: 2,
      };

      // @ts-expect-error ignore
      const qrDataUrl = await generateQRCode(text, qrOptions);

      if (logoDataUrl && qrDataUrl) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = size;
        canvas.height = size;

        if (ctx) {
          const qrImg = new Image();
          qrImg.onload = () => {
            ctx.drawImage(qrImg, 0, 0, size, size);

            const logoImg = new Image();
            logoImg.onload = () => {
              const logoSize = size * 0.2;
              const logoX = (size - logoSize) / 2;
              const logoY = (size - logoSize) / 2;

              ctx.fillStyle = "#ffffff";
              ctx.fillRect(logoX - 5, logoY - 5, logoSize + 10, logoSize + 10);

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
      console.error("Error generating QR code:", error);
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
      const link = document.createElement("a");
      const filename = `qr-code-${Date.now()}.${qrFormat.toLowerCase()}`;

      if (qrFormat === "SVG") {
        link.download = filename.replace(".svg", ".png");
      } else {
        link.download = filename;
      }

      link.href = qrCode;
      link.click();
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="component">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {dict.component.text_1}
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {dict.component.text_2}
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={dict.component.text_3}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white text-gray-900 placeholder-gray-500"
                rows={3}
              />
              <p className="text-xs text-gray-500 mt-1">
                {dict.component.text_4}: https://website.com,
                mailto:email@domain.com, tel:+1234567890
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {dict.component.text_5}
                </label>
                <select
                  value={errorLevel}
                  onChange={(e) => setErrorLevel(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                >
                  <option value="L" className="text-gray-900">
                    {dict.component.text_6}
                  </option>
                  <option value="M" className="text-gray-900">
                    {dict.component.text_7}
                  </option>
                  <option value="Q" className="text-gray-900">
                    {dict.component.text_8}
                  </option>
                  <option value="H" className="text-gray-900">
                    {dict.component.text_9}
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {dict.component.text_10}
                </label>
                <select
                  value={qrFormat}
                  onChange={(e) => setQrFormat(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                >
                  <option value="PNG" className="text-gray-900">
                    {dict.component.text_11}
                  </option>
                  <option value="JPG" className="text-gray-900">
                    {dict.component.text_12}
                  </option>
                  <option value="SVG" className="text-gray-900">
                    {dict.component.text_13}
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {dict.component.text_14}
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
                  {dict.component.text_15}
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
                {dict.component.text_16}: {size}px
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
                {dict.component.text_17}
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-2">{dict.component.text_18}</p>
                <p className="text-xs text-gray-500 mb-2">
                  {dict.component.text_19}
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleLogoUpload(e.target.files?.[0] || null)
                  }
                  className="hidden"
                  id="logo-upload"
                />
                <label
                  htmlFor="logo-upload"
                  className="inline-block bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg cursor-pointer transition-colors border border-blue-200 font-medium"
                >
                  {dict.component.text_20}
                </label>
                {logoFile && (
                  <div className="mt-3 p-2 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-700">✓ {logoFile.name}</p>
                    <button
                      onClick={() => handleLogoUpload(null)}
                      className="text-xs text-red-600 hover:text-red-800 mt-1"
                    >
                      {dict.component.text_21}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview and Download */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {dict.component.text_22}
            </h3>
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
                    style={{ width: size, height: size }}
                  />
                  {logoFile && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                      {dict.component.text_23}
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">{dict.component.text_24}</p>
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
                  <span>{dict.component.text_25}</span>
                </button>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>
                    {dict.component.text_26} {qrFormat} {dict.component.text_27}
                  </p>
                  <p>
                    {dict.component.text_28}: {size}×{size}px •{" "}
                    {dict.component.text_29}: {errorLevel}
                  </p>
                  {logoFile && <p>✓ {dict.component.text_30}</p>}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
