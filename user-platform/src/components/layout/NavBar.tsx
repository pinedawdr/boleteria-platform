"use client";

// user-platform/src/components/layout/NavBar.tsx
import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="flex items-center">
                <span className="text-primary text-2xl font-montserrat font-bold">Boletería</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Conciertos', 'Teatro', 'Deportes', 'Fiestas', 'Transporte'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`}
                className="text-dark hover:text-primary px-3 py-2 text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/search">
              <span className="p-2 text-dark hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </Link>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => router.push('/auth/login')}
            >
              Iniciar Sesión
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => router.push('/auth/register')}
            >
              Registrarse
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-dark hover:text-primary"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Conciertos', 'Teatro', 'Deportes', 'Fiestas', 'Transporte'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase()}`}
                className="block px-3 py-2 text-base font-medium text-dark hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <Button 
                variant="outline" 
                size="sm"
                fullWidth
                className="mb-2"
                onClick={() => {
                  router.push('/auth/login');
                  setIsMenuOpen(false);
                }}
              >
                Iniciar Sesión
              </Button>
            </div>
            <div className="px-5">
              <Button 
                variant="primary" 
                size="sm"
                fullWidth
                onClick={() => {
                  router.push('/auth/register');
                  setIsMenuOpen(false);
                }}
              >
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
