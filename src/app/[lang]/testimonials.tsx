"use client";

import { useState } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      content:
        "This QR generator saved us countless hours on our global campaign. The custom logo feature made our codes instantly recognizable!",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Ahmed Hassan",
      role: "Restaurant Owner",
      company: "Cairo Delights",
      content:
        "Perfect for our contactless menu. Easy to use, professional results every time. Our customers love the clean design!",
      rating: 5,
      avatar: "👨‍🍳",
    },
    {
      name: "Maria Rodriguez",
      role: "Event Coordinator",
      company: "Global Events",
      content:
        "Used this for 50+ international events. The bulk generation feature and custom colors match our brand perfectly.",
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
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users from around the world who trust QR
            Generator Pro.
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
                <div className="text-sm text-gray-500">
                  {testimonials[activeTestimonial].company}
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
