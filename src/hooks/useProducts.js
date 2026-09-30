'use client';

import { useState, useEffect } from 'react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState({});

  const wishlistContext = useWishlist();
  const { toggleFavorite, toggleWishlist, isInWishlist } = wishlistContext || {};
  const { addToCart } = useCart() || {};

  const customProducts = [
    {
      id: 'custom-1',
      title: 'Embroidered Lawn Anarkali Suit',
      category: 'womens-dresses',
      price: '119.99',
      description: 'Traditional floral hand-embroidered Anarkali dress with silk dupatta.',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 'custom-2',
      title: 'Royal Velvet Silk Kurti',
      category: 'womens-dresses',
      price: '89.99',
      description: 'Elegantly tailored maroon velvet kurti with intricate zari detailing.',
      image: 'https://images.unsplash.com/photo-1768221677414-fb7a99fdeaad?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 'custom-3',
      title: 'Golden Stiletto Heels',
      category: 'womens-shoes',
      price: '69.99',
      description: 'Glamorous party-wear metallic golden straps stiletto heels.',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 'custom-4',
      title: 'Rose Gold Luxe Ladies Watch',
      category: 'womens-watches',
      price: '149.99',
      description: 'Chic rose-gold mesh band watch with crystal embedded bezel.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60',
    },
  ];

  const categories = [
    { id: 'ALL', label: 'All Collection' },
    { id: 'WOMENS-DRESSES', label: 'Dresses & Kurtis' },
    { id: 'WOMENS-SHOES', label: 'Heels & Shoes' },
    { id: 'WOMENS-BAGS', label: 'Bags & Totes' },
    { id: 'WOMENS-WATCHES', label: 'Watches' },
  ];

  useEffect(() => {
    const fetchBoutiqueProducts = async () => {
      try {
        setLoading(true);
        const endpoints = [
          'https://dummyjson.com/products/category/womens-dresses',
          'https://dummyjson.com/products/category/womens-shoes',
          'https://dummyjson.com/products/category/womens-bags',
          'https://dummyjson.com/products/category/womens-watches',
        ];

        const responses = await Promise.all(endpoints.map((url) => fetch(url)));
        const dataResults = await Promise.all(responses.map((res) => res.json()));

        let apiProducts = dataResults.flatMap((result) => result.products || []);
        setProducts([...customProducts, ...apiProducts]);
      } catch (error) {
        setProducts(customProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchBoutiqueProducts();
  }, []);

  const getProductImage = (item) => {
    if (typeof item.image === 'string' && item.image) return item.image;
    if (item.thumbnail) return item.thumbnail;
    if (Array.isArray(item.images) && item.images.length > 0) return item.images[0];
    return 'https://via.placeholder.com/400x500?text=Boutique+Item';
  };

  const handleToggleFavorite = (rawProduct, e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const toggleFunc = toggleFavorite || toggleWishlist;
    if (!toggleFunc) return;

    toggleFunc({
      id: rawProduct.id,
      title: rawProduct.title || rawProduct.name || 'Boutique Product',
      price: rawProduct.price,
      image: getProductImage(rawProduct),
      category: rawProduct.category,
    });
  };

const handleAddToCart = (product) => {
  if (addToCart) {
    addToCart({
      ...product,
      image: getProductImage(product),
      title: product.title || product.name || 'Boutique Product',
    });
  }
  setAddedItems((prev) => ({ ...prev, [product.id]: true }));
  setTimeout(() => {
    setAddedItems((prev) => ({ ...prev, [product.id]: false }));
  }, 1500);
};

  const handleDeleteProduct = (productId) => {
    setProducts((prev) => prev.filter((item) => item.id !== productId));
  };

  const normalizeCategory = (catStr = '') => catStr.toLowerCase().replace(/[^a-z]/g, '');

  const filteredProducts = products.filter((item) => {
    const itemCatNormalized = normalizeCategory(item.category);
    const selectedCatNormalized = normalizeCategory(selectedCategory);

    const categoryMatch =
      selectedCategory === 'ALL' ||
      itemCatNormalized.includes(selectedCatNormalized) ||
      selectedCatNormalized.includes(itemCatNormalized);

    const titleMatch = (item.title || item.name || '')
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return categoryMatch && titleMatch;
  });

  return {
    products: filteredProducts,
    loading,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    addedItems,
    isInWishlist,
    getProductImage,
    handleToggleFavorite,
    handleAddToCart,
    handleDeleteProduct,
  };
}