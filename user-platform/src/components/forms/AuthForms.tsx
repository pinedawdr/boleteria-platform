"use client";

// user-platform/src/components/forms/AuthForms.tsx
'use client';

import { useState } from 'react';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // En un entorno real, aquí se conectaría con Supabase
      // Por ahora, simplemente simulamos autenticación
      
      if (type === 'register') {
        if (password !== confirmPassword) {
          throw new Error('Las contraseñas no coinciden');
        }
        
        // Simulación de registro
        console.log('Registro con:', { name, email, password });
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simular latencia
        
        // Redirigir al usuario después del registro exitoso
        router.push('/auth/login?registered=true');
      } else {
        // Simulación de inicio de sesión
        console.log('Login con:', { email, password });
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simular latencia
        
        // Redirigir al usuario después del inicio de sesión exitoso
        router.push('/');
      }
    } catch (error: any) {
      setError(error.message || 'Ha ocurrido un error. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-montserrat font-bold text-dark">
          {type === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
        </h2>
        <p className="mt-2 text-gray-600">
          {type === 'login' 
            ? '¡Bienvenido nuevamente! Ingresa tus credenciales para continuar.' 
            : 'Regístrate para disfrutar de descuentos y contenido exclusivo.'}
        </p>
      </div>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
          {error}
        </div>
      )}
      
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        {type === 'register' && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Nombre completo"
            />
          </div>
        )}
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="correo@ejemplo.com"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={type === 'login' ? 'current-password' : 'new-password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="********"
            minLength={8}
          />
        </div>
        
        {type === 'register' && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar contraseña
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="********"
              minLength={8}
            />
          </div>
        )}
        
        {type === 'login' && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
                Recordarme
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary/80">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
        )}
        
        <div>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={loading}
            className="relative"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
              </span>
            ) : (
              type === 'login' ? 'Iniciar Sesión' : 'Registrarse'
            )}
          </Button>
        </div>
      </form>
      
      <div className="mt-4 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">O continúa con</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </button>
          <button
            type="button"
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M20.007 3H3.993A.993.993 0 003 3.993v16.014c0 .549.444.993.993.993h8.621v-6.971h-2.346v-2.717h2.346V9.309c0-2.324 1.421-3.591 3.495-3.591.699-.002 1.397.034 2.092.105v2.43h-1.436c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.351 2.717h-2.365V21h4.608a.993.993 0 00.993-.993V3.993A.993.993 0 0020.007 3z" />
            </svg>
            Facebook
          </button>
        </div>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          {type === 'login' ? (
            <>
              ¿No tienes una cuenta?{' '}
              <a 
                href="/auth/register" 
                className="font-medium text-primary hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/auth/register');
                }}
              >
                Regístrate
              </a>
            </>
          ) : (
            <>
              ¿Ya tienes una cuenta?{' '}
              <a 
                href="/auth/login" 
                className="font-medium text-primary hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/auth/login');
                }}
              >
                Inicia sesión
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;