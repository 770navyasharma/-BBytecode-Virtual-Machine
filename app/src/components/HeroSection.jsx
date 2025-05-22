import React from "react";
import { Sparkles } from "lucide-react";

const floatingKeywords = [
  "Display", "agar", "warna", "warna_agar", "manlo", "jabtak", "Read", "har", "define_work", "number", "likho"
];

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#FFEED7] flex flex-col items-center justify-center text-center p-6">
      
      {/* Floating Keywords */}
      {floatingKeywords.map((word, index) => (
        <span
          key={index}
          className={`floating-keyword text-xs md:text-sm font-mono text-pink-600 font-semibold opacity-70 absolute`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          {word}
        </span>
      ))}

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 drop-shadow-xs mb-4 relative animate-textGlow z-10">
        Namaste <span className="text-orange-500">++</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-2xl mb-6 z-10">
        🧒 A super fun programming language made just for kids! <br />
        Code in Hinglish. Learn with colors, play, and real-world magic! 🎨✨
      </p>

      {/* Code Example */}
      <div className="bg-gray-900 text-green-400 px-4 py-2 rounded-lg font-mono text-sm mb-6 shadow-md z-10">
        <code>Display("Hello Duniya!")</code>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 z-10">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl text-lg shadow-lg transition">
          🚀 Try Playground
        </button>
        <button className="bg-white hover:bg-yellow-100 text-pink-600 border border-pink-500 font-semibold py-3 px-6 rounded-xl text-lg shadow">
          📚 Learn More
        </button>
      </div>

      {/* Fun Facts */}
      <div className="text-left max-w-3xl bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg z-10">
        <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
          <Sparkles className="text-yellow-500" /> Why Learn Programming?
        </h2>
        <ul className="text-lg text-gray-700 space-y-3">
          <li>🧠 Boosts problem-solving and creativity</li>
          <li>🕹️ Turns imagination into real games and apps</li>
          <li>🌎 Speak the universal language of the future</li>
        </ul>
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-600 mt-10 z-10">
        Made with ❤️ by Navya Sharma and Rajat Singhal
      </p>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 10px #f472b6, 0 0 20px #f472b6;
          }
          50% {
            text-shadow: 0 0 20px #ec4899, 0 0 30px #ec4899;
          }
        }

        .animate-textGlow {
          animation: textGlow 3s ease-in-out infinite;
        }

        .floating-keyword {
          animation: floatKeyword 12s linear infinite;
          white-space: nowrap;
        }

        @keyframes floatKeyword {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) ;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
