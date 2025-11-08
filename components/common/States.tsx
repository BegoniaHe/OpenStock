import { cn } from '@/lib/utils';
import { commonStyles } from '@/lib/design-system';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * 统一的加载指示器组件
 */
export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={cn(commonStyles.loading.spinner, sizeClasses[size], className)} />
  );
}

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export function LoadingState({ message = 'Loading...', className }: LoadingStateProps) {
  return (
    <div className={cn('flex items-center justify-center py-8', className)}>
      <LoadingSpinner />
      <span className="ml-3 text-gray-400">{message}</span>
    </div>
  );
}

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({ 
  title, 
  description, 
  icon, 
  action,
  className 
}: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center text-center py-12', className)}>
      {icon && (
        <div className="mb-4 text-gray-500">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-400 mb-2">{title}</h3>
      {description && (
        <p className="text-gray-500 mb-6 max-w-md">{description}</p>
      )}
      {action && action}
    </div>
  );
}

interface ErrorStateProps {
  error: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({ error, onRetry, className }: ErrorStateProps) {
  return (
    <div className={cn('text-center py-8', className)}>
      <p className="text-red-500 mb-4">{error}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className={cn(commonStyles.button.secondary, 'px-4 py-2')}
        >
          Try Again
        </button>
      )}
    </div>
  );
}
