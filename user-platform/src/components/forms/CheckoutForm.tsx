"use client";

// user-platform/src/components/forms/CheckoutForm.tsx
'use client';

import { useState } from 'react';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

// Definiciones de tipos
interface CheckoutItem {
  id: string;
  name: string;
  type: string;
  price: number;
  quantity: number;
  details?: string;
}

interface CheckoutFormProps {
  items: CheckoutItem[];
  type: 'event' | 'transport';
  onSuccess?: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ items, type, onSuccess }) => {
  const router = useRouter();
  
  // Estados para el formulario
  const [activeStep, setActiveStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'yape' | 'paypal' | ''>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Datos del formulario
  const [formData, setFormData] = useState({
    // Datos personales
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    documentType: 'dni',
    documentNumber: '',
    
    // Datos de pago con tarjeta
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVC: '',
    
    // Datos adicionales para transporte
    passengerNames: items.map(() => ''),
    passengerDocuments: items.map(() => ''),
  });
  
  // Cálculos de precios
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const serviceFee = Math.round(subtotal * 0.05); // 5% de cargo por servicio
  const total = subtotal + serviceFee;
  
  // Manejo de cambios en el formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Manejo de datos de pasajeros (solo para transporte)
  const handlePassengerChange = (index: number, field: 'name' | 'document', value: string) => {
    if (field === 'name') {
      const newPassengerNames = [...formData.passengerNames];
      newPassengerNames[index] = value;
      setFormData(prev => ({ ...prev, passengerNames: newPassengerNames }));
    } else {
      const newPassengerDocuments = [...formData.passengerDocuments];
      newPassengerDocuments[index] = value;
      setFormData(prev => ({ ...prev, passengerDocuments: newPassengerDocuments }));
    }
  };
  
  // Validación para cada paso
  const validateStep = (step: number) => {
    setError('');
    
    switch (step) {
      case 1: // Datos personales
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.documentNumber) {
          setError('Por favor completa todos los campos obligatorios.');
          return false;
        }
        // Validar email con regex simple
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          setError('Por favor ingresa un correo electrónico válido.');
          return false;
        }
        // Validar número de documento
        if (formData.documentType === 'dni' && !/^\d{8}$/.test(formData.documentNumber)) {
          setError('El DNI debe tener 8 dígitos.');
          return false;
        }
        return true;
        
      case 2: // Datos de pasajeros (solo para transporte)
        if (type === 'transport') {
          const emptyPassengerName = formData.passengerNames.some(name => !name);
          const emptyPassengerDocument = formData.passengerDocuments.some(doc => !doc);
          if (emptyPassengerName || emptyPassengerDocument) {
            setError('Por favor completa los datos de todos los pasajeros.');
            return false;
          }
        }
        return true;
        
      case 3: // Método de pago
        if (!paymentMethod) {
          setError('Por favor selecciona un método de pago.');
          return false;
        }
        
        if (paymentMethod === 'card') {
          if (!formData.cardNumber || !formData.cardName || !formData.cardExpiry || !formData.cardCVC) {
            setError('Por favor completa todos los datos de la tarjeta.');
            return false;
          }
          // Validar número de tarjeta (16 dígitos)
          if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
            setError('El número de tarjeta debe tener 16 dígitos.');
            return false;
          }
          // Validar fecha de expiración (MM/YY)
          if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
            setError('La fecha de expiración debe tener el formato MM/YY.');
            return false;
          }
          // Validar CVC (3-4 dígitos)
          if (!/^\d{3,4}$/.test(formData.cardCVC)) {
            setError('El código de seguridad debe tener 3 o 4 dígitos.');
            return false;
          }
        }
        return true;
        
      default:
        return true;
    }
  };
  
  // Navegación entre pasos
  const nextStep = () => {
    if (validateStep(activeStep)) {
      setActiveStep(prev => prev + 1);
    }
  };
  
  const prevStep = () => {
    setActiveStep(prev => prev - 1);
  };
  
  // Procesamiento de pago
  const processPayment = async () => {
    if (!validateStep(3)) return;
    
    setLoading(true);
    setError('');
    
    try {
      // Simulación de procesamiento de pago
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí iría la lógica real de procesamiento de pago con API
      
      // Redirigir a página de confirmación
      if (onSuccess) {
        onSuccess();
      } else {
        router.push('/checkout/success');
      }
    } catch (error: any) {
      setError(error.message || 'Ha ocurrido un error al procesar el pago. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="max-w-3xl mx-auto">
      {/* Pasos del checkout */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {/* Paso 1: Información personal */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              activeStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              1
            </div>
            <span className="text-sm mt-1">Datos personales</span>
          </div>
          
          {/* Línea de conexión */}
          <div className={`flex-1 h-1 mx-4 ${
            activeStep > 1 ? 'bg-primary' : 'bg-gray-200'
          }`}></div>
          
          {/* Paso 2: Datos adicionales */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              activeStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              2
            </div>
            <span className="text-sm mt-1">
              {type === 'transport' ? 'Pasajeros' : 'Confirmación'}
            </span>
          </div>
          
          {/* Línea de conexión */}
          <div className={`flex-1 h-1 mx-4 ${
            activeStep > 2 ? 'bg-primary' : 'bg-gray-200'
          }`}></div>
          
          {/* Paso 3: Pago */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              activeStep >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              3
            </div>
            <span className="text-sm mt-1">Pago</span>
          </div>
        </div>
      </div>
      
      {/* Contenedor de formulario */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        {/* Mensajes de error */}
        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
            <p>{error}</p>
          </div>
        )}
        
        {/* Paso 1: Información personal */}
        {activeStep === 1 && (
          <div>
            <h2 className="text-xl font-bold mb-6">Información personal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Apellido *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="documentType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de documento *
                </label>
                <select
                  id="documentType"
                  name="documentType"
                  value={formData.documentType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                >
                  <option value="dni">DNI</option>
                  <option value="passport">Pasaporte</option>
                  <option value="ce">Carnet de Extranjería</option>
                </select>
              </div>
              <div>
                <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de documento *
                </label>
                <input
                  type="text"
                  id="documentNumber"
                  name="documentNumber"
                  value={formData.documentNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <Button variant="primary" onClick={nextStep}>
                Continuar
              </Button>
            </div>
          </div>
        )}
        
        {/* Paso 2: Datos de pasajeros (para transporte) o Confirmación (para eventos) */}
        {activeStep === 2 && (
          <div>
            <h2 className="text-xl font-bold mb-6">
              {type === 'transport' ? 'Datos de pasajeros' : 'Confirmación de compra'}
            </h2>
            
            {type === 'transport' ? (
              <div>
                <p className="mb-4 text-gray-600">
                  Por favor completa los datos de cada pasajero. Estos datos son necesarios para la emisión de los boletos.
                </p>
                
                {items.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4 mb-4">
                    <h3 className="font-medium mb-3">Pasajero {index + 1} - {item.type}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          value={formData.passengerNames[index]}
                          onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Número de documento *
                        </label>
                        <input
                          type="text"
                          value={formData.passengerDocuments[index]}
                          onChange={(e) => handlePassengerChange(index, 'document', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <p className="mb-4 text-gray-600">
                  Por favor revisa los detalles de tu compra antes de continuar con el pago.
                </p>
                
                {/* Resumen de compra para eventos */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h3 className="font-medium mb-2">Detalles de la compra</h3>
                  <div className="space-y-2">
                    {items.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <div>
                          <span className="font-medium">{item.quantity}x</span> {item.name} - {item.type}
                          {item.details && <p className="text-sm text-gray-500">{item.details}</p>}
                        </div>
                        <span>S/{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between border-t pt-4">
                  <span className="font-medium">Subtotal</span>
                  <span>S/{subtotal}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Cargo por servicio</span>
                  <span>S/{serviceFee}</span>
                </div>
                <div className="flex justify-between border-t pt-4 text-lg font-bold">
                  <span>Total</span>
                  <span>S/{total}</span>
                </div>
              </div>
            )}
            
            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                Atrás
              </Button>
              <Button variant="primary" onClick={nextStep}>
                Continuar
              </Button>
            </div>
          </div>
        )}
        
        {/* Paso 3: Método de pago */}
        {activeStep === 3 && (
          <div>
            <h2 className="text-xl font-bold mb-6">Método de pago</h2>
            
            {/* Resumen de pago */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Subtotal</span>
                <span>S/{subtotal}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Cargo por servicio</span>
                <span>S/{serviceFee}</span>
              </div>
              <div className="flex justify-between pt-2 border-t text-lg font-bold">
                <span>Total a pagar</span>
                <span>S/{total}</span>
              </div>
            </div>
            
            {/* Opciones de pago */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Selecciona un método de pago</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  type="button"
                  className={`border rounded-lg p-4 flex flex-col items-center transition-colors ${
                    paymentMethod === 'card'
                      ? 'border-primary bg-primary/5'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setPaymentMethod('card')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span>Tarjeta de crédito/débito</span>
                </button>
                
                <button
                  type="button"
                  className={`border rounded-lg p-4 flex flex-col items-center transition-colors ${
                    paymentMethod === 'yape'
                      ? 'border-primary bg-primary/5'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setPaymentMethod('yape')}
                >
                  <span className="text-xl font-bold mb-2">Y</span>
                  <span>Yape</span>
                </button>
                
                <button
                  type="button"
                  className={`border rounded-lg p-4 flex flex-col items-center transition-colors ${
                    paymentMethod === 'paypal'
                      ? 'border-primary bg-primary/5'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setPaymentMethod('paypal')}
                >
                  <span className="text-xl font-bold mb-2">P</span>
                  <span>PayPal</span>
                </button>
              </div>
            </div>
            
            {/* Formulario de tarjeta de crédito */}
            {paymentMethod === 'card' && (
              <div className="border rounded-lg p-4 mb-6">
                <h3 className="font-medium mb-3">Detalles de la tarjeta</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de tarjeta *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre en la tarjeta *
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="JOHN SMITH"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha de expiración *
                    </label>
                    <input
                      type="text"
                      id="cardExpiry"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardCVC" className="block text-sm font-medium text-gray-700 mb-1">
                      Código de seguridad *
                    </label>
                    <input
                      type="text"
                      id="cardCVC"
                      name="cardCVC"
                      value={formData.cardCVC}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Yape */}
            {paymentMethod === 'yape' && (
              <div className="border rounded-lg p-4 mb-6 text-center">
                <h3 className="font-medium mb-3">Pago con Yape</h3>
                <div className="bg-gray-100 rounded-lg p-6 inline-block mb-3">
                  <div className="text-lg font-bold mb-2">Código QR</div>
                  <div className="w-48 h-48 bg-gray-300 mx-auto"></div>
                </div>
                <p className="text-gray-600">
                  Escanea el código QR con tu aplicación Yape para completar el pago.
                </p>
              </div>
            )}
            
            {/* PayPal */}
            {paymentMethod === 'paypal' && (
              <div className="border rounded-lg p-4 mb-6 text-center">
                <h3 className="font-medium mb-3">Pago con PayPal</h3>
                <p className="text-gray-600 mb-4">
                  Serás redirigido a PayPal para completar el pago de forma segura.
                </p>
                <div className="inline-block bg-[#0070ba] text-white px-4 py-2 rounded-lg">
                  PayPal Checkout
                </div>
              </div>
            )}
            
            {/* Términos y condiciones */}
            <div className="mb-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                  Acepto los <a href="#" className="text-primary hover:underline">Términos y Condiciones</a> y la <a href="#" className="text-primary hover:underline">Política de Privacidad</a> de Boletería.
                </label>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={prevStep}>
                Atrás
              </Button>
              <Button 
                variant="primary" 
                onClick={processPayment}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  `Pagar S/${total}`
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;