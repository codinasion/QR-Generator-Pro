import { dictType } from "@/dictionaries";

export default function FunFacts({ dict }: { dict: dictType }) {
  const funFacts = [
    { number: "2.8B", label: dict.fun_facts.text_3 },
    { number: "94%", label: dict.fun_facts.text_4 },
    { number: "150+", label: dict.fun_facts.text_5 },
    { number: "3s", label: dict.fun_facts.text_6 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{dict.fun_facts.text_1}</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            {dict.fun_facts.text_2}
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
