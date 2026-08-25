import React from 'react';
import { cn } from '@utils/cn';

interface TechBadgeProps {
  name: string;
  className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-0.5 text-xs font-mono font-medium text-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
        className
      )}
    >
      {name}
    </span>
  );
};

TechBadge.displayName = 'TechBadge';
