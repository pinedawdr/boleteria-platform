// src/app/about/page.tsx
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8 text-center">
              Acerca de Nosotros
            </h1>
            
            <div className="mb-12">
              <img 
                src="/images/about-hero.jpg" 
                alt="Equipo de Boletería" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-4" 
              />
            </div>
            
            <div className="prose max-w-none bg-white p-8 rounded-lg shadow-sm">
              <h2>Nuestra historia</h2>
              <p>
                Boletería nació en 2020 como respuesta a la necesidad de contar con una plataforma digital integral 
                para la venta de boletos en Perú. Fundada por un equipo de entusiastas tecnológicos y amantes de 
                los eventos culturales, nuestra misión es hacer más accesible la experiencia de comprar entradas 
                para espectáculos, eventos deportivos y servicios de transporte.
              </p>
              
              <h2>Nuestra misión</h2>
              <p>
                Conectar a las personas con experiencias que enriquecen sus vidas, facilitando el acceso a eventos 
                culturales, deportivos y de entretenimiento a través de una plataforma tecnológica segura, intuitiva 
                y eficiente.
              </p>
              
              <h2>Nuestra visión</h2>
              <p>
                Ser la plataforma líder en Latinoamérica para la adquisición de boletos de eventos y transporte, 
                reconocida por su excelencia en servicio, innovación tecnológica y compromiso con la satisfacción 
                del cliente.
              </p>
              
              <h2>Nuestros valores</h2>
              <ul>
                <li><strong>Innovación:</strong> Buscamos constantemente mejorar nuestra plataforma y servicios.</li>
                <li><strong>Transparencia:</strong> Ofrecemos información clara sobre precios, asientos y condiciones.</li>
                <li><strong>Seguridad:</strong> Protegemos los datos de nuestros usuarios y garantizamos transacciones seguras.</li>
                <li><strong>Accesibilidad:</strong> Trabajamos para hacer que los eventos sean accesibles para todos.</li>
                <li><strong>Excelencia:</strong> Nos esforzamos por superar las expectativas en cada interacción.</li>
              </ul>
              
              <h2>Nuestro equipo</h2>
              <p>
                Contamos con un equipo diverso de profesionales apasionados por la tecnología, los eventos culturales 
                y el servicio al cliente. Desde desarrolladores y diseñadores hasta especialistas en atención al cliente 
                y expertos en eventos, cada miembro de nuestro equipo contribuye a crear la mejor experiencia posible 
                para nuestros usuarios.
              </p>
              
              <h2>Logros y reconocimientos</h2>
              <p>
                Desde nuestra fundación, hemos crecido hasta convertirnos en una de las principales plataformas de venta 
                de boletos en Perú, con más de un millón de transacciones exitosas y una satisfacción del cliente superior 
                al 95%. Hemos sido reconocidos por la Cámara de Comercio de Lima como "Emprendimiento Innovador del Año" 
                en 2021 y recibimos el premio "Mejor Plataforma Digital" en los E-commerce Awards Perú 2022.
              </p>
              
              <h2>Nuestro compromiso social</h2>
              <p>
                En Boletería creemos en el poder transformador de la cultura y el entretenimiento. Por ello, destinamos 
                parte de nuestros ingresos a programas que promueven el acceso a eventos culturales en comunidades vulnerables 
                y apoyamos iniciativas artísticas emergentes a través de nuestro programa "Cultura para Todos".
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}