import { dictType } from "@/dictionaries";

export default function HistoricalContext({ dict }: { dict: dictType }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          {dict.historical_context.text_1}
        </h2>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1994</div>
              <h3 className="text-lg font-semibold mb-2">
                {dict.historical_context.text_2}
              </h3>
              <p className="text-gray-600">{dict.historical_context.text_3}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                2020
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {dict.historical_context.text_4}
              </h3>
              <p className="text-gray-600">{dict.historical_context.text_5}</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {dict.historical_context.text_6}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {dict.historical_context.text_7}
              </h3>
              <p className="text-gray-600">{dict.historical_context.text_8}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
