// src/components/sections/FeaturedEventsSection.tsx
"use client";

import { useState, useEffect } from 'react';
import Card, { CardImage, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

// Eventos de ejemplo según la documentación
const featuredEvents = [
  {
    id: 1,
    title: 'Raíces Andinas Fest',
    image: '/images/raices-andinas.jpg',
    date: '15 de abril de 2023',
    location: 'Estadio Nacional, Lima',
    price: 'S/80 - S/350',
    category: 'Conciertos',
    path: '/conciertos/1'
  },
  {
    id: 2,
    title: 'Clásico del Fútbol Peruano',
    image: '/images/clasico-futbol.jpg',
    date: '25 de marzo de 2023',
    location: 'Estadio Monumental, Lima',
    price: 'S/30 - S/180',
    category: 'Deportes',
    path: '/deportes/1'
  },
  {
    id: 3,
    title: 'El Fantasma de los Andes',
    image: '/images/fantasma-andes.jpg',
    date: '10-30 de marzo de 2023',
    location: 'Teatro Segura, Lima',
    price: 'S/50 - S/120',
    category: 'Teatro',
    path: '/teatro/1'
  },
  {
    id: 4,
    title: 'Festival de Comedia',
    image: '/images/festival-comedia.jpg',
    date: '8 de abril de 2023',
    location: 'Centro de Convenciones, Lima',
    price: 'S/70 - S/150',
    category: 'Entretenimiento',
    path: '/entretenimiento/1'
  },
  {
    id: 5,
    title: 'Expo Gastronomía',
    image: '/images/expo-gastronomia.jpg',
    date: '20-22 de mayo de 2023',
    location: 'Parque de la Exposición, Lima',
    price: 'S/45',
    category: 'Otros',
    path: '/otros/1'
  },
  {
    id: 6,
    title: 'Lima - Cusco VIP',
    image: '/images/lima-cusco.jpg',
    date: 'Diario - 22:00',
    location: 'Cruz del Sur',
    price: 'S/280',
    category: 'Transporte',
    path: '/transporte/1'
  },
];

// Lista de todas las categorías disponibles
const categories = [
  'Todos',
  'Conciertos',
  'Deportes',
  'Teatro',
  'Entretenimiento',
  'Otros',
  'Transporte'
];

const FeaturedEventsSection = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredEvents, setFilteredEvents] = useState(featuredEvents);
  const [animate, setAnimate] = useState(false);
  
  // Filtrar eventos cuando cambia la categoría seleccionada
  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      if (selectedCategory === 'Todos') {
        setFilteredEvents(featuredEvents);
      } else {
        setFilteredEvents(featuredEvents.filter(event => event.category === selectedCategory));
      }
      setTimeout(() => {
        setAnimate(false);
      }, 50);
    }, 200);
  }, [selectedCategory]);
  
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
            Eventos Destacados
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-8"></div>
          
          {/* Filtros de categoría - Versión minimalista */}
          <div className="inline-flex items-center space-x-1 border-b border-gray-200 mb-12 overflow-x-auto max-w-full pb-1 px-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 text-sm whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? 'text-secondary font-medium border-b-2 border-secondary'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-200 ${
          animate ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
        }`}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <Card 
                key={event.id} 
                hoverable
                onClick={() => router.push(event.path)}
                className="group overflow-hidden transform transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="relative">
                  <CardImage 
                    src={event.image} 
                    alt={event.title} 
                    aspectRatio="video"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-3 left-3 bg-secondary/90 text-white px-3 py-1 text-xs rounded-full backdrop-blur-sm">
                    {event.category}
                  </span>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="primary" size="sm" className="shadow-lg">
                      Ver detalles
                    </Button>
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div className="text-secondary font-semibold">{event.price}</div>
                    <div className="bg-gray-50 text-xs px-2 py-1 rounded-full text-gray-700">
                      {new Date(event.date.split(' ')[0]).toLocaleString('es', { month: 'short' }).toUpperCase()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-3 py-12 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-md mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-700 mb-2">No hay eventos disponibles</h3>
                <p className="text-gray-500 mb-4">No se encontraron eventos en esta categoría.</p>
                <Button variant="outline" onClick={() => setSelectedCategory('Todos')}>
                  Ver todos los eventos
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {filteredEvents.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              onClick={() => router.push('/search')}
              className="font-medium px-6 py-3 hover:bg-gray-50 transition-colors"
            >
              Explorar más eventos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedEventsSection;