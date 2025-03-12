"use client";

// user-platform/src/app/checkout/success/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function CheckoutSuccess() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState('');
  
  // Generar un número de orden aleatorio
  useEffect(() => {
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000).toString();
    setOrderNumber(randomOrderNumber);
  }, []);
  
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-montserrat font-bold mb-4">
              ¡Compra realizada con éxito!
            </h1>
            
            <p className="text-gray-600 mb-6">
              Tu pago ha sido procesado correctamente. Hemos enviado los detalles de tu compra a tu correo electrónico.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-8 inline-block">
              <p className="text-sm text-gray-500">Número de orden</p>
              <p className="text-2xl font-bold text-primary">{orderNumber}</p>
            </div>
            
            <div className="mb-8">
              <h2 className="font-semibold text-lg mb-3">¿Qué sigue?</h2>
              <ul className="text-left max-w-md mx-auto space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Recibirás un correo electrónico con tus boletos digitales.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Puedes acceder a tus boletos desde tu área de usuario en cualquier momento.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Recuerda presentar tu código QR al momento de ingresar al evento o abordar tu transporte.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary"
                onClick={() => router.push('/user-area/tickets')}
              >
                Ver mis boletos
              </Button>
              <Button 
                variant="outline"
                onClick={() => router.push('/')}
              >
                Volver al inicio
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}