'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import DeliveryForm from '../sections/DeliveryForm';
import PaymentForm from '../sections/PaymentForm';
import OrderSummary from '../sections/OrderSummary';

export default function CheckoutMainPage() {
  const router = useRouter();
  const { cartItems = [], clearCart, setIsCartOpen } = useCart();
  
  const [paymentMethod, setPaymentMethod] = useState('payfast');
  const [billingSame, setBillingSame] = useState(true);
  const [discountCode, setDiscountCode] = useState('');
  
  useEffect(() => {
    if (setIsCartOpen) {
      setIsCartOpen(false);
    }
  }, [setIsCartOpen]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = 0; 
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');

    if (clearCart) {
      clearCart();
    }
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        
        {/* LEFT COLUMN: Contact, Delivery & Payment Forms */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:pr-16 border-r border-gray-200">
          <div className="mb-8">
            <h1 className="text-2xl font-serif font-bold text-gray-900 tracking-wide">
              ShopEase
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <DeliveryForm />
            
            <PaymentForm 
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              billingSame={billingSame}
              setBillingSame={setBillingSame}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors shadow-md text-sm cursor-pointer"
            >
              Pay now
            </button>
          </form>

          {/* Footer Links */}
          <div className="flex gap-4 text-xs text-gray-500 mt-10 pt-6 border-t border-gray-200">
            <a href="#" className="underline">Refund policy</a>
            <a href="#" className="underline">Shipping</a>
            <a href="#" className="underline">Privacy policy</a>
            <a href="#" className="underline">Terms of service</a>
          </div>
        </div>

        {/* RIGHT COLUMN: Order Summary */}
        <div className="lg:col-span-5 bg-gray-50 p-6 sm:p-10 lg:pl-12">
          <OrderSummary 
            cartItems={cartItems}
            discountCode={discountCode}
            setDiscountCode={setDiscountCode}
            subtotal={subtotal}
            total={total}
          />
        </div>

      </div>
    </div>
  );
}