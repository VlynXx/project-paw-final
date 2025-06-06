import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] bg-neutral-900 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2388648/pexels-photo-2388648.jpeg" 
          alt="Luxury products" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/60" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Discover Exceptional Quality
          </h1>
          <p className="text-xl text-neutral-200 mb-8 max-w-lg">
            Curated collections of premium products for those who appreciate the finest things in life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/products" 
              className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold text-center"
            >
              Shop Now
            </Link>
            <Link 
              to="/products" 
              className="border border-white text-white px-8 py-3 rounded text-lg font-semibold text-center hover:bg-white/10"
            >
              Explore Collections
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
