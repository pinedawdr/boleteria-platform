"use client";

// user-platform/src/components/sections/CategoriesSection.tsx
import Card from '../ui/Card';
import { useRouter } from 'next/navigation';

const categories = [
  {
    id: 'conciertos',
    title: 'Conciertos',
    image: '/images/category-concerts.jpg',
    color: 'from-purple-500',
  },
  {
    id: 'teatro',
    title: 'Teatro',
    image: '/images/category-theater.jpg',
    color: 'from-red-500',
  },
  {
    id: 'deportes',
    title: 'Deportes',
    image: '/images/category-sports.jpg',
    color: 'from-blue-500',
  },
  {
    id: 'fiestas-clubes',
    title: 'Fiestas/Clubes',
    image: '/images/category-parties.jpg',
    color: 'from-pink-500',
  },
  {
    id: 'transporte-terrestre',
    title: 'Transporte Terrestre',
    image: '/images/category-land.jpg',
    color: 'from-green-500',
  },
  {
    id: 'transporte-acuatico',
    title: 'Transporte Acuático',
    image: '/images/category-water.jpg',
    color: 'from-cyan-500',
  },
];

const CategoriesSection = () => {
  const router = useRouter();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-12">
          Explora por Categorías
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="relative overflow-hidden rounded-lg h-64 group cursor-pointer"
              onClick={() => router.push(`/${category.id}`)}
            >
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} to-transparent opacity-70 z-10`} />
              <img 
                src={category.image} 
                alt={category.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h3 className="text-white text-2xl font-montserrat font-bold">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;