// src/app/legal/terminos-y-condiciones/page.tsx
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-display font-bold mb-6 text-center">
              Términos y Condiciones
            </h1>
            <p className="text-gray-500 italic text-center mb-8">
              Última actualización: 15 de enero de 2025
            </p>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="prose prose-indigo max-w-none">
                <h2>1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y utilizar los servicios ofrecidos por Boletería Perú S.A.C. (en adelante "Boletería"), 
                  incluyendo el sitio web, la aplicación móvil y cualquier otro servicio relacionado (en conjunto, los "Servicios"), 
                  usted acepta estar legalmente vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguno 
                  de estos términos, no debe utilizar nuestros Servicios.
                </p>
                
                <h2>2. Descripción del Servicio</h2>
                <p>
                  Boletería es una plataforma que permite la compra de boletos para eventos culturales, deportivos, de entretenimiento, 
                  así como pasajes de transporte terrestre. Actuamos como intermediarios entre los organizadores de eventos o 
                  empresas de transporte y los usuarios finales.
                </p>
                
                <h2>3. Registro de Cuenta</h2>
                <p>
                  Para realizar compras a través de Boletería, puede ser necesario registrarse y crear una cuenta. 
                  Usted es responsable de mantener la confidencialidad de su información de cuenta y de todas las actividades 
                  que ocurran bajo su cuenta. Boletería se reserva el derecho de rechazar el servicio, cerrar cuentas, 
                  eliminar o editar contenido, o cancelar pedidos a su entera discreción.
                </p>
                
                <h2>4. Proceso de Compra</h2>
                <p>
                  4.1. Los precios de los boletos y pasajes incluyen el valor nominal establecido por el organizador del evento 
                  o la empresa de transporte, más los cargos por servicio aplicables, que se mostrarán desglosados durante el proceso de compra.
                </p>
                <p>
                  4.2. Una vez realizada la compra, recibirá una confirmación por correo electrónico con los detalles 
                  y los boletos electrónicos correspondientes.
                </p>
                <p>
                  4.3. Es responsabilidad del usuario verificar la exactitud de los datos proporcionados durante el proceso de compra.
                </p>
                
                <h2>5. Política de Cancelaciones y Reembolsos</h2>
                <p>
                  5.1. La política de cancelación y reembolso depende de las condiciones establecidas por cada organizador de 
                  evento o empresa de transporte, las cuales se especificarán durante el proceso de compra.
                </p>
                <p>
                  5.2. En general, una vez emitidos los boletos, no se aceptan devoluciones ni cambios, excepto en los casos en que 
                  el evento sea cancelado por el organizador o según lo establecido por la ley aplicable.
                </p>
                <p>
                  5.3. En caso de cancelación del evento por parte del organizador, Boletería gestionará el reembolso según las 
                  instrucciones del organizador y notificará a los usuarios a través de los medios de contacto proporcionados.
                </p>
                
                <h2>6. Responsabilidades del Usuario</h2>
                <p>
                  6.1. Proporcionar información precisa y actualizada durante el proceso de registro y compra.
                </p>
                <p>
                  6.2. No transferir su cuenta a ninguna otra persona.
                </p>
                <p>
                  6.3. No utilizar los Servicios para fines ilegales o no autorizados.
                </p>
                <p>
                  6.4. No intentar acceder a áreas restringidas del sitio web o aplicación.
                </p>
                
                <h2>7. Limitación de Responsabilidad</h2>
                <p>
                  7.1. Boletería actúa como intermediario entre los organizadores de eventos o empresas de transporte y los usuarios. 
                  La responsabilidad por la realización del evento o servicio de transporte recae exclusivamente en el organizador 
                  o la empresa correspondiente.
                </p>
                <p>
                  7.2. Boletería no será responsable por cambios en la programación, artistas, contenido del evento, rutas o 
                  cualquier otra modificación realizada por el organizador o la empresa de transporte.
                </p>
                <p>
                  7.3. Boletería se esfuerza por mantener la plataforma operativa en todo momento, pero no garantiza la disponibilidad 
                  ininterrumpida de los Servicios.
                </p>
                
                <h2>8. Propiedad Intelectual</h2>
                <p>
                  Todo el contenido disponible a través de los Servicios, incluyendo pero no limitado a textos, gráficos, 
                  logotipos, íconos, imágenes, clips de audio, descargas digitales y software, es propiedad de Boletería 
                  o sus proveedores de contenido y está protegido por las leyes de propiedad intelectual.
                </p>
                
                <h2>9. Privacidad</h2>
                <p>
                  La recopilación y el uso de información personal están regidos por nuestra Política de Privacidad, que forma 
                  parte integral de estos Términos y Condiciones.
                </p>
                
                <h2>10. Modificaciones a los Términos</h2>
                <p>
                  Boletería se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones 
                  serán efectivas inmediatamente después de la publicación de los términos modificados. Es responsabilidad del 
                  usuario revisar periódicamente los Términos y Condiciones.
                </p>
                
                <h2>11. Ley Aplicable y Jurisdicción</h2>
                <p>
                  Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la República del Perú. 
                  Cualquier disputa que surja en relación con estos Términos y Condiciones estará sujeta a la jurisdicción 
                  exclusiva de los tribunales de Lima, Perú.
                </p>
                
                <h2>12. Contacto</h2>
                <p>
                  Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos a través de:
                </p>
                <ul>
                  <li>Correo electrónico: legal@boleteria.pe</li>
                  <li>Teléfono: +51 (1) 123-4567</li>
                  <li>Dirección: Av. Javier Prado Este 1234, San Isidro, Lima, Perú</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}