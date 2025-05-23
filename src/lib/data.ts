import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Watch',
    price: 599.99,
    description: 'This precision-engineered timepiece combines elegance with durability. The sapphire crystal face is scratch-resistant, while the automatic movement ensures accurate timekeeping without the need for a battery. Water-resistant up to 100 meters, this watch is suitable for swimming and snorkeling but not for diving.',
    shortDescription: 'Elegant timepiece with precision movement',
    imageUrl: 'https://images.pexels.com/photos/9978732/pexels-photo-9978732.jpeg',
    category: 'Accessories',
    featured: true,
    rating: 4.8,
    reviews: 124,
    available: true,
    details: [
      'Automatic movement',
      'Sapphire crystal face',
      'Water resistant to 100m',
      '316L stainless steel case',
      '2-year warranty'
    ]
  },
  {
    id: '2',
    name: 'Leather Laptop Bag',
    price: 249.99,
    description: 'Crafted from full-grain leather, this laptop bag offers both style and functionality. The padded interior safely holds laptops up to 15 inches, while multiple compartments keep your accessories organized. The adjustable shoulder strap and sturdy handles provide comfortable carrying options for your daily commute or business trips.',
    shortDescription: 'Full-grain leather bag for laptops up to 15"',
    imageUrl: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    category: 'Accessories',
    featured: true,
    rating: 4.7,
    reviews: 89,
    available: true,
    details: [
      'Full-grain leather',
      'Fits laptops up to 15"',
      'Multiple compartments',
      'Adjustable shoulder strap',
      'Brass hardware'
    ]
  },
  {
    id: '3',
    name: 'Wireless Headphones',
    price: 349.99,
    description: 'Experience unparalleled sound quality with these premium wireless headphones. Active noise cancellation creates a private listening environment in even the busiest spaces. The memory foam ear cushions provide hours of comfortable wear, while the 30-hour battery life ensures your music keeps playing throughout the day.',
    shortDescription: 'Premium sound with active noise cancellation',
    imageUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    category: 'Electronics',
    featured: true,
    rating: 4.9,
    reviews: 211,
    available: true,
    details: [
      'Active noise cancellation',
      '30-hour battery life',
      'Memory foam ear cushions',
      'Bluetooth 5.0',
      'Built-in microphone for calls'
    ]
  },
  {
    id: '4',
    name: 'Cashmere Sweater',
    price: 199.99,
    description: 'Luxuriously soft and warm, this cashmere sweater is a wardrobe essential. The fine Mongolian cashmere provides exceptional warmth without bulk, making it perfect for layering. The classic crew neck design and ribbed cuffs and hem ensure a timeless look that pairs well with both casual and formal outfits.',
    shortDescription: 'Ultra-soft Mongolian cashmere with classic styling',
    imageUrl: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg',
    category: 'Clothing',
    featured: false,
    rating: 4.6,
    reviews: 67,
    available: true,
    details: [
      '100% Mongolian cashmere',
      'Crew neck design',
      'Ribbed cuffs and hem',
      'Dry clean only',
      'Available in multiple colors'
    ]
  },
  {
    id: '5',
    name: 'Smart Home Hub',
    price: 179.99,
    description: 'Transform your house into a smart home with this intuitive hub. Control your lights, thermostat, security system, and more from a single device or smartphone app. Voice command capability works with all major virtual assistants, while the simple setup process gets you connected in minutes without professional installation.',
    shortDescription: 'Centralized control for all your smart devices',
    imageUrl: 'https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg',
    category: 'Electronics',
    featured: true,
    rating: 4.5,
    reviews: 103,
    available: true,
    details: [
      'Compatible with 1000+ smart devices',
      'Voice command capability',
      'Energy usage monitoring',
      'Customizable automation',
      'Enhanced security protocols'
    ]
  },
  {
    id: '6',
    name: 'Ceramic Dinnerware Set',
    price: 129.99,
    description: 'Elevate your dining experience with this elegant 16-piece ceramic dinnerware set. The hand-glazed finish gives each piece a unique character, while the durable stoneware construction stands up to daily use. Microwave and dishwasher safe, this set combines beauty and practicality for everyday meals or special occasions.',
    shortDescription: 'Hand-glazed 16-piece set for everyday elegance',
    imageUrl: 'https://images.pexels.com/photos/6270541/pexels-photo-6270541.jpeg',
    category: 'Home',
    featured: false,
    rating: 4.7,
    reviews: 42,
    available: true,
    details: [
      '16-piece set (4 place settings)',
      'Hand-glazed finish',
      'Durable stoneware construction',
      'Microwave and dishwasher safe',
      'Scratch-resistant'
    ]
  },
  {
    id: '7',
    name: 'Mechanical Keyboard',
    price: 159.99,
    description: 'Enhance your typing experience with this premium mechanical keyboard. The tactile switches provide satisfying feedback and improved accuracy, while the customizable RGB lighting adds style to your workspace. The aircraft-grade aluminum frame ensures durability, and the programmable keys allow you to create shortcuts for your most common tasks.',
    shortDescription: 'Precision typing with customizable features',
    imageUrl: 'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg',
    category: 'Electronics',
    featured: false,
    rating: 4.8,
    reviews: 156,
    available: true,
    details: [
      'Mechanical switches rated for 50 million keystrokes',
      'Customizable RGB lighting',
      'Aircraft-grade aluminum frame',
      'Programmable macro keys',
      'Detachable USB-C cable'
    ]
  },
  {
    id: '8',
    name: 'Leather Wallet',
    price: 89.99,
    description: 'Crafted from full-grain leather, this slim bifold wallet combines classic style with modern functionality. The RFID blocking technology protects your card information from electronic theft, while the thoughtful interior layout holds cards, cash, and ID without unnecessary bulk. As the leather ages, it develops a rich patina that makes each wallet uniquely yours.',
    shortDescription: 'Slim bifold with RFID protection',
    imageUrl: 'https://images.pexels.com/photos/2079172/pexels-photo-2079172.jpeg',
    category: 'Accessories',
    featured: false,
    rating: 4.6,
    reviews: 78,
    available: true,
    details: [
      'Full-grain leather',
      'RFID blocking technology',
      '6 card slots',
      '2 cash compartments',
      'ID window'
    ]
  }
];