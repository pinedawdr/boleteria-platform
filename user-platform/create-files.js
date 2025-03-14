// create-structure.js
const fs = require('fs');
const path = require('path');

// Códigos para los archivos
const categoryPageTemplate = `"use client";

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Card, { CardImage, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

// Eventos de ejemplo para la categoría
const categoryEvents = [
  {
    id: 1,
    title: 'Evento de [CATEGORY]',
    image: '/images/clasico-futbol.jpg',
    date: '25 de marzo de 2025',
    location: 'Ubicación del evento',
    price: 'S/30 - S/180',
    category: '[CATEGORY]',
  },
  {
    id: 2,
    title: 'Otro evento de [CATEGORY]',
    image: '/images/voley.jpg',
    date: '15 de abril de 2025',
    location: 'Otra ubicación',
    price: 'S/25 - S/100',
    category: '[CATEGORY]',
  },
  {
    id: 3,
    title: 'Evento especial de [CATEGORY]',
    image: '/images/boxeo.jpg',
    date: '30 de marzo de 2025',
    location: 'Ubicación especial',
    price: 'S/40 - S/200',
    category: '[CATEGORY]',
  },
  {
    id: 4,
    title: 'Gran evento de [CATEGORY]',
    image: '/images/maraton.jpg',
    date: '7 de mayo de 2025',
    location: 'Gran ubicación',
    price: 'S/60',
    category: '[CATEGORY]',
  },
];

export default function CategoryPage() {
  const router = useRouter();
  const [filter, setFilter] = useState('todos');
  
  return (
    <main>
      <NavBar />
      
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-montserrat font-bold mb-8 text-center">
            Eventos de [CATEGORY]
          </h1>
          
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={\`px-4 py-2 text-sm font-medium rounded-l-lg \${
                  filter === 'todos'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-gray-200\`}
                onClick={() => setFilter('todos')}
              >
                Todos
              </button>
              <button
                type="button"
                className={\`px-4 py-2 text-sm font-medium \${
                  filter === 'populares'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border-t border-b border-gray-200\`}
                onClick={() => setFilter('populares')}
              >
                Populares
              </button>
              <button
                type="button"
                className={\`px-4 py-2 text-sm font-medium rounded-r-lg \${
                  filter === 'nuevos'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-gray-200\`}
                onClick={() => setFilter('nuevos')}
              >
                Nuevos
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryEvents.map((event) => (
              <Card 
                key={event.id} 
                hoverable
                onClick={() => router.push(\`/[CATEGORY_PATH]/\${event.id}\`)}
                className="group"
              >
                <div className="relative">
                  <CardImage 
                    src={event.image} 
                    alt={event.title} 
                    aspectRatio="video"
                  />
                  <span className="absolute top-3 left-3 bg-secondary/90 text-white px-2 py-1 text-xs rounded-md backdrop-blur-sm">
                    {event.category}
                  </span>
                </div>
                <CardContent>
                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div className="text-secondary font-semibold">{event.price}</div>
                    <Button variant="primary" size="sm">
                      Comprar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}`;

