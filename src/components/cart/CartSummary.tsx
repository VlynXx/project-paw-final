import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

interface CartSummaryProps {
  subtotal: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ subtotal }) => {
  const navigate = useNavigate();
  
  // Constants for calculation
  const shipping = subtotal > 100 ? 0 : 10.99;
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-neutral-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-neutral-900">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-neutral-600">Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-neutral-600">Shipping</span>
          {shipping === 0 ? (
            <span className="text-green-600">Free</span>
          ) : (
            <span className="font-medium">${shipping.toFixed(2)}</span>
          )}
        </div>
        
        <div className="flex justify-between">
          <span className="text-neutral-600">Tax</span>
          <span className="font-medium">${tax.toFixed(2)}</span>
        </div>
        
        <div className="h-px bg-neutral-200 my-3" />
        
        <div className="flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </div>
      </div>
      
      {shipping > 0 && (
        <p className="text-sm text-neutral-500 mb-4">
          Add ${(100 - subtotal).toFixed(2)} more to qualify for free shipping.
        </p>
      )}
      
      <Button 
        onClick={() => navigate('/checkout')}
        variant="primary" 
        fullWidth 
        size="lg"
        className="mb-3"
      >
        Proceed to Checkout
      </Button>
      
      <Button 
        onClick={() => navigate('/products')}
        variant="outline" 
        fullWidth
      >
        Continue Shopping
      </Button>
    </div>
  );
};

export default CartSummary;