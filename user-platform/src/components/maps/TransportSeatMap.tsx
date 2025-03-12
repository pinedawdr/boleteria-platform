"use client";

// user-platform/src/components/maps/TransportSeatMap.tsx
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
  type: 'VIP (180°)' | 'Ejecutivo (160°)' | 'Económico' | 'Premium' | 'Turista' | 'Vistadome' | 'Backpacker';
}

interface TransportType {
  id: string;
  name: string;
  description: string;
  seatMap: {
    rows: number;
    columns: number;
    unavailableSeats: string[];
    specialFeatures: {
      type: 'aisle' | 'bathroom' | 'door' | 'driver';
      position: { row: number; col: number };
    }[];
  };
}

interface TransportSeatMapProps {
  transportId: string;
  transportType: 'bus' | 'boat' | 'train';
  onSelectionChange?: (seats: Seat[]) => void;
}

// Ejemplo de configuraciones para diferentes tipos de transporte
const transportConfigs: Record<string, TransportType> = {
  'bus-vip': {
    id: 'bus-vip',
    name: 'Bus VIP Cruz del Sur',
    description: 'Bus de 2 pisos con asientos 180°',
    seatMap: {
      rows: 10,
      columns: 4,
      unavailableSeats: ['A1', 'A4', 'F1', 'F2', 'F3', 'F4'],
      specialFeatures: [
        { type: 'driver', position: { row: 0, col: 0 } },
        { type: 'door', position: { row: 0, col: 3 } },
        { type: 'aisle', position: { row: 5, col: 1 } },
        { type: 'aisle', position: { row: 5, col: 2 } },
        { type: 'bathroom', position: { row: 9, col: 3 } },
      ],
    },
  },
  'bus-ejecutivo': {
    id: 'bus-ejecutivo',
    name: 'Bus Ejecutivo Cruz del Sur',
    description: 'Bus con asientos 160° y servicios a bordo',
    seatMap: {
      rows: 12,
      columns: 4,
      unavailableSeats: ['A1', 'A4', 'G1', 'G2', 'G3', 'G4'],
      specialFeatures: [
        { type: 'driver', position: { row: 0, col: 0 } },
        { type: 'door', position: { row: 0, col: 3 } },
        { type: 'aisle', position: { row: 6, col: 1 } },
        { type: 'aisle', position: { row: 6, col: 2 } },
        { type: 'bathroom', position: { row: 11, col: 3 } },
      ],
    },
  },
  'boat-premium': {
    id: 'boat-premium',
    name: 'Barco Premium Titicaca Explorer',
    description: 'Embarcación con cabinas cubiertas y vista panorámica',
    seatMap: {
      rows: 5,
      columns: 6,
      unavailableSeats: [],
      specialFeatures: [
        { type: 'door', position: { row: 0, col: 2 } },
        { type: 'door', position: { row: 0, col: 3 } },
        { type: 'aisle', position: { row: 2, col: 2 } },
        { type: 'aisle', position: { row: 2, col: 3 } },
      ],
    },
  },
  'train-vistadome': {
    id: 'train-vistadome',
    name: 'Tren Vistadome Peru Rail',
    description: 'Vagón con ventanas panorámicas y servicio a bordo',
    seatMap: {
      rows: 8,
      columns: 4,
      unavailableSeats: [],
      specialFeatures: [
        { type: 'door', position: { row: 0, col: 0 } },
        { type: 'door', position: { row: 0, col: 3 } },
        { type: 'door', position: { row: 7, col: 0 } },
        { type: 'door', position: { row: 7, col: 3 } },
        { type: 'aisle', position: { row: 3, col: 1 } },
        { type: 'aisle', position: { row: 3, col: 2 } },
      ],
    },
  },
};

