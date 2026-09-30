'use client';

import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';


const products = [
  {
    id: 1,
    title: "Chic Silk Floral Midi Dress",
    category: "Fashion",
    price: 45.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1702974981923-6988a078d427?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: "Trending"
  },
  {
    id: 2,
    title: "Elegant Lawn Embroidered Suit",
    category: "Fashion",
    price: 55.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1701252069846-69738c4d8fd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
    tag: "New"
  },
  {
    id: 3,
    title: "Pastel Kurti with Organza Dupatta",
    category: "Fashion",
    price: 38.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1702974981769-e1ebb5751d32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
  },

  // Accessories Items
  {
    id: 4,
    title: "Minimalist Crystal Pendant & Hoop Set",
    category: "Accessories",
    price: 38.00,
    rating: 4.9,
    image: "https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    tag: "Best Seller"
  },
  {
    id: 5,
    title: "Celestial Gold Chain & Stud Set",
    category: "Accessories",
    price: 52.00,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1632242248817-ad5a75581f81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    tag: "Hot"
  },
  {
    id: 6,
    title: "Royal Glam Crystal Cocktail Ring",
    category: "Accessories",
    price: 18.00,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    title: "Minimalist Pearl Earrings",
    category: "Accessories",
    price: 15.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80"
  },

  // Bags Items
  {
    id: 8,
    title: "Luxury Red Quilted Leather Shoulder Bag",
    category: "Bags",
    price: 29.00,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1587467495807-da8e70e35344?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 9,
    title: "Classy Textured Executive Mini Tote",
    category: "Bags",
    price: 20.00,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1713425886695-7772d1498b11?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 10,
    title: "Soft Rose Gold Accent Charm Bag",
    category: "Bags",
    price: 34.00,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1681747685985-a401c271156c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function PopularProducts() {
  const [activeTab, setActiveTab] = useState('All');
  const { toggleWishlist, isInWishlist } = useWishlist() || {};
  const { addToCart } = useCart() || {};

  // Tab Filtering
  const filteredProducts = activeTab === 'All' 
    ? products 
    : products.filter(item => item.category === activeTab);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Header & Category Tabs */}
      <div className="text-center space-y-3 mb-10">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#8C6D58] uppercase">
          Curated Choices
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
          Popular Products
        </h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center gap-6 pt-4 text-xs font-semibold tracking-wider uppercase border-b border-gray-200 w-fit mx-auto pb-2">
          {['All', 'Fashion', 'Accessories', 'Bags'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition-all relative cursor-pointer ${
                activeTab === tab
                  ? 'text-gray-900 border-b-2 border-[#8C6D58]'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 min-h-[300px]">
        {filteredProducts.map((item) => {
          const isFav = isInWishlist ? isInWishlist(item.id) : false;

          return (
            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              
              {/* Image Container */}
              <div className="relative aspect-3/4 overflow-hidden bg-[#FAF7F2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Tag Badge */}
                {item.tag && (
                  <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-full text-gray-800 shadow-xs border border-gray-100 z-10">
                    {item.tag}
                  </span>
                )}
                
            
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist && toggleWishlist(item);
                  }}
                  title={isFav ? "Remove from Wishlist" : "Add to Wishlist"}
                  className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-600 hover:text-rose-500 transition-colors shadow-xs z-10 cursor-pointer"
                >
                  {isFav ? (
                    <FaHeart className="text-sm text-rose-500" />
                  ) : (
                    <FaRegHeart className="text-sm" />
                  )}
                </button>

                {/* ADD TO CART BUTTON */}
                <button 
                  type="button"
                  onClick={() => addToCart && addToCart(item)}
                  className="absolute bottom-3 left-3 right-3 bg-[#111111]/90 hover:bg-[#8C6D58] text-white text-xs font-medium py-2 rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  <FiShoppingBag className="text-sm" /> Add to Cart
                </button>
              </div>

              {/* Product Details */}
              <div className="p-3.5 text-center space-y-1">
                <h3 className="text-xs font-medium text-gray-800 line-clamp-1 group-hover:text-[#8C6D58] transition-colors">
                  {item.title}
                </h3>
                
                <div className="flex items-center justify-center gap-1 text-amber-500 text-[11px]">
                  <FaStar />
                  <span className="font-bold text-gray-700">{item.rating}</span>
                </div>

                <p className="text-sm font-serif font-extrabold text-gray-900 pt-0.5">
                  ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}