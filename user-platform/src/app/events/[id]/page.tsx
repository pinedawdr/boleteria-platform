"use client";

// user-platform/src/app/events/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import SeatMap from '@/components/maps/SeatMap';

// Datos simulados para un evento
const eventData = {
  id: '1',
  title: 'Raíces Andinas Fest',
  date: '15 de abril de 2023',
  time: '19:00',
  location: 'Estadio Nacional',
  address: 'Av. José Díaz s/n, Lima',
  mainImage: '/images/raices-andinas.jpg',
  gallery: [
    '/images/raices-gallery-1.jpg',
    '/images/raices-gallery-2.jpg',
    '/images/raices-gallery-3.jpg',
  ],
  description: `
    <p>Prepárate para vivir una experiencia única con lo mejor de la música andina contemporánea. El festival "Raíces Andinas" reúne a los más importantes exponentes de este género en un escenario de primer nivel.</p>
    <p>Disfruta con la familia y amigos de un ambiente seguro y cómodo, con zonas gastronómicas, áreas de descanso y servicios para todos los asistentes.</p>
  `,
  artists: [
    {
      name: 'Grupo Antología',
      image: '/images/artist-1.jpg',
      description: 'Reconocidos por sus interpretaciones de huaynos y música andina fusión.'
    },
    {
      name: 'William Luna',
      image: '/images/artist-2.jpg',
      description: 'Cantautor cusqueño con más de 20 años de trayectoria.'
    },
    {
      name: 'Damaris',
      image: '/images/artist-3.jpg',
      description: 'La voz femenina más importante del folklore andino actual.'
    }
  ],
  zones: [
    { name: 'VIP', price: 350 },
    { name: 'Preferencial', price: 180 },
    { name: 'General', price: 80 }
  ],
  faqs: [
    {
      question: '¿A qué hora abren las puertas?',
      answer: 'Las puertas se abrirán 2 horas antes del inicio del evento.'
    },
    {
      question: '¿Hay estacionamiento?',
      answer: 'Sí, el estadio cuenta con estacionamiento con un costo adicional.'
    },
    {
      question: '¿Se permite el ingreso de alimentos y bebidas?',
      answer: 'No está permitido el ingreso de alimentos ni bebidas. Habrá puestos de venta dentro del recinto.'
    },
    {
      question: '¿Hay límite de edad para ingresar?',
      answer: 'El evento es para todo público. Menores de 14 años deben ingresar acompañados de un adulto.'
    }
  ]
};

export default function EventDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'info' | 'map'>('info');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // En un entorno real, aquí se cargarían los datos del evento basados en el ID
  
  return (
    <main>
      <NavBar />
      
      {/* Hero del evento */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src={eventData.mainImage}
            alt={eventData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-secondary text-white text-sm rounded mb-3">
                Concierto
              </span>
              <h1 className="text-4xl md:text-5xl text-white font-montserrat font-bold mb-4">
                {eventData.title}
              </h1>
              <div className="flex flex-wrap gap-y-2 text-white/90">
                <div className="flex items-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {eventData.date}
                </div>
                <div className="flex items-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {eventData.time}
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {eventData.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna principal */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="mb-8 border-b">
              <div className="flex">
                <button
                  className={`px-6 py-3 font-medium text-sm ${
                    activeTab === 'info'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('info')}
                >
                  Información
                </button>
                <button
                  className={`px-6 py-3 font-medium text-sm ${
                    activeTab === 'map'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('map')}
                >
                  Seleccionar Asientos
                </button>
              </div>
            </div>
            
            {/* Contenido de tabs */}
            {activeTab === 'info' ? (
              <div>
                {/* Descripción */}
                <section className="mb-10">
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Sobre el evento</h2>
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: eventData.description }} />
                </section>
                
                {/* Galería */}
                <section className="mb-10">
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Galería</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {eventData.gallery.map((image, index) => (
                      <div 
                        key={index}
                        className="relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                        onClick={() => setGalleryIndex(index)}
                      >
                        <img 
                          src={image} 
                          alt={`Imagen ${index + 1} de ${eventData.title}`} 
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </section>
                
                {/* Artistas */}
                <section className="mb-10">
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Artistas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventData.artists.map((artist, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                          src={artist.image} 
                          alt={artist.name} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{artist.name}</h3>
                          <p className="text-gray-600 text-sm">{artist.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                
                {/* Preguntas frecuentes */}
                <section className="mb-10">
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Preguntas frecuentes</h2>
                  <div className="space-y-3">
                    {eventData.faqs.map((faq, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <button
                          className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        >
                          <span>{faq.question}</span>
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-5 w-5 transition-transform ${expandedFaq === index ? 'transform rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div 
                          className={`px-4 pb-4 ${expandedFaq === index ? 'block' : 'hidden'}`}
                        >
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                
                {/* Ubicación */}
                <section>
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Ubicación</h2>
                  <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                    <div className="text-center px-4">
                      <p className="mb-4 text-gray-600">{eventData.address}</p>
                      <p className="text-sm text-gray-500">Mapa interactivo (Google Maps)</p>
                    </div>
                  </div>
                </section>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-montserrat font-bold mb-4">Selecciona tus asientos</h2>
                <p className="mb-6 text-gray-600">
                  Haz clic en los asientos que deseas reservar. Puedes ver la distribución del escenario y las diferentes zonas disponibles.
                </p>
                
                {/* Componente de selección de asientos */}
                <SeatMap eventId={id as string} />
              </div>
            )}
          </div>
          
          {/* Columna lateral */}
          <div className="lg:w-1/3">
            <div className="bg-white border rounded-lg shadow-sm sticky top-20">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Resumen</h3>
                
                {/* Zonas disponibles */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Zonas disponibles</h4>
                  <div className="space-y-2">
                    {eventData.zones.map((zone, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{zone.name}</span>
                        <span className="font-semibold">S/{zone.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Información adicional */}
                <div className="mb-6 space-y-2 text-sm">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Boletos emitidos digitalmente. Se enviarán a tu correo electrónico.</p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Política de cancelación: Reembolso del 80% hasta 7 días antes del evento.</p>
                  </div>
                </div>
                
                {/* Botones de acción */}
                <div className="space-y-3">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    onClick={() => setActiveTab('map')}
                  >
                    Seleccionar Asientos
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    fullWidth
                    onClick={() => {}}
                  >
                    Compartir Evento
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}