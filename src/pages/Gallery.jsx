const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function Gallery() {
  return (
    <div className="bg-[#FFF8E7] min-h-screen">

      <section className="bg-[#7A1F1F] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Gallery
        </h1>

        <p className="mt-6 text-xl">
          Experience the beauty of Telugu cuisine
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
            >
              <img
                src={image}
                alt="Gallery"
                className="w-full h-80 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}