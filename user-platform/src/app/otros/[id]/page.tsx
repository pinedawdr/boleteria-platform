"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import SeatMap from '@/components/maps/SeatMap';

// Datos simulados para un evento
const eventData = {
  id: '1',
  title: 'Expo Gastronomía',
  date: '20-22 de mayo de 2023',
  time: '10:00 - 20:00',
  location: 'Parque de la Exposición',
  address: 'Paseo Colón s/n, Lima',
  mainImage: '/images/expo-gastronomia.jpg',
  gallery: [
    '/images/raices-gallery-1.jpg',
    '/images/raices-gallery-2.jpg',
    '/images/raices-gallery-3.jpg',
  ],
  description: `
    <p>La Expo Gastronomía es el evento culinario más grande de Lima, donde los mejores chefs y restaurantes del país se reúnen para compartir sus creaciones.</p>
    <p>Durante tres días, podrás disfrutar de degustaciones, talleres culinarios, concursos gastronómicos y mucho más en un ambiente festivo para toda la familia.</p>
  `,
  participants: [
    {
      name: 'Restaurante La Mar',
      image: '/images/artist-1.jpg',
      description: 'Especialistas en comida marina con innovadoras preparaciones.'
    },
    {
      name: 'Pastelería San Antonio',
      image: '/images/artist-2.jpg',
      description: 'Reconocidos por sus exquisitos postres y panadería artesanal.'
    },
    {
      name: 'Central',
      image: '/images/artist-3.jpg',
      description: 'Uno de los mejores restaurantes del mundo, con propuestas de alta cocina peruana.'
    }
  ],
  ticketTypes: [
    { name: 'Entrada General', price: 35 },
    { name: 'Entrada VIP', price: 50 },
    { name: 'Pase por 3 días', price: 80 }
  ],
  faqs: [
    {
      question: '¿Cuál es el horario del evento?',
      answer: 'El evento estará abierto de 10:00 a 20:00 horas durante los tres días.'
    },
    {
      question: '¿Se puede ingresar con niños?',
      answer: 'Sí, es un evento para toda la familia. Los niños menores de 8 años no pagan entrada.'
    },
    {
      question: '¿Habrá estacionamiento?',
      answer: 'Sí, el parque cuenta con estacionamiento público, aunque recomendamos usar transporte público debido a la alta afluencia.'
    },
    {
      question: '¿Las degustaciones están incluidas en el precio de la entrada?',
      answer: 'La entrada incluye algunas degustaciones gratuitas. Dentro del evento habrá opciones adicionales de compra.'
    }
  ]
};

export default function OtrosDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'info' | 'tickets'>('info');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedTicketType, setSelectedTicketType] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  
  // En un entorno real, aquí se cargarían los datos del evento basados en el ID
  
  const handleIncrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
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
                Gastronomía
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
                    activeTab === 'tickets'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('tickets')}
                >
                  Comprar Entradas
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
                
                {/* Participantes */}
                <section className="mb-10">
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Participantes destacados</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventData.participants.map((participant, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img 
                          src={participant.image} 
                          alt={participant.name} 
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{participant.name}</h3>
                          <p className="text-gray-600 text-sm">{participant.description}</p>
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
                <h2 className="text-2xl font-montserrat font-bold mb-4">Comprar Entradas</h2>
                <p className="mb-6 text-gray-600">
                  Selecciona el tipo de entrada y la cantidad que deseas comprar para este evento.
                </p>
                
                {/* Selección de entradas */}
                <div className="space-y-4 mb-8">
                  {eventData.ticketTypes.map((ticket, index) => (
                    <div 
                      key={index}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedTicketType === index ? 'border-secondary bg-secondary/5' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedTicketType(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{ticket.name}</h3>
                          <p className="text-sm text-gray-600">Válido para {eventData.date}</p>
                        </div>
                        <div className="text-secondary font-bold">S/{ticket.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {selectedTicketType !== null && (
                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h3 className="font-semibold mb-4">Resumen de tu compra</h3>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="font-medium">{eventData.ticketTypes[selectedTicketType].name}</p>
                        <p className="text-sm text-gray-600">Precio unitario: S/{eventData.ticketTypes[selectedTicketType].price}</p>
                      </div>
                      <div className="flex items-center border rounded-md">
                        <button 
                          className="px-3 py-1 border-r" 
                          onClick={handleDecrementQuantity}
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <span className="px-4 py-1">{quantity}</span>
                        <button 
                          className="px-3 py-1 border-l" 
                          onClick={handleIncrementQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="border-t pt-4 flex justify-between items-center">
                      <span className="font-medium">Total a pagar:</span>
                      <span className="text-xl font-bold text-secondary">
                        S/{(eventData.ticketTypes[selectedTicketType].price * quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="mt-6">
                      <Button variant="primary" fullWidth>
                        Proceder al pago
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Columna lateral */}
          <div className="lg:w-1/3">
            <div className="bg-white border rounded-lg shadow-sm sticky top-20">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Información del evento</h3>
                
                {/* Detalles del evento */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Fechas</p>
                      <p className="text-gray-600">{eventData.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Horario</p>
                      <p className="text-gray-600">{eventData.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Ubicación</p>
                      <p className="text-gray-600">{eventData.location}</p>
                      <p className="text-gray-600">{eventData.address}</p>
                    </div>
                  </div>
                </div>
                
                {/* Precios */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Precios de entradas</h4>
                  <div className="space-y-2">
                    {eventData.ticketTypes.map((ticket, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{ticket.name}</span>
                        <span className="font-semibold">S/{ticket.price}</span>
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
                    <p className="text-gray-600">Entradas digitales enviadas a tu correo electrónico.</p>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600">Política de cancelación: Reembolso del 100% hasta 72 horas antes del evento.</p>
                  </div>
                </div>
                
                {/* Botones de acción */}
                <div className="space-y-3">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    onClick={() => setActiveTab('tickets')}
                  >
                    Comprar Entradas
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