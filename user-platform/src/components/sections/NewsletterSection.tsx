// src/components/sections/NewsletterSection.tsx
"use client";

import { useState } from 'react';

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
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-sm mx-auto">
                  <p className="font-medium text-white">¡Gracias por suscribirte! Pronto recibirás nuestras novedades.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col max-w-sm mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    required
                    className="w-full px-4 py-2 h-10 text-sm rounded-md focus:outline-none text-gray-900 mb-3"
                  />
                  <button 
                    type="submit"
                    className="w-full h-10 px-4 py-0 rounded-md bg-white text-secondary text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    Suscribirse
                  </button>
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