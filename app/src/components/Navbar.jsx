// Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-yellow-50 shadow-md fixed left-0 w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-pink-600">
          Namaste <span className="text-orange-500">++</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium text-gray-700">
          <a href="#home" className="hover:text-pink-500">Home</a>
          <a href="#features" className="hover:text-pink-500">Features</a>
          <a href="#playground" className="hover:text-pink-500">Playground</a>
          <a href="#learn" className="hover:text-pink-500">Learn</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
            🚀 Try Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-pink-600">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-center text-lg font-medium text-gray-700">
          <a href="#home" className="block hover:text-pink-500">Home</a>
          <a href="#features" className="block hover:text-pink-500">Features</a>
          <a href="#playground" className="block hover:text-pink-500">Playground</a>
          <a href="#learn" className="block hover:text-pink-500">Learn</a>
          <button className="w-full bg-pink-500 text-white py-2 rounded-lg mt-2 hover:bg-pink-600 transition">
            🚀 Try Now
          </button>
        </div>
      )}
    </nav>
  );
}
