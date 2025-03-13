"use client";

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Card, { CardImage, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

// Eventos de ejemplo para la categoría
const categoryEvents = [
  {
    id: 1,
    title: 'Raíces Andinas Fest',
    image: '/images/raices-andinas.jpg',
    date: '15 de abril de 2023',
    location: 'Estadio Nacional, Lima',
    price: 'S/80 - S/350',
    category: 'Concierto',
  },
  {
    id: 2,
    title: 'Lima Summer Beats',
    image: '/images/summer-beats.jpg',
    date: '5-6 de febrero de 2023',
    location: 'Costa Verde, San Miguel',
    price: 'S/180 - S/590',
    category: 'Festival',
  },
  {
    id: 3,
    title: 'Tributo a Queen',
    image: '/images/boxeo.jpg',
    date: '30 de marzo de 2023',
    location: 'Anfiteatro del Parque de la Exposición',
    price: 'S/40 - S/200',
    category: 'Concierto',
  },
  {
    id: 4,
    title: 'Festival de Jazz',
    image: '/images/maraton.jpg',
    date: '7 de mayo de 2023',
    location: 'Plaza Mayor de Barranco',
    price: 'S/60',
    category: 'Concierto',
  },
];

export default function ConciertosPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('todos');
  
  return (
    <main>
      <NavBar />
      
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-montserrat font-bold mb-8 text-center">
            Eventos de Conciertos
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
                  filter === 'populares'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border-t border-b border-gray-200`}
                onClick={() => setFilter('populares')}
              >
                Populares
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                  filter === 'nuevos'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-gray-200`}
                onClick={() => setFilter('nuevos')}
              >
                Nuevos
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryEvents.map((event) => (
              <Card 
                key={event.id} 
                hoverable
                onClick={() => router.push(`/conciertos/${event.id}`)}
                className="group"
              >
                <div className="relative">
                  <CardImage 
                    src={event.image} 
                    alt={event.title} 
                    aspectRatio="video"
                  />
                  <span className="absolute top-3 left-3 bg-secondary/90 text-white px-2 py-1 text-xs rounded-md backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>
                <CardContent>
                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div className="text-secondary font-semibold">{event.price}</div>
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