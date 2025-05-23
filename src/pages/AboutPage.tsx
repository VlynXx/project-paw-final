import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-neutral-700 mb-6">
              Founded in 2020, Luxescape has become a leading destination for premium products and exceptional shopping experiences. Our commitment to quality and customer satisfaction drives everything we do.
            </p>
            <p className="text-neutral-700 mb-6">
              We carefully curate our collection to bring you the finest products from around the world, ensuring that each item meets our high standards for quality and craftsmanship.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
              alt="Our team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-neutral-600">
                We never compromise on quality, ensuring that every product meets our strict standards.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-neutral-600">
                Your satisfaction is our priority, and we're here to help every step of the way.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-neutral-600">
                We're committed to reducing our environmental impact and promoting sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;