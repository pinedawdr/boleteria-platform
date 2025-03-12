"use client";

// user-platform/src/components/sections/AppDownloadSection.tsx
import Button from '../ui/Button';

const AppDownloadSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl font-montserrat font-bold mb-4">
              Descarga nuestra aplicación móvil
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Lleva tus boletos contigo siempre. Compra, gestiona y accede a tus entradas y pasajes desde tu smartphone. ¡Disponible para iOS y Android!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                className="flex items-center justify-center"
                onClick={() => window.open('https://apps.apple.com')}
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </Button>
              <Button 
                variant="secondary" 
                className="flex items-center justify-center"
                onClick={() => window.open('https://play.google.com')}
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 20.83c.11.34.36.67.71.91l8.95-8.95-8.97-8.97c-.36.27-.61.61-.71.95L3.18 20.83zM12 4.36l8.97 8.99-8.97 8.97V4.36zM5.56 3.2C6.59 2.7 7.97 3 9 3.7l1.9 1.9-8.1 8.11L5.56 3.2zM9 20.3c-1.03.7-2.41 1-3.44.5l2.76-10.51 8.1 8.11L9 20.3z" />
                </svg>
                Google Play
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-96">
              <div className="absolute inset-0 bg-primary rounded-3xl -rotate-6 shadow-xl"></div>
              <div className="absolute inset-0 bg-white rounded-3xl rotate-3 shadow-lg overflow-hidden">
                <img
                  src="/images/app-screenshot.jpg"
                  alt="Aplicación Boletería"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;