// src/components/sections/TestimonialsSection.tsx
"use client";

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Ramírez',
    role: 'Asistente frecuente a conciertos',
    content: 'Boletería ha transformado la forma en que compro entradas para conciertos. La plataforma es súper intuitiva y me permite elegir exactamente el asiento que quiero. ¡Ya no más sorpresas al llegar al evento!',
    avatar: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'María Sánchez',
    role: 'Viajera frecuente',
    content: 'Me encanta poder comprar todos mis boletos de transporte en un solo lugar. La visualización de asientos en los buses es genial, y los precios son muy competitivos. ¡Ya no uso otra plataforma!',
    avatar: '/images/testimonial-2.jpg',
  },
  {
    id: 3,
    name: 'José Gutiérrez',
    role: 'Fanático del teatro',
    content: 'Como amante del teatro, aprecio el detalle con el que puedo ver la distribución de asientos. La experiencia de compra es rápida y segura. Definitivamente recomendaría Boletería a todos mis amigos.',
    avatar: '/images/testimonial-3.jpg',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos esforzamos por brindar la mejor experiencia a nuestros usuarios. Esto es lo que opinan de nosotros.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 md:p-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-100 shadow-sm">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <svg className="h-8 w-8 text-gray-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <blockquote className="text-lg italic mb-4 text-gray-700">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="font-display font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'bg-secondary w-8' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;