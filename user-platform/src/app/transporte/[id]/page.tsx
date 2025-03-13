"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import TransportSeatMap from '@/components/maps/TransportSeatMap';

// Datos simulados para diferentes servicios de transporte
const transportServices = {
  'bus': {
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
    ],
    seatLayout: {
      type: 'bus',
      floors: 2,
      rows: 12,
      seatsPerRow: 4,
      aisleAfterSeat: 2, // Pasillo después del asiento 2
      specialFeatures: [
        { type: 'driver', row: 0, position: 0 }, // Posición del conductor
        { type: 'entrance', row: 0, position: 3 }, // Entrada
        { type: 'bathroom', row: 11, position: 3 }, // Baño
        { type: 'stairs', row: 5, positions: [1, 2] }, // Escaleras entre pisos
      ]
    }
  },
  'boat': {
    id: '2',
    title: 'Puno - Islas Uros Premium',
    company: 'Titicaca Explorer',
    type: 'boat',
    departure: {
      city: 'Puno',
      terminal: 'Muelle Turístico',
      address: 'Bahía de Puno, Lago Titicaca',
      time: '08:00',
      date: 'Diario',
    },
    arrival: {
      city: 'Islas Uros',
      terminal: 'Muelle principal Uros',
      address: 'Islas flotantes de los Uros, Lago Titicaca',
      time: '09:00',
      date: 'Mismo día',
    },
    duration: '1 hora',
    distance: '6 km',
    mainImage: '/images/puno-uros.jpg',
    gallery: [
      '/images/boat-gallery-1.jpg',
      '/images/boat-gallery-2.jpg',
      '/images/boat-gallery-3.jpg',
    ],
    description: `
      <p>Disfruta de un cómodo viaje en nuestras embarcaciones Premium hacia las fascinantes Islas flotantes de los Uros. Nuestro servicio incluye:</p>
      <ul>
        <li>Embarcación con capacidad limitada para mayor comodidad</li>
        <li>Asientos acolchados y cubierta panorámica</li>
        <li>Guía turístico bilingüe</li>
        <li>Bebida de bienvenida</li>
        <li>Seguro de viaje</li>
      </ul>
    `,
    services: [
      {
        name: 'Premium',
        description: 'Servicio completo con las mejores vistas',
        price: 85,
        features: ['Asientos en cubierta superior', 'Guía bilingüe exclusivo', 'Bebidas ilimitadas']
      },
      {
        name: 'Estándar',
        description: 'Servicio confortable a precio accesible',
        price: 60,
        features: ['Asientos en cubierta principal', 'Guía bilingüe', 'Una bebida incluida']
      }
    ],
    faqs: [
      {
        question: '¿Es seguro el viaje en barco?',
        answer: 'Sí, todas nuestras embarcaciones cuentan con certificados de seguridad y chalecos salvavidas para todos los pasajeros.'
      },
      {
        question: '¿Puedo llevar equipaje?',
        answer: 'Se permite llevar equipaje de mano y una mochila pequeña. Para equipaje mayor, ofrecemos servicio de consigna en nuestro muelle.'
      },
      {
        question: '¿Qué ocurre en caso de mal clima?',
        answer: 'En caso de condiciones climáticas adversas, el viaje puede retrasarse o reprogramarse sin costo adicional.'
      }
    ],
    seatLayout: {
      type: 'boat',
      decks: 2,
      rows: 6,
      seatsPerRow: 6,
      aisleAfterSeat: 3, // Pasillo central
      specialFeatures: [
        { type: 'captain', row: 0, positions: [2, 3] }, // Posición del capitán
        { type: 'entrance', row: 3, positions: [0, 5] }, // Entradas laterales
        { type: 'stairs', row: 2, positions: [2, 3] }, // Escaleras entre cubiertas
      ]
    }
  },
  'train': {
    id: '3',
    title: 'Ollantaytambo - Aguas Calientes',
    company: 'Peru Rail',
    type: 'train',
    departure: {
      city: 'Ollantaytambo',
      terminal: 'Estación Ollantaytambo',
      address: 'Av. Ferrocarril s/n, Ollantaytambo',
      time: '06:10',
      date: 'Diario',
    },
    arrival: {
      city: 'Aguas Calientes',
      terminal: 'Estación Machu Picchu',
      address: 'Plaza Manco Capac s/n, Aguas Calientes',
      time: '07:40',
      date: 'Mismo día',
    },
    duration: '1 hora 30 minutos',
    distance: '43 km',
    mainImage: '/images/tren-machu-picchu.jpg',
    gallery: [
      '/images/train-gallery-1.jpg',
      '/images/train-gallery-2.jpg',
      '/images/train-gallery-3.jpg',
    ],
    description: `
      <p>Viaja hacia Machu Picchu en nuestro lujoso tren con vistas panorámicas del Valle Sagrado y el río Urubamba. Nuestro servicio incluye:</p>
      <ul>
        <li>Ventanas panorámicas con vistas inigualables</li>
        <li>Asientos amplios y confortables</li>
        <li>Servicio de snack y bebida a bordo</li>
        <li>Música ambiental y narración de la ruta</li>
        <li>Atención personalizada</li>
      </ul>
    `,
    services: [
      {
        name: 'Vistadome',
        description: 'Ventanas panorámicas en techo y paredes para una vista de 360°',
        price: 450,
        features: ['Asientos de lujo', 'Show cultural a bordo', 'Servicio gourmet']
      },
      {
        name: 'Expedition',
        description: 'Servicio confortable con amplias ventanas',
        price: 70,
        features: ['Asientos confortables', 'Snack ligero', 'Bebida incluida']
      }
    ],
    faqs: [
      {
        question: '¿Con cuánta anticipación debo llegar a la estación?',
        answer: 'Recomendamos llegar 30 minutos antes de la hora de salida programada.'
      },
      {
        question: '¿Hay límite de equipaje?',
        answer: 'Sí, se permite llevar 1 maleta o mochila de hasta 5kg por persona.'
      },
      {
        question: '¿Puedo cambiar mi fecha de viaje?',
        answer: 'Es posible cambiar la fecha hasta 24 horas antes, sujeto a disponibilidad y con un cargo adicional.'
      }
    ],
    seatLayout: {
      type: 'train',
      cars: 4,
      rowsPerCar: 8,
      seatsPerRow: 4,
      aisleAfterSeat: 2, // Pasillo central
      specialFeatures: [
        { type: 'entrance', car: 0, row: 0, positions: [0, 3] }, // Entradas
        { type: 'entrance', car: 3, row: 7, positions: [0, 3] }, // Entradas
        { type: 'panoramic', car: 2, rows: [2, 3, 4, 5] }, // Sección panorámica
      ]
    }
  }
};

