"use client";

import { dictType } from "@/dictionaries";
import { QrCode } from "lucide-react";

export default function CTA({ dict }: { dict: dictType }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {dict.cta.text_1}
        </h2>
        <p className="text-xl mb-8 opacity-90">{dict.cta.text_2}</p>
        <button
          onClick={() =>
            document
              .querySelector("#component")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
        >
          <QrCode className="w-6 h-6" />
          <span>{dict.cta.text_3}</span>
        </button>
      </div>
    </section>
  );
}
