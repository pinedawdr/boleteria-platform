// src/app/search/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Card, { CardImage, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

// Datos de ejemplo combinados (eventos y transporte)
const allItems = [
  {
    id: '1',
    title: 'Raíces Andinas Fest',
    image: '/images/raices-andinas.jpg',
    date: '15 de abril de 2023',
    location: 'Estadio Nacional, Lima',
    price: 'S/80 - S/350',
    type: 'event',
    category: 'Concierto'
  },
  {
    id: '2',
    title: 'Lima Summer Beats',
    image: '/images/summer-beats.jpg',
    date: '5-6 de febrero de 2023',
    location: 'Costa Verde, San Miguel',
    price: 'S/180 - S/590',
    type: 'event',
    category: 'Festival'
  },
  {
    id: '3',
    title: 'El Fantasma de los Andes',
    image: '/images/fantasma-andes.jpg',
    date: '10-30 de marzo de 2023',
    location: 'Teatro Segura, Lima',
    price: 'S/50 - S/120',
    type: 'event',
    category: 'Teatro'
  },
  {
    id: '4',
    title: 'Clásico del Fútbol Peruano',
    image: '/images/clasico-futbol.jpg',
    date: '25 de marzo de 2023',
    location: 'Estadio Monumental, Lima',
    price: 'S/30 - S/180',
    type: 'event',
    category: 'Deporte'
  },
  {
    id: '5',
    title: 'Lima - Cusco VIP',
    image: '/images/lima-cusco.jpg',
    date: 'Diario - 22:00',
    location: 'Cruz del Sur',
    price: 'S/280',
    type: 'transport',
    category: 'Transporte Terrestre'
  },
  {
    id: '6',
    title: 'Puno - Islas Uros Premium',
    image: '/images/puno-uros.jpg',
    date: 'Diario - 08:00, 10:00, 14:00',
    location: 'Titicaca Explorer',
    price: 'S/85',
    type: 'transport',
    category: 'Transporte Acuático'
  },
  {
    id: '7',
    title: 'Ollantaytambo - Aguas Calientes',
    image: '/images/tren-machu-picchu.jpg',
    date: 'Diario - 06:10, 07:20, 11:30',
    location: 'Peru Rail',
    price: 'S/70 - S/450',
    type: 'transport',
    category: 'Transporte Terrestre'
  },
  {
    id: '8',
    title: 'Festival Electrónico Lima',
    image: '/images/festival-electronico.jpg',
    date: '15 de mayo de 2023',
    location: 'Playa Agua Dulce, Lima',
    price: 'S/120 - S/250',
    type: 'event',
    category: 'Fiestas'
  }
];

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || 'all',
    category: searchParams.get('category') || 'all',
    price: searchParams.get('price') || 'all',
    date: searchParams.get('date') || 'all'
  });
  const [results, setResults] = useState(allItems);
  
  // Simular la búsqueda cuando cambian los filtros o el término de búsqueda
  useEffect(() => {
    // Aplicar filtros
    let filteredResults = allItems;
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      filteredResults = filteredResults.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filtrar por tipo
    if (filters.type !== 'all') {
      filteredResults = filteredResults.filter(item => item.type === filters.type);
    }
    
    // Filtrar por categoría
    if (filters.category !== 'all') {
      filteredResults = filteredResults.filter(item => item.category === filters.category);
    }
    
    // Aquí podríamos agregar más filtros para precio y fecha
    
    setResults(filteredResults);
  }, [searchTerm, filters]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Actualiza la URL con los parámetros de búsqueda
    const params = new URLSearchParams();
    if (searchTerm) params.set('q', searchTerm);
    if (filters.type !== 'all') params.set('type', filters.type);
    if (filters.category !== 'all') params.set('category', filters.category);
    if (filters.price !== 'all') params.set('price', filters.price);
    if (filters.date !== 'all') params.set('date', filters.date);
    
    router.push(`/search?${params.toString()}`);
  };
  
  const handleFilterChange = (name: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <main>
      <NavBar />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-montserrat font-bold mb-8 text-center">
            Búsqueda
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-secondary focus:border-secondary"
                  placeholder="Buscar eventos, artistas, lugares, transporte..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="primary" type="submit" className="whitespace-nowrap">
                Buscar
              </Button>
            </form>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filtros laterales */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                <h2 className="font-semibold text-lg mb-4">Filtros</h2>
                
                <div className="space-y-6">
                  {/* Tipo */}
                  <div>
                    <h3 className="font-medium text-sm text-gray-700 mb-2">Tipo</h3>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value="all"
                          checked={filters.type === 'all'}
                          onChange={(e) => handleFilterChange('type', e.target.value)}
                          className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Todos</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value="event"
                          checked={filters.type === 'event'}
                          onChange={(e) => handleFilterChange('type', e.target.value)}
                          className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Eventos</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="type"
                          value="transport"
                          checked={filters.type === 'transport'}
                          onChange={(e) => handleFilterChange('type', e.target.value)}
                          className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">Transporte</span>
                      </label>
                    </div>
                  </div>
                  
                  {/* Categoría */}
                  <div>
                    <h3 className="font-medium text-sm text-gray-700 mb-2">Categoría</h3>
                    <select
                      value={filters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="w-full p-2 text-sm border border-gray-300 rounded-md bg-white focus:ring-secondary focus:border-secondary"
                    >
                      <option value="all">Todas las categorías</option>
                      <option value="Concierto">Concierto</option>
                      <option value="Festival">Festival</option>
                      <option value="Teatro">Teatro</option>
                      <option value="Deporte">Deporte</option>
                     <option value="Fiestas">Fiestas</option>
                     <option value="Transporte Terrestre">Transporte Terrestre</option>
                     <option value="Transporte Acuático">Transporte Acuático</option>
                   </select>
                 </div>
                 
                 {/* Precio */}
                 <div>
                   <h3 className="font-medium text-sm text-gray-700 mb-2">Rango de precio</h3>
                   <select
                     value={filters.price}
                     onChange={(e) => handleFilterChange('price', e.target.value)}
                     className="w-full p-2 text-sm border border-gray-300 rounded-md bg-white focus:ring-secondary focus:border-secondary"
                   >
                     <option value="all">Todos los precios</option>
                     <option value="0-100">S/0 - S/100</option>
                     <option value="100-200">S/100 - S/200</option>
                     <option value="200-300">S/200 - S/300</option>
                     <option value="300+">S/300+</option>
                   </select>
                 </div>
                 
                 {/* Fecha */}
                 <div>
                   <h3 className="font-medium text-sm text-gray-700 mb-2">Fecha</h3>
                   <select
                     value={filters.date}
                     onChange={(e) => handleFilterChange('date', e.target.value)}
                     className="w-full p-2 text-sm border border-gray-300 rounded-md bg-white focus:ring-secondary focus:border-secondary"
                   >
                     <option value="all">Todas las fechas</option>
                     <option value="today">Hoy</option>
                     <option value="tomorrow">Mañana</option>
                     <option value="this-week">Esta semana</option>
                     <option value="this-month">Este mes</option>
                     <option value="next-month">Próximo mes</option>
                   </select>
                 </div>
                 
                 <Button 
                   variant="outline" 
                   fullWidth
                   onClick={() => {
                     setFilters({
                       type: 'all',
                       category: 'all',
                       price: 'all',
                       date: 'all'
                     });
                     setSearchTerm('');
                   }}
                 >
                   Limpiar filtros
                 </Button>
               </div>
             </div>
           </div>
           
           {/* Resultados */}
           <div className="lg:col-span-3">
             <h2 className="text-xl font-semibold mb-4">
               {results.length} {results.length === 1 ? 'resultado' : 'resultados'} encontrados
             </h2>
             
             {results.length === 0 ? (
               <div className="bg-white rounded-lg shadow border border-gray-100 p-8 text-center">
                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <h3 className="text-lg font-medium mb-2">No hay resultados</h3>
                 <p className="text-gray-600 mb-4">
                   No se encontraron resultados para tu búsqueda. Intenta con otros términos o filtros.
                 </p>
                 <Button
                   variant="primary"
                   onClick={() => {
                     setFilters({
                       type: 'all',
                       category: 'all',
                       price: 'all',
                       date: 'all'
                     });
                     setSearchTerm('');
                   }}
                 >
                   Limpiar búsqueda
                 </Button>
               </div>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {results.map((item) => (
                   <Card 
                     key={item.id} 
                     hoverable
                     onClick={() => router.push(`/${item.type === 'event' ? 'events' : 'transport'}/${item.id}`)}
                     className="group"
                   >
                     <div className="relative">
                       <CardImage 
                         src={item.image} 
                         alt={item.title} 
                         aspectRatio="video"
                       />
                       <span className="absolute top-3 left-3 bg-secondary/90 text-white px-2 py-1 text-xs rounded-md backdrop-blur-sm">
                         {item.category}
                       </span>
                     </div>
                     <CardContent>
                       <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary transition-colors">
                         {item.title}
                       </h3>
                       <div className="space-y-2 mb-4">
                         <div className="flex items-center text-sm text-gray-600">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                           </svg>
                           {item.date}
                         </div>
                         <div className="flex items-center text-sm text-gray-600">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                           </svg>
                           {item.location}
                         </div>
                       </div>
                       <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                         <div className="text-secondary font-semibold">{item.price}</div>
                         <Button variant="primary" size="sm">
                           Ver detalles
                         </Button>
                       </div>
                     </CardContent>
                   </Card>
                 ))}
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