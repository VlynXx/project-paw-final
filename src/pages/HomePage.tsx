import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ProductGrid from '../components/product/ProductGrid';
import Newsletter from '../components/home/Newsletter';
import { products } from '../lib/data';

const HomePage: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div>
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <ProductGrid products={featuredProducts} title="Featured Products" />
      </div>
      
      <FeaturedCategories />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We are committed to bringing you the best quality products and shopping experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-100">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-neutral-600">
              Every product in our collection is carefully vetted for exceptional quality and craftsmanship.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-100">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-neutral-600">
              Enjoy free shipping on all orders over $100, with fast and reliable delivery.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-100">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
            <p className="text-neutral-600">
              Not satisfied? Return any item within 30 days for a full refund, no questions asked.
            </p>
          </div>
        </div>
      </div>
      
      <Newsletter />
    </div>
  );
};

export default HomePage;