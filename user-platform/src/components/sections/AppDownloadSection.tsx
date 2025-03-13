"use client";

// src/components/sections/AppDownloadSection.tsx
import Image from 'next/image';

const AppDownloadSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-4">
            Descarga nuestra aplicación móvil
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Lleva tus boletos contigo siempre. Compra, gestiona y accede a tus entradas y pasajes desde tu smartphone.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              <img 
                src="https://www.svgrepo.com/show/452159/app-store.svg" 
                alt="App Store" 
                className="h-6 w-6 mr-3"
              />
              <div className="flex flex-col items-start">
                <span className="text-xs font-light">Descargar en</span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </a>
            
            <a 
              href="https://play.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors"
            >
              <img 
                src="https://www.svgrepo.com/show/452223/google-play.svg" 
                alt="Google Play" 
                className="h-6 w-6 mr-3"
              />
              <div className="flex flex-col items-start">
                <span className="text-xs font-light">Disponible en</span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;