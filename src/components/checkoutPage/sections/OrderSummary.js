'use client';

import React from 'react';
import Image from 'next/image';

export default function OrderSummary({ cartItems, discountCode, setDiscountCode, subtotal, total }) {
  return (
    <div className="sticky top-10 space-y-6">
      {/* Products List */}
      <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
        {cartItems.length > 0 ? (
          cartItems.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between gap-4">
              <div className="relative flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-md border border-gray-200 bg-white overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || item.thumbnail || '/placeholder.png'}
                    alt={item.title || 'Product Image'}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute -top-1 -right-1 bg-gray-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {item.quantity || 1}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-800 line-clamp-1">{item.title}</h4>
                  <p className="text-[11px] text-gray-500">{item.category || 'Standard'}</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-800">
                Rs {(item.price * (item.quantity || 1)).toLocaleString()}
              </span>
            </div>
          ))
        ) : (
          <p className="text-xs text-gray-500 py-4">Your cart is empty.</p>
        )}
      </div>

      {/* Discount Code */}
      <div className="flex gap-2 pt-4 border-t border-gray-200">
        <input
          type="text"
          placeholder="Discount code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className="flex-1 px-4 py-2.5 text-gray-600  text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
        />
        <button
          type="button"
          className="px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-semibold rounded-md transition-colors"
        >
          Apply
        </button>
      </div>

      {/* Totals */}
      <div className="space-y-2 pt-4 border-t border-gray-200 text-xs text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal · {cartItems.length} items</span>
          <span className="font-semibold text-gray-900">Rs {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-semibold text-gray-900">FREE</span>
        </div>
        <div className="flex justify-between items-center pt-3 border-t border-gray-200 text-sm font-bold text-gray-900">
          <span>Total</span>
          <span className="text-lg">
            <span className="text-xs text-gray-500 font-normal mr-1">PKR</span>
            Rs {total.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}