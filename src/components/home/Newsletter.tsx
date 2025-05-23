import React, { useState } from 'react';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the subscription logic
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Newsletter</h2>
          <p className="text-primary-200 mb-8">
            Subscribe to receive updates on new arrivals, special offers, and exclusive content.
          </p>
          
          {submitted ? (
            <div className="bg-primary-800/50 p-6 rounded-lg animate-fade-in">
              <p className="text-xl">Thank you for subscribing!</p>
              <p className="text-primary-200 mt-2">You'll be the first to know about our new products and special offers.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-md focus:ring-2 focus:ring-accent-500 text-neutral-900 focus:outline-none"
              />
              <Button type="submit" variant="secondary" size="lg">
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-xs text-primary-300 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing communications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;