export default function Contact() {
  return (
    <div className="bg-[#FFF8E7] min-h-screen">

      {/* Hero */}
      <section className="bg-[#7A1F1F] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-xl">
          We'd love to hear from you
        </p>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold text-[#7A1F1F] mb-8">
              Get In Touch
            </h2>

            <div className="space-y-5 text-lg">

              <p>
                📍 Hyderabad, Telangana
              </p>

              <p>
                📞 +91 98765 43210
              </p>

              <p>
                ✉️ info@ammamuddha.com
              </p>

              <p>
                🕒 Mon - Sun : 11 AM - 11 PM
              </p>

            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">

            <h2 className="text-3xl font-bold text-[#7A1F1F] mb-6">
              Reserve a Table
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="date"
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                rows="4"
                placeholder="Special Requests"
                className="w-full border p-3 rounded-lg"
              ></textarea>

              <button
                className="bg-[#D4AF37] w-full py-3 rounded-lg font-bold"
              >
                Reserve Now
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Google Map */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb="
            className="w-full h-[400px] rounded-2xl"
          ></iframe>

        </div>
      </section>

    </div>
  );
}