import { useState } from "react";
import menuData from "../data/menuData";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredItems = menuData.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#F8F1DF]">

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2B0000] via-[#5A0E0E] to-[#8B0000] text-white py-28 text-center border-b-4 border-[#D4AF37]">
        <h1
          className="text-5xl md:text-7xl font-bold text-[#FFD700]"
          style={{ fontFamily: "Playfair Display" }}
        >
          Amma Muddha Menu
        </h1>

        <p className="mt-5 text-xl text-[#F8E8B0]">
          Authentic Telangana & Andhra Cuisine
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Search */}
        <input
          type="text"
          placeholder="🔍 Search your favourite dish..."
          className="w-full p-5 rounded-2xl border-2 border-[#D4AF37] bg-white shadow-xl outline-none mb-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {[
            "All",
            "Starters",
            "Main Course",
            "Biryani",
            "Snacks",
            "Drinks",
            "Sweets",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition duration-300 ${
                category === cat
                  ? "bg-[#7A1F1F] text-white shadow-lg"
                  : "bg-white text-[#7A1F1F] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-[#F3D37A]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-[#7A1F1F]">
                    {item.name}
                  </h2>

                  <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-bold">
                    ⭐ {item.rating}
                  </span>
                </div>

                <p className="mt-3 text-gray-600">
                  {item.category}
                </p>

                <p
                  className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    item.type === "Veg"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.type}
                </p>

                <div className="mt-5 flex justify-between items-center">

                  <p className="text-3xl font-bold text-[#D4AF37]">
                    {item.price}
                  </p>

                  <button className="bg-[#7A1F1F] text-white px-4 py-2 rounded-lg hover:bg-[#5A0E0E] transition">
                    Order
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}