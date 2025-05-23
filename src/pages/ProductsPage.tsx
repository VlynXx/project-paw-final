import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, ArrowUpDown } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../lib/data';
import { Product } from '../lib/types';

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  
  const location = useLocation();
  
  // Extract category from URL query params
useEffect(() => {
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  setSelectedCategory(category ? category : null); // ⬅ penting untuk reset ke all products
}, [location.search]);

  
  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, sortBy, priceRange]);
  
  // Categories for filter
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  return (
    <div className="container mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-semibold mb-2">
        {selectedCategory || 'All Products'}
      </h1>
      <p className="text-neutral-600 mb-8">
        {filteredProducts.length} products found
      </p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-neutral-700 gap-2"
          >
            <Filter size={18} />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none border border-neutral-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="rating-desc">Highest Rated</option>
            </select>
            <ArrowUpDown size={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-neutral-500" />
          </div>
        </div>
        
        {/* Filters Sidebar */}
        <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            
            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Category</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="category-all"
                    name="category"
                    checked={selectedCategory === null}
                    onChange={() => setSelectedCategory(null)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="category-all" className="ml-2 text-sm text-neutral-700">
                    All Categories
                  </label>
                </div>
                
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <input
                      type="radio"
                      id={`category-${category}`}
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor={`category-${category}`} className="ml-2 text-sm text-neutral-700">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-neutral-700">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Only Available Switch */}
            <div className="flex items-center">
              <input 
                type="checkbox"
                id="available-only"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="available-only" className="ml-2 text-sm text-neutral-700">
                In Stock Only
              </label>
            </div>
          </div>
        </aside>
        
        {/* Product List */}
        <div className="flex-grow">
          {/* Desktop Sort */}
          <div className="hidden lg:flex justify-end mb-6">
            <div className="relative w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full border border-neutral-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="rating-desc">Highest Rated</option>
              </select>
              <ArrowUpDown size={14} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-neutral-500" />
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-neutral-600 mb-6">Try adjusting your filters or browse our categories</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;