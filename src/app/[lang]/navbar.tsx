"use client";

import { useState } from "react";
import { QrCode, X, Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Use Cases
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Reviews
            </a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#features"
              className="block text-gray-700 hover:text-blue-600"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="block text-gray-700 hover:text-blue-600"
            >
              Use Cases
            </a>
            <a
              href="#testimonials"
              className="block text-gray-700 hover:text-blue-600"
            >
              Reviews
            </a>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg">
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
