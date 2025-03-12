// src/components/ui/Card.tsx
import { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  bordered?: boolean;
  padded?: boolean;
}

const Card: FC<CardProps> = ({ 
  children, 
  className, 
  onClick,
  hoverable = false,
  bordered = true,
  padded = false
}) => {
  return (
    <div 
      className={classNames(
        'bg-white rounded-lg overflow-hidden',
        bordered ? 'border border-gray-100' : 'shadow-card',
        hoverable && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated',
        onClick && 'cursor-pointer',
        padded && 'p-5',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardImage: FC<{ 
  src: string; 
  alt: string; 
  className?: string;
  aspectRatio?: 'auto' | 'square' | 'video';
}> = ({ 
  src, 
  alt, 
  className,
  aspectRatio = 'auto'
}) => {
  const aspectRatioClasses = {
    'auto': '',
    'square': 'aspect-square',
    'video': 'aspect-video',
  };

  return (
    <div className={classNames(
      'w-full overflow-hidden', 
      aspectRatioClasses[aspectRatio],
      className
    )}>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
  );
};

export const CardContent: FC<{ 
  children: ReactNode; 
  className?: string;
}> = ({ 
  children, 
  className 
}) => (
  <div className={classNames('p-5', className)}>
    {children}
  </div>
);

export const CardTitle: FC<{
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}> = ({
  children,
  className,
  as: Component = 'h3'
}) => (
  <Component className={classNames(
    'font-display font-semibold text-gray-900',
    className
  )}>
    {children}
  </Component>
);

export const CardFooter: FC<{
  children: ReactNode;
  className?: string;
}> = ({
  children,
  className
}) => (
  <div className={classNames(
    'px-5 py-4 border-t border-gray-100',
    className
  )}>
    {children}
  </div>
);

export default Card;