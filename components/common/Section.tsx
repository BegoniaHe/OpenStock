import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg';
}

/**
 * 统一的页面区块组件
 * 提供一致的间距和布局
 */
export function Section({ 
  children, 
  className,
  spacing = 'md'
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-6 space-y-4',
    md: 'py-8 space-y-6',
    lg: 'py-12 space-y-8',
  };

  return (
    <section className={cn(spacingClasses[spacing], className)}>
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ 
  title, 
  description, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-8', className)}>
      <h2 className="text-4xl font-bold text-gray-100 mb-2">{title}</h2>
      {description && (
        <p className="text-gray-400">{description}</p>
      )}
    </div>
  );
}
