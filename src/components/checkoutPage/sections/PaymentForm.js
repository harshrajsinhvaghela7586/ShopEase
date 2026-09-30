'use client';

import React from 'react';

export default function PaymentForm({ paymentMethod, setPaymentMethod, billingSame, setBillingSame }) {
  return (
    <div className="space-y-6">
      {/* Shipping Method */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Shipping method</h2>
        <div className="flex justify-between items-center p-4 border border-blue-600 rounded-md bg-blue-50/20 text-sm">
          <span className="font-medium text-gray-800">HOME DELIVERY</span>
          <span className="font-semibold text-gray-900">FREE</span>
        </div>
      </div>

      {/* Payment Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Payment</h2>
        <p className="text-xs text-gray-500 mb-3">All transactions are secure and encrypted.</p>

        <div className="border border-gray-300 rounded-md divide-y divide-gray-200">
          <label className="flex items-start gap-3 p-4 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="payfast"
              checked={paymentMethod === 'payfast'}
              onChange={() => setPaymentMethod('payfast')}
              className="mt-1 text-blue-600 focus:ring-blue-500"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">
                  PAYFAST (Debit/Credit/Wallet/Bank)
                </span>
                <div className="flex gap-1 text-xs font-bold text-white">
                  <span className="bg-blue-800 px-1.5 py-0.5 rounded">VISA</span>
                  <span className="bg-red-600 px-1.5 py-0.5 rounded">MC</span>
                </div>
              </div>
              {paymentMethod === 'payfast' && (
                <p className="text-xs text-gray-500 mt-2 bg-gray-50 p-3 rounded">
                  You'll be redirected to PAYFAST to complete your purchase.
                </p>
              )}
            </div>
          </label>

          <label className="flex items-center gap-3 p-4 cursor-pointer">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={() => setPaymentMethod('cod')}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-900">Cash on Delivery (COD)</span>
          </label>
        </div>
      </div>

      {/* Billing Address */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Billing address</h2>
        <div className="border border-gray-300 rounded-md divide-y divide-gray-200">
          <label className="flex items-center gap-3 p-4 cursor-pointer">
            <input
              type="radio"
              name="billing"
              checked={billingSame}
              onChange={() => setBillingSame(true)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-900">Same as shipping address</span>
          </label>
          <label className="flex items-center gap-3 p-4 cursor-pointer">
            <input
              type="radio"
              name="billing"
              checked={!billingSame}
              onChange={() => setBillingSame(false)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-900">Use a different billing address</span>
          </label>
        </div>
      </div>
    </div>
  );
}