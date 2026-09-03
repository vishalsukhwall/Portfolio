import React, { type ElementType, type ReactNode } from 'react';
import { cn } from '@utils/cn';

export interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ as: Component = 'span', children, className, ...props }) => {
  const Tag = Component as any;
  return (
    <Tag 
      className={cn("bg-clip-text text-transparent bg-gradient-to-r from-accent to-alt bg-[length:200%_auto] animate-gradient", className)} 
      {...props}
    >
      {children}
    </Tag>
  );
};
GradientText.displayName = 'GradientText';
