"use client";

// user-platform/src/app/transport/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import TransportSeatMap from '@/components/maps/TransportSeatMap';

// Datos simulados para un servicio de transporte
const transportData = {
  id: '1',
  title: 'Lima - Cusco VIP',
  company: 'Cruz del Sur',
  type: 'bus',
  departure: {
    city: 'Lima',
    terminal: 'Terminal Javier Prado',
    address: 'Av. Javier Prado Este 1155, La Victoria',
    time: '22:00',
    date: 'Diario',
  },
  arrival: {
    city: 'Cusco',
    terminal: 'Terminal Terrestre Cusco',
    address: 'Av. Velasco Astete s/n, Wanchaq',
    time: '19:00',
    date: 'Día siguiente',
  },
  duration: '21 horas',
  distance: '1,105 km',
  mainImage: '/images/lima-cusco.jpg',
  gallery: [
    '/images/bus-gallery-1.jpg',
    '/images/bus-gallery-2.jpg',
    '/images/bus-gallery-3.jpg',
  ],
  description: `
    <p>Disfruta del viaje más cómodo de Lima a Cusco en nuestros buses VIP con asientos 180° tipo cama. Nuestro servicio incluye:</p>
    <ul>
      <li>Asientos totalmente reclinables con amplio espacio para las piernas</li>
      <li>Manta y almohada</li>
      <li>Sistema de entretenimiento personal</li>
      <li>WiFi a bordo (sujeto a cobertura)</li>
      <li>Cena y desayuno incluidos</li>
      <li>Baño a bordo</li>
      <li>Atención personalizada</li>
    </ul>
  `,
  services: [
    {
      name: 'VIP (180°)',
      description: 'Asientos totalmente reclinables con máximo confort',
      price: 280,
      features: ['Comidas incluidas', 'Entretenimiento personal', 'Kit de viaje']
    },
    {
      name: 'Ejecutivo (160°)',
      description: 'Asientos con amplia reclinación y comodidad',
      price: 180,
      features: ['Snack incluido', 'Entretenimiento personal']
    },
    {
      name: 'Económico',
      description: 'Asientos estándar con buen confort',
      price: 120,
      features: ['Bebida incluida']
    }
  ],
  faqs: [
    {
      question: '¿Cuánto equipaje puedo llevar?',
      answer: 'Puedes llevar una maleta de hasta 20kg en bodega y un equipaje de mano de hasta 5kg.'
    },
    {
      question: '¿Qué documentos necesito para viajar?',
      answer: 'DNI o pasaporte vigente. Menores de edad deben viajar con autorización si no van acompañados de ambos padres.'
    },
    {
      question: '¿Puedo cambiar mi fecha de viaje?',
      answer: 'Sí, puedes cambiar tu fecha hasta 24 horas antes de la salida con un cargo adicional de S/20.'
    },
    {
      question: '¿El bus hace paradas durante el viaje?',
      answer: 'El bus realiza 2-3 paradas técnicas durante el viaje para descanso del conductor y pasajeros.'
    }
  ]
};

