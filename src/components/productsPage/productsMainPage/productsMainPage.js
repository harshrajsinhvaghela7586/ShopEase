'use client';

import ProductHeader from './sections/ProductHeader';
import CategoryFilter from './sections/CategoryFilter';
import ProductGrid from './sections/ProductGrid';
import { useProducts } from '@/hooks/useProducts';

export default function ProductsMainPage() {
  const {
    products,
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
  } = useProducts();

  return (
    <div className="bg-[#FCFCFC] text-gray-800 min-h-screen pb-24">
      <ProductHeader />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onAddItemClick={() => alert('Add Item Modal Open')}
      />

      <ProductGrid
        products={products}
        loading={loading}
        addedItems={addedItems}
        isInWishlist={isInWishlist}
        getImageUrl={getProductImage}
        onToggleFavorite={handleToggleFavorite}
        onAddToCart={handleAddToCart}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
}