import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const OrderHistoryPage: React.FC = () => {
  // Dummy order data
  const orders = [
    {
      id: 'ORD123456',
      date: '2025-03-15',
      status: 'Delivered',
      total: 299.97,
      items: [
        {
          name: 'Premium Watch',
          quantity: 1,
          price: 299.97,
          image: 'https://images.pexels.com/photos/9978732/pexels-photo-9978732.jpeg'
        }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Order History</h1>
        
        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
                <div className="p-6 border-b border-neutral-200">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-neutral-500">Order #{order.id}</p>
                      <p className="text-sm text-neutral-500">Placed on {order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${order.total.toFixed(2)}</p>
                      <span className="inline-block px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-neutral-500">Quantity: {item.quantity}</p>
                      </div>
                      <span className="font-medium">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 bg-neutral-50 border-t border-neutral-200">
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      as={Link} 
                      to={`/orders/${order.id}`} 
                      variant="outline" 
                      size="sm"
                    >
                      View Order Details
                    </Button>
                    <Button 
                      as={Link}
                      to={`/orders/${order.id}/tracking`}
                      variant="outline" 
                      size="sm"
                    >
                      Track Shipment
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-neutral-200">
            <h2 className="text-xl font-medium mb-2">No orders yet</h2>
            <p className="text-neutral-600 mb-6">
              When you place an order, it will appear here.
            </p>
            <Button as={Link} to="/products" variant="primary">
              Start Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistoryPage;