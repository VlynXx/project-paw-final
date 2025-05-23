import { supabase } from './supabase';
import type { Database } from './types';

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getProduct(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function getOrders(userId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        product:products (*)
      ),
      order_tracking (*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getOrder(orderId: string, userId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        product:products (*)
      ),
      order_tracking (*)
    `)
    .eq('id', orderId)
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data;
}

export async function createOrder(
  orderData: Database['public']['Tables']['orders']['Insert'],
  orderItems: Database['public']['Tables']['order_items']['Insert'][],
  tracking: Database['public']['Tables']['order_tracking']['Insert']
) {
  // Start a transaction
  const { data: orderIdData, error: orderIdError } = await supabase
    .rpc('generate_order_id');

  if (orderIdError) throw orderIdError;

  // Create order
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({ ...orderData, id: orderIdData })
    .select()
    .single();

  if (orderError) throw orderError;

  // Create order items
  const orderItemsWithId = orderItems.map(item => ({
    ...item,
    order_id: order.id
  }));

  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(orderItemsWithId);

  if (itemsError) throw itemsError;

  // Create tracking
  const { error: trackingError } = await supabase
    .from('order_tracking')
    .insert({
      ...tracking,
      order_id: order.id
    });

  if (trackingError) throw trackingError;

  return order;
}