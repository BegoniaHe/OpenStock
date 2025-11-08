import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { commonStyles } from '@/lib/design-system';

interface TextProps {
  children: ReactNode;
  className?: string;
}

/**
 * 统一的文字组件系统
 * 提供一致的排版样式
 */
export function Heading({ children, className }: TextProps) {
  return (
    <h1 className={cn(commonStyles.text.heading, 'text-4xl', className)}>
      {children}
    </h1>
  );
}

export function Subheading({ children, className }: TextProps) {
  return (
    <h2 className={cn(commonStyles.text.subheading, 'text-2xl', className)}>
      {children}
    </h2>
  );
}

export function Title({ children, className }: TextProps) {
  return (
    <h3 className={cn(commonStyles.text.subheading, 'text-xl', className)}>
      {children}
    </h3>
  );
}

export function Body({ children, className }: TextProps) {
  return (
    <p className={cn(commonStyles.text.body, className)}>
      {children}
    </p>
  );
}

export function Caption({ children, className }: TextProps) {
  return (
    <span className={cn(commonStyles.text.caption, className)}>
      {children}
    </span>
  );
}

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: 'base' | 'subtle';
  external?: boolean;
}

export function Link({ 
  children, 
  href, 
  className,
  variant = 'base',
  external = false 
}: LinkProps) {
  return (
    <a
      href={href}
      className={cn(commonStyles.link[variant], className)}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}
