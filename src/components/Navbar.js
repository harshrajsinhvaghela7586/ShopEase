'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiX } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import WishlistDrawer from './WishlistDrawer';

// Demo Products Data for Search Filtering
const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Chic Silk Floral Midi Dress', category: 'Dresses', price: 45.00, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=300' },
  { id: 2, name: 'Elegant Lawn Embroidered Suit', category: 'Dresses', price: 55.00, image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=300' },
  { id: 3, name: 'Pastel Kurti with Organza Dupatta', category: 'Dresses', price: 38.00, image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=300' },
  { id: 4, name: 'Minimalist Crystal Pendant & Hoop', category: 'Accessories', price: 38.00, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=300' },
  { id: 5, name: 'Celestial Gold Chain & Stud Set', category: 'Accessories', price: 52.00, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=300' },
  { id: 6, name: 'Stiletto Heels', category: 'Shoes', price: 65.00, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=300' },
  { id: 7, name: 'Rose Gold Watch', category: 'Watches', price: 85.00, image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=300' },
  { id: 8, name: 'Leather Tote Bag', category: 'Bags', price: 70.00, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=300' },
];

export default function Navbar() {
  const { cartCount = 0, toggleCart } = useCart() || {};
  const wishlistContext = useWishlist() || {};
  
  const wishlistItems = wishlistContext.wishlistItems || wishlistContext.wishlist || [];
  const wishlistCount = wishlistContext.wishlistCount || wishlistItems.length;
  const setIsWishlistOpen = wishlistContext.setIsWishlistOpen;
  const toggleWishlistDrawer = wishlistContext.toggleWishlistDrawer || wishlistContext.toggleWishlist;

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);

  const handleOpenWishlist = () => {
    if (setIsWishlistOpen) {
      setIsWishlistOpen(true);
    } else if (typeof toggleWishlistDrawer === 'function') {
      toggleWishlistDrawer();
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter products based on search input
  const filteredProducts = SAMPLE_PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-gray-900">
            ShopEase<span className="text-[#8C6D58]">.</span>
          </Link>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
            <Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link>
            <Link href="/services" className="hover:text-gray-900 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            
            {/* SEARCH BUTTON */}
            <button 
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:text-[#8C6D58] transition-colors cursor-pointer" 
              title="Search"
            >
              <FiSearch className="text-xl" />
            </button>

            {/* WISHLIST BUTTON */}
            <button 
              type="button"
              onClick={handleOpenWishlist}
              className="p-2 hover:text-rose-500 transition-colors relative cursor-pointer" 
              title="Wishlist"
            >
              <FiHeart className={`text-xl ${wishlistCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* CART BUTTON */}
            <button 
              type="button"
              onClick={toggleCart} 
              className="p-2 hover:text-[#8C6D58] transition-colors relative cursor-pointer" 
              title="Cart"
            >
              <FiShoppingBag className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile */}
            <button type="button" className="p-2 hover:text-[#8C6D58] transition-colors cursor-pointer">
              <FiUser className="text-xl" />
            </button>

          </div>

        </div>
      </header>

      {/* CENTER POPUP SEARCH MODAL */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40 backdrop-blur-xs p-4 transition-all">
          <div 
            ref={searchRef} 
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Input Header */}
            <div className="p-4 px-5 flex items-center gap-3 border-b border-gray-100">
              <FiSearch className="text-gray-400 text-lg" />
              <input
                type="text"
                autoFocus
                placeholder="Search kurti, heels, watches..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-sm outline-none text-gray-800 placeholder-gray-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-gray-400 hover:text-gray-600 px-1"
                >
                  Clear
                </button>
              )}
              <button 
                onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                className="p-1 text-gray-400 hover:text-gray-600 rounded-full"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Search Body: Tags or Filtered Results */}
            <div className="p-5 max-h-[60vh] overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Silk Kurti', 'Anarkali Dress', 'Stiletto Heels', 'Leather Tote Bag', 'Rose Gold Watch'].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200/80 rounded-lg text-xs font-medium text-gray-600 transition-colors cursor-pointer"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Products ({filteredProducts.length})
                  </p>

                  {filteredProducts.length > 0 ? (
                    <div className="space-y-2">
                      {filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          href="/products"
                          onClick={() => {
                            setIsSearchOpen(false);
                            setSearchQuery('');
                          }}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
                        >
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-12 h-14 object-cover rounded-lg bg-gray-100"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-gray-800 group-hover:text-[#8C6D58] transition-colors truncate">
                              {product.name}
                            </h4>
                            <p className="text-[11px] text-gray-400 mt-0.5">{product.category}</p>
                            <p className="text-xs font-bold text-[#8C6D58] mt-1">${product.price.toFixed(2)}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-400 text-xs">
                      No products found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Wishlist Drawer */}
      <WishlistDrawer />
    </>
  );
}