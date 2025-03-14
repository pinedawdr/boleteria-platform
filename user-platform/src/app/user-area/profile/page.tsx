// src/app/user-area/profile/page.tsx
"use client";

import { useState, useEffect } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import { updateUserProfile } from '@/lib/auth';

export default function UserProfile() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    document_type: 'dni',
    document_number: '',
    address: '',
    notificationsEmail: true,
    notificationsSMS: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (user?.profile) {
      setFormData({
        first_name: user.profile.first_name || '',
        last_name: user.profile.last_name || '',
        phone: user.profile.phone || '',
        document_type: user.profile.document_type || 'dni',
        document_number: user.profile.document_number || '',
        address: user.profile.address || '',
        notificationsEmail: true,
        notificationsSMS: false,
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      if (!user) throw new Error('Usuario no autenticado');
      const { error } = await updateUserProfile(user.id, {
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone: formData.phone,
        document_type: formData.document_type,
        document_number: formData.document_number,
        address: formData.address,
      });
      if (error) throw error;
      setSuccess('Perfil actualizado correctamente');
      setIsEditing(false);
    } catch (err: any) {
      setError(err.message || 'Error al actualizar el perfil');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <main>
        <NavBar />
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
          <p>Por favor inicia sesión para ver tu perfil</p>
        </div>
        <Footer />
      </main>
    );
  }

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
                      {formData.first_name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold">{`${formData.first_name} ${formData.last_name}`}</h2>
                      <p className="text-gray-600">{user.email}</p>
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
              
              {success && (
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                  <p className="text-green-700">{success}</p>
                </div>
              )}
              
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                  <p className="text-red-700">{error}</p>
                </div>
              )}
              
              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent disabled:bg-gray-100 disabled:text-gray-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={formData.last_name}
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
                      <label htmlFor="document_type" className="block text-sm font-medium text-gray-700 mb-1">
                        Tipo de documento
                      </label>
                      <select
                        id="document_type"
                        name="document_type"
                        value={formData.document_type}
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
                      <label htmlFor="document_number" className="block text-sm font-medium text-gray-700 mb-1">
                        Número de documento
                      </label>
                      <input
                        type="text"
                        id="document_number"
                        name="document_number"
                        value={formData.document_number}
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
                        disabled={loading}
                      >
                        Cancelar
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? 'Guardando...' : 'Guardar cambios'}
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