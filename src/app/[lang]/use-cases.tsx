export default function UseCases() {
  const useCases = [
    {
      icon: "🍽️",
      title: "Restaurant Menus",
      desc: "Contactless dining experiences",
    },
    { icon: "🎫", title: "Event Tickets", desc: "Seamless check-in processes" },
    {
      icon: "💼",
      title: "Business Cards",
      desc: "Digital networking solutions",
    },
    { icon: "📱", title: "App Downloads", desc: "Direct app store links" },
    { icon: "💰", title: "Payment Links", desc: "Quick payment processing" },
    { icon: "📍", title: "Location Sharing", desc: "GPS coordinates and maps" },
  ];

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From restaurants to events, our QR codes adapt to your specific
            needs and industry requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-gray-600">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
