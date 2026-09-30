import React from 'react';
import { FiTruck, FiRotateCcw, FiPercent, FiHeadphones } from 'react-icons/fi';

export default function FeaturesStrip() {
  const features = [
    {
      icon: FiTruck,
      title: "Worldwide Shipping",
      desc: "Free orders above $100"
    },
    {
      icon: FiRotateCcw,
      title: "Money Back Guarantee",
      desc: "Easy returns within 30 days"
    },
    {
      icon: FiPercent,
      title: "Offers & Discounts",
      desc: "Back returns in 7 days"
    },
    {
      icon: FiHeadphones,
      title: "24/7 Support Services",
      desc: "Anytime customer support"
    }
  ];

  return (
    <section className="bg-[#FAF7F2] border-y border-[#E8E1D7] py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3.5 justify-center md:justify-start p-2">
              <div className="w-11 h-11 rounded-full bg-white border border-[#E3D9CC] text-[#8C6D58] flex items-center justify-center text-lg shrink-0 shadow-sm">
                <Icon />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-gray-500 mt-0.5 font-light">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}