'use client';

import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function ConfirmationModal({ isOpen, onClose, onConfirm, title, message }) {
  const router = useRouter();
  const { setIsCartOpen } = useCart();

  if (!isOpen) return null;

  const handleConfirm = (e) => {
    if (onConfirm) {
      onConfirm(e);
    }
    
    if (setIsCartOpen) {
      setIsCartOpen(false);
    }
    onClose();

 
    router.push('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 transition-opacity">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl transform transition-all border border-gray-100 text-center">
        
        {/* Icon */}
        <div className="w-12 h-12 bg-[#8C6D58]/10 text-[#8C6D58] rounded-full flex items-center justify-center mx-auto mb-4">
          <FiShoppingBag className="text-xl" />
        </div>

        {/* Title & Message */}
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
          {title || "Proceed to Checkout?"}
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          {message || "Are you sure you want to proceed to checkout with these items?"}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-[#111111] hover:bg-[#8C6D58] rounded-xl transition-colors shadow-md cursor-pointer"
          >
            Confirm
          </button>
        </div>
        
      </div>
    </div>
  );
}