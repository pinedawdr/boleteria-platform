"use client";

// user-platform/src/components/ui/Card.tsx
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: FC<CardProps> = ({ 
  children, 
  className, 
  onClick,
  hoverable = false
}) => {
  return (
    <div 
      className={classNames(
        'bg-white rounded-lg shadow-md overflow-hidden',
        hoverable && 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg',
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
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
    />
  </div>
);

export const CardContent: FC<{ children: ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={classNames('p-4', className)}>
    {children}
  </div>
);

export default Card;