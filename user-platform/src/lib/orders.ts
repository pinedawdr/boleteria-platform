// src/lib/orders.ts
import { supabase } from '@/lib/utils/supabase';

interface CreateOrderData {
  userId: string;
  orderType: 'event' | 'transport';
  totalAmount: number;
  serviceFee: number;
  paymentMethod: string;
  items: Array<{
    itemType: 'ticket' | 'transport_seat';
    itemId: string;
    quantity: number;
    unitPrice: number;
  }>;
}

export const createOrder = async (orderData: CreateOrderData) => {
  try {
    // Iniciar una transacción
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: orderData.userId,
        order_type: orderData.orderType,
        total_amount: orderData.totalAmount,
        service_fee: orderData.serviceFee,
        payment_method: orderData.paymentMethod,
        status: 'pending',
        payment_status: 'pending',
      })
      .select()
      .single();

    if (orderError) throw orderError;

    // Insertar los items de la orden
    const orderItems = orderData.items.map(item => ({
      order_id: order.id,
      item_type: item.itemType,
      item_id: item.itemId,
      quantity: item.quantity,
      unit_price: item.unitPrice,
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);

    if (itemsError) throw itemsError;

    // Actualizar el estado de los tickets o asientos según el tipo de orden
    if (orderData.orderType === 'event') {
      for (const item of orderData.items) {
        if (item.itemType === 'ticket') {
          const { error: ticketError } = await supabase
            .from('tickets')
            .update({ 
              status: 'reserved', 
              user_id: orderData.userId,
              order_id: order.id,
              price_paid: item.unitPrice
            })
            .eq('id', item.itemId);

          if (ticketError) throw ticketError;
        }
      }
    } else {
      for (const item of orderData.items) {
        if (item.itemType === 'transport_seat') {
          const { error: seatError } = await supabase
            .from('transport_seats')
            .update({ 
              status: 'reserved', 
              user_id: orderData.userId,
              order_id: order.id,
              price_paid: item.unitPrice
            })
            .eq('id', item.itemId);

          if (seatError) throw seatError;
        }
      }
    }

    return { data: order, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getUserOrders = async (userId: string) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getOrderById = async (orderId: string, userId: string) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (*)
      `)
      .eq('id', orderId)
      .eq('user_id', userId)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const updateOrderStatus = async (orderId: string, status: string, paymentStatus: string) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .update({ 
        status, 
        payment_status: paymentStatus,
        updated_at: new Date()
      })
      .eq('id', orderId)
      .select();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};