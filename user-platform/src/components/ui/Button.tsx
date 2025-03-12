// src/components/ui/Button.tsx
import { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-1';
  
  const variantStyles = {
    primary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-sm',
    secondary: 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 focus:ring-gray-500 shadow-sm',
    outline: 'border border-secondary text-secondary hover:bg-secondary/5 focus:ring-secondary',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    accent: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent shadow-sm',
    white: 'bg-white text-gray-800 hover:bg-white/90 focus:ring-white shadow-sm',
  };
  
  const sizeStyles = {
    sm: 'text-sm h-8 px-3 py-1',
    md: 'text-sm h-10 px-4 py-2',
    lg: 'text-base h-12 px-6 py-3',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={classNames(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyles,
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;