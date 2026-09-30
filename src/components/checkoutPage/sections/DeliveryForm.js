'use client';

import React from 'react';

export default function DeliveryForm() {
  return (
    <div className="space-y-6">
      {/* Contact Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-gray-800">Contact</h2>
          <button type="button" className="text-xs text-blue-600 underline">
            Sign in
          </button>
        </div>
        <input
          type="text"
          placeholder="Email or mobile phone number"
          required
          className="w-full px-4 py-3 text-sm border  text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="flex items-center gap-2 mt-3 text-xs text-gray-600">
          <input type="checkbox" defaultChecked className="rounded  border-gray-300 text-blue-600" />
          Email me with news and offers
        </label>
      </div>

      {/* Delivery Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-800">Delivery</h2>
        
        <div className="grid grid-cols-1 gap-3">
          <select className="w-full px-4 py-3 text-sm border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option value="">Select city from dropdown</option>
            <option value="Karachi">Ahmedabad</option>
            <option value="Lahore">Delhi</option>
            <option value="Islamabad">Mumbai</option>
            <option value="Rawalpindi">Kerala</option>
          </select>

          <select className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md bg-gray-50 text-gray-600" disabled>
            <option>India</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="First name"
            required
            className="w-full px-4 py-3 text-sm  text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last name"
            required
            className="w-full px-4 py-3 text-sm text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="text"
          placeholder="Address"
          required
          className="w-full px-4 py-3 text-sm border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="w-full px-4 py-3 text-sm border text-gray-600 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="City"
            required
            className="w-full px-4 py-3 text-sm text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Postal code (optional)"
            className="w-full px-4 py-3 text-sm text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="tel"
          placeholder="Phone"
          required
          className="w-full px-4 py-3 text-sm text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}