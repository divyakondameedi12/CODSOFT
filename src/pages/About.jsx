export default function About() {
  return (
    <div className="bg-[#FFF8E7] min-h-screen">

      {/* Hero */}
      <section className="bg-[#7A1F1F] text-white py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          About Amma Muddha
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto">
          Preserving the rich culinary heritage of Andhra Pradesh
          and Telangana through authentic recipes and traditional
          cooking methods.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-[#7A1F1F] mb-8">
          Our Story
        </h2>

        <p className="text-lg leading-8 text-gray-700">
          Amma Muddha was born from a passion for authentic Telugu
          cuisine. Inspired by the warmth of homemade meals and the
          rich traditions of Andhra and Telangana households, we
          bring age-old recipes to modern dining experiences.
        </p>

        <p className="text-lg leading-8 text-gray-700 mt-6">
          Every dish reflects the flavors of village kitchens,
          prepared with fresh ingredients, traditional spices,
          and love passed through generations.
        </p>
      </section>

      {/* Heritage */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#7A1F1F] mb-12">
            Andhra & Telangana Heritage
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#FFF8E7] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#7A1F1F]">
                Traditional Recipes
              </h3>

              <p className="mt-4 text-gray-700">
                Recipes handed down through generations of Telugu families.
              </p>
            </div>

            <div className="bg-[#FFF8E7] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#7A1F1F]">
                Authentic Ingredients
              </h3>

              <p className="mt-4 text-gray-700">
                Handpicked spices and fresh local produce.
              </p>
            </div>

            <div className="bg-[#FFF8E7] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#7A1F1F]">
                Cultural Experience
              </h3>

              <p className="mt-4 text-gray-700">
                A celebration of Telugu food culture and hospitality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-[#7A1F1F] mb-8">
            Our Mission
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            To preserve and share the authentic flavors of Andhra
            Pradesh and Telangana while creating memorable dining
            experiences for every guest.
          </p>

        </div>
      </section>

    </div>
  );
}