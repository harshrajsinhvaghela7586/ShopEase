import React from 'react';
import Link from 'next/link';

export default function PromoBanners() {
  const promoBanners = [
    { subtitle: "2026 FASHION", title: "Chic Silk Floral Midi Dress", image: "https://images.unsplash.com/photo-1702468508473-4008c1951c61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8" },
    { subtitle: "STYLISH HEELS", title: "Solethreads Women Crystal Heels", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=80" },
    { subtitle: "LOOKOUT FASHION", title: "Sisterhood Aesthetic Pink Bag", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&auto=format&fit=crop&q=80" }
  ];

  return (
    <section className="py-6 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promoBanners.map((promo, idx) => (
          <div key={idx} className="bg-[#EAE5DF] p-6 rounded-sm flex items-center justify-between h-56 group overflow-hidden relative">
            <div className="space-y-2 z-10 max-w-[55%]">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{promo.subtitle}</span>
              <h3 className="text-sm font-serif font-bold text-gray-900 leading-snug">{promo.title}</h3>
              <Link href="/products" className="inline-block text-[10px] font-bold text-gray-900 uppercase tracking-widest border-b border-gray-900 pb-0.5 hover:text-pink-600 hover:border-pink-600 transition pt-2">
                SHOP NOW
              </Link>
            </div>
            <div className="w-36 h-44 overflow-hidden rounded-sm">
              <img src={promo.image} alt={promo.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}