import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Package, Truck, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const OrderTrackingPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();

  // Dummy tracking data - in a real app, this would come from your backend
  const tracking = {
    orderId: orderId || 'ORD123456',
    status: 'In Transit',
    estimatedDelivery: '2025-03-20',
    carrier: 'UPS',
    trackingNumber: '1Z999AA1234567890',
    timeline: [
      {
        date: '2025-03-15 14:30',
        status: 'In Transit',
        location: 'Chicago, IL',
        description: 'Package is in transit to the next facility'
      },
      {
        date: '2025-03-14 18:45',
        status: 'Departed',
        location: 'New York, NY',
        description: 'Package has left the carrier facility'
      },
      {
        date: '2025-03-13 10:30',
        status: 'Arrived',
        location: 'New York, NY',
        description: 'Package has arrived at carrier facility'
      },
      {
        date: '2025-03-12 16:20',
        status: 'Shipped',
        location: 'Los Angeles, CA',
        description: 'Package has been shipped'
      }
    ]
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link to={`/orders/${orderId}`} className="text-primary-600 hover:text-primary-700">
            ← Back to Order Details
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
            {/* Tracking Header */}
            <div className="p-6 border-b border-neutral-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-semibold mb-1">Track Your Order</h1>
                  <p className="text-neutral-500">Order #{tracking.orderId}</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {tracking.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Tracking Info */}
            <div className="p-6 bg-neutral-50 border-b border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="font-medium mb-2">Carrier</h2>
                  <p className="text-neutral-600">{tracking.carrier}</p>
                </div>
                <div>
                  <h2 className="font-medium mb-2">Tracking Number</h2>
                  <p className="text-neutral-600">{tracking.trackingNumber}</p>
                </div>
                <div>
                  <h2 className="font-medium mb-2">Status</h2>
                  <p className="text-neutral-600">{tracking.status}</p>
                </div>
                <div>
                  <h2 className="font-medium mb-2">Estimated Delivery</h2>
                  <p className="text-neutral-600">{tracking.estimatedDelivery}</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-6">Tracking History</h2>
              <div className="relative">
                {tracking.timeline.map((event, index) => (
                  <div key={index} className="flex mb-8 last:mb-0">
                    <div className="flex flex-col items-center mr-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        {index === 0 ? (
                          <Truck className="w-5 h-5 text-primary-600" />
                        ) : (
                          <Package className="w-5 h-5 text-primary-600" />
                        )}
                      </div>
                      {index !== tracking.timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-primary-200 my-1" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium text-neutral-900">{event.status}</p>
                        <span className="mx-2">•</span>
                        <p className="text-sm text-neutral-500">{event.date}</p>
                      </div>
                      <p className="text-neutral-600 mt-1">{event.location}</p>
                      <p className="text-sm text-neutral-500 mt-1">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;