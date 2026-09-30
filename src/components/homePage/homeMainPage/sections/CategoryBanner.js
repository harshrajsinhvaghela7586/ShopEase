import Link from "next/link";

export default function CategoryBanner() {
  const categories = [
    {
      title: "Dresses & Outfits",
      img: "https://images.unsplash.com/photo-1702974981867-cefbc645520e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products",
    },
    {
      title: "Heels & Footwear",
      img: "https://plus.unsplash.com/premium_photo-1668268751339-738ebf6df6c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
      link: "/products",
    },
    {
      title: "Bags & Accessories",
      img: "https://images.unsplash.com/photo-1751107386020-f8f69ae5c16c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/products",
    },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Shop By Category</h2>
        <p className="text-gray-500 text-sm mt-2">Explore top picks from our exclusive girls store</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-9 mr-6">
        {categories.map((cat, index) => (
          <Link key={index} href={cat.link} className="group relative rounded-2xl overflow-hidden h-64 shadow-md">
            <img
              src={cat.img}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition">
                {cat.title} &rarr;
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}