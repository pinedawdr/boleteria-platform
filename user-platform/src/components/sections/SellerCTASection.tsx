// src/components/sections/SellerCTASection.tsx
"use client";

import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const SellerCTASection = () => {
  const router = useRouter();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-secondary to-purple-600 py-16 px-8 md:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-8 md:mb-0 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    ¿Buscas vender tus entradas?
                  </h2>
                  <p className="text-white/90 text-lg max-w-xl">
                    Únete a nuestra plataforma y conecta con miles de asistentes a eventos y viajeros en todo el Perú.
                  </p>
                </div>
                <div>
                  <Button 
                    variant="accent" 
                    size="lg"
                    className="shadow-lg"
                    onClick={() => router.push('/seller-application')}
                  >
                    Solicitar información
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerCTASection;