import { ArrowRight, Eye, Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Create{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional
          </span>
          <br />
          QR Codes in Seconds
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Generate stunning QR codes with custom logos, colors, and designs.
          Perfect for businesses, events, marketing campaigns, and contactless
          experiences worldwide.
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
  );
}
