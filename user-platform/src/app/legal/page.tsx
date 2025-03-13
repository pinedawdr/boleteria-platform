// src/app/legal/page.tsx
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const legalPages = [
  {
    id: 'terminos-y-condiciones',
    title: 'Términos y Condiciones',
    description: 'Condiciones generales de uso de nuestra plataforma.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 'politica-de-privacidad',
    title: 'Política de Privacidad',
    description: 'Cómo recopilamos, usamos y protegemos tu información personal.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: 'politica-de-reembolso',
    title: 'Política de Reembolso',
    description: 'Condiciones y procedimientos para solicitar reembolsos.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: 'ayuda',
    title: 'Centro de Ayuda',
    description: 'Preguntas frecuentes y soporte para usuarios.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function LegalPage() {
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-display font-bold mb-6 text-center">
              Información Legal
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
              Encuentra toda la información legal relacionada con nuestros servicios, políticas de privacidad, 
              términos y condiciones, y más.
            </p>
            
            <div className="grid gap-6">
              {legalPages.map((page) => (
                <Link key={page.id} href={`/legal/${page.id}`}>
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 flex items-start hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 h-10 w-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mr-4">
                      {page.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold mb-1">{page.title}</h2>
                      <p className="text-gray-600">{page.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Contacto Legal</h2>
              <p className="text-gray-600 mb-4">
                Si tienes preguntas específicas sobre aspectos legales de nuestros servicios, puedes contactar 
                a nuestro departamento legal a través de:
              </p>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>legal@boleteria.pe</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+51 (1) 123-4567 ext. 202</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}