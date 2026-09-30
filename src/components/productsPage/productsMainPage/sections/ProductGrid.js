'use client';

import React from 'react';
import { FiLoader } from 'react-icons/fi';
import ProductCard from './ProductCard';

export default function ProductGrid({
  products = [],
  loading = false,
  addedItems = {},
  isInWishlist,
  getImageUrl,
  onToggleFavorite,
  onAddToCart,
  onDeleteProduct,
}) {
  return (
    <section className="max-w-7xl mx-auto px-6">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-28 text-[#8C6D58]">
          <FiLoader className="text-3xl animate-spin mb-3" />
          <p className="text-xs font-medium text-gray-500">Loading boutique collection...</p>
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 my-6">
          <p className="text-gray-500 text-sm">No items found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isLiked={isInWishlist ? isInWishlist(product.id) : false}
              isAdded={Boolean(addedItems[product.id])}
              getImageUrl={getImageUrl}
              onToggleFavorite={onToggleFavorite}
              onAddToCart={onAddToCart}
              onDeleteProduct={onDeleteProduct}
            />
          ))}
        </div>
      )}
    </section>
  );
}