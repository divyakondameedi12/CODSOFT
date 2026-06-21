export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/hero-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/80"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <h1
              className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-2xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              Authentic Telangana &
              <span className="block text-[#D4AF37]">
                Andhra Cuisine
              </span>
            </h1>

            <p className="text-2xl text-[#F8E8B0] mt-6">
              A Taste of Home in Every Muddha
            </p>

            <div className="mt-8 flex gap-4 justify-center">
              <button className="bg-[#D4AF37] hover:bg-[#e6c65a] text-black px-8 py-4 rounded-xl font-bold shadow-xl transition">
                View Menu
              </button>

              <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-xl hover:bg-[#D4AF37] hover:text-black transition">
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Pattern Background */}
      <div
        style={{
          backgroundImage: "url('/images/mandala-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Welcome Section */}
        <section
  className="py-20"
  style={{
    backgroundImage: "url('/images/mandala-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold text-[#7A1F1F]">
              Welcome to Amma Muddha
            </h2>

            <p className="mt-6 text-xl text-gray-700 leading-relaxed">
              Amma Muddha brings together the rich culinary heritage
              of Andhra Pradesh and Telangana. Every dish is prepared
              using traditional recipes, authentic spices, and the
              warmth of homemade cooking.
            </p>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-5xl font-bold text-center text-[#7A1F1F] mb-12">
              Featured Dishes
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                <img
                  src="/images/kodi-vepudu.jpg"
                  alt="Kodi Vepudu"
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#7A1F1F]">
                    Kodi Vepudu
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Traditional Andhra spicy chicken fry.
                  </p>

                  <p className="mt-3 text-[#D4AF37] font-bold text-2xl">
                    ₹320
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                <img
                  src="/images/punugulu.jpg"
                  alt="Punugulu"
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#7A1F1F]">
                    Punugulu
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Crispy snack served with chutney.
                  </p>

                  <p className="mt-3 text-[#D4AF37] font-bold text-2xl">
                    ₹90
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                <img
                  src="/images/pesarattu.jpg"
                  alt="Pesarattu"
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#7A1F1F]">
                    Pesarattu
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Famous green gram dosa from Andhra.
                  </p>

                  <p className="mt-3 text-[#D4AF37] font-bold text-2xl">
                    ₹140
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Heritage Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">

            <div className="grid md:grid-cols-2 gap-12 items-center">

              <div>
                <img
                  src="/images/heritage.jpg"
                  alt="Heritage"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>

              <div className="bg-white/90 p-10 rounded-2xl shadow-2xl">
                <h2
                  className="text-5xl font-bold text-[#7A1F1F] mb-6"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Our Culinary Heritage
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Amma Muddha celebrates the timeless flavours of Andhra Pradesh and Telangana.
                </p>

                <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                  From spicy Kodi Vepudu to Gongura Chicken, every dish tells a story.
                </p>

                <button className="mt-8 bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold">
                  Explore Our Menu
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <div className="max-w-4xl mx-auto px-6 bg-white/90 rounded-3xl p-12 shadow-2xl">

            <h2
              className="text-5xl font-bold text-[#7A1F1F]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Experience Authentic Telugu Flavours
            </h2>

            <p className="mt-6 text-xl text-gray-700">
              Delicious food, warm hospitality and unforgettable memories.
            </p>

            <div className="mt-10 flex justify-center gap-6 flex-wrap">
              <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold">
                Order Now
              </button>

              <button className="bg-[#7A1F1F] text-white px-8 py-4 rounded-xl font-bold">
                Book a Table
              </button>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}