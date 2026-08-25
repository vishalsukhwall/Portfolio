import React, { ElementType } from 'react';
import { cn } from '@utils/cn';

export interface GradientTextProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ as: Component = 'span', children, className, ...props }) => {
  return (
    <Component 
      className={cn("bg-clip-text text-transparent bg-gradient-to-r from-accent to-alt bg-[length:200%_auto] animate-gradient", className)} 
      {...props}
    >
      {children}
    </Component>
  );
};
GradientText.displayName = 'GradientText';
