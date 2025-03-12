// user-platform/src/components/ui/Card.tsx
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  bordered?: boolean;
}

const Card: FC<CardProps> = ({ 
  children, 
  className, 
  onClick,
  hoverable = false,
  bordered = false
}) => {
  return (
    <div 
      className={classNames(
        'bg-white rounded-xl shadow-soft overflow-hidden',
        hoverable && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-medium',
        bordered && 'border border-gray-200',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardImage: FC<{ src: string; alt: string; className?: string }> = ({ 
  src, 
  alt, 
  className 
}) => (
  <div className={classNames('w-full overflow-hidden', className)}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
    />
  </div>
);

export const CardContent: FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={classNames('p-6', className)}>
    {children}
  </div>
);

export default Card;