'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function ServiceCard({ icon, badge, title, desc }) {
  return (
    <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#8C6D58]/30 transition-all duration-300 flex flex-col justify-between group space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] text-[#8C6D58] group-hover:bg-[#8C6D58] group-hover:text-white transition-colors duration-300 flex items-center justify-center">
            {icon}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF7F2] text-[#8C6D58]">
            {badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8C6D58] transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          {desc}
        </p>
      </div>

      <div className="pt-2 border-t border-gray-50">
        <Link 
          href="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6D58] hover:text-gray-900 transition-colors"
        >
          Inquire Service <FiArrowRight className="text-xs" />
        </Link>
      </div>
    </div>
  );
}