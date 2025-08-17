import { dictType } from "@/dictionaries";
import { Upload, Palette, Download, Shield, Zap, Globe } from "lucide-react";

export default function Features({ dict }: { dict: dictType }) {
  const features = [
    {
      icon: <Upload className="w-6 h-6" />,
      title: dict.features.text_3,
      description: dict.features.text_4,
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: dict.features.text_5,
      description: dict.features.text_6,
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: dict.features.text_7,
      description: dict.features.text_8,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: dict.features.text_9,
      description: dict.features.text_10,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: dict.features.text_11,
      description: dict.features.text_12,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: dict.features.text_13,
      description: dict.features.text_14,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.features.text_1}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {dict.features.text_2}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg w-fit mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
