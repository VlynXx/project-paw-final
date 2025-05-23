import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const ReturnsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Returns & Exchanges</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-8">
            <h2 className="text-xl font-semibold mb-6">Our Return Policy</h2>
            
            <div className="prose prose-neutral max-w-none">
              <p className="mb-4">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, 
                we accept returns within 30 days of delivery for a full refund or exchange.
              </p>
              
              <h3 className="text-lg font-medium mt-6 mb-3">Return Requirements</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Items must be unused and in original packaging</li>
                <li>All tags and labels must be attached</li>
                <li>Include the original receipt or order number</li>
                <li>Items must not be damaged or altered</li>
              </ul>
              
              <h3 className="text-lg font-medium mt-6 mb-3">How to Return</h3>
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Log into your account and go to your orders</li>
                <li>Select the item(s) you wish to return</li>
                <li>Choose between refund or exchange</li>
                <li>Print the prepaid return label</li>
                <li>Pack the item(s) securely</li>
                <li>Drop off at any authorized shipping location</li>
              </ol>
              
              <h3 className="text-lg font-medium mt-6 mb-3">Refund Process</h3>
              <p className="mb-4">
                Once we receive your return, we'll inspect the item and process your refund within 
                3-5 business days. The refund will be issued to your original payment method.
              </p>
              
              <div className="bg-neutral-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-medium mb-3">Need Help?</h3>
                <p className="mb-4">
                  Our customer service team is here to assist you with any questions about returns or exchanges.
                </p>
                <div className="space-x-4">
                  <Button as={Link} to="/contact" variant="primary">
                    Contact Us
                  </Button>
                  <Button as={Link} to="/faq" variant="outline">
                    View FAQ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPage;