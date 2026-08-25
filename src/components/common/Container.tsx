import React, { type ElementType, type ReactNode } from 'react';
import { cn } from '@utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ as: Component = 'div', children, className, ...props }) => {
  const Tag = Component as any;
  return (
    <Tag className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </Tag>
  );
};
Container.displayName = 'Container';
