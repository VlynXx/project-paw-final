import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingBag, Check, ArrowLeft, Star } from 'lucide-react';
import { products } from '../../lib/data';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoritesContext';
import Button from '../ui/Button';
import ProductGrid from './ProductGrid';


const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const location = useLocation();
  const imageRef = useRef<HTMLDivElement>(null);
  
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  
  // Find the product
  const product = products.find(p => p.id === productId);
  
  // Find related products (same category)
  const relatedProducts = product
    ? products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4)
    : [];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  // Reset added to cart state after delay
  useEffect(() => {
    if (addedToCart) {
      const timer = setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [addedToCart]);
  
  // Handle adding to cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setAddedToCart(true);
    }
  };

  const handleFavoriteClick = () => {
    if (!product) return;
    
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };
  
  // If product not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <p className="text-neutral-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button as={Link} to="/products">
          Continue Shopping
        </Button>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/products" className="inline-flex items-center text-sm text-neutral-600 hover:text-primary-700">
            <ArrowLeft size={16} className="mr-1" /> Back to Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Product Image */}
          <div ref={imageRef} className="lg:sticky lg:top-24 h-fit">
            <div className="bg-neutral-100 rounded-lg overflow-hidden aspect-square">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <div className="mb-6">
              <p className="text-neutral-500 mb-1">{product.category}</p>
              <h1 className="text-3xl font-semibold text-neutral-900 mb-2">{product.name}</h1>
              
              {/* Ratings */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={`${i < Math.floor(product.rating) ? 'text-accent-500 fill-accent-500' : 'text-neutral-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-neutral-600 ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <p className="text-2xl font-semibold text-neutral-900 mb-6">
                ${product.price.toFixed(2)}
              </p>
              
              <p className="text-neutral-700 mb-6">
                {product.shortDescription}
              </p>
            </div>
            
            {/* Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-1">
                    Quantity
                  </label>
                  <div className="flex items-center border border-neutral-300 rounded-md">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-neutral-500 hover:text-neutral-900"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                      className="w-12 text-center border-none focus:ring-0 p-0"
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-neutral-500 hover:text-neutral-900"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <p className="block text-sm font-medium text-neutral-700 mb-1">
                    Availability
                  </p>
                  {product.available ? (
                    <span className="inline-flex items-center text-green-600 text-sm">
                      <Check size={16} className="mr-1" /> In Stock
                    </span>
                  ) : (
                    <span className="text-red-600 text-sm">Out of Stock</span>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleAddToCart}
                  variant="primary" 
                  size="lg" 
                  fullWidth 
                  icon={addedToCart ? <Check size={18} /> : <ShoppingBag size={18} />}
                  disabled={!product.available}
                >
                  {addedToCart ? 'Added to Cart' : 'Add to Cart'}
                </Button>
                
                <Button 
                  onClick={handleFavoriteClick}
                  variant="outline" 
                  size="lg" 
                  icon={<Heart size={18} className={isFavorite(product.id) ? 'fill-accent-600 text-accent-600' : ''} />}
                >
                  {isFavorite(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </Button>
              </div>
            </div>
            
            {/* Tabs: Description, Details, etc. */}
            <div className="border-t border-neutral-200 pt-8">
              <div className="flex border-b border-neutral-200">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`pb-3 px-4 font-medium text-sm ${
                    activeTab === 'description'
                      ? 'border-b-2 border-primary-600 text-primary-700'
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('details')}
                  className={`pb-3 px-4 font-medium text-sm ${
                    activeTab === 'details'
                      ? 'border-b-2 border-primary-600 text-primary-700'
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-3 px-4 font-medium text-sm ${
                    activeTab === 'reviews'
                      ? 'border-b-2 border-primary-600 text-primary-700'
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  Reviews ({product.reviews})
                </button>
              </div>
              
              <div className="py-6">
                {activeTab === 'description' && (
                  <div className="prose prose-neutral max-w-none text-neutral-700">
                    <p>{product.description}</p>
                  </div>
                )}
                
                {activeTab === 'details' && (
                  <ul className="space-y-3">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-primary-100 rounded-full text-primary-600 text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span className="text-neutral-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {activeTab === 'reviews' && (
                  <div className="text-neutral-700">
                    <div className="text-center py-6">
                      <p className="text-sm text-neutral-500">Reviews will be implemented in a future update.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <ProductGrid products={relatedProducts} title="You May Also Like" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;