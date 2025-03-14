// src/app/user-area/tickets/page.tsx
"use client";

import { useState, useEffect } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Card, { CardContent } from '@/components/ui/Card';
import { useAuth } from '@/context/AuthContext';
import { getUserOrders } from '@/lib/orders';

export default function UserTickets() {
  const { user } = useAuth();
  const [filter, setFilter] = useState<'all' | 'active' | 'used'>('all');
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        const { data, error } = await getUserOrders(user.id);
        
        if (error) throw error;
        
        setOrders(data || []);
      } catch (err: any) {
        setError(err.message || 'Error al cargar los boletos');
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrders();
  }, [user]);
  
  // Convertir las órdenes a tickets para mostrar
  const tickets = orders.flatMap(order => {
    return order.order_items.map((item: any) => ({
      id: item.id,
      name: item.item_type === 'ticket' ? 'Evento' : 'Transporte', // Idealmente tendrías más información
      date: new Date(order.created_at).toLocaleDateString('es-ES'),
      time: new Date(order.created_at).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
      location: 'Ubicación del evento',
      type: item.item_type === 'ticket' ? 'Evento' : 'Transporte',
      seat: 'Asiento asignado',
      price: item.unit_price,
      image: '/images/raices-andinas.jpg', // Imagen de placeholder
      status: order.status === 'completed' && new Date(order.created_at) < new Date() ? 'used' : 'active',
      qrCode: '/images/qr-code-example.png',
      order_id: order.id
    }));
  });
  
  const filteredTickets = tickets.filter(ticket => {
    if (filter === 'all') return true;
    return ticket.status === filter;
  });
  
  if (!user) {
    return (
      <main>
        <NavBar />
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
          <p>Por favor inicia sesión para ver tus boletos</p>
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
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-montserrat font-bold mb-8 text-center">
              Mis Boletos
            </h1>
            
            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    filter === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } border border-gray-200`}
                  onClick={() => setFilter('all')}
                >
                  Todos
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium ${
                    filter === 'active'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } border-t border-b border-gray-200`}
                  onClick={() => setFilter('active')}
                >
                  Activos
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    filter === 'used'
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  } border border-gray-200`}
                  onClick={() => setFilter('used')}
                >
                  Utilizados
                </button>
              </div>
            </div>
            
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="flex flex-col items-center">
                  <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="mt-3 text-gray-600">Cargando tus boletos...</p>
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-red-700">{error}</p>
              </div>
            ) : filteredTickets.length === 0 ? (
              <div className="bg-white rounded-lg shadow border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">No hay boletos disponibles</h3>
                <p className="text-gray-600 mb-4">
                  No tienes ningún boleto {filter === 'active' ? 'activo' : filter === 'used' ? 'utilizado' : ''} en este momento.
                </p>
                <Button
                  variant="primary"
                  onClick={() => window.location.href = '/'}
                >
                  Explorar eventos
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredTickets.map((ticket) => (
                  <Card key={ticket.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 h-48 md:h-auto relative">
                        <img 
                          src={ticket.image} 
                          alt={ticket.name} 
                          className="w-full h-full object-cover"
                        />
                        {ticket.status === 'used' && (
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                            <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-md font-medium">
                              Utilizado
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded mb-2">
                              {ticket.type}
                            </span>
                            <h3 className="text-xl font-bold mb-1">{ticket.name}</h3>
                          </div>
                          {ticket.status === 'active' && (
                            <img 
                              src={ticket.qrCode} 
                              alt="Código QR" 
                              className="w-20 h-20"
                            />
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Fecha y hora</p>
                            <p className="font-medium">{ticket.date} - {ticket.time}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Ubicación</p>
                            <p className="font-medium">{ticket.location}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Asiento</p>
                            <p className="font-medium">{ticket.seat}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Precio</p>
                            <p className="font-medium">S/{ticket.price}</p>
                          </div>
                        </div>
                        
                        {ticket.status === 'active' && (
                          <div className="flex flex-wrap gap-3">
                            <Button variant="primary">
                              Ver boleto completo
                            </Button>
                            <Button variant="outline">
                              Descargar PDF
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}