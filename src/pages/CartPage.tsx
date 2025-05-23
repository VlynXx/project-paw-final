import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
                <div className="p-6 border-b border-neutral-200">
                  <h2 className="text-lg font-medium">
                    Items ({items.reduce((total, item) => total + item.quantity, 0)})
                  </h2>
                </div>
                
                <div className="divide-y divide-neutral-200">
                  {items.map(item => (
                    <div key={item.product.id} className="p-6">
                      <CartItem 
                        item={item} 
                        updateQuantity={updateQuantity} 
                        removeFromCart={removeFromCart} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary subtotal={subtotal} />
            </div>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-neutral-200">
            <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={32} className="text-neutral-400" />
            </div>
            <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-neutral-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any products to your cart yet. 
              Browse our collection to find something you'll love.
            </p>
            <Button 
              as={Link} 
              to="/products" 
              variant="primary" 
              size="lg"
            >
              Shop Now
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;