// user-platform/src/components/ui/Button.tsx
import { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary',
    outline: 'border border-primary text-primary hover:bg-primary/10 focus:ring-primary',
    ghost: 'text-primary hover:bg-primary/10 focus:ring-primary',
    success: 'bg-success text-white hover:bg-success/90 focus:ring-success',
  };
  
  const sizeStyles = {
    sm: 'text-sm h-9 px-3',
    md: 'text-base h-10 px-4',
    lg: 'text-lg h-12 px-6',
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
      {children}
    </button>
  );
};

export default Button;