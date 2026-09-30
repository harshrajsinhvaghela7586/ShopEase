'use client';

import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const toggleWishlistDrawer = () => setIsWishlistOpen((prev) => !prev);
  const closeWishlist = () => setIsWishlistOpen(false);

  const toggleFavorite = (product) => {
    if (!product || !product.id) return;

    setWishlistItems((prev) => {
      const exists = prev.some((item) => String(item.id) === String(product.id));
      if (exists) {
        return prev.filter((item) => String(item.id) !== String(product.id));
      } else {
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (id) => {
    if (!id) return false;
    return wishlistItems.some((item) => String(item.id) === String(id));
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlist: wishlistItems,
        wishlistCount: wishlistItems.length,
        isWishlistOpen,
        setIsWishlistOpen,
        toggleWishlistDrawer,
        toggleWishlist: toggleFavorite, 
        closeWishlist,
        toggleFavorite,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  return context || {};
};