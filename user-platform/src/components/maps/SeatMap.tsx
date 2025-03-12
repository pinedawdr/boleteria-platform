"use client";

// user-platform/src/components/maps/SeatMap.tsx
'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';

// Definición de tipos
type SeatStatus = 'available' | 'selected' | 'taken';

interface Seat {
  id: string;
  row: string;
  number: number;
  status: SeatStatus;
  price: number;
  type: 'VIP' | 'Preferencial' | 'General' | 'Ultra VIP' | 'Playa General' | 'Platea' | 'Mezzanine' | 'Balcón' | 'Occidente' | 'Oriente' | 'Norte' | 'Sur';
}

interface SeatMapProps {
  eventId: string;
  onSelectionChange?: (seats: Seat[]) => void;
}

const SeatMap: React.FC<SeatMapProps> = ({ eventId, onSelectionChange }) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [viewMode, setViewMode] = useState<'zone' | 'price'>('zone');
  
  // Simular carga de asientos desde API
  useEffect(() => {
    const fetchSeats = async () => {
      setLoading(true);
      try {
        // Simular llamada API basada en eventId
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Crear un mapa de asientos de ejemplo
        const exampleSeats: Seat[] = [];
        
        // Generar filas y asientos
        const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        const types = ['VIP', 'Preferencial', 'General'];
        const prices = {
          'VIP': 350,
          'Preferencial': 180,
          'General': 80
        };
        
        rows.forEach((row, rowIndex) => {
          // Determinar tipo de asiento basado en la fila
          let type: 'VIP' | 'Preferencial' | 'General';
          if (rowIndex < 3) {
            type = 'VIP';
          } else if (rowIndex < 6) {
            type = 'Preferencial';
          } else {
            type = 'General';
          }
          
          // Número de asientos por fila (incrementa con la distancia del escenario)
          const seatsInRow = 10 + rowIndex * 2;
          
          for (let i = 1; i <= seatsInRow; i++) {
            // Algunos asientos aleatorios ya están tomados
            const randomStatus: SeatStatus = Math.random() > 0.8 ? 'taken' : 'available';
            
            exampleSeats.push({
              id: `${row}-${i}`,
              row,
              number: i,
              status: randomStatus,
              price: prices[type as keyof typeof prices],
              type: type as any
            });
          }
        });
        
        setSeats(exampleSeats);
      } catch (error) {
        console.error('Error fetching seats:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSeats();
  }, [eventId]);
  
  // Manejar selección de asiento
  const handleSeatClick = (seat: Seat) => {
    if (seat.status === 'taken') return;
    
    setSeats(prev => 
      prev.map(s => 
        s.id === seat.id
          ? { ...s, status: s.status === 'selected' ? 'available' : 'selected' }
          : s
      )
    );
    
    // Actualizar lista de asientos seleccionados
    setSelectedSeats(prev => {
      if (prev.some(s => s.id === seat.id)) {
        return prev.filter(s => s.id !== seat.id);
      } else {
        return [...prev, { ...seat, status: 'selected' }];
      }
    });
  };
  
  // Notificar cambios en la selección
  useEffect(() => {
    onSelectionChange && onSelectionChange(selectedSeats);
  }, [selectedSeats, onSelectionChange]);
  
  // Agrupar asientos por filas para renderizar
  const seatsByRow = seats.reduce((acc, seat) => {
    if (!acc[seat.row]) {
      acc[seat.row] = [];
    }
    acc[seat.row].push(seat);
    return acc;
  }, {} as Record<string, Seat[]>);
  
  // Obtener color basado en tipo o precio
  const getSeatColor = (seat: Seat) => {
    if (seat.status === 'taken') return 'bg-gray-300';
    if (seat.status === 'selected') return 'bg-green-500';
    
    if (viewMode === 'zone') {
      switch (seat.type) {
        case 'VIP': return 'bg-purple-500 hover:bg-purple-600';
        case 'Preferencial': return 'bg-blue-500 hover:bg-blue-600';
        case 'General': return 'bg-cyan-500 hover:bg-cyan-600';
        case 'Ultra VIP': return 'bg-pink-500 hover:bg-pink-600';
        case 'Playa General': return 'bg-yellow-500 hover:bg-yellow-600';
        default: return 'bg-gray-500 hover:bg-gray-600';
      }
    } else {
      // Escala de colores basada en precio
      if (seat.price >= 300) return 'bg-red-500 hover:bg-red-600';
      if (seat.price >= 200) return 'bg-orange-500 hover:bg-orange-600';
      if (seat.price >= 100) return 'bg-yellow-500 hover:bg-yellow-600';
      return 'bg-green-500 hover:bg-green-600';
    }
  };
  
  if (loading) {
    return (
      <div className="p-8 flex justify-center">
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-3 text-gray-600">Cargando mapa de asientos...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-4">
      {/* Toggle para cambiar la vista */}
      <div className="mb-6 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              viewMode === 'zone'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } border border-gray-200`}
            onClick={() => setViewMode('zone')}
          >
            Por Zona
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              viewMode === 'price'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } border border-gray-200`}
            onClick={() => setViewMode('price')}
          >
            Por Precio
          </button>
        </div>
      </div>
      
      {/* Leyenda */}
      <div className="mb-6 flex justify-center space-x-6">
        {viewMode === 'zone' ? (
          <>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-sm bg-purple-500 mr-2"></div>
              <span className="text-sm">VIP</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-sm bg-blue-500 mr-2"></div>
              <span className="text-sm">Preferencial</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-sm bg-cyan-500 mr-2"></div>
              <span className="text-sm">General</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-sm bg-red-500 mr-2"></div>
              <span className="text-sm">S/300+</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-sm bg-orange-500 mr-2"></div>
              <span className="text-sm">S/200-299</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-sm bg-yellow-500 mr-2"></div>
              <span className="text-sm">S/100-199</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-sm bg-green-500 mr-2"></div>
              <span className="text-sm">Menos de S/100</span>
            </div>
          </>
        )}
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-green-500 mr-2"></div>
          <span className="text-sm">Seleccionado</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-gray-300 mr-2"></div>
          <span className="text-sm">No disponible</span>
        </div>
      </div>
      
      {/* Escenario */}
      <div className="w-full bg-gray-800 text-white py-3 text-center rounded-lg mb-8">
        ESCENARIO
      </div>
      
      {/* Mapa de asientos */}
      <div className="flex flex-col items-center space-y-2 mb-8">
        {Object.keys(seatsByRow).sort().map(row => (
          <div key={row} className="flex items-center">
            <div className="w-8 text-right pr-2 font-bold">{row}</div>
            <div className="flex space-x-1">
              {seatsByRow[row].map(seat => (
                <button
                  key={seat.id}
                  className={`w-6 h-6 text-xs rounded-sm transition-colors ${getSeatColor(seat)} ${
                    seat.status === 'taken' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                  } ${seat.status === 'selected' ? 'text-white' : 'text-white'}`}
                  onClick={() => handleSeatClick(seat)}
                  disabled={seat.status === 'taken'}
                  title={`Fila ${seat.row}, Asiento ${seat.number} - ${seat.type} - S/${seat.price}`}
                >
                  {seat.number}
                </button>
              ))}
            </div>
            <div className="w-8 text-left pl-2 font-bold">{row}</div>
          </div>
        ))}
      </div>
      
      {/* Resumen de selección */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Asientos seleccionados ({selectedSeats.length})</h3>
        {selectedSeats.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {selectedSeats.map(seat => (
              <div key={seat.id} className="bg-gray-50 p-2 rounded flex justify-between items-center">
                <div>
                  <span className="font-medium">Fila {seat.row}, Asiento {seat.number}</span>
                  <p className="text-sm text-gray-600">{seat.type}</p>
                </div>
                <div className="text-primary font-semibold">S/{seat.price}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No has seleccionado ningún asiento</p>
        )}
        
        {selectedSeats.length > 0 && (
          <div className="mt-4 flex justify-between items-center">
            <div>
              <span className="text-lg font-bold">Total: </span>
              <span className="text-lg text-primary font-bold">
                S/{selectedSeats.reduce((sum, seat) => sum + seat.price, 0)}
              </span>
            </div>
            <Button variant="primary">
              Continuar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeatMap;