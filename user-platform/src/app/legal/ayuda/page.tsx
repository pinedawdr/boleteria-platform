// src/app/legal/ayuda/page.tsx
"use client";

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

const faqCategories = [
  { id: 'general', name: 'General' },
  { id: 'accounts', name: 'Cuentas' },
  { id: 'payments', name: 'Pagos' },
  { id: 'tickets', name: 'Boletos' },
  { id: 'transport', name: 'Transporte' },
  { id: 'refunds', name: 'Reembolsos' },
];

const faqs = [
  {
    id: 1,
    category: 'general',
    question: '¿Qué es Boletería?',
    answer: 'Boletería es una plataforma peruana que permite la compra de boletos para eventos culturales, deportivos, de entretenimiento, así como pasajes de transporte terrestre. Conectamos a los organizadores de eventos y empresas de transporte con los usuarios finales a través de nuestra web y aplicación móvil.'
  },
  {
    id: 2,
    category: 'general',
    question: '¿Cuáles son los horarios de atención al cliente?',
    answer: 'Nuestro equipo de atención al cliente está disponible de lunes a viernes de 9:00 a.m. a 6:00 p.m. y sábados de 9:00 a.m. a 1:00 p.m. Para consultas urgentes fuera de estos horarios, ofrecemos asistencia limitada a través de nuestro chat en línea.'
  },
  {
    id: 3,
    category: 'accounts',
    question: '¿Cómo puedo crear una cuenta?',
    answer: 'Para crear una cuenta, haz clic en "Registrarse" en la esquina superior derecha de nuestra página web o aplicación. Completa el formulario con tu información personal y crea una contraseña segura. También puedes registrarte utilizando tus cuentas de Google o Facebook para mayor comodidad.'
  },
  {
    id: 4,
    category: 'accounts',
    question: '¿Cómo puedo recuperar mi contraseña?',
    answer: 'Si olvidaste tu contraseña, haz clic en "Iniciar sesión" y luego en "¿Olvidaste tu contraseña?". Ingresa el correo electrónico asociado a tu cuenta y te enviaremos un enlace para restablecer tu contraseña. El enlace es válido por 24 horas.'
  },
  {
    id: 5,
    category: 'payments',
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias, Yape, y PayPal. Los métodos de pago disponibles pueden variar según el evento o servicio de transporte seleccionado.'
  },
  {
    id: 6,
    category: 'payments',
    question: '¿Es seguro realizar pagos en Boletería?',
    answer: 'Sí, todos los pagos realizados a través de nuestra plataforma están protegidos con tecnología de encriptación SSL de 256 bits. No almacenamos los datos completos de las tarjetas de crédito, utilizamos procesadores de pago que cumplen con los estándares de seguridad PCI DSS.'
  },
  {
    id: 7,
    category: 'tickets',
    question: '¿Cómo recibo mis boletos?',
    answer: 'Una vez completada la compra, recibirás tus boletos electrónicos en el correo electrónico registrado. También puedes acceder a ellos en cualquier momento desde la sección "Mis Boletos" de tu cuenta en nuestra web o aplicación móvil.'
  },
  {
    id: 8,
    category: 'tickets',
    question: '¿Puedo transferir mis boletos a otra persona?',
    answer: 'Dependiendo del evento y las políticas del organizador, algunos boletos pueden ser transferibles. Si esta opción está disponible, encontrarás un botón de "Transferir" junto al boleto en la sección "Mis Boletos". El proceso requerirá el correo electrónico de la persona a quien deseas transferir el boleto.'
  },
  {
    id: 9,
    category: 'transport',
    question: '¿Con cuánta anticipación debo comprar mi pasaje?',
    answer: 'Recomendamos comprar los pasajes de transporte con al menos 48 horas de anticipación, especialmente para rutas populares o en temporada alta. Sin embargo, es posible realizar compras hasta pocas horas antes de la salida, sujeto a disponibilidad.'
  },
  {
    id: 10,
    category: 'transport',
    question: '¿Qué documentos necesito para abordar?',
    answer: 'Para abordar, necesitarás presentar tu boleto electrónico (impreso o en tu teléfono) y un documento de identidad oficial (DNI, pasaporte o carnet de extranjería). Para menores de edad, podría requerirse documentación adicional según las políticas de la empresa de transporte.'
  },
  {
    id: 11,
    category: 'refunds',
    question: '¿Puedo cancelar mi compra y solicitar un reembolso?',
    answer: 'Las políticas de cancelación y reembolso varían según el organizador del evento o la empresa de transporte. Estas políticas se comunican durante el proceso de compra. En general, los boletos para eventos no son reembolsables una vez emitidos, mientras que los pasajes de transporte podrían permitir cancelaciones con penalidades según la antelación.'
  },
  {
    id: 12,
    category: 'refunds',
    question: '¿Qué sucede si el evento es cancelado?',
    answer: 'Si un evento es cancelado por el organizador, recibirás una notificación y, generalmente, un reembolso automático del 100% del valor pagado, incluyendo cargos por servicio. El tiempo de procesamiento del reembolso dependerá de tu método de pago, pero normalmente toma entre 5 y 30 días.'
  },
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Filtrar FAQs por categoría y término de búsqueda
  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-display font-bold mb-4 text-center">
              Centro de Ayuda
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-8">
              Encuentra respuestas a preguntas frecuentes o contacta con nuestro equipo de soporte.
            </p>
            
            {/* Buscador */}
            <div className="mb-10">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-secondary focus:border-secondary"
                    placeholder="Buscar en preguntas frecuentes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            {/* Categorías */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-secondary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedCategory('all')}
                >
                  Todos
                </button>
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-secondary text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* FAQs */}
            <div className="space-y-4 mb-12">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    >
                      <h3 className="font-semibold text-lg">{faq.question}</h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${expandedFaq === faq.id ? 'transform rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 py-4 border-t">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">No se encontraron resultados</h3>
                  <p className="text-gray-600 mb-4">
                    No encontramos preguntas que coincidan con tu búsqueda. Intenta con otros términos o categorías.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('general');
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </div>
              )}
            </div>
            
            {/* Contacto */}
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">¿No encontraste lo que buscabas?</h2>
              <p className="text-center mb-6">
                Nuestro equipo de atención al cliente está listo para ayudarte con cualquier consulta o problema.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <a 
                  href="#" 
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Chat en vivo</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Habla con un agente en tiempo real
                  </p>
                </a>
                
                <a 
                  href="mailto:soporte@boleteria.pe" 
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Correo electrónico</h3>
                  <p className="text-sm text-gray-600 text-center">
                    soporte@boleteria.pe
                  </p>
                </a>
                
                <a 
                  href="tel:+5111234567" 
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="h-12 w-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="text-sm text-gray-600 text-center">
                    +51 (1) 123-4567
                  </p>
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Horarios de atención: Lunes a Viernes de 9:00 a.m. a 6:00 p.m.
                  <br />
                  Sábados de 9:00 a.m. a 1:00 p.m.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}