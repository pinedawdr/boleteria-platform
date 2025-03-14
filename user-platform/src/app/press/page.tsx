// src/app/press/page.tsx
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

// Datos de ejemplo para noticias y recursos de prensa
const pressReleases = [
  {
    id: 1,
    date: '15 de enero de 2025',
    title: 'Boletería alcanza 1 millón de usuarios activos',
    excerpt: 'La plataforma de venta de boletos para eventos y transporte Boletería ha anunciado que ha superado el millón de usuarios activos mensuales...',
    image: '/images/press-1.jpg',
  },
  {
    id: 2,
    date: '3 de diciembre de 2022',
    title: 'Boletería lanza nueva funcionalidad para selección de asientos en 3D',
    excerpt: 'La innovadora funcionalidad permite a los usuarios visualizar la vista desde el asiento antes de realizar la compra...',
    image: '/images/press-2.jpg',
  },
  {
    id: 3,
    date: '18 de octubre de 2022',
    title: 'Boletería recibe premio a la innovación tecnológica',
    excerpt: 'La Cámara de Comercio de Lima ha otorgado el premio a la innovación tecnológica a Boletería por su plataforma de compra de boletos...',
    image: '/images/press-3.jpg',
  },
];

// Datos para kit de prensa
const pressKit = [
  {
    id: 1,
    title: 'Logos e identidad visual',
    description: 'Archivos en alta resolución del logotipo de Boletería en diferentes formatos y variantes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Fotografías',
    description: 'Imágenes del equipo, oficinas y eventos, disponibles en alta resolución para uso en prensa.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Guía de marca',
    description: 'Documento PDF con lineamientos para el uso correcto de nuestra identidad visual.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Hojas informativas',
    description: 'Documentos con información detallada sobre la empresa, estadísticas y logros.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function PressPage() {
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-4 text-center">
              Sala de Prensa
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Información y recursos para medios de comunicación. Encuentra comunicados de prensa, 
              kit de prensa y contactos para periodistas.
            </p>
            
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold mb-6">Notas de Prensa</h2>
              <div className="space-y-8">
                {pressReleases.map((release) => (
                  <div key={release.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img src={release.image} alt={release.title} className="w-full h-48 md:h-full object-cover" />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <span className="text-sm text-gray-500">{release.date}</span>
                      <h3 className="text-xl font-bold mt-1 mb-2">{release.title}</h3>
                      <p className="text-gray-600 mb-4">{release.excerpt}</p>
                      <div className="flex justify-end">
                        <Button variant="outline">Leer más</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="primary">Ver todas las notas de prensa</Button>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold mb-6">Kit de Prensa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pressKit.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-600 mt-1 mb-3">{item.description}</p>
                        <a href="#" className="text-secondary font-medium hover:underline text-sm inline-flex items-center">
                          Descargar
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button variant="secondary">Solicitar recursos adicionales</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">Contacto para Prensa</h2>
              <p className="text-center mb-6">
                Si eres periodista y necesitas información, entrevistas o material adicional, 
                por favor contacta con nuestro departamento de comunicación.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">Prensa Nacional</h3>
                  <p className="text-gray-600">María López</p>
                  <p className="text-gray-600 mb-2">Directora de Comunicación</p>
                  <p className="text-secondary">prensa@boleteria.pe</p>
                  <p className="text-secondary">+51 (1) 987 6543</p>
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2">Prensa Internacional</h3>
                  <p className="text-gray-600">Carlos Gutiérrez</p>
                  <p className="text-gray-600 mb-2">Relaciones Internacionales</p>
                  <p className="text-secondary">international@boleteria.pe</p>
                  <p className="text-secondary">+51 (1) 987 6544</p>
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