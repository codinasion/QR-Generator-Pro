import { QrCode } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Create Amazing QR Codes?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join millions of users worldwide who create professional QR codes with
          our free generator.
        </p>
        <button className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
          <QrCode className="w-6 h-6" />
          <span>Start Creating Now - It's Free!</span>
        </button>
      </div>
    </section>
  );
}
