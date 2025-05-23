export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  imageUrl: string;
  category: string;
  featured: boolean;
  rating: number;
  reviews: number;
  available: boolean;
  details: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Order {
  id: string;
  userId: string;
  status: string;
  totalAmount: number;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  product: Product;
}

export interface OrderTracking {
  id: string;
  orderId: string;
  status: string;
  location: string;
  description: string;
  timestamp: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

// Database types
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          short_description: string | null
          price: number
          image_url: string | null
          category: string | null
          featured: boolean
          rating: number
          reviews_count: number
          available: boolean
          details: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          short_description?: string | null
          price: number
          image_url?: string | null
          category?: string | null
          featured?: boolean
          rating?: number
          reviews_count?: number
          available?: boolean
          details?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          short_description?: string | null
          price?: number
          image_url?: string | null
          category?: string | null
          featured?: boolean
          rating?: number
          reviews_count?: number
          available?: boolean
          details?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string
          status: string
          total_amount: number
          shipping_address: Json
          payment_method: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          status?: string
          total_amount: number
          shipping_address?: Json
          payment_method: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          status?: string
          total_amount?: number
          shipping_address?: Json
          payment_method?: string
          created_at?: string
          updated_at?: string
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string
          quantity: number
          price: number
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id: string
          quantity: number
          price: number
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string
          quantity?: number
          price?: number
          created_at?: string
        }
      }
      order_tracking: {
        Row: {
          id: string
          order_id: string
          status: string
          location: string | null
          description: string | null
          timestamp: string
        }
        Insert: {
          id?: string
          order_id: string
          status: string
          location?: string | null
          description?: string | null
          timestamp?: string
        }
        Update: {
          id?: string
          order_id?: string
          status?: string
          location?: string | null
          description?: string | null
          timestamp?: string
        }
      }
    }
    Functions: {
      generate_order_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
  }
}