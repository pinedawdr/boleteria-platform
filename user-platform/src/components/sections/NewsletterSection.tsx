// src/components/sections/NewsletterSection.tsx
"use client";

import { useState } from 'react';
import Button from '../ui/Button';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el email a una API
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-secondary via-indigo-600 to-purple-600 py-16 px-8 md:px-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                ¿Listo para descubrir experiencias únicas?
              </h2>
              <p className="mb-8 text-white/90 text-lg">
                Únete a nuestra comunidad y recibe las mejores ofertas en eventos y transporte directamente en tu correo.
              </p>
              
              {isSubmitted ? (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
                  <p className="font-medium text-white">¡Gracias por suscribirte! Pronto recibirás nuestras novedades.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    required
                    className="flex-grow px-4 py-3 rounded-l-md sm:rounded-r-none focus:outline-none text-gray-900 border-0"
                  />
                  <Button 
                    variant="accent" 
                    className="mt-2 sm:mt-0 rounded-r-md sm:rounded-l-none"
                    type="submit"
                  >
                    Suscribirse
                  </Button>
                </form>
              )}
              
              <p className="mt-4 text-xs text-white/70">
                Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;