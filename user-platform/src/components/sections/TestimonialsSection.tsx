"use client";

// user-platform/src/components/sections/TestimonialsSection.tsx
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
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
          Lo que dicen nuestros usuarios
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <blockquote className="text-xl italic mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-primary-200">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-white' : 'bg-white/40'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;