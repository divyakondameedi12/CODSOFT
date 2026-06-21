import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#5C0A0A] via-[#7A1F1F] to-[#8B1E1E] text-white sticky top-0 z-50 border-b-2 border-[#D4AF37] shadow-2xl">
      
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-2xl shadow-lg">
            🍛
          </div>

          <span
            className="text-4xl font-bold text-[#D4AF37]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Amma Muddha
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg font-medium">
          <Link to="/" className="hover:text-[#FFD700] transition">
            Home
          </Link>

          <Link to="/menu" className="hover:text-[#FFD700] transition">
            Menu
          </Link>

          <Link to="/about" className="hover:text-[#FFD700] transition">
            About
          </Link>

          <Link to="/gallery" className="hover:text-[#FFD700] transition">
            Gallery
          </Link>

          <Link to="/testimonials" className="hover:text-[#FFD700] transition">
            Testimonials
          </Link>

          <Link to="/contact" className="hover:text-[#FFD700] transition">
            Contact
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#5A0E0E] px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>

          <Link to="/testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}