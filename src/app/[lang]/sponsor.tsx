import { Award, Check, Star } from "lucide-react";

export default function Sponsor() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-amber-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-yellow-200">
          <Award className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Become Our Exclusive Sponsor
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Support QR Generator Pro and get your brand featured permanently on
            our platform. Perfect for tool companies, software businesses, or
            anyone wanting to reach our global audience.
          </p>
          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-xl mb-6">
            <div className="text-4xl font-bold text-gray-900 mb-2">$100</div>
            <div className="text-lg text-gray-700 mb-4">
              One-time payment • Lifetime sponsorship
            </div>
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
  );
}
