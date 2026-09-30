import { FiAward, FiTrendingUp, FiShield } from 'react-icons/fi';

export default function CoreValues() {
  const values = [
    {
      icon: <FiAward size={22} />,
      title: "Premium Quality",
      desc: "Every dress, shoe, and jewelry piece is checked for stitching, fabric, and durability before delivery."
    },
    {
      icon: <FiTrendingUp size={22} />,
      title: "Trendsetting Styles",
      desc: "Our catalog updates weekly so you stay ahead in fashion trends with modern aesthetic designs."
    },
    {
      icon: <FiShield size={22} />,
      title: "Easy Returns & Care",
      desc: "Hassle-free 7-day exchange policies and dedicated support to answer your size & fit queries."
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#8C6D58] uppercase">
          Our Core Values
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
          Why Shop With ShopEase?
        </h2>
        <p className="text-gray-500 text-xs md:text-sm">
          We bring you the finest online fashion experience tailored specifically for young women.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((card, idx) => (
          <div 
            key={idx}
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-md hover:border-[#8C6D58]/30 transition-all duration-300 space-y-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] text-[#8C6D58] group-hover:bg-[#8C6D58] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
              {card.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}