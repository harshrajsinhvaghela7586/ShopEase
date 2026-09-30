'use client';

import React, { useState } from 'react';
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import ConfirmationModal from './ConfirmationModal';

export default function CartDrawer() {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const { 
    cartItems = [], 
    isCartOpen = false, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal = 0 
  } = useCart() || {};

  const getSafeNumber = (val) => {
    if (typeof val === 'number') return isNaN(val) ? 0 : val;
    if (typeof val === 'string') {
      const parsed = parseFloat(val.replace(/[^0-9.]/g, ''));
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  const handleConfirmCheckout = () => {
    setIsCheckoutModalOpen(false);
    // Yahan aage checkout redirection/logic add ho sakti hai
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiShoppingBag className="text-xl text-[#8C6D58]" />
              <h2 className="text-lg font-serif font-bold text-gray-900">Your Cart</h2>
            </div>
            <button 
              type="button"
              onClick={closeCart}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems && cartItems.length > 0 ? (
              cartItems.map((item) => {
                const itemPrice = getSafeNumber(item?.price);

                return (
                  <div key={item.id} className="flex gap-4 p-3 rounded-xl border border-gray-100 items-center bg-gray-50/50">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-16 h-20 object-cover rounded-lg bg-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-gray-800 truncate">{item.title}</h4>
                      <p className="text-xs text-[#8C6D58] font-bold mt-1">
                        ${itemPrice.toFixed(2)}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button 
                          type="button"
                          onClick={() => updateQuantity && updateQuantity(item.id, -1)}
                          className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center text-xs text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          <FiMinus />
                        </button>
                        <span className="text-xs font-bold w-4 text-center">{item.quantity || 1}</span>
                        <button 
                          type="button"
                          onClick={() => updateQuantity && updateQuantity(item.id, 1)}
                          className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center text-xs text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>

                    <button 
                      type="button"
                      onClick={() => removeFromCart && removeFromCart(item.id)}
                      className="text-gray-400 hover:text-rose-500 p-2 cursor-pointer"
                      title="Remove Item"
                    >
                      <FiTrash2 className="text-base" />
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-20 text-gray-400 space-y-3">
                <FiShoppingBag className="text-5xl mx-auto text-gray-300" />
                <p className="text-sm">Your cart is currently empty.</p>
              </div>
            )}
          </div>

          {/* Subtotal & Checkout */}
          {cartItems && cartItems.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50/50 space-y-4">
              <div className="flex justify-between text-sm font-semibold text-gray-900">
                <span>Subtotal</span>
                <span className="font-serif text-base text-[#8C6D58]">
                  ${getSafeNumber(cartTotal).toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-gray-400">Shipping and taxes calculated at checkout.</p>
              <button 
                type="button"
                onClick={() => setIsCheckoutModalOpen(true)}
                className="w-full bg-[#111111] hover:bg-[#8C6D58] text-white py-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors shadow-md cursor-pointer"
              >
                Checkout
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        onConfirm={handleConfirmCheckout}
        title="Proceeding to Checkout"
        message="Would you like to complete your order with the selected items?"
      />
    </div>
  );
}