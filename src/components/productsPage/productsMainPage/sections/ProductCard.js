'use client';

import React from 'react';
import { FiTrash2, FiShoppingBag, FiHeart, FiCheck } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

export default function ProductCard({
  product,
  isLiked,
  isAdded,
  getImageUrl,
  onToggleFavorite,
  onAddToCart,
  onDeleteProduct,
}) {
  const imgUrl = getImageUrl(product);
  const title = product.title || product.name || 'Boutique Product';
  const categoryName = (product.category || 'COLLECTION')
    .replace(/womens-?/i, '')
    .replace('-', ' ');

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Product Image Section */}
      <div className="relative bg-[#FAF7F2] h-72 w-full overflow-hidden flex items-center justify-center p-4">
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider text-[#8C6D58] uppercase shadow-xs z-10 border border-[#8C6D58]/10">
          {categoryName}
        </span>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => onToggleFavorite(product, e)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-rose-500 flex items-center justify-center transition-all z-10 shadow-xs cursor-pointer"
          title={isLiked ? 'Remove from Favorites' : 'Add to Favorites'}
        >
          {isLiked ? (
            <FaHeart className="text-xs text-rose-500" />
          ) : (
            <FiHeart className="text-xs" />
          )}
        </button>

        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
        />
      </div>

      {/* Product Details Section */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1">
          <h3 className="font-semibold text-sm text-gray-900 group-hover:text-[#8C6D58] transition-colors line-clamp-1">
            {title}
          </h3>
          {product.description && (
            <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2">
              {product.description}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-gray-400 block font-medium">PRICE</span>
            <span className="text-base font-bold text-gray-900">${product.price}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onDeleteProduct(product.id)}
              title="Delete Product"
              className="p-2 rounded-xl text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
            >
              <FiTrash2 className="text-sm" />
            </button>

            <button
              type="button"
              onClick={() => onAddToCart(product)}
              title="Add to Cart"
              className={`p-2.5 rounded-xl text-white transition-all shadow-xs cursor-pointer flex items-center justify-center ${
                isAdded ? 'bg-emerald-600' : 'bg-[#111111] hover:bg-[#8C6D58]'
              }`}
            >
              {isAdded ? (
                <FiCheck className="text-xs animate-in zoom-in-50" />
              ) : (
                <FiShoppingBag className="text-xs" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}