import { dictType } from "@/dictionaries";

export default function UseCases({ dict }: { dict: dictType }) {
  const useCases = [
    {
      icon: "🍽️",
      title: dict.use_cases.text_3,
      desc: dict.use_cases.text_4,
    },
    { icon: "🎫", title: dict.use_cases.text_5, desc: dict.use_cases.text_6 },
    {
      icon: "💼",
      title: dict.use_cases.text_7,
      desc: dict.use_cases.text_8,
    },
    { icon: "📱", title: dict.use_cases.text_9, desc: dict.use_cases.text_10 },
    { icon: "💰", title: dict.use_cases.text_11, desc: dict.use_cases.text_12 },
    { icon: "📍", title: dict.use_cases.text_13, desc: dict.use_cases.text_14 },
  ];

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.use_cases.text_1}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.use_cases.text_2}
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