export default function TransportDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'info' | 'seats'>('info');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // En un entorno real, aquí se cargarían los datos del transporte basados en el ID
  
  return (
    <main>
      <NavBar />
      
      {/* Hero del transporte */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src={transportData.mainImage}
            alt={transportData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 bg-secondary text-white text-sm rounded mb-3">
                Transporte Terrestre
              </span>
              <h1 className="text-4xl md:text-5xl text-white font-montserrat font-bold mb-4">
                {transportData.title}
              </h1>
              <div className="flex flex-wrap gap-y-2 text-white/90">
                <div className="flex items-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {transportData.departure.date}
                </div>
                <div className="flex items-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {transportData.departure.time}
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-4 4h1m-1 4h1m4-4h1m-1 4h1" />
                  </svg>
                  {transportData.company}
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
                    activeTab === 'seats'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('seats')}
                >
                  Seleccionar Asientos
                </button>
              </div>
            </div>
            
            {/* Contenido de tabs */}
            {activeTab === 'info' ? (
              <div>
                {/* Información de ruta */}
                <section className="mb-10">
                  <h2 className="text-2xl font-montserrat font-bold mb-6">Detalles del viaje</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="relative">
                      <div className="flex">
                        <div className="w-12 flex-shrink-0">
                          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold mb-1">Salida de {transportData.departure.city}</h3>
                          <p className="text-gray-600 mb-1">{transportData.departure.terminal}</p>
                          <p className="text-gray-500 text-sm">{transportData.departure.address}</p>
                          <div className="flex items-center mt-2 text-primary font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {transportData.departure.time} - {transportData.departure.date}
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300"></div>
                      <div className="flex mt-8">
                        <div className="w-12 flex-shrink-0">
                          <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold mb-1">Llegada a {transportData.arrival.city}</h3>
                          <p className="text-gray-600 mb-1">{transportData.arrival.terminal}</p>
                          <p className="text-gray-500 text-sm">{transportData.arrival.address}</p>
                          <div className="flex items-center mt-2 text-secondary font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {transportData.arrival.time} - {transportData.arrival.date}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t mt-8 pt-6 flex justify-between">
                      <div>
                        <div className="text-sm text-gray-500">Duración</div>
                        <div className="font-semibold">{transportData.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Distancia</div>
                        <div className="font-semibold">{transportData.distance}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Compañía</div>
                        <div className="font-semibold">{transportData.company}</div>
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* Descripción */}
                <section className="mb-10">
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Sobre el servicio</h2>
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: transportData.description }} />
                </section>
                
                {/* Galería */}
                <section className="mb-10">
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Galería</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {transportData.gallery.map((image, index) => (
                      <div 
                        key={index}
                        className="relative aspect-video cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                        onClick={() => setGalleryIndex(index)}
                      >
                        <img 
                          src={image} 
                          alt={`Imagen ${index + 1} de ${transportData.title}`} 
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </section>
                
                {/* Servicios */}
                <section className="mb-10">
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Tipos de Servicio</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {transportData.services.map((service, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="bg-primary text-white py-3 px-4">
                          <h3 className="font-semibold">{service.name}</h3>
                        </div>
                        <div className="p-4">
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <div className="mb-4">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="text-center">
                            <span className="text-primary font-bold text-xl">S/{service.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                
                {/* Preguntas frecuentes */}
                <section className="mb-10">
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Preguntas frecuentes</h2>
                  <div className="space-y-3">
                    {transportData.faqs.map((faq, index) => (
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
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-montserrat font-bold mb-4">Selecciona tus asientos</h2>
                <p className="mb-6 text-gray-600">
                  Haz clic en los asientos que deseas reservar. Solo se muestran los asientos disponibles para el viaje seleccionado.
                </p>
                
                {/* Componente de selección de asientos para transporte */}
                <TransportSeatMap 
                  transportId={id as string} 
                  transportType={transportData.type as 'bus' | 'boat' | 'train'}
                />
              </div>
            )}
          </div>
          
          {/* Columna lateral */}
          <div className="lg:w-1/3">
            <div className="bg-white border rounded-lg shadow-sm sticky top-20">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Resumen</h3>
                
                {/* Itinerario */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Itinerario</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Origen:</span>
                      <span className="font-medium">{transportData.departure.city}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Destino:</span>
                      <span className="font-medium">{transportData.arrival.city}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Fecha:</span>
                      <span className="font-medium">{transportData.departure.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Hora:</span>
                      <span className="font-medium">{transportData.departure.time}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Compañía:</span>
                      <span className="font-medium">{transportData.company}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duración:</span>
                      <span className="font-medium">{transportData.duration}</span>
                    </div>
                  </div>
                </div>
                
                {/* Precios disponibles */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Precios disponibles</h4>
                  <div className="space-y-2">
                    {transportData.services.map((service, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{service.name}</span>
                        <span className="font-semibold">S/{service.price}</span>
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
                    <p className="text-gray-600">Política de cancelación: Reembolso del 90% hasta 24 horas antes del viaje.</p>
                  </div>
                </div>
                
                {/* Botones de acción */}
                <div className="space-y-3">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    onClick={() => setActiveTab('seats')}
                  >
                    Seleccionar Asientos
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    fullWidth
                    onClick={() => {}}
                  >
                    Compartir Ruta
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