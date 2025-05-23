import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';

const WishlistPage: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-6">Your Wishlist</h1>
        
        {favorites.length > 0 ? (
          <ProductGrid products={favorites} />
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-neutral-200">
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} className="text-neutral-400" />
            </div>
            <h2 className="text-2xl font-medium mb-2">Your wishlist is empty</h2>
            <p className="text-neutral-600 mb-8 max-w-md mx-auto">
              Start adding items to your wishlist by clicking the heart icon on products you love.
            </p>
            <Button 
              as={Link} 
              to="/products" 
              variant="primary" 
              size="lg"
            >
              Explore Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default WishlistPage;