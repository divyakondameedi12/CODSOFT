const reviews = [
  {
    name: "Ramesh",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Best Andhra food I have tasted outside my hometown.",
  },
  {
    name: "Priya",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Authentic flavors and amazing hospitality.",
  },
  {
    name: "Karthik",
    rating: "⭐⭐⭐⭐⭐",
    review:
      "Kodi Vepudu and Gongura Mutton are outstanding.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#FFF8E7] min-h-screen">

      <section className="bg-[#7A1F1F] text-white py-24 text-center">
        <h1 className="text-5xl font-bold">
          Customer Reviews
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#7A1F1F]">
                {review.name}
              </h3>

              <p className="mt-3">
                {review.rating}
              </p>

              <p className="mt-4 text-gray-700">
                {review.review}
              </p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}