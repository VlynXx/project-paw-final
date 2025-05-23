import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, Truck } from 'lucide-react';
import Button from '../components/ui/Button';

const OrderSuccessPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to order history after 10 seconds
    const timer = setTimeout(() => {
      navigate('/orders');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          {/* Success Icon with Animation */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
            <CheckCircle size={64} className="text-green-500 mx-auto relative animate-bounce" />
          </div>
          
          <h1 className="text-3xl font-semibold mb-4">
            Thank you for your order!
          </h1>
          
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8 mb-8">
            <p className="text-lg text-neutral-600 mb-6">
              Your order has been successfully placed and is being processed!
            </p>
            
            {/* Order Processing Steps */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <CheckCircle size={20} className="animate-pulse" />
                <span>Order Confirmed</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-primary-600">
                <Package size={20} className="animate-bounce" />
                <span>Processing Order</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-neutral-400">
                <Truck size={20} />
                <span>Preparing for Shipment</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="relative h-2 bg-neutral-100 rounded-full overflow-hidden mb-6">
              <div className="absolute inset-y-0 left-0 bg-green-500 w-1/3 animate-[progress_2s_ease-in-out_infinite]" />
            </div>
            
            <p className="text-sm text-neutral-500">
              Order confirmation and tracking details have been sent to your email.
              You will be redirected to your order history in a few seconds.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button
              as={Link}
              to="/orders"
              variant="primary"
              fullWidth
            >
              View Order Status
            </Button>
            
            <Button
              as={Link}
              to="/products"
              variant="outline"
              fullWidth
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;