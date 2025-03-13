// src/components/layout/NavBar.tsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import { useRouter, usePathname } from 'next/navigation';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  
  const categories = [
    { 
      name: 'Eventos', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      submenu: [
        { 
          name: 'Conciertos', 
          path: '/conciertos',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          )
        },
        { 
          name: 'Deportes', 
          path: '/deportes',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
            </svg>
          )
        },
        { 
          name: 'Teatro', 
          path: '/teatro',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )
        },
        { 
          name: 'Entretenimiento', 
          path: '/entretenimiento',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        },
        { 
          name: 'Otros', 
          path: '/otros',
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          )
        },
      ]
    },
    { 
      name: 'Transporte', 
      path: '/transporte',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
      )
    },
    { 
      name: 'Ayuda', 
      path: '/legal/ayuda',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleDropdown = (category: string | null, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsDropdownOpen(isDropdownOpen === category ? null : category);
  };
  
  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Detectar el scroll para cambiar el estilo de la barra de navegación
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="flex items-center">
                  <Image src="/images/logo.svg" alt="Boletería" width={150} height={36} className="h-9 w-auto" />
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {categories.map((category) => {
                const isActive = pathname === category.path || 
                                (category.submenu && category.submenu.some(item => pathname === item.path || pathname?.startsWith(`${item.path}/`)));
                
                if (category.submenu) {
                  return (
                    <div key={category.name} className="relative" ref={dropdownRef}>
                      <button
                        onClick={(e) => handleDropdown(category.name, e)}
                        className={`px-4 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors ${
                          isActive || isDropdownOpen === category.name
                            ? 'text-secondary bg-secondary/5' 
                            : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                        }`}
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen === category.name ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isDropdownOpen === category.name && (
                        <div className="absolute left-0 mt-2 w-60 bg-white shadow-xl rounded-md overflow-hidden z-10 border border-gray-100 animate-fadeIn">
                          <div className="py-2">
                            {category.submenu.map((item) => {
                              const isSubActive = pathname === item.path || pathname?.startsWith(`${item.path}/`);
                              
                              return (
                                <Link
                                  key={item.name}
                                  href={item.path}
                                  className={`flex items-center px-4 py-2.5 text-sm ${
                                    isSubActive 
                                      ? 'text-secondary bg-secondary/5 font-medium' 
                                      : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                                  }`}
                                  onClick={() => setIsDropdownOpen(null)}
                                >
                                  <span className="mr-3 text-gray-500">{item.icon}</span>
                                  {item.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                
                const isItemActive = pathname === category.path || pathname?.startsWith(`${category.path}/`);
                
                return (
                  <Link 
                    key={category.name} 
                    href={category.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium inline-flex items-center transition-colors ${
                      isItemActive 
                        ? 'text-secondary bg-secondary/5' 
                        : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              className="p-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-full transition-colors relative group"
              onClick={() => router.push('/search')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Buscar
              </span>
            </button>
            
            <button 
              className="p-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-full transition-colors relative group"
              onClick={() => router.push('/user-area/tickets')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs bg-gray-800 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Mis Boletos
              </span>
            </button>
            
            <div className="h-6 w-px bg-gray-300 mx-1"></div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => router.push('/auth/login')}
              className="border-0 hover:bg-gray-50 flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Ingresar
            </Button>
            
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => router.push('/auth/register')}
              className="shadow-sm hover:shadow-md font-medium"
            >
              Registrarse
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button 
              className="p-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-full transition-colors"
              onClick={() => router.push('/search')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <button 
              className="p-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-full transition-colors"
              onClick={() => router.push('/user-area/tickets')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </button>
            
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-secondary hover:bg-gray-50 rounded-full transition-colors focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-fadeIn">
          <div className="overflow-hidden">
            <nav className="px-2 pt-2 pb-4">
              {categories.map((category) => {
                const isActive = pathname === category.path || 
                                (category.submenu && category.submenu.some(item => pathname === item.path || pathname?.startsWith(`${item.path}/`)));
                
                if (category.submenu) {
                  return (
                    <div key={category.name} className="py-1">
                      <button
                        onClick={() => handleDropdown(category.name)}
                        className={`flex justify-between items-center w-full px-3 py-2.5 rounded-md text-base font-medium ${
                          isActive || isDropdownOpen === category.name
                            ? 'text-secondary bg-secondary/5' 
                            : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                        }`}
                      >
                        <span className="flex items-center">
                          <span className="mr-3">{category.icon}</span>
                          {category.name}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 transition-transform ${isDropdownOpen === category.name ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isDropdownOpen === category.name && (
                        <div className="mt-1 pl-8 pr-2 pb-1 space-y-1 animate-slideIn">
                          {category.submenu.map((item) => {
                            const isSubActive = pathname === item.path || pathname?.startsWith(`${item.path}/`);
                            
                            return (
                              <Link 
                                key={item.name} 
                                href={item.path}
                                className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium ${
                                  isSubActive
                                    ? 'text-secondary bg-secondary/5'
                                    : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                                }`}
                                onClick={() => {
                                  setIsDropdownOpen(null);
                                  setIsMenuOpen(false);
                                }}
                              >
                                <span className="mr-3 text-gray-500">{item.icon}</span>
                                {item.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                
                const isItemActive = pathname === category.path || pathname?.startsWith(`${category.path}/`);
                
                return (
                  <Link 
                    key={category.name} 
                    href={category.path}
                    className={`flex items-center px-3 py-2.5 rounded-md text-base font-medium ${
                      isItemActive
                        ? 'text-secondary bg-secondary/5'
                        : 'text-gray-700 hover:text-secondary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3">{category.icon}</span>
                    {category.name}
                  </Link>
                );
              })}
            </nav>
            
            <div className="border-t border-gray-200 py-4 px-4 space-y-3">
              <Button 
                variant="outline" 
                size="md"
                fullWidth
                onClick={() => {
                  router.push('/auth/login');
                  setIsMenuOpen(false);
                }}
                className="justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Ingresar
              </Button>
              
              <Button 
                variant="primary" 
                size="md"
                fullWidth
                onClick={() => {
                  router.push('/auth/register');
                  setIsMenuOpen(false);
                }}
                className="justify-center"
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