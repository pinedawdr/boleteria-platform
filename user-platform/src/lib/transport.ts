// src/lib/transport.ts
import { supabase } from '@/lib/utils/supabase';

export const getTransportServices = async (limit = 12) => {
  try {
    const { data, error } = await supabase
      .from('transport_services')
      .select('*')
      .eq('is_active', true)
      .limit(limit);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getTransportById = async (id: string) => {
  try {
    // Obtener el servicio de transporte
    const { data: transport, error: transportError } = await supabase
      .from('transport_services')
      .select('*')
      .eq('id', id)
      .single();

    if (transportError) throw transportError;

    // Obtener tipos de servicio
    const { data: serviceTypes, error: serviceTypesError } = await supabase
      .from('transport_service_types')
      .select('*')
      .eq('transport_service_id', id);

    if (serviceTypesError) throw serviceTypesError;

    return { 
      data: { 
        ...transport, 
        serviceTypes: serviceTypes || [] 
      }, 
      error: null 
    };
  } catch (error) {
    return { data: null, error };
  }
};

export const searchTransport = async (
  origin: string, 
  destination: string, 
  date?: string, 
  serviceType?: string
) => {
  try {
    let queryBuilder = supabase
      .from('transport_services')
      .select('*')
      .eq('is_active', true)
      .ilike('origin', `%${origin}%`)
      .ilike('destination', `%${destination}%`);

    if (serviceType) {
      queryBuilder = queryBuilder.eq('service_type', serviceType);
    }

    const { data, error } = await queryBuilder;

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export const getAvailableSeats = async (
  transportServiceId: string,
  serviceTypeId: string,
  departureDate: string
) => {
  try {
    const { data, error } = await supabase
      .from('transport_seats')
      .select('*')
      .eq('transport_service_id', transportServiceId)
      .eq('service_type_id', serviceTypeId)
      .eq('departure_date', departureDate);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};