import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * 统一的容器组件
 * 提供响应式的最大宽度和内边距
 */
export function Container({ 
  children, 
  className,
  size = 'xl'
}: ContainerProps) {
  const maxWidthClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div 
      className={cn(
        'mx-auto px-4 md:px-6 lg:px-8',
        maxWidthClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}
