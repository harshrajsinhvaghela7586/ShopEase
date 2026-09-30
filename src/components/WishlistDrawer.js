'use client';

import React from 'react';
import { FiX, FiTrash2, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

export default function WishlistDrawer() {
  const wishlistContext = useWishlist() || {};
  
  const wishlistItems = wishlistContext.wishlistItems || wishlistContext.wishlist || [];
  const isWishlistOpen = wishlistContext.isWishlistOpen || false;
  const closeWishlist = wishlistContext.closeWishlist || (() => wishlistContext.setIsWishlistOpen?.(false));
  const removeFavorite = wishlistContext.toggleFavorite || wishlistContext.toggleWishlist || wishlistContext.removeFromWishlist;

  const { addToCart } = useCart() || {};

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={closeWishlist}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiHeart className="text-xl text-rose-500 fill-rose-500" />
              <h2 className="text-lg font-serif font-bold text-gray-900">Your Wishlist</h2>
            </div>
            <button 
              type="button"
              onClick={closeWishlist}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Wishlist Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistItems && wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 rounded-xl border border-gray-100 items-center bg-gray-50/50">
                  <img 
                    src={item.image} 
                    alt={item.title || item.name} 
                    className="w-16 h-20 object-cover rounded-lg bg-gray-100"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-semibold text-gray-800 truncate">{item.title || item.name}</h4>
                    <p className="text-xs text-[#8C6D58] font-bold mt-1">
                      ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                    </p>
                    
                    <button
                      type="button"
                      onClick={() => {
                        if (addToCart) addToCart(item);
                        if (removeFavorite) removeFavorite(item);
                      }}
                      className="mt-2 flex items-center gap-1 text-[11px] bg-[#111111] hover:bg-[#8C6D58] text-white px-2.5 py-1 rounded-md transition-colors cursor-pointer"
                    >
                      <FiShoppingBag className="text-xs" /> Move to Cart
                    </button>
                  </div>

                  <button 
                    type="button"
                    onClick={() => removeFavorite && removeFavorite(item)}
                    className="text-gray-400 hover:text-rose-500 p-2 cursor-pointer"
                    title="Remove from Wishlist"
                  >
                    <FiTrash2 className="text-base" />
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-20 text-gray-400 space-y-3">
                <FiHeart className="text-5xl mx-auto text-gray-300" />
                <p className="text-sm">Your wishlist is empty.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}