'use client';

import React from 'react';

export default function ProductHeader() {
  return (
    <section className="bg-[#FAF7F2] py-14 md:py-18 px-6 text-center border-b border-gray-100">
      <div className="max-w-4xl mx-auto space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#8C6D58]/20 text-[#8C6D58] text-[11px] font-bold uppercase tracking-widest shadow-sm">
          Girls Exclusive Boutique
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
          Eastern Wear <span className="italic font-normal text-[#8C6D58]">& Accessories</span>
        </h1>
        <p className="text-gray-600 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
          Discover handpicked traditional suits, designer heels, luxury watches, and handbags.
        </p>
      </div>
    </section>
  );
}