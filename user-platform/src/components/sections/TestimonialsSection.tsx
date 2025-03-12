// src/components/sections/TestimonialsSection.tsx
"use client";

import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Ramírez',
    role: 'Asistente frecuente a conciertos',
    content: 'Boletería ha transformado la forma en que compro entradas para conciertos. La plataforma es súper intuitiva y me permite elegir exactamente el asiento que quiero.',
    avatar: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'María Sánchez',
    role: 'Viajera frecuente',
    content: 'Me encanta poder comprar todos mis boletos de transporte en un solo lugar. La visualización de asientos en los buses es genial, y los precios son muy competitivos.',
    avatar: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'José Gutiérrez',
    role: 'Fanático del teatro',
    content: 'Como amante del teatro, aprecio el detalle con el que puedo ver la distribución de asientos. La experiencia de compra es rápida y segura.',
    avatar: '/images/testimonial-3.jpg',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
            Lo que dicen nuestros usuarios
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experiencias reales de nuestra comunidad
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden h-64">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  index === activeIndex 
                    ? 'translate-x-0 opacity-100' 
                    : index < activeIndex 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                }`}
              >
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/4 flex flex-col items-center text-center mb-6 md:mb-0">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 ring-2 ring-offset-2 ring-secondary">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                  
                  <div className="md:w-3/4 md:pl-8 md:border-l md:border-gray-200">
                    <div className="relative">
                      <svg 
                        className="absolute -top-3 -left-3 h-8 w-8 text-secondary opacity-20" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-secondary' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;