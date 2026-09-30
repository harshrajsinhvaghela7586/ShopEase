'use client';

import React from 'react';

export default function ServiceHeader() {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-20 px-6 text-center border-b border-gray-100">
      <div className="max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#8C6D58]/20 text-[#8C6D58] text-[11px] font-bold uppercase tracking-widest shadow-sm">
          Boutique Services
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
          How We Serve Your <br />
          <span className="italic font-normal text-[#8C6D58]">Fashion Needs</span>
        </h1>
        <p className="text-gray-600 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          At ShopEase, we don’t just sell dresses and accessories—we provide a complete, premium boutique shopping experience.
        </p>
      </div>
    </section>
  );
}