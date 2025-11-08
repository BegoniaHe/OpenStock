import { ReactNode } from 'react';
import { commonStyles } from '@/lib/design-system';
import { cn } from '@/lib/utils';

type CardVariant = 'base' | 'elevated' | 'interactive';

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  onClick?: () => void;
}

/**
 * 统一的卡片组件
 * 使用设计系统中定义的样式变体
 */
export function Card({ 
  children, 
  variant = 'base', 
  className,
  onClick 
}: CardProps) {
  return (
    <div 
      className={cn(commonStyles.card[variant], className)}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-6', className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h2 className={cn(commonStyles.text.heading, 'text-2xl', className)}>
      {children}
    </h2>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn(commonStyles.text.caption, className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('mt-6 flex items-center gap-4', className)}>
      {children}
    </div>
  );
}
