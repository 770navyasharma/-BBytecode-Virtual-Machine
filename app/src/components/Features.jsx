import React from "react";
import {
  Globe,
  Lightbulb,
  FileCode,
  Heart,
  Users,
  Code,
} from "lucide-react";

const features = [
  {
    title: "Apni Bhasha Mein Coding",
    description:
      "Namaste++ allows you to write code in Hindi – making programming accessible for everyone.",
    icon: <Globe className="w-8 h-8 text-[#ff5722]" />,
  },
  {
    title: "Easy to Learn",
    description:
      "With a beginner-friendly syntax like 'manlo' and 'agar', Namaste++ makes it easy to get started.",
    icon: <Lightbulb className="w-8 h-8 text-[#ff5722]" />,
  },
  {
    title: "Interactive Playground",
    description:
      "Write, test, and run code directly in your browser. No installation needed.",
    icon: <FileCode className="w-8 h-8 text-[#ff5722]" />,
  },
  {
    title: "Built with ❤️",
    description:
      "Namaste++ is made for learners, educators, and dreamers – with love and care.",
    icon: <Heart className="w-8 h-8 text-[#ff5722]" />,
  },
  {
    title: "Community Driven",
    description:
      "Join our open-source community to contribute, learn, and grow together.",
    icon: <Users className="w-8 h-8 text-[#ff5722]" />,
  },
  {
    title: "Powerful Yet Simple",
    description:
      "Don’t underestimate it – Namaste++ supports loops, conditions, functions, and more.",
    icon: <Code className="w-8 h-8 text-[#ff5722]" />,
  },
];

export default function Features() {
  return (
    <section className="bg-[#FFEED7] py-20 px-4" id="features">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#222] mb-6">Why Namaste++?</h2>
        <p className="text-lg text-[#555] max-w-2xl mx-auto mb-12">
          Discover how Namaste++ is reshaping how we learn programming — in our own language.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#222] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#555]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}