export default function TransporteDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'info' | 'map'>('info');
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [transportData, setTransportData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  // Simular la carga de datos basados en el ID
  useEffect(() => {
    setLoading(true);
    
    // En un entorno real, aquí se haría una llamada a la API
    setTimeout(() => {
      // Por ahora usamos los datos de ejemplo basados en el tipo
      // En producción, el ID determinaría qué datos cargar
      const type = id?.includes('bus') ? 'bus' : 
                  id?.includes('boat') ? 'boat' : 
                  id?.includes('train') ? 'train' : 'bus';
                  
      setTransportData(transportServices[type as keyof typeof transportServices]);
      
      // Configurar una fecha por defecto
      const today = new Date();
      const formattedDate = today.toISOString().split('T')[0];
      setSelectedDate(formattedDate);
      
      setLoading(false);
    }, 800);
  }, [id]);
  
  if (loading || !transportData) {
    return (
      <main>
        <NavBar />
        <div className="min-h-screen flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-gray-600">Cargando información de transporte...</p>
          </div>
        </div>
        <Footer />
      </main>
    );
  }
  
  // Componente específico para selección de asientos según el tipo de transporte
  const renderSeatSelection = () => {
    switch (transportData.type) {
      case 'bus':
        return (
          <div>
            <h2 className="text-2xl font-montserrat font-bold mb-4">Selecciona tus asientos en el bus</h2>
            <p className="mb-6 text-gray-600">
              Nuestros buses cuentan con {transportData.seatLayout.floors} pisos y diferentes opciones de asientos. 
              Haz clic en los asientos disponibles para seleccionarlos.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <div className="text-center mb-4">
                <div className="inline-flex gap-3">
                  <span className="text-sm font-medium">Fecha de viaje:</span>
                  <input 
                    type="date" 
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="text-sm rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                {/* Representación del frente del bus */}
                <div className="bg-gray-800 text-white py-2 px-4 rounded-t-lg text-center mb-2">
                  FRENTE DEL BUS
                </div>
                
                {/* Selección de piso */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button className="px-4 py-2 text-sm font-medium rounded-l-lg bg-primary text-white border border-gray-200">
                      Primer Piso
                    </button>
                    <button className="px-4 py-2 text-sm font-medium rounded-r-lg bg-white text-gray-700 hover:bg-gray-100 border border-gray-200">
                      Segundo Piso
                    </button>
                  </div>
                </div>
                
                {/* Leyenda de asientos */}
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-sm mr-2"></div>
                    <span className="text-sm">Disponible</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-sm mr-2"></div>
                    <span className="text-sm">Seleccionado</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-sm mr-2"></div>
                    <span className="text-sm">No disponible</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-sm mr-2"></div>
                    <span className="text-sm">VIP (180°)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-indigo-500 rounded-sm mr-2"></div>
                    <span className="text-sm">Ejecutivo (160°)</span>
                  </div>
                </div>
                
                {/* Visualización de asientos - Primer piso */}
                <div className="grid grid-cols-4 gap-2 mb-8">
                  {/* Simulación de asientos */}
                  {Array.from({ length: 24 }).map((_, index) => {
                    // Verificar si es una característica especial
                    if (index === 0) {
                      return (
                        <div key={`feature-driver`} className="bg-yellow-100 text-center text-xs p-2 rounded-sm">
                          Conductor
                        </div>
                      );
                    }
                    if (index === 3) {
                      return (
                        <div key={`feature-entrance`} className="bg-red-100 text-center text-xs p-2 rounded-sm">
                          Entrada
                        </div>
                      );
                    }
                    if (index === 23) {
                      return (
                        <div key={`feature-bathroom`} className="bg-blue-100 text-center text-xs p-2 rounded-sm">
                          Baño
                        </div>
                      );
                    }
                    
                    // Si es posición de pasillo, dejar un espacio
                    if (index % 4 === 2) {
                      return <div key={`aisle-${index}`} className="flex justify-center items-center">
                        <div className="w-1 h-6 bg-gray-200"></div>
                      </div>;
                    }
                    
                    // Estado aleatorio para demo
                    const status = Math.random() > 0.7 ? 'taken' : 'available';
                    const seatType = index < 12 ? 'vip' : 'ejecutivo';
                    
                    return (
                      <button
                        key={`seat-${index}`}
                        className={`w-full p-2 text-xs font-medium rounded-sm text-center text-white ${
                          status === 'taken' 
                            ? 'bg-gray-300 cursor-not-allowed opacity-50' 
                            : seatType === 'vip'
                              ? 'bg-purple-500 hover:bg-purple-600'
                              : 'bg-indigo-500 hover:bg-indigo-600'
                        }`}
                        disabled={status === 'taken'}
                      >
                        {Math.floor(index / 4) + 1}{['A', 'B', 'C', 'D'][index % 4]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Resumen de selección */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Tu selección</h3>
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between">
                  <span>Asiento 3A (VIP 180°)</span>
                  <span className="font-semibold">S/280</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold text-primary">S/280</span>
                </div>
              </div>
              <Button variant="primary" fullWidth onClick={() => router.push('/checkout?type=transport&items=1')}>
                Continuar con la compra
              </Button>
            </div>
          </div>
        );
        
      case 'boat':
        return (
          <div>
            <h2 className="text-2xl font-montserrat font-bold mb-4">Selecciona tus asientos en la embarcación</h2>
            <p className="mb-6 text-gray-600">
              Nuestra embarcación cuenta con {transportData.seatLayout.decks} cubiertas y vista panorámica. 
              Selecciona los mejores asientos para disfrutar del paisaje.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <div className="text-center mb-4">
                <div className="inline-flex gap-3">
                  <span className="text-sm font-medium">Fecha de viaje:</span>
                  <input 
                    type="date" 
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="text-sm rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                {/* Representación del barco */}
                <div className="relative mb-8">
                  <div className="bg-cyan-800 text-white py-2 px-4 rounded-t-lg text-center mb-2">
                    PROA
                  </div>
                  
                  {/* Selección de cubierta */}
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                      <button className="px-4 py-2 text-sm font-medium rounded-l-lg bg-primary text-white border border-gray-200">
                        Cubierta Principal
                      </button>
                      <button className="px-4 py-2 text-sm font-medium rounded-r-lg bg-white text-gray-700 hover:bg-gray-100 border border-gray-200">
                        Cubierta Superior (Premium)
                      </button>
                    </div>
                  </div>
                  
                  {/* Leyenda de asientos */}
                  <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-cyan-500 rounded-sm mr-2"></div>
                      <span className="text-sm">Disponible</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-green-500 rounded-sm mr-2"></div>
                      <span className="text-sm">Seleccionado</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gray-300 rounded-sm mr-2"></div>
                      <span className="text-sm">No disponible</span>
                    </div>
                  </div>
                  
                  {/* Visualización de asientos en forma de barco */}
                  <div className="w-full max-w-xl mx-auto">
                    <div className="bg-cyan-50 rounded-lg p-4 border-2 border-cyan-200">
                      <div className="grid grid-cols-6 gap-2">
                        {/* Simulación de asientos de barco */}
                        {Array.from({ length: 36 }).map((_, index) => {
                          // Verificar si es una característica especial
                          if (index === 2 || index === 3) {
                            return (
                              <div key={`feature-captain-${index}`} className="bg-yellow-100 text-center text-xs p-2 rounded-sm">
                                Capitán
                              </div>
                            );
                          }
                          
                          // Si es posición de pasillo central
                          if (index % 6 === 3) {
                            return <div key={`aisle-${index}`} className="flex justify-center items-center">
                              <div className="w-1 h-6 bg-gray-200"></div>
                            </div>;
                          }
                          
                          // Estado aleatorio para demo
                          const status = Math.random() > 0.6 ? 'taken' : 'available';
                          
                          return (
                            <button
                              key={`seat-${index}`}
                              className={`w-full p-2 text-xs font-medium rounded-sm text-center text-white ${
                                status === 'taken' 
                                  ? 'bg-gray-300 cursor-not-allowed opacity-50' 
                                  : 'bg-cyan-500 hover:bg-cyan-600'
                              }`}
                              disabled={status === 'taken'}
                            >
                              {Math.floor(index / 6) + 1}{['A', 'B', 'C', 'D', 'E', 'F'][index % 6]}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-800 text-white py-2 px-4 rounded-b-lg text-center mt-2">
                    POPA
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resumen de selección */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Tu selección</h3>
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between">
                  <span>Asiento 2C (Estándar)</span>
                  <span className="font-semibold">S/60</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold text-primary">S/60</span>
                </div>
              </div>
              <Button variant="primary" fullWidth onClick={() => router.push('/checkout?type=transport&items=1')}>
                Continuar con la compra
              </Button>
            </div>
          </div>
        );
        
      case 'train':
        return (
          <div>
            <h2 className="text-2xl font-montserrat font-bold mb-4">Selecciona tus asientos en el tren</h2>
            <p className="mb-6 text-gray-600">
              Nuestro tren cuenta con {transportData.seatLayout.cars} vagones y ventanas panorámicas. 
              Selecciona los asientos para disfrutar del paisaje durante tu viaje.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <div className="text-center mb-4">
                <div className="inline-flex gap-3">
                  <span className="text-sm font-medium">Fecha de viaje:</span>
                  <input 
                    type="date" 
                    value={selectedDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="text-sm rounded border-gray-300 focus:border-primary focus:ring focus:ring-primary/20"
                  />
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                {/* Selección de vagón */}
                <div className="flex justify-center mb-4">
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <button 
                        key={`car-${index}`}
                        className={`px-4 py-2 text-sm font-medium ${
                          index === 0 
                            ? 'rounded-l-lg bg-primary text-white' 
                            : index === 3 
                              ? 'rounded-r-lg bg-white text-gray-700 hover:bg-gray-100' 
                              : 'bg-white text-gray-700 hover:bg-gray-100'
                        } border border-gray-200`}
                      >
                        Vagón {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Leyenda de asientos */}
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-purple-500 rounded-sm mr-2"></div>
                    <span className="text-sm">Vistadome</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-indigo-500 rounded-sm mr-2"></div>
                    <span className="text-sm">Expedition</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-sm mr-2"></div>
                    <span className="text-sm">Seleccionado</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-gray-300 rounded-sm mr-2"></div>
                    <span className="text-sm">No disponible</span>
                  </div>
                </div>
                
                {/* Visualización de asientos - Vagón 1 (premium) */}
                <div className="relative mb-8">
                  <div className="bg-gray-600 text-white p-2 rounded-t-lg text-center mb-4">
                    LOCOMOTORA
                  </div>
                  
                  <div className="border-2 border-gray-300 rounded-lg p-4 max-w-xl mx-auto">
                    <div className="grid grid-cols-4 gap-2">
                      {/* Simulación de asientos de tren */}
                      {Array.from({ length: 32 }).map((_, index) => {
                        // Si es posición de pasillo central
                        if (index % 4 === 2) {
                          return <div key={`aisle-${index}`} className="flex justify-center items-center">
                            <div className="w-1 h-6 bg-gray-200"></div>
                          </div>;
                        }
                        
                        // Si está en la zona panorámica
                        const isPanoramic = Math.floor(index / 4) >= 2 && Math.floor(index / 4) <= 5;
                        
                        // Estado aleatorio para demo
                        const status = Math.random() > 0.5 ? 'taken' : 'available';
                        
                        return (
                          <button
                            key={`seat-${index}`}
                            className={`w-full p-2 text-xs font-medium rounded-sm text-center text-white ${
                              status === 'taken' 
                                ? 'bg-gray-300 cursor-not-allowed opacity-50' 
                                : isPanoramic
                                  ? 'bg-purple-500 hover:bg-purple-600'
                                  : 'bg-indigo-500 hover:bg-indigo-600'
                            }`}
                            disabled={status === 'taken'}
                          >
                            {Math.floor(index / 4) + 1}{['A', 'B', 'C', 'D'][index % 4]}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-4 h-4 bg-purple-500 rounded-sm mr-1"></div>
                      <span>Vistadome: S/450</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <div className="w-4 h-4 bg-indigo-500 rounded-sm mr-1"></div>
                      <span>Expedition: S/70</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resumen de selección */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Tu selección</h3>
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex justify-between">
                  <span>Asiento 3B (Vistadome)</span>
                  <span className="font-semibold">S/450</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold text-primary">S/450</span>
                </div>
              </div>
              <Button variant="primary" fullWidth onClick={() => router.push('/checkout?type=transport&items=1')}>
                Continuar con la compra
              </Button>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-xl font-medium mb-4">No hay mapa de asientos disponible</h2>
            <p className="text-gray-600 mb-4">
              Lo sentimos, el mapa de asientos para este tipo de transporte no está disponible en este momento.
            </p>
            <Button variant="primary" onClick={() => setActiveTab('info')}>
              Volver a la información
            </Button>
          </div>
        );
    }
  };
  
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
                {transportData.type === 'bus' ? 'Bus' : transportData.type === 'boat' ? 'Barco' : 'Tren'}
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
              renderSeatSelection()
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