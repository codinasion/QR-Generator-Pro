export default function FunFacts() {
  const funFacts = [
    { number: "2.8B", label: "QR Codes Scanned Daily" },
    { number: "94%", label: "Mobile Users Scan QR Codes" },
    { number: "150+", label: "Countries Using QR Codes" },
    { number: "3s", label: "Average Scan Time" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">QR Code Revolution</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            The world has embraced QR codes like never before. Here's why
            they're essential for modern business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {funFacts.map((fact, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {fact.number}
              </div>
              <p className="text-lg opacity-90">{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
