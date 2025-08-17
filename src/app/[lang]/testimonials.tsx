"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { dictType } from "@/dictionaries";

export default function Testimonials({ dict }: { dict: dictType }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: dict.testimonials.text_3,
      role: dict.testimonials.text_4,
      content: dict.testimonials.text_5,
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: dict.testimonials.text_6,
      role: dict.testimonials.text_7,
      content: dict.testimonials.text_8,
      rating: 5,
      avatar: "👨‍🍳",
    },
    {
      name: dict.testimonials.text_9,
      role: dict.testimonials.text_10,
      content: dict.testimonials.text_11,
      rating: 5,
      avatar: "👩‍💻",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.testimonials.text_1}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.testimonials.text_2}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">
                {testimonials[activeTestimonial].avatar}
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <blockquote className="text-xl text-gray-800 mb-4">
                "{testimonials[activeTestimonial].content}"
              </blockquote>
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
