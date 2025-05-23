import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../lib/types';
import { Link } from 'react-router-dom';

interface CartItemProps {
  item: CartItemType;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  item, 
  updateQuantity, 
  removeFromCart 
}) => {
  const { product, quantity } = item;
  const itemTotal = product.price * quantity;

  return (
    <div className="flex items-center py-6 border-b border-neutral-200">
      {/* Product Image */}
      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      {/* Product Details */}
      <div className="ml-4 flex-grow">
        <Link to={`/products/${product.id}`} className="font-medium text-neutral-900 hover:text-primary-700">
          {product.name}
        </Link>
        <p className="text-sm text-neutral-500 mt-1">{product.category}</p>
      </div>
      
      {/* Quantity Controls */}
      <div className="flex items-center border border-neutral-300 rounded-md mr-6">
        <button 
          onClick={() => updateQuantity(product.id, quantity - 1)}
          className="px-2 py-1 text-neutral-500 hover:text-neutral-900"
          disabled={quantity <= 1}
        >
          <Minus size={16} />
        </button>
        <span className="px-3 py-1 text-sm">{quantity}</span>
        <button 
          onClick={() => updateQuantity(product.id, quantity + 1)}
          className="px-2 py-1 text-neutral-500 hover:text-neutral-900"
        >
          <Plus size={16} />
        </button>
      </div>
      
      {/* Price */}
      <div className="w-24 text-right mr-4">
        <span className="font-medium">${itemTotal.toFixed(2)}</span>
      </div>
      
      {/* Remove Button */}
      <button 
        onClick={() => removeFromCart(product.id)}
        className="p-1 text-neutral-400 hover:text-red-500 transition-colors"
        aria-label="Remove item"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem;