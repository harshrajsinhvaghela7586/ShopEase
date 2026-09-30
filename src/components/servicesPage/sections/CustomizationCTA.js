'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function CustomizationCTA() {
  return (
    <section className="pb-20 px-6 max-w-7xl mx-auto">
      <div className="bg-[#FAF7F2] rounded-3xl p-10 md:p-14 text-center space-y-5 border border-[#8C6D58]/15 shadow-sm relative overflow-hidden">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#8C6D58] uppercase">
          Special Requests
        </span>
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 max-w-xl mx-auto leading-tight">
          Need Outfit Customization?
        </h2>
        <p className="text-gray-600 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
          Contact our fashion team directly for special bridal, partywear, or bulk accessory requests.
        </p>
        <div className="pt-2">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#8C6D58] text-white text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
          >
            Get In Touch <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}