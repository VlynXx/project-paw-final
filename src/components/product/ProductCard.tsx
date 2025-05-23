import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../lib/types';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import Button from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Wishlist Button */}
      <button 
        onClick={handleFavoriteClick}
        className="absolute top-3 right-3 z-10 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors"
      >
        <Heart 
          size={18} 
          className={`${
            isFavorite(product.id) 
              ? 'fill-accent-600 text-accent-600' 
              : 'text-neutral-400 hover:text-accent-600'
          } transition-colors`}
        />
      </button>
      
      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden aspect-square">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-95"
        />
        
        {/* Quick Add Button - Only shows on hover */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-3 bg-black/0 group-hover:bg-black/30 transform translate-y-full group-hover:translate-y-0 transition-all duration-300">
          <Button 
            size="sm" 
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, 1);
            }}
            icon={<ShoppingCart size={16} />}
          >
            Quick Add
          </Button>
        </div>
      </Link>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="mb-1 text-sm text-neutral-500">{product.category}</div>
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-medium text-neutral-900 hover:text-primary-700 transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold text-neutral-900">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-accent-500' : 'text-neutral-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-neutral-500 ml-1">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};