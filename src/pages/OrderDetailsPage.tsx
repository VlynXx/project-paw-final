import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Package, Truck, CheckCircle } from 'lucide-react';

const OrderDetailsPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();

  // Dummy order data - in a real app, this would come from your backend
  const order = {
    id: orderId || 'ORD123456',
    date: '2025-03-15',
    status: 'Delivered',
    trackingNumber: '1Z999AA1234567890',
    carrier: 'UPS',
    total: 299.97,
    shipping: {
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    items: [
      {
        name: 'Premium Watch',
        quantity: 1,
        price: 299.97,
        image: 'https://images.pexels.com/photos/9978732/pexels-photo-9978732.jpeg'
      }
    ],
    timeline: [
      {
        date: '2025-03-15 14:30',
        status: 'Delivered',
        description: 'Package delivered to recipient'
      },
      {
        date: '2025-03-15 09:15',
        status: 'Out for Delivery',
        description: 'Package is out for delivery'
      },
      {
        date: '2025-03-14 18:45',
        status: 'In Transit',
        description: 'Package arrived at local facility'
      },
      {
        date: '2025-03-13 10:30',
        status: 'Shipped',
        description: 'Package has left the warehouse'
      },
      {
        date: '2025-03-12 16:20',
        status: 'Processing',
        description: 'Order confirmed and being processed'
      }
    ]
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to="/orders" className="text-primary-600 hover:text-primary-700">
            ← Back to Orders
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
          {/* Order Header */}
          <div className="p-6 border-b border-neutral-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold mb-1">Order #{order.id}</h1>
                <p className="text-neutral-500">Placed on {order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-lg">${order.total.toFixed(2)}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {order.status}
                </span>
              </div>
            </div>
          </div>

          {/* Tracking Information */}
          <div className="p-6 border-b border-neutral-200 bg-neutral-50">
            <div className="flex items-center gap-4 mb-4">
              <Truck className="text-primary-600" size={24} />
              <div>
                <h2 className="font-medium">Tracking Number</h2>
                <p className="text-neutral-600">{order.trackingNumber}</p>
              </div>
            </div>
            <div className="relative">
              {order.timeline.map((event, index) => (
                <div key={index} className="flex mb-4 last:mb-0">
                  <div className="flex flex-col items-center mr-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      {index === 0 ? (
                        <CheckCircle className="w-5 h-5 text-primary-600" />
                      ) : (
                        <Package className="w-5 h-5 text-primary-600" />
                      )}
                    </div>
                    {index !== order.timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-primary-200 my-1" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{event.status}</p>
                    <p className="text-sm text-neutral-500">{event.date}</p>
                    <p className="text-sm text-neutral-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Items */}
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-lg font-semibold mb-4">Order Items</h2>
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center py-4 border-b border-neutral-100 last:border-0">
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

          {/* Shipping Information */}
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <address className="not-italic">
              {order.shipping.address}<br />
              {order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}<br />
              {order.shipping.country}
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;