import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

export default function ContactInfo() {
  return (
    <div className="lg:col-span-5 space-y-8">
      <div className="space-y-3">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#8C6D58] uppercase">
          Get In Touch
        </span>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
          Boutique Support & Assistance
        </h2>
        <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
          Our team is here to assist you with order tracking, styling advice, and fitting recommendations.
        </p>
      </div>

      {/* Info Cards */}
      <div className="space-y-4 pt-2">
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#8C6D58]/10">
          <div className="w-10 h-10 rounded-xl bg-white text-[#8C6D58] flex items-center justify-center shadow-sm shrink-0">
            <FiMail className="text-lg" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Email Us</h3>
            <p className="text-xs text-gray-600 mt-1">support@shopease.com</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Response within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#8C6D58]/10">
          <div className="w-10 h-10 rounded-xl bg-white text-[#8C6D58] flex items-center justify-center shadow-sm shrink-0">
            <FiPhone className="text-lg" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Customer Helpline</h3>
            <p className="text-xs text-gray-600 mt-1">+92 (300) 123-4567</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Mon - Sat, 10am to 8pm</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#8C6D58]/10">
          <div className="w-10 h-10 rounded-xl bg-white text-[#8C6D58] flex items-center justify-center shadow-sm shrink-0">
            <FiMapPin className="text-lg" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Ahmedabad Store</h3>
            <p className="text-xs text-gray-600 mt-1">Shop #12, Fashion Avenue, Ahmedabad</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Ahmedabad, Gujarat</p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#8C6D58]/10">
          <div className="w-10 h-10 rounded-xl bg-white text-[#8C6D58] flex items-center justify-center shadow-sm shrink-0">
            <FiClock className="text-lg" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">Operating Hours</h3>
            <p className="text-xs text-gray-600 mt-1">Monday - Saturday: 10:00 AM - 8:00 PM</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}