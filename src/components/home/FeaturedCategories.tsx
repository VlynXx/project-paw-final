import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg',
    count: 24
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg',
    count: 18
  },
  {
    id: 'clothing',
    name: 'Clothing',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
    count: 12
  },
  {
    id: 'home',
    name: 'Home',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    count: 16
  }
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">Shop by Category</h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our carefully curated collection of premium products across various categories
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/products?category=${category.name}`} 
              className="group block relative overflow-hidden rounded-lg shadow-sm h-64"
            >
              <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/40 transition-colors z-10" />
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
                <h3 className="text-2xl font-semibold mb-1">{category.name}</h3>
                <p className="text-sm">{category.count} products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;