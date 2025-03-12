// src/app/user-area/profile/page.tsx
"use client";

import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '987654321',
    documentType: 'dni',
    documentNumber: '12345678',
    address: 'Av. Arequipa 123, Lima',
    notificationsEmail: true,
    notificationsSMS: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para actualizar el perfil
    console.log('Datos actualizados:', formData);
    setIsEditing(false);
  };

  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-montserrat font-bold mb-8 text-center">
              Mi Perfil
            </h1>
            
            <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-16 w-16 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-semibold">
                      {formData.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold">{formData.name}</h2>
                      <p className="text-gray-600">{formData.email}</p>
                    </div>
                  </div>
                  
                  {!isEditing && (
                    <Button 
                      variant="outline"
                      onClick={() => setIsEditing(true)}
                    >
                      Editar perfil
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="documentType" className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de documento
                      </label>
                      <select
                        id="documentType"
                        name="documentType"
                        value={formData.documentType}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
                      >
                        <option value="dni">DNI</option>
                        <option value="passport">Pasaporte</option>
                        <option value="ce">Carnet de Extranjería</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Número de documento
                      </label>
                      <input
                        type="text"
                        id="documentNumber"
                        name="documentNumber"
                        value={formData.documentNumber}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Dirección
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
                      />
                    </div>
                    
                    {isEditing && (
                      <div className="md:col-span-2 mt-4">
                        <h3 className="font-medium mb-3">Preferencias de notificaciones</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              id="notificationsEmail"
                              name="notificationsEmail"
                              checked={formData.notificationsEmail}
                              onChange={handleInputChange}
                              className="mt-1 h-4 w-4 text-secondary rounded border-gray-300 focus:ring-secondary"
                            />
                            <label htmlFor="notificationsEmail" className="ml-2 block text-sm text-gray-700">
                              Recibir notificaciones por correo electrónico
                            </label>
                          </div>
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              id="notificationsSMS"
                              name="notificationsSMS"
                              checked={formData.notificationsSMS}
                              onChange={handleInputChange}
                              className="mt-1 h-4 w-4 text-secondary rounded border-gray-300 focus:ring-secondary"
                            />
                            <label htmlFor="notificationsSMS" className="ml-2 block text-sm text-gray-700">
                              Recibir notificaciones por SMS
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {isEditing && (
                    <div className="mt-6 flex justify-end space-x-3">
                      <Button
                        variant="outline"
                        type="button"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancelar
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                      >
                        Guardar cambios
                      </Button>
                    </div>
                  )}
                </form>
              </div>
              
              {!isEditing && (
                <div className="px-6 py-4 bg-gray-50 border-t">
                  <p className="text-sm text-gray-600">
                    Para cambiar tu contraseña, <a href="/user-area/change-password" className="text-secondary hover:underline">haz clic aquí</a>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}