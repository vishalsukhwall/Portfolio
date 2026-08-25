import React, { ElementType } from 'react';
import { cn } from '@utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ as: Component = 'div', children, className, ...props }) => {
  return (
    <Component className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </Component>
  );
};
Container.displayName = 'Container';
