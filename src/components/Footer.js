'use client';
import React from 'react';
import Link from 'next/link';
import { FiShoppingBag } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-14 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <div className="w-8 h-8 rounded-lg bg-[#8C6D58] flex items-center justify-center text-white text-base">
              🛍️
            </div>
            <span>ShopEase<span className="text-[#8C6D58]">.</span></span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-light">
            Your destination for chic girls fashion, footwear, and accessories. Premium quality at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-light">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Company</h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-light">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Newsletter</h4>
          <p className="text-xs text-gray-400 mb-3 font-light">Subscribe to get special discount updates.</p>
          
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-900 border border-gray-800 text-xs text-white px-3.5 py-2.5 rounded-xl w-full focus:outline-none focus:border-[#8C6D58]"
            />
            <button 
              type="submit" 
              className="bg-[#8C6D58] hover:bg-[#a3826c] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition duration-300 shrink-0"
            >
              Join
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Rights */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-500 font-light gap-3">
        <p>© 2026 ShopEase. All rights reserved.</p>
        <p>Made for Girls Fashion</p>
      </div>
    </footer>
  );
}