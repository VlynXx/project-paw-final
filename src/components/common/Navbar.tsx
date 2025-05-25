import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Heart, User, Search, LogOut } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setShowDropdown(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled || mobileMenuOpen || location.pathname !== '/' 
      ? 'bg-white shadow-md py-3' 
      : 'bg-transparent py-5'
  }`;

  const textColor = isScrolled || mobileMenuOpen || location.pathname !== '/' 
    ? 'text-neutral-900' 
    : 'text-white';

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className={`text-xl font-bold ${textColor}`}>LUXESCAPE</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className={`${textColor} hover:opacity-80`}>All Products</Link>
            <Link to="/products?category=Electronics" className={`${textColor} hover:opacity-80`}>Electronics</Link>
            <Link to="/products?category=Accessories" className={`${textColor} hover:opacity-80`}>Accessories</Link>
            <Link to="/products?category=Clothing" className={`${textColor} hover:opacity-80`}>Clothing</Link>
            <Link to="/products?category=Home" className={`${textColor} hover:opacity-80`}>Furniture</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className={`${textColor} hover:opacity-80 p-2`} onClick={() => setSearchOpen(!searchOpen)}>
              <Search size={20} />
            </button>
            <Link to="/wishlist" className={`${textColor} hover:opacity-80 p-2`}>
              <Heart size={20} />
            </Link>

            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setShowDropdown(prev => !prev)} className={`${textColor} hover:opacity-80 p-2`}>
                  <User size={20} />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 text-sm text-neutral-700 border-b border-neutral-100">
                      {user.email}
                    </div>
                    <button onClick={handleSignOut} className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 flex items-center">
                      <LogOut size={16} className="mr-2" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className={`${textColor} hover:opacity-80 p-2`}>
                <User size={20} />
              </Link>
            )}

            <Link to="/cart" className="relative p-2">
              <ShoppingCart size={20} className={textColor} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          <div className="flex items-center space-x-3 md:hidden">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart size={20} className={textColor} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button className={`${textColor} p-2`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <Link to="/products" className="py-2 border-b border-neutral-200">All Products</Link>
              <Link to="/products?category=Electronics" className="py-2 border-b border-neutral-200">Electronics</Link>
              <Link to="/products?category=Accessories" className="py-2 border-b border-neutral-200">Accessories</Link>
              <Link to="/products?category=Clothing" className="py-2 border-b border-neutral-200">Clothing</Link>
              <Link to="/products?category=Home" className="py-2 border-b border-neutral-200">Home</Link>
              <Link to="/wishlist" className="py-2 border-b border-neutral-200 flex items-center">
                <Heart size={18} className="mr-2" /> Wishlist
              </Link>
              {user ? (
                <>
                  <div className="py-2 border-b border-neutral-200 text-sm text-neutral-700">{user.email}</div>
                  <button onClick={handleSignOut} className="py-2 border-b border-neutral-200 flex items-center text-neutral-700">
                    <LogOut size={18} className="mr-2" /> Sign Out
                  </button>
                </>
              ) : (
                <Link to="/login" className="py-2 border-b border-neutral-200 flex items-center">
                  <User size={18} className="mr-2" /> Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
