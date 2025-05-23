/*
  # Orders and Payments Schema

  1. New Tables
    - `orders`
      - `id` (text, primary key) - combination of date, hour, minute, second
      - `user_id` (uuid, references auth.users)
      - `status` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (text, references orders)
      - `product_id` (text)
      - `quantity` (integer)
      - `price` (numeric)
    
    - `order_tracking`
      - `id` (uuid, primary key)
      - `order_id` (text, references orders)
      - `status` (text)
      - `location` (text)
      - `description` (text)
      - `timestamp` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read their own orders
*/

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id text PRIMARY KEY,
  user_id uuid REFERENCES auth.users NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  total_amount numeric NOT NULL DEFAULT 0,
  shipping_address jsonb,
  payment_method text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id text REFERENCES orders ON DELETE CASCADE,
  product_id text NOT NULL,
  quantity integer NOT NULL,
  price numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create order_tracking table
CREATE TABLE IF NOT EXISTS order_tracking (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id text REFERENCES orders ON DELETE CASCADE,
  status text NOT NULL,
  location text,
  description text,
  timestamp timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_tracking ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view own order items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can view own order tracking"
  ON order_tracking
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_tracking.order_id
      AND orders.user_id = auth.uid()
    )
  );

-- Function to generate order ID
CREATE OR REPLACE FUNCTION generate_order_id()
RETURNS text
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT to_char(now(), 'YYYYMMDDHH24MISS') || substring(md5(random()::text) from 1 for 4);
$$;

-- Grant execute permission on the function
GRANT EXECUTE ON FUNCTION generate_order_id() TO authenticated;
GRANT EXECUTE ON FUNCTION generate_order_id() TO anon;