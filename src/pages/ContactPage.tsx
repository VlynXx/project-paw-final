import React, { useState } from 'react';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-neutral-700 mb-6">
              Have a question or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-medium text-green-800 mb-2">Thank you for your message!</h3>
                <p className="text-green-700">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                
                <Button type="submit" variant="primary" size="lg">
                  Send Message
                </Button>
              </form>
            )}
          </div>
          
          <div className="bg-neutral-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Other Ways to Reach Us</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Visit Our Store</h3>
                <p className="text-neutral-600">
                  123 Luxury Lane, Suite 100<br />
                  New York, NY 10001
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Customer Service Hours</h3>
                <p className="text-neutral-600">
                  Monday - Friday: 9AM - 6PM EST<br />
                  Saturday: 10AM - 4PM EST<br />
                  Sunday: Closed
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Phone</h3>
                <p className="text-neutral-600">(212) 555-1234</p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-neutral-600">support@luxescape.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;