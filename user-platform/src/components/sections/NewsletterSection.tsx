"use client";

// user-platform/src/components/sections/NewsletterSection.tsx
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
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-4">
            Mantente informado
          </h2>
          <p className="mb-8">
            Suscríbete a nuestro boletín y recibe las últimas noticias sobre eventos, promociones exclusivas y descuentos.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white/20 rounded-lg p-4">
              <p className="font-medium">¡Gracias por suscribirte! Pronto recibirás nuestras novedades.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-dark"
              />
              <Button variant="primary" className="bg-primary hover:bg-primary/90" type="submit">
                Suscribirse
              </Button>
            </form>
          )}
          
          <p className="mt-4 text-sm text-white/70">
            Respetamos tu privacidad. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;