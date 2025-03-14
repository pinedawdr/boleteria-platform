// src/lib/events.ts
import { supabase } from '@/lib/utils/supabase';

export const getFeaturedEvents = async (limit = 6) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('is_featured', true)
      .eq('is_active', true)
      .order('start_date', { ascending: true })
      .limit(limit);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getEventsByCategory = async (category: string, limit = 12) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('category', category)
      .eq('is_active', true)
      .order('start_date', { ascending: true })
      .limit(limit);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getEventById = async (id: string) => {
  try {
    // Obtener el evento
    const { data: event, error: eventError } = await supabase
      .from('events')
      .select('*')
      .eq('id', id)
      .single();

    if (eventError) throw eventError;

    // Obtener imágenes del evento
    const { data: images, error: imagesError } = await supabase
      .from('event_images')
      .select('*')
      .eq('event_id', id)
      .order('display_order', { ascending: true });

    if (imagesError) throw imagesError;

    // Obtener tipos de tickets
    const { data: ticketTypes, error: ticketTypesError } = await supabase
      .from('ticket_types')
      .select('*')
      .eq('event_id', id)
      .eq('is_active', true);

    if (ticketTypesError) throw ticketTypesError;

    return { 
      data: { 
        ...event, 
        images: images || [], 
        ticketTypes: ticketTypes || [] 
      }, 
      error: null 
    };
  } catch (error) {
    return { data: null, error };
  }
};

export const searchEvents = async (query: string, filters: any = {}) => {
  try {
    let queryBuilder = supabase
      .from('events')
      .select('*')
      .eq('is_active', true);

    // Búsqueda por texto
    if (query) {
      queryBuilder = queryBuilder.or(`title.ilike.%${query}%,description.ilike.%${query}%,location.ilike.%${query}%`);
    }

    // Aplicar filtros adicionales
    if (filters.category) {
      queryBuilder = queryBuilder.eq('category', filters.category);
    }

    if (filters.dateFrom) {
      queryBuilder = queryBuilder.gte('start_date', filters.dateFrom);
    }

    if (filters.dateTo) {
      queryBuilder = queryBuilder.lte('start_date', filters.dateTo);
    }

    // Ordenar resultados
    queryBuilder = queryBuilder.order('start_date', { ascending: true });

    const { data, error } = await queryBuilder;

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};