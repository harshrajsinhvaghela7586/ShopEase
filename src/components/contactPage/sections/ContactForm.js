'use client';

import React, { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50">
      <div className="mb-6 space-y-1">
        <h3 className="text-2xl font-serif font-bold text-gray-900">
          Send Us A Message
        </h3>
        <p className="text-xs text-gray-500">
          Please complete the form below and we will get back to you shortly.
        </p>
      </div>

      {submitted && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
          <FiCheckCircle className="text-emerald-600 text-base" />
          <span>Thank you! Your message has been sent successfully. We will reply soon.</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Maryam Fatima"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#8C6D58] focus:ring-1 focus:ring-[#8C6D58] transition-colors bg-gray-50/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="maryam@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#8C6D58] focus:ring-1 focus:ring-[#8C6D58] transition-colors bg-gray-50/30"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
            Subject / Query Type
          </label>
          <select
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#8C6D58] focus:ring-1 focus:ring-[#8C6D58] transition-colors bg-gray-50/30 text-gray-700"
          >
            <option value="">Select a topic (e.g. Order Status, Sizing Advice)</option>
            <option value="order">Order Status & Tracking</option>
            <option value="sizing">Sizing & Dress Fitting Advice</option>
            <option value="returns">Exchange & Returns</option>
            <option value="custom">Custom Design Inquiry</option>
            <option value="other">General Inquiry</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[11px] font-bold uppercase tracking-wider text-gray-700">
            Your Message <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={5}
            required
            placeholder="How can we help you today?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#8C6D58] focus:ring-1 focus:ring-[#8C6D58] transition-colors bg-gray-50/30 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-[#111111] hover:bg-[#8C6D58] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
        >
          <FiSend className="text-sm" />
          Submit Message
        </button>
      </form>
    </div>
  );
}