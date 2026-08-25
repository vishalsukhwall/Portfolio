import React from 'react';
import { cn } from '@utils/cn';

export interface BadgeProps {
  children: string;
  variant?: 'default' | 'accent' | 'alt';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className }) => {
  const baseClasses = "px-2.5 py-0.5 text-xs rounded-full font-mono inline-flex items-center";
  
  const variantClasses = {
    default: "bg-neutral-800 dark:bg-neutral-800 text-neutral-300 border border-neutral-700",
    accent: "bg-accent/10 text-accent border border-accent/30",
    alt: "bg-alt/10 text-alt border border-alt/30"
  };

  return (
    <span className={cn(baseClasses, variantClasses[variant], className)}>
      {children}
    </span>
  );
};
Badge.displayName = 'Badge';
