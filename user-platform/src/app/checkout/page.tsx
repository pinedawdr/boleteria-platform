"use client";

// user-platform/src/app/checkout/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import CheckoutForm from '@/components/forms/CheckoutForm';

interface CheckoutItem {
  id: string;
  name: string;
  type: string;
  price: number;
  quantity: number;
  details?: string;
}

export default function Checkout() {
  const searchParams = useSearchParams();
  const [items, setItems] = useState<CheckoutItem[]>([]);
  const [checkoutType, setCheckoutType] = useState<'event' | 'transport'>('event');
  const [loading, setLoading] = useState(true);
  
  // Simulación de carga de items basados en parámetros de URL
  useEffect(() => {
    const loadCheckoutItems = async () => {
      setLoading(true);
      
      try {
        // Extraer parámetros relevantes
        const type = searchParams.get('type') as 'event' | 'transport' || 'event';
        const ids = searchParams.get('items')?.split(',') || [];
        
        // En un entorno real, aquí se cargarían los datos desde una API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulación de datos según el tipo
        let mockItems: CheckoutItem[] = [];
        
        if (type === 'event') {
          mockItems = [
            {
              id: '1',
              name: 'Raíces Andinas Fest',
              type: 'VIP',
              price: 350,
              quantity: 2,
              details: 'Fila C, Asientos 10-11'
            }
          ];
        } else {
          mockItems = [
            {
              id: '1',
              name: 'Lima - Cusco',
              type: 'VIP (180°)',
              price: 280,
              quantity: 1,
              details: 'Asiento B4'
            },
            {
              id: '2',
              name: 'Lima - Cusco',
              type: 'VIP (180°)',
              price: 280,
              quantity: 1,
              details: 'Asiento B5'
            }
          ];
        }
        
        setItems(mockItems);
        setCheckoutType(type);
      } catch (error) {
        console.error('Error loading checkout items:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadCheckoutItems();
  }, [searchParams]);
  
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-montserrat font-bold text-center mb-8">
            Finalizar compra
          </h1>
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="flex flex-col items-center">
                <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="mt-3 text-gray-600">Cargando información de compra...</p>
              </div>
            </div>
          ) : (
            <CheckoutForm 
              items={items} 
              type={checkoutType} 
            />
          )}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}