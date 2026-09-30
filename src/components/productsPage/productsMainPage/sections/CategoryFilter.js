'use client';

import React from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';

export default function CategoryFilter({
  categories = [],
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onAddItemClick,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-100 pb-6">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-[#8C6D58] hover:text-[#8C6D58]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Add Action */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
            <input
              type="text"
              placeholder="Search kurti, heels, watches..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none focus:border-[#8C6D58]"
            />
          </div>

          <button
            type="button"
            onClick={onAddItemClick}
            className="px-4 py-2 bg-[#8C6D58] hover:bg-gray-900 text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer"
          >
            <FiPlus className="text-sm" />
            <span>Add Item</span>
          </button>
        </div>
      </div>
    </section>
  );
}