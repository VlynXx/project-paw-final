import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Heart, User, Search, LogOut } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import { products } from '../../lib/data';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof products>([]);
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
  }, [location]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchItemClick = (productId: string) => {
    navigate(`/products/${productId}`);
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

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
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-xl font-bold ${textColor}`}>LUXESCAPE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className={`${textColor} hover:opacity-80`}>
              All Products
            </Link>
            <Link to="/products?category=Electronics" className={`${textColor} hover:opacity-80`}>
              Electronics
            </Link>
            <Link to="/products?category=Accessories" className={`${textColor} hover:opacity-80`}>
              Accessories
            </Link>
            <Link to="/products?category=Clothing" className={`${textColor} hover:opacity-80`}>
              Clothing
            </Link>
            <Link to="/products?category=Home" className={`${textColor} hover:opacity-80`}>
              Home
            </Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className={`${textColor} hover:opacity-80 p-2`}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={20} />
            </button>
            <Link to="/wishlist" className={`${textColor} hover:opacity-80 p-2`}>
              <Heart size={20} />
            </Link>
            {user ? (
              <div className="relative group">
                <button className={`${textColor} hover:opacity-80 p-2`}>
                  <User size={20} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <div className="px-4 py-2 text-sm text-neutral-700 border-b border-neutral-100">
                    {user.email}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 flex items-center"
                  >
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </button>
                </div>
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

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <Link to="/cart" className="relative p-2">
              <ShoppingCart size={20} className={textColor} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button 
              className={`${textColor} p-2`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="absolute left-0 right-0 bg-white shadow-md p-4 mt-2 animate-slide-down">
            <div className="container mx-auto">
              <div className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search for products..." 
                  className="w-full p-2 pl-10 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500" />
                
                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="absolute w-full bg-white mt-2 rounded-md shadow-lg border border-neutral-200 max-h-96 overflow-y-auto z-50">
                    {searchResults.map(product => (
                      <button
                        key={product.id}
                        onClick={() => handleSearchItemClick(product.id)}
                        className="w-full text-left p-3 hover:bg-neutral-50 flex items-center space-x-3 border-b border-neutral-100 last:border-0"
                      >
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium text-neutral-900">{product.name}</h4>
                          <p className="text-sm text-neutral-500">{product.category}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <Link to="/products" className="py-2 border-b border-neutral-200">
                All Products
              </Link>
              <Link to="/products?category=Electronics" className="py-2 border-b border-neutral-200">
                Electronics
              </Link>
              <Link to="/products?category=Accessories" className="py-2 border-b border-neutral-200">
                Accessories
              </Link>
              <Link to="/products?category=Clothing" className="py-2 border-b border-neutral-200">
                Clothing
              </Link>
              <Link to="/products?category=Home" className="py-2 border-b border-neutral-200">
                Home
              </Link>
              <Link to="/wishlist" className="py-2 border-b border-neutral-200 flex items-center">
                <Heart size={18} className="mr-2" /> Wishlist
              </Link>
              {user ? (
                <>
                  <div className="py-2 border-b border-neutral-200 text-sm text-neutral-700">
                    {user.email}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="py-2 border-b border-neutral-200 flex items-center text-neutral-700"
                  >
                    <LogOut size={18} className="mr-2" /> Sign Out
                  </button>
                </>
              ) : (
                <Link to="/login" className="py-2 border-b border-neutral-200 flex items-center">
                  <User size={18} className="mr-2" /> Sign In
                </Link>
              )}
              <div className="pt-2">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search..." 
                  className="w-full p-2 border border-neutral-300 rounded-md"
                />
                {searchResults.length > 0 && (
                  <div className="mt-2 border border-neutral-200 rounded-md">
                    {searchResults.map(product => (
                      <button
                        key={product.id}
                        onClick={() => handleSearchItemClick(product.id)}
                        className="w-full text-left p-3 hover:bg-neutral-50 flex items-center space-x-3 border-b border-neutral-100 last:border-0"
                      >
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-medium text-neutral-900">{product.name}</h4>
                          <p className="text-sm text-neutral-500">{product.category}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;