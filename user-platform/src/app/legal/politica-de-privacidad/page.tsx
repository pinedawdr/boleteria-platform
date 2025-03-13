// src/app/legal/politica-de-privacidad/page.tsx
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-display font-bold mb-6 text-center">
              Política de Privacidad
            </h1>
            <p className="text-gray-500 italic text-center mb-8">
              Última actualización: 15 de enero de 2023
            </p>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="prose prose-indigo max-w-none">
                <h2>1. Introducción</h2>
                <p>
                  En Boletería Perú S.A.C. (en adelante "Boletería"), nos comprometemos a proteger y respetar su privacidad. 
                  Esta Política de Privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos la información 
                  personal que usted nos proporciona cuando utiliza nuestros servicios, incluyendo nuestro sitio web y aplicación móvil.
                </p>
                <p>
                  Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta Política de Privacidad. 
                  Le recomendamos que lea detenidamente este documento.
                </p>
                
                <h2>2. Información que Recopilamos</h2>
                <p>
                  Recopilamos distintos tipos de información personal, incluyendo:
                </p>
                <ul>
                  <li>
                    <strong>Información de identificación personal:</strong> Nombre, apellidos, número de documento de identidad, 
                    dirección de correo electrónico, número de teléfono, dirección postal.
                  </li>
                  <li>
                    <strong>Información de pago:</strong> Datos de tarjetas de crédito/débito u otros medios de pago utilizados. 
                    Nota: No almacenamos directamente los datos completos de tarjetas de crédito, utilizamos procesadores de pago 
                    que cumplen con los estándares de seguridad PCI DSS.
                  </li>
                  <li>
                    <strong>Información técnica:</strong> Dirección IP, tipo de navegador, proveedor de servicios de Internet, 
                    páginas de referencia/salida, sistema operativo, fecha/hora, datos de clics.
                  </li>
                  <li>
                    <strong>Información de ubicación:</strong> Si usted lo autoriza, podemos recopilar información sobre su ubicación 
                    para ofrecerle servicios basados en la misma.
                  </li>
                </ul>
                
                <h2>3. Cómo Recopilamos su Información</h2>
                <p>
                  Recopilamos información a través de diversos medios:
                </p>
                <ul>
                  <li>Cuando se registra o crea una cuenta con nosotros</li>
                  <li>Cuando realiza una compra o transacción</li>
                  <li>Cuando completa formularios en nuestro sitio web o aplicación</li>
                  <li>Cuando contacta con nuestro servicio de atención al cliente</li>
                  <li>A través de cookies y tecnologías similares</li>
                  <li>A través de fuentes de terceros (redes sociales, socios comerciales)</li>
                </ul>
                
                <h2>4. Cómo Utilizamos su Información</h2>
                <p>
                  Utilizamos la información recopilada para los siguientes fines:
                </p>
                <ul>
                  <li>Procesar transacciones y entregar los boletos o pasajes adquiridos</li>
                  <li>Gestionar su cuenta y proporcionarle soporte técnico</li>
                  <li>Enviar confirmaciones, actualizaciones y alertas relacionadas con sus compras</li>
                  <li>Personalizar su experiencia y ofrecerle contenido y ofertas adaptadas a sus intereses</li>
                  <li>Mejorar y optimizar nuestros servicios</li>
                  <li>Detectar, prevenir y abordar problemas técnicos, fraudes o actividades ilegales</li>
                  <li>Cumplir con obligaciones legales y reglamentarias</li>
                </ul>
                
                <h2>5. Base Legal para el Procesamiento</h2>
                <p>
                  Procesamos su información personal bajo las siguientes bases legales:
                </p>
                <ul>
                  <li><strong>Ejecución de un contrato:</strong> Para proporcionar los servicios que ha solicitado</li>
                  <li><strong>Consentimiento:</strong> Para marketing directo, cookies no esenciales u otros fines específicos para los que hayamos solicitado su consentimiento</li>
                  <li><strong>Intereses legítimos:</strong> Para mejorar nuestros servicios, prevenir fraudes, marketing directo (cuando esté permitido por ley)</li>
                  <li><strong>Obligación legal:</strong> Para cumplir con requisitos legales y regulatorios</li>
                </ul>
                
                <h2>6. Compartir su Información</h2>
                <p>
                  Podemos compartir su información personal con:
                </p>
                <ul>
                  <li>
                    <strong>Organizadores de eventos y empresas de transporte:</strong> Para gestionar la emisión de boletos y 
                    pasajes y proporcionar los servicios adquiridos.
                  </li>
                  <li>
                    <strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar nuestro negocio 
                    (procesadores de pago, servicios de hosting, análisis de datos, atención al cliente).
                  </li>
                  <li>
                    <strong>Autoridades legales:</strong> Cuando sea requerido por ley, orden judicial o proceso legal.
                  </li>
                  <li>
                    <strong>Socios comerciales:</strong> Con su consentimiento, podemos compartir información con 
                    socios cuidadosamente seleccionados para ofrecerle productos o servicios que puedan interesarle.
                  </li>
                </ul>
                <p>
                  No vendemos, alquilamos ni cedemos su información personal a terceros con fines comerciales 
                  sin su consentimiento explícito.
                </p>
                
                <h2>7. Seguridad de Datos</h2>
                <p>
                  Implementamos medidas de seguridad técnicas, administrativas y físicas diseñadas para proteger 
                  su información personal contra acceso no autorizado, pérdida, mal uso o alteración. Estas medidas incluyen:
                </p>
                <ul>
                  <li>Encriptación de datos sensibles</li>
                  <li>Protocolos de seguridad HTTPS</li>
                  <li>Firewalls y sistemas de detección de intrusiones</li>
                  <li>Acceso restringido del personal a la información personal</li>
                  <li>Evaluaciones regulares de seguridad</li>
                </ul>
                <p>
                  Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro, 
                  por lo que no podemos garantizar la seguridad absoluta.
                </p>
                
                <h2>8. Transferencias Internacionales de Datos</h2>
                <p>
                  Nuestras operaciones están principalmente basadas en Perú. Sin embargo, podemos transferir su información 
                  a proveedores de servicios ubicados en otros países. Cuando realicemos transferencias internacionales, 
                  implementaremos salvaguardas apropiadas para garantizar la protección de sus datos de acuerdo con 
                  esta Política de Privacidad y las leyes aplicables.
                </p>
                
                <h2>9. Retención de Datos</h2>
                <p>
                  Conservaremos su información personal durante el tiempo necesario para cumplir con los fines 
                  descritos en esta Política de Privacidad, a menos que se requiera o permita un período de retención 
                  más largo por ley. Los criterios para determinar el período de retención incluyen:
                </p>
                <ul>
                  <li>El tiempo necesario para proporcionarle nuestros servicios</li>
                  <li>Si tenemos una obligación legal de conservar los datos</li>
                  <li>Si la retención es aconsejable considerando nuestra posición legal (como en relación con la 
                  aplicación de nuestros términos de servicio, litigios o investigaciones regulatorias)</li>
                </ul>
                
                <h2>10. Sus Derechos</h2>
                <p>
                  Dependiendo de su ubicación, puede tener ciertos derechos con respecto a su información personal:
                </p>
                <ul>
                  <li><strong>Derecho de acceso:</strong> Obtener confirmación de si procesamos su información y 
                  solicitar una copia de la misma</li>
                  <li><strong>Derecho de rectificación:</strong> Solicitar la corrección de información inexacta o incompleta</li>
                  <li><strong>Derecho de eliminación:</strong> Solicitar la eliminación de su información en ciertas circunstancias</li>
                  <li><strong>Derecho a restricción del procesamiento:</strong> Solicitar limitar el procesamiento de su 
                  información en ciertas circunstancias</li>
                  <li><strong>Derecho a la portabilidad de datos:</strong> Recibir sus datos en un formato estructurado, 
                  de uso común y legible por máquina</li>
                  <li><strong>Derecho de oposición:</strong> Oponerse al procesamiento de su información en ciertas circunstancias</li>
                  <li><strong>Derecho a retirar el consentimiento:</strong> Retirar cualquier consentimiento que nos haya 
                  proporcionado previamente</li>
                </ul>
                <p>
                  Para ejercer estos derechos, contáctenos a través de los medios proporcionados en la sección "Contacto" 
                  de esta política.
                </p>
                
                <h2>11. Cookies y Tecnologías Similares</h2>
                <p>
                  Utilizamos cookies y tecnologías similares para recopilar información sobre sus preferencias y actividades en 
                  nuestro sitio web y aplicación. Puede configurar su navegador para rechazar todas las cookies o para indicar 
                  cuándo se está enviando una cookie. Sin embargo, algunas funciones de nuestros servicios pueden no funcionar 
                  correctamente sin cookies.
                </p>
                
                <h2>12. Marketing</h2>
                <p>
                  Podemos enviarle comunicaciones de marketing sobre productos o servicios que creemos que pueden interesarle. 
                  Puede optar por no recibir estas comunicaciones en cualquier momento siguiendo las instrucciones de cancelación 
                  de suscripción en nuestros correos electrónicos o contactándonos directamente.
                </p>
                
                <h2>13. Cambios a esta Política de Privacidad</h2>
                <p>
                  Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas de 
                  información o requisitos legales. Publicaremos la política actualizada en nuestro sitio web e indicaremos 
                  la fecha de la última revisión. Le recomendamos revisar esta política regularmente.
                </p>
                
                <h2>14. Contacto</h2>
                <p>
                  Si tiene preguntas, comentarios o solicitudes relacionadas con esta Política de Privacidad, contáctenos a través de:
                </p>
                <ul>
                  <li>Correo electrónico: privacidad@boleteria.pe</li>
                  <li>Teléfono: +51 (1) 123-4567</li>
                  <li>Dirección: Av. Javier Prado Este 1234, San Isidro, Lima, Perú</li>
                </ul>
                
                <h2>15. Autoridad de Protección de Datos</h2>
                <p>
                  Si no está satisfecho con nuestra respuesta a cualquier consulta relacionada con la privacidad, 
                  tiene derecho a presentar una queja ante la Autoridad Nacional de Protección de Datos Personales (ANPDP) 
                  en Perú o la autoridad de protección de datos correspondiente en su jurisdicción.
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