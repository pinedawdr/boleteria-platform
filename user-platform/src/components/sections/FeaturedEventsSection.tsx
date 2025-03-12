"use client";

// user-platform/src/components/sections/FeaturedEventsSection.tsx
import Card, { CardImage, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

// Eventos de ejemplo según la documentación
const featuredEvents = [
  {
    id: 1,
    title: 'Raíces Andinas Fest',
    image: '/images/raices-andinas.jpg',
    date: '15 de abril de 2023',
    location: 'Estadio Nacional, Lima',
    price: 'S/80 - S/350',
    category: 'Concierto',
  },
  {
    id: 2,
    title: 'Lima Summer Beats',
    image: '/images/summer-beats.jpg',
    date: '5-6 de febrero de 2023',
    location: 'Costa Verde, San Miguel',
    price: 'S/180 - S/590',
    category: 'Festival',
  },
  {
    id: 3,
    title: 'El Fantasma de los Andes',
    image: '/images/fantasma-andes.jpg',
    date: '10-30 de marzo de 2023',
    location: 'Teatro Segura, Lima',
    price: 'S/50 - S/120',
    category: 'Teatro',
  },
  {
    id: 4,
    title: 'Clásico del Fútbol Peruano',
    image: '/images/clasico-futbol.jpg',
    date: '25 de marzo de 2023',
    location: 'Estadio Monumental, Lima',
    price: 'S/30 - S/180',
    category: 'Deporte',
  },
  {
    id: 5,
    title: 'Viaje Lima - Cusco VIP',
    image: '/images/lima-cusco.jpg',
    date: 'Diario - 22:00',
    location: 'Cruz del Sur',
    price: 'S/280',
    category: 'Transporte',
  },
  {
    id: 6,
    title: 'Puno - Islas Uros Premium',
    image: '/images/puno-uros.jpg',
    date: 'Diario - 08:00, 10:00, 14:00',
    location: 'Titicaca Explorer',
    price: 'S/85',
    category: 'Transporte Acuático',
  },
];

const FeaturedEventsSection = () => {
  const router = useRouter();
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-montserrat font-bold">
            Eventos Destacados
          </h2>
          <Button
            variant="outline"
            onClick={() => router.push('/events')}
          >
            Ver Todos
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <Card 
              key={event.id} 
              hoverable
              onClick={() => router.push(`/events/${event.id}`)}
              className="group"
            >
              <div className="relative">
                <CardImage 
                  src={event.image} 
                  alt={event.title} 
                  className="h-48"
                />
                <span className="absolute top-3 left-3 bg-secondary text-white px-2 py-1 text-xs rounded">
                  {event.category}
                </span>
              </div>
              <CardContent>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-primary font-semibold">{event.price}</span>
                  <Button variant="primary" size="sm">
                    Comprar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;