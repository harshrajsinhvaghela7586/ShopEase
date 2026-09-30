import React from 'react';

export default function ContactHero() {
  return (
    <section className="bg-[#FAF7F2] py-16 md:py-20 px-6 text-center border-b border-gray-100">
      <div className="max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#8C6D58]/20 text-[#8C6D58] text-[11px] font-bold uppercase tracking-widest shadow-sm">
          Contact Us
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
          We’d Love To Hear <br />
          <span className="italic font-normal text-[#8C6D58]">From You</span>
        </h1>
        <p className="text-gray-600 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          Have questions about outfits, sizing, or your order? Fill out the form below or reach out to our boutique customer support team directly.
        </p>
      </div>
    </section>
  );
}