// src/app/legal/politica-de-reembolso/page.tsx
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function RefundPolicyPage() {
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-display font-bold mb-6 text-center">
              Política de Reembolso
            </h1>
            <p className="text-gray-500 italic text-center mb-8">
              Última actualización: 15 de enero de 2025
            </p>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="prose prose-indigo max-w-none">
                <h2>1. Introducción</h2>
                <p>
                  Esta Política de Reembolso describe las condiciones y procedimientos bajo los cuales 
                  Boletería Perú S.A.C. (en adelante "Boletería") puede procesar reembolsos por compras 
                  realizadas a través de nuestra plataforma. Esta política se aplica a todos los productos 
                  y servicios ofrecidos en nuestro sitio web y aplicación móvil.
                </p>
                
                <h2>2. Consideraciones Generales</h2>
                <p>
                  Boletería actúa como intermediario entre los organizadores de eventos o empresas de transporte 
                  (en adelante "Proveedores") y los usuarios finales. Las políticas de reembolso específicas pueden 
                  variar según el Proveedor, y serán comunicadas durante el proceso de compra.
                </p>
                <p>
                  Como regla general, una vez emitidos los boletos o pasajes, no se aceptan devoluciones ni cambios, 
                  excepto en los casos especificados en esta política o según lo exigido por la legislación aplicable.
                </p>
                
                <h2>3. Motivos para Reembolsos</h2>
                <h3>3.1. Cancelación del Evento o Servicio por el Proveedor</h3>
                <p>
                  Si un evento o servicio de transporte es cancelado por el Proveedor, los usuarios 
                  tendrán derecho a un reembolso según los términos establecidos por dicho Proveedor. 
                  Boletería procesará estos reembolsos conforme a las instrucciones del Proveedor y 
                  notificará a los usuarios afectados a través de los medios de contacto proporcionados.
                </p>
                
                <h3>3.2. Cambios Significativos</h3>
                <p>
                  Si se producen cambios significativos en un evento o servicio (como cambio de fecha, 
                  lugar, horario o artista principal), los usuarios podrán tener derecho a un reembolso 
                  según las políticas del Proveedor. Estos cambios y las opciones disponibles serán 
                  comunicados oportunamente a los usuarios afectados.
                </p>
                
                <h3>3.3. Errores Técnicos</h3>
                <p>
                  Si debido a un error técnico en nuestra plataforma se produce un cargo duplicado 
                  o incorrecto, Boletería procederá con el reembolso correspondiente una vez verificada la situación.
                </p>
                
                <h3>3.4. Cancelación por parte del Usuario</h3>
                <p>
                  Las cancelaciones voluntarias por parte del usuario están sujetas a las políticas específicas 
                  de cada Proveedor, las cuales son comunicadas durante el proceso de compra. En general:
                </p>
                <ul>
                  <li>
                    <strong>Eventos:</strong> La mayoría de los eventos no permiten cancelaciones ni reembolsos 
                    una vez emitidos los boletos, a menos que el Proveedor especifique lo contrario.
                  </li>
                  <li>
                    <strong>Transporte:</strong> Algunas empresas de transporte permiten cancelaciones con 
                    penalidades, que varían según la antelación con la que se solicite la cancelación.
                  </li>
                </ul>
                
                <h2>4. Procedimiento para Solicitar un Reembolso</h2>
                <p>
                  Para solicitar un reembolso, el usuario debe seguir estos pasos:
                </p>
                <ol>
                  <li>
                    Iniciar sesión en su cuenta y dirigirse a la sección "Mis Compras" o "Mis Boletos".
                  </li>
                  <li>
                    Seleccionar la compra para la cual desea solicitar el reembolso y hacer clic en "Solicitar Reembolso".
                  </li>
                  <li>
                    Completar el formulario de solicitud de reembolso, especificando el motivo de la solicitud.
                  </li>
                  <li>
                    Adjuntar la documentación de respaldo requerida, si corresponde.
                  </li>
                  <li>
                    Enviar la solicitud y esperar la respuesta de nuestro equipo de atención al cliente.
                  </li>
                </ol>
                <p>
                  Alternativamente, el usuario puede contactar a nuestro servicio de atención al cliente 
                  a través de los canales especificados en la sección "Contacto" de esta política.
                </p>
                
                <h2>5. Plazos de Reembolso</h2>
                <p>
                  El tiempo de procesamiento de los reembolsos varía según el método de pago utilizado:
                </p>
                <ul>
                  <li>
                    <strong>Tarjetas de crédito/débito:</strong> El reembolso se procesará dentro de los 
                    5 días hábiles siguientes a la aprobación de la solicitud. Sin embargo, puede tomar 
                    hasta 30 días para que el monto aparezca en el estado de cuenta del usuario, dependiendo 
                    de las políticas de la entidad financiera emisora de la tarjeta.
                  </li>
                  <li>
                    <strong>Transferencias bancarias:</strong> El reembolso se procesará dentro de los 
                    5 días hábiles siguientes a la aprobación de la solicitud, una vez que el usuario 
                    haya proporcionado la información bancaria requerida.
                  </li>
                  <li>
                    <strong>Otros métodos de pago:</strong> Los plazos de reembolso para otros métodos 
                    de pago serán comunicados al usuario al momento de aprobar la solicitud.
                  </li>
                </ul>
                
                <h2>6. Montos de Reembolso</h2>
                <p>
                  El monto del reembolso puede variar según las circunstancias:
                </p>
                <ul>
                  <li>
                    <strong>Cancelación del evento o servicio por el Proveedor:</strong> Reembolso del 
                    100% del valor pagado, incluyendo cargos por servicio, a menos que el Proveedor 
                    especifique condiciones diferentes.
                  </li>
                  <li>
                    <strong>Errores técnicos:</strong> Reembolso del monto cobrado incorrectamente.
                  </li>
                  <li>
                    <strong>Cancelación por parte del usuario:</strong> El monto dependerá de las políticas 
                    del Proveedor y podría estar sujeto a penalidades o descuentos. En algunos casos, 
                    los cargos por servicio de Boletería no son reembolsables.
                  </li>
                </ul>
                
                <h2>7. Excepciones</h2>
                <p>
                  Boletería se reserva el derecho de evaluar cada solicitud de reembolso de manera individual 
                  y hacer excepciones a esta política en casos justificados, como emergencias médicas o 
                  circunstancias extraordinarias debidamente documentadas.
                </p>
                
                <h2>8. Cancelación y Reprogramación de Eventos</h2>
                <p>
                  En caso de cancelación o reprogramación de un evento, Boletería notificará a los usuarios 
                  a través de los medios de contacto proporcionados (correo electrónico, SMS, notificaciones 
                  en la aplicación) tan pronto como reciba la información oficial del Proveedor.
                </p>
                <p>
                  Para eventos reprogramados, los boletos originales generalmente siguen siendo válidos para 
                  la nueva fecha. Si el usuario no puede asistir en la nueva fecha, la posibilidad de 
                  reembolso dependerá de las políticas del Proveedor.
                </p>
                
                <h2>9. Disputas y Reclamaciones</h2>
                <p>
                  Si un usuario no está de acuerdo con la resolución de una solicitud de reembolso, puede 
                  presentar una reclamación formal a través de nuestro servicio de atención al cliente. 
                  Cada reclamación será evaluada de manera individual, teniendo en cuenta las circunstancias 
                  específicas y la documentación proporcionada.
                </p>
                
                <h2>10. Cambios en la Política de Reembolso</h2>
                <p>
                  Boletería se reserva el derecho de modificar esta Política de Reembolso en cualquier momento. 
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestra 
                  plataforma. Los reembolsos solicitados antes de cualquier cambio estarán sujetos a la política 
                  vigente en el momento de la compra.
                </p>
                
                <h2>11. Contacto</h2>
                <p>
                  Para cualquier consulta relacionada con reembolsos, por favor contáctenos a través de:
                </p>
                <ul>
                  <li>Correo electrónico: reembolsos@boleteria.pe</li>
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