"use client";

import { dictType } from "@/dictionaries";
import { ArrowRight, Check } from "lucide-react";

export default function Hero({ dict }: { dict: dictType }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {dict.hero.text_1}
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {dict.hero.text_2}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() =>
              document
                .querySelector("#component")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>{dict.hero.text_3}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>{dict.hero.text_4}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>{dict.hero.text_5}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>{dict.hero.text_6}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
