export default function HistoricalContext() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          The QR Code Journey
        </h2>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1994</div>
              <h3 className="text-lg font-semibold mb-2">Birth in Japan</h3>
              <p className="text-gray-600">
                QR codes were invented by Denso Wave for tracking automotive
                parts in Toyota factories.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                2020
              </div>
              <h3 className="text-lg font-semibold mb-2">Pandemic Boom</h3>
              <p className="text-gray-600">
                COVID-19 accelerated QR code adoption for contactless
                interactions worldwide.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                Today
              </div>
              <h3 className="text-lg font-semibold mb-2">Global Standard</h3>
              <p className="text-gray-600">
                QR codes are now essential for business, marketing, and digital
                experiences globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
