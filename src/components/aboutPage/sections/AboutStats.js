export default function AboutStats() {
  const stats = [
    { number: "10k+", label: "Happy Customers" },
    { number: "500+", label: "Exclusive Designs" },
    { number: "99%", label: "Positive Reviews" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="bg-[#FAF7F2] py-14 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#8C6D58]">
              {stat.number}
            </h3>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}