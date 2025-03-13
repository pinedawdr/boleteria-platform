// src/app/careers/page.tsx
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

// Posiciones de ejemplo
const positions = [
  {
    id: 1,
    title: 'Desarrollador Full Stack',
    department: 'Tecnología',
    location: 'Lima / Remoto',
    type: 'Tiempo completo',
  },
  {
    id: 2,
    title: 'Especialista en Atención al Cliente',
    department: 'Operaciones',
    location: 'Lima',
    type: 'Tiempo completo',
  },
  {
    id: 3,
    title: 'Diseñador UX/UI',
    department: 'Producto',
    location: 'Lima / Remoto',
    type: 'Tiempo completo',
  },
  {
    id: 4,
    title: 'Gerente de Marketing Digital',
    department: 'Marketing',
    location: 'Lima',
    type: 'Tiempo completo',
  },
  {
    id: 5,
    title: 'Analista de Datos',
    department: 'Tecnología',
    location: 'Lima / Remoto',
    type: 'Tiempo completo',
  },
];

export default function CareersPage() {
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-display font-bold mb-4">
                Trabaja con Nosotros
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Únete a nuestro equipo y ayúdanos a transformar la manera en que las personas disfrutan de eventos y viajes en Perú.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
              <div className="relative">
                <img 
                  src="/images/careers-hero.jpg" 
                  alt="Nuestro equipo" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-2xl font-bold">¿Por qué trabajar con nosotros?</h2>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Innovación constante</h3>
                    <p className="text-gray-600 text-sm">
                      Trabajamos con las últimas tecnologías y fomentamos la creatividad y la experimentación.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Flexibilidad</h3>
                    <p className="text-gray-600 text-sm">
                      Ofrecemos horarios flexibles y posibilidad de trabajo remoto para muchas posiciones.
                    </p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Desarrollo profesional</h3>
                    <p className="text-gray-600 text-sm">
                      Invertimos en el crecimiento de nuestro equipo con capacitaciones, mentorías y plan de carrera.
                    </p>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Beneficios</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Seguro médico privado
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Bono anual por desempeño
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Entradas gratuitas para eventos
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Horario flexible
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Programa de capacitación continua
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Días libres por cumpleaños
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-display font-bold mb-6">Posiciones disponibles</h2>
            
            <div className="space-y-4 mb-12">
              {positions.map((position) => (
                <div key={position.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        {position.location}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline">Ver detalles</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 text-center">
              <h2 className="text-xl font-semibold mb-3">¿No encuentras una posición adecuada?</h2>
              <p className="mb-4 text-gray-600">
                Siempre estamos buscando talento. Envíanos tu CV y nos pondremos en contacto si hay una oportunidad que coincida con tu perfil.
              </p>
              <Button variant="primary">Enviar CV espontáneo</Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}