import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-white">LUXESCAPE</h2>
            <p className="mb-4 text-neutral-400">
              Curating the finest products for the discerning customer. Quality, luxury, and style define our collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-neutral-400 hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-neutral-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Account & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Account & Support</h3>
            <ul className="space-y-2">
              <li><Link to="/account" className="text-neutral-400 hover:text-white transition-colors">My Account</Link></li>
              <li><Link to="/orders" className="text-neutral-400 hover:text-white transition-colors">Order History</Link></li>
              <li><Link to="/wishlist" className="text-neutral-400 hover:text-white transition-colors">Wishlist</Link></li>
              <li><Link to="/returns" className="text-neutral-400 hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/shipping" className="text-neutral-400 hover:text-white transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-neutral-400" />
                <span className="text-neutral-400">123 Luxury Lane, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-neutral-400" />
                <span className="text-neutral-400">(212) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-neutral-400" />
                <span className="text-neutral-400">support@luxescape.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Luxescape. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-sm text-neutral-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-neutral-500 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-sm text-neutral-500 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;