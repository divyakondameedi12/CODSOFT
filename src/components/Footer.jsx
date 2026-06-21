import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#2B0000] via-[#5A0E0E] to-[#8B0000] text-white border-t-2 border-[#D4AF37]">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center text-2xl">
  🍛
</div>

              <h2 className="text-4xl font-bold text-[#D4AF37]">
                Amma Muddha
              </h2>
            </div>

            <p className="mt-5 text-gray-300 leading-relaxed">
              Authentic Telangana & Andhra Cuisine.
              Bringing the warmth of Telugu traditions,
              rich flavours and unforgettable dining experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link to="/" className="hover:text-[#FFD700] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/menu" className="hover:text-[#FFD700] transition">
                  Menu
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#FFD700] transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="hover:text-[#FFD700] transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-[#FFD700] transition"
                >
                  Testimonials
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#FFD700] transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-5">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-300">
              <p>📍 Hyderabad, Telangana</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@ammamuddha.com</p>
            </div>

            <div className="flex gap-4 mt-6 text-2xl">
              <span className="hover:text-[#FFD700] cursor-pointer">📘</span>
              <span className="hover:text-[#FFD700] cursor-pointer">📸</span>
              <span className="hover:text-[#FFD700] cursor-pointer">▶️</span>
            </div>
          </div>

        </div>

        <div className="border-t border-[#D4AF37]/30 mt-10 pt-6">
          <p className="text-center text-gray-400">
            © 2026 Amma Muddha. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}