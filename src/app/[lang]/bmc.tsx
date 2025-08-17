import { Coffee, Heart } from "lucide-react";

export default function BuyMeACoffee() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <Coffee className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Enjoying QR Generator Pro?
          </h2>
          <p className="text-gray-600 mb-6">
            If this tool has saved you time and helped your business, consider
            buying me a coffee! Your support helps keep this tool free and
            continuously improved.
          </p>
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
            <Heart className="w-5 h-5" />
            <span>Buy Me a Coffee - $5</span>
          </button>
        </div>
      </div>
    </section>
  );
}
