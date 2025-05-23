import React from 'react';

const ShippingPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Shipping Policy</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Shipping Methods</h2>
              <div className="space-y-4">
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Standard Shipping</h3>
                  <p className="text-neutral-600 mb-2">3-5 business days</p>
                  <p className="text-sm text-neutral-500">
                    Free for orders over $100<br />
                    $10.99 for orders under $100
                  </p>
                </div>
                
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Express Shipping</h3>
                  <p className="text-neutral-600 mb-2">1-2 business days</p>
                  <p className="text-sm text-neutral-500">
                    $19.99 flat rate
                  </p>
                </div>
                
                <div className="border border-neutral-200 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Next Day Delivery</h3>
                  <p className="text-neutral-600 mb-2">Next business day</p>
                  <p className="text-sm text-neutral-500">
                    $29.99 flat rate<br />
                    Order by 2 PM EST for same-day processing
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Shipping Restrictions</h2>
              <ul className="list-disc pl-6 space-y-2 text-neutral-600">
                <li>We currently ship to the United States and Canada</li>
                <li>Some items may not be eligible for express shipping</li>
                <li>PO boxes are only eligible for standard shipping</li>
                <li>Additional fees may apply for remote locations</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Order Processing</h2>
              <p className="text-neutral-600 mb-4">
                Orders are processed Monday through Friday, excluding holidays. Orders placed 
                after 2 PM EST will be processed the next business day.
              </p>
              <div className="bg-neutral-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Processing Times</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>Standard orders: 1-2 business days</li>
                  <li>Express orders: Same day if placed before 2 PM EST</li>
                  <li>Next day orders: Same day if placed before 2 PM EST</li>
                </ul>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Tracking Your Order</h2>
              <p className="text-neutral-600 mb-4">
                Once your order ships, you'll receive a confirmation email with tracking 
                information. You can also track your order through your account dashboard.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-4">International Shipping</h2>
              <p className="text-neutral-600 mb-4">
                For international shipping inquiries, please contact our customer service team. 
                Additional duties and taxes may apply for international orders.
              </p>
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-800 font-medium">
                  Contact us at support@luxescape.com for international shipping quotes.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;