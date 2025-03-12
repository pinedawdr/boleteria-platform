"use client";

// user-platform/src/components/sections/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const events = [
  {
    id: 1,
    title: 'Raíces Andinas Fest',
    image: '/images/raices-andinas.jpg',
    date: '15 de abril de 2023',
    location: 'Estadio Nacional, Lima',
    category: 'Concierto',
  },
  {
    id: 2,
    title: 'Lima Summer Beats',
    image: '/images/summer-beats.jpg',
    date: '5-6 de febrero de 2023',
    location: 'Costa Verde, San Miguel',
    category: 'Festival',
  },
  {
    id: 3,
    title: 'El Fantasma de los Andes',
    image: '/images/fantasma-andes.jpg',
    date: '10-30 de marzo de 2023',
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg">
                <span className="inline-block px-3 py-1 mb-3 bg-secondary text-white text-sm rounded">
                  {event.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
                  {event.title}
                </h1>
                <p className="text-white/90 mb-2">{event.date}</p>
                <p className="text-white/90 mb-6">{event.location}</p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => router.push(`/events/${event.id}`)}
                >
                  Comprar Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;