import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'destructive' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
}

export function ActionButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false
}: ActionButtonProps) {
  const variantStyles = {
    primary: 'bg-brand-blue hover:bg-brand-blue/90 text-text-primary border-brand-blue/50 shadow-[0_0_20px_rgba(79,126,255,0.3)]',
    secondary: 'bg-surface-card hover:bg-surface-card/80 text-text-primary border-border-subtle',
    destructive: 'bg-destructive/20 hover:bg-destructive/30 text-red-400 border-red-500/30',
    success: 'bg-success-green hover:bg-success-green/90 text-primary-bg border-success-green/50 shadow-[0_0_20px_rgba(61,220,151,0.2)]',
    warning: 'bg-warning-amber/20 hover:bg-warning-amber/30 text-warning-amber border-warning-amber/50'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-xl border font-semibold transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
      `}
    >
      {children}
    </button>
  );
}