const TransportSeatMap: React.FC<TransportSeatMapProps> = ({ 
  transportId, 
  transportType, 
  onSelectionChange 
}) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [transportConfig, setTransportConfig] = useState<TransportType | null>(null);
  
  // Simular carga de configuración y asientos
  useEffect(() => {
    const fetchTransportConfig = async () => {
      setLoading(true);
      try {
        // Simular llamada a API basada en transportId y tipo
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Seleccionar configuración según el tipo de transporte
        let configKey = '';
        switch (transportType) {
          case 'bus':
            configKey = transportId.includes('vip') ? 'bus-vip' : 'bus-ejecutivo';
            break;
          case 'boat':
            configKey = 'boat-premium';
            break;
          case 'train':
            configKey = 'train-vistadome';
            break;
        }
        
        const config = transportConfigs[configKey];
        setTransportConfig(config);
        
        // Generar asientos basados en la configuración
        const generatedSeats: Seat[] = [];
        const rows = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, config.seatMap.rows).split('');
        
        rows.forEach((row, rowIndex) => {
          for (let colIndex = 0; colIndex < config.seatMap.columns; colIndex++) {
            const seatId = `${row}${colIndex + 1}`;
            
            // Verificar si es un asiento no disponible
            if (config.seatMap.unavailableSeats.includes(seatId)) {
              continue;
            }
            
            // Verificar si es una característica especial
            const isSpecialFeature = config.seatMap.specialFeatures.some(
              feature => feature.position.row === rowIndex && feature.position.col === colIndex
            );
            
            if (isSpecialFeature) {
              continue;
            }
            
            // Determinar tipo de asiento y precio basado en el transporte
            let type: Seat['type'];
            let price: number;
            
            switch (transportType) {
              case 'bus':
                if (transportId.includes('vip')) {
                  type = 'VIP (180°)';
                  price = 280;
                } else {
                  type = 'Ejecutivo (160°)';
                  price = 180;
                }
                break;
              case 'boat':
                if (rowIndex < 2) {
                  type = 'Premium';
                  price = 85;
                } else {
                  type = 'Turista';
                  price = 40;
                }
                break;
              case 'train':
                if (rowIndex < 3) {
                  type = 'Vistadome';
                  price = 450;
                } else {
                  type = 'Backpacker';
                  price = 70;
                }
                break;
              default:
                type = 'Económico';
                price = 120;
            }
            
            // Algunos asientos aleatorios ya están tomados
            const randomStatus: SeatStatus = Math.random() > 0.7 ? 'taken' : 'available';
            
            generatedSeats.push({
              id: seatId,
              row,
              number: colIndex + 1,
              status: randomStatus,
              price,
              type
            });
          }
        });
        
        setSeats(generatedSeats);
      } catch (error) {
        console.error('Error fetching transport config:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTransportConfig();
  }, [transportId, transportType]);
  
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
  
  // Renderizar mapa de asientos según el tipo de transporte
  const renderSeatMap = () => {
    if (!transportConfig) return null;
    
    const rows = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, transportConfig.seatMap.rows).split('');
    const columns = Array.from({ length: transportConfig.seatMap.columns }, (_, i) => i);
    
    return (
      <div className="flex flex-col items-center space-y-2">
        {rows.map((row, rowIndex) => (
          <div key={row} className="flex items-center">
            <div className="w-8 text-right pr-2 font-bold">{row}</div>
            <div className="flex space-x-2">
              {columns.map(col => {
                const seatId = `${row}${col + 1}`;
                const seat = seats.find(s => s.id === seatId);
                
                // Verificar si es un asiento no disponible
                if (transportConfig.seatMap.unavailableSeats.includes(seatId)) {
                  return <div key={`empty-${seatId}`} className="w-10 h-10"></div>;
                }
                
                // Verificar si es una característica especial
                const specialFeature = transportConfig.seatMap.specialFeatures.find(
                  feature => feature.position.row === rowIndex && feature.position.col === col
                );
                
                if (specialFeature) {
                  return (
                    <div 
                      key={`feature-${rowIndex}-${col}`} 
                      className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-sm text-xs"
                    >
                      {specialFeature.type === 'aisle' && 'PASILLO'}
                      {specialFeature.type === 'bathroom' && 'BAÑO'}
                      {specialFeature.type === 'door' && 'PUERTA'}
                      {specialFeature.type === 'driver' && 'PILOTO'}
                    </div>
                  );
                }
                
                if (!seat) return <div key={`empty-${seatId}`} className="w-10 h-10"></div>;
                
                return (
                  <button
                    key={seat.id}
                    className={`w-10 h-10 flex items-center justify-center rounded-sm transition-colors ${
                      seat.status === 'taken' 
                        ? 'bg-gray-300 cursor-not-allowed opacity-50' 
                        : seat.status === 'selected'
                          ? 'bg-green-500 text-white'
                          : transportType === 'bus'
                            ? 'bg-blue-500 hover:bg-blue-600 text-white'
                            : transportType === 'boat'
                              ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                              : 'bg-purple-500 hover:bg-purple-600 text-white'
                    }`}
                    onClick={() => handleSeatClick(seat)}
                    disabled={seat.status === 'taken'}
                    title={`${seatId} - ${seat.type} - S/${seat.price}`}
                  >
                    {seat.number}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
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
      {/* Nombre y descripción del transporte */}
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold">{transportConfig?.name}</h3>
        <p className="text-gray-600">{transportConfig?.description}</p>
      </div>
      
      {/* Leyenda */}
      <div className="mb-6 flex justify-center space-x-6">
        <div className="flex items-center">
          <div className={`w-4 h-4 rounded-sm mr-2 ${
            transportType === 'bus'
              ? 'bg-blue-500'
              : transportType === 'boat'
                ? 'bg-cyan-500'
                : 'bg-purple-500'
          }`}></div>
          <span className="text-sm">Disponible</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-green-500 mr-2"></div>
          <span className="text-sm">Seleccionado</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-sm bg-gray-300 mr-2"></div>
          <span className="text-sm">No disponible</span>
        </div>
      </div>
      
      {/* Diagrama según el tipo de transporte */}
      <div className="mb-8 flex justify-center">
        {transportType === 'bus' && (
          <div className="relative">
            <div className="bg-gray-800 text-white py-2 px-4 rounded-t-lg text-center">
              FRENTE DEL BUS
            </div>
            <div className="border border-gray-300 p-4 rounded-b-lg">
              {renderSeatMap()}
            </div>
          </div>
        )}
        
        {transportType === 'boat' && (
          <div className="relative">
            <div className="bg-cyan-800 text-white py-2 px-4 rounded-t-lg text-center">
              PROA
            </div>
            <div className="border border-gray-300 p-4 rounded-lg border-t-0">
              {renderSeatMap()}
            </div>
            <div className="bg-cyan-800 text-white py-2 px-4 rounded-b-lg text-center mt-1">
              POPA
            </div>
          </div>
        )}
        
        {transportType === 'train' && (
          <div className="relative">
            <div className="bg-purple-800 text-white py-2 px-4 rounded-l-lg absolute top-1/2 -translate-y-1/2 -left-12 transform rotate-90 origin-right">
              LOCOMOTORA
            </div>
            <div className="border border-gray-300 p-4 rounded-lg ml-8">
              {renderSeatMap()}
            </div>
          </div>
        )}
      </div>
      
      {/* Resumen de selección */}
      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">Asientos seleccionados ({selectedSeats.length})</h3>
        {selectedSeats.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {selectedSeats.map(seat => (
              <div key={seat.id} className="bg-gray-50 p-2 rounded flex justify-between items-center">
                <div>
                  <span className="font-medium">Asiento {seat.id}</span>
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

export default TransportSeatMap;