const detailPageTemplate = `"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import SeatMap from '@/components/maps/SeatMap';

// Datos simulados para un evento
const eventData = {
  id: '1',
  title: 'Evento de [CATEGORY]',
  date: '15 de abril de 2025',
  time: '19:00',
  location: 'Estadio Nacional',
  address: 'Av. José Díaz s/n, Lima',
  mainImage: '/images/raices-andinas.jpg',
  gallery: [
    '/images/raices-gallery-1.jpg',
    '/images/raices-gallery-2.jpg',
    '/images/raices-gallery-3.jpg',
  ],
  description: \`
    <p>Este es un evento de [CATEGORY]. Prepárate para vivir una experiencia única con lo mejor de [CATEGORY] en un escenario de primer nivel.</p>
    <p>Disfruta con la familia y amigos de un ambiente seguro y cómodo, con zonas gastronómicas, áreas de descanso y servicios para todos los asistentes.</p>
  \`,
  artists: [
    {
      name: 'Artista 1',
      image: '/images/artist-1.jpg',
      description: 'Reconocidos por sus interpretaciones y actuaciones.'
    },
    {
      name: 'Artista 2',
      image: '/images/artist-2.jpg',
      description: 'Artista con más de 20 años de trayectoria.'
    },
    {
      name: 'Artista 3',
      image: '/images/artist-3.jpg',
      description: 'La voz más importante de la actualidad.'
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
                [CATEGORY]
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
                  className={\`px-6 py-3 font-medium text-sm \${
                    activeTab === 'info'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }\`}
                  onClick={() => setActiveTab('info')}
                >
                  Información
                </button>
                <button
                  className={\`px-6 py-3 font-medium text-sm \${
                    activeTab === 'map'
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }\`}
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
                          alt={\`Imagen \${index + 1} de \${eventData.title}\`} 
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
                            className={\`h-5 w-5 transition-transform \${expandedFaq === index ? 'transform rotate-180' : ''}\`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div 
                          className={\`px-4 pb-4 \${expandedFaq === index ? 'block' : 'hidden'}\`}
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
}`;

// Crear directorios y archivos
const createStructure = () => {
  const projectRoot = process.cwd();
  const basePath = path.join(projectRoot, 'src/app');
  
  // Categorías
  const categories = [
    { path: 'conciertos', title: 'Conciertos' },
    { path: 'deportes', title: 'Deportes' },
    { path: 'teatro', title: 'Teatro' },
    { path: 'entretenimiento', title: 'Entretenimiento' },
    { path: 'otros', title: 'Otros' },
    { path: 'transporte', title: 'Transporte' }
  ];
  
  categories.forEach(category => {
    try {
      // 1. Crear directorio de categoría
      const categoryPath = path.join(basePath, category.path);
      if (!fs.existsSync(categoryPath)) {
        fs.mkdirSync(categoryPath, { recursive: true });
        console.log(`✓ Creado directorio: ${categoryPath}`);
      }
      
      // 2. Crear archivo page.tsx en la carpeta de categoría
      const categoryPagePath = path.join(categoryPath, 'page.tsx');
      if (!fs.existsSync(categoryPagePath)) {
        const content = categoryPageTemplate
          .replace(/\[CATEGORY\]/g, category.title)
          .replace(/\[CATEGORY_PATH\]/g, category.path);
        fs.writeFileSync(categoryPagePath, content);
        console.log(`✓ Creado archivo: ${categoryPagePath}`);
      } else {
        console.log(`⚠ El archivo ya existe: ${categoryPagePath}`);
      }
      
      // 3. Crear carpeta [id] dentro de la carpeta de categoría
      const idFolderPath = path.join(categoryPath, '[id]');
      if (!fs.existsSync(idFolderPath)) {
        fs.mkdirSync(idFolderPath, { recursive: true });
        console.log(`✓ Creado directorio: ${idFolderPath}`);
      }
      
      // 4. Crear archivo page.tsx dentro de la carpeta [id]
      const detailPagePath = path.join(idFolderPath, 'page.tsx');
      if (!fs.existsSync(detailPagePath)) {
        const content = detailPageTemplate
          .replace(/\[CATEGORY\]/g, category.title);
        fs.writeFileSync(detailPagePath, content);
        console.log(`✓ Creado archivo: ${detailPagePath}`);
      } else {
        console.log(`⚠ El archivo ya existe: ${detailPagePath}`);
      }
    } catch (error) {
      console.error(`❌ Error al procesar la categoría ${category.path}:`, error);
    }
  });
  
  console.log('\n✅ Estructura de archivos creada correctamente.');
  console.log('Ahora puedes editar los archivos según tus necesidades.');
};

// Ejecutar el script
createStructure();