// src/components/sections/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const events = [
  {
    id: 1,
    title: 'Raíces Andinas Fest',
    subtitle: 'La mejor música andina contemporánea',
    image: '/images/raices-andinas.jpg',
    date: '15 de abril de 2025',
    location: 'Estadio Nacional, Lima',
    category: 'Concierto',
  },
  {
    id: 2,
    title: 'Lima Summer Beats',
    subtitle: 'El festival de verano más esperado',
    image: '/images/summer-beats.jpg',
    date: '5-6 de febrero de 2025',
    location: 'Costa Verde, San Miguel',
    category: 'Festival',
  },
  {
    id: 3,
    title: 'El Fantasma de los Andes',
    subtitle: 'Una obra maestra del teatro peruano',
    image: '/images/fantasma-andes.jpg',
    date: '10-30 de marzo de 2025',
    location: 'Teatro Segura, Lima',
    category: 'Teatro',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10" />
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg">
                <span className="inline-block px-3 py-1 mb-4 bg-secondary text-white text-sm rounded-md font-medium">
                  {event.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
                  {event.title}
                </h1>
                <p className="text-white/90 text-lg mb-5">{event.subtitle}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                  <div className="flex items-center text-white/90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-white/90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => router.push(`/events/${event.id}`)}
                  >
                    Comprar Ahora
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => router.push(`/events/${event.id}`)}
                  >
                    Más información
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        onClick={prevSlide}
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/30 text-white p-3 rounded-full backdrop-blur-sm transition-all"
        onClick={nextSlide}
        aria-label="Siguiente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;