"use client";

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Card, { CardImage, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

// Listado de opciones de transporte
const transportServices = [
  {
    id: 'bus-1',
    title: 'Lima - Cusco VIP',
    image: '/images/lima-cusco.jpg',
    date: 'Diario - 22:00',
    location: 'Cruz del Sur',
    price: 'S/280',
    category: 'Bus',
  },
  {
    id: 'boat-1',
    title: 'Puno - Islas Uros Premium',
    image: '/images/puno-uros.jpg',
    date: 'Diario - 08:00, 10:00, 14:00',
    location: 'Titicaca Explorer',
    price: 'S/85',
    category: 'Barco',
  },
  {
    id: 'train-1',
    title: 'Ollantaytambo - Aguas Calientes',
    image: '/images/tren-machu-picchu.jpg',
    date: 'Diario - 06:10, 07:20, 11:30',
    location: 'Peru Rail',
    price: 'S/70 - S/450',
    category: 'Tren',
  },
  {
    id: 'bus-2',
    title: 'Lima - Arequipa Ejecutivo',
    image: '/images/lima-cusco.jpg',
    date: 'Diario - 20:00',
    location: 'Oltursa',
    price: 'S/180',
    category: 'Bus',
  },
];

export default function TransportePage() {
  const router = useRouter();
  const [filter, setFilter] = useState('todos');
  
  return (
    <main>
      <NavBar />
      
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-montserrat font-bold mb-8 text-center">
            Servicios de Transporte
          </h1>
          
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                  filter === 'todos'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-gray-200`}
                onClick={() => setFilter('todos')}
              >
                Todos
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  filter === 'bus'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border-t border-b border-gray-200`}
                onClick={() => setFilter('bus')}
              >
                Buses
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium ${
                  filter === 'tren'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border-t border-b border-gray-200`}
                onClick={() => setFilter('tren')}
              >
                Trenes
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  filter === 'barco'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-gray-200`}
                onClick={() => setFilter('barco')}
              >
                Barcos
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportServices
              .filter(service => 
                filter === 'todos' || 
                (filter === 'bus' && service.category === 'Bus') ||
                (filter === 'tren' && service.category === 'Tren') ||
                (filter === 'barco' && service.category === 'Barco')
              )
              .map((service) => (
                <Card 
                  key={service.id} 
                  hoverable
                  onClick={() => router.push(`/transporte/${service.id}`)}
                  className="group"
                >
                  <div className="relative">
                    <CardImage 
                      src={service.image} 
                      alt={service.title} 
                      aspectRatio="video"
                    />
                    <span className="absolute top-3 left-3 bg-secondary/90 text-white px-2 py-1 text-xs rounded-md backdrop-blur-sm">
                      {service.category}
                    </span>
                  </div>
                  <CardContent>
                    <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {service.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {service.location}
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                      <div className="text-secondary font-semibold">{service.price}</div>
                      <Button variant="primary" size="sm">
                        Comprar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}