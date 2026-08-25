import React, { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@utils/cn';

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
  type?: 'button' | 'submit';
  href?: string;
  target?: string;
  ariaLabel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, loading, icon, type = 'button', className, href, target, ariaLabel, disabled, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed rounded-md";
    
    const variantClasses = {
      primary: "bg-accent text-white hover:bg-accent-dark shadow hover:shadow-lg",
      secondary: "border border-accent text-accent hover:bg-accent/10",
      ghost: "text-text-secondary hover:text-accent"
    };
    
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-7 py-3.5 text-lg"
    };

    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
    const motionProps = {
      whileHover: disabled || loading ? undefined : { scale: 1.05 },
      whileTap: disabled || loading ? undefined : { scale: 0.95 }
    };

    const content = (
      <>
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {!loading && icon && <span className="mr-2">{icon}</span>}
        {children}
      </>
    );

    if (href) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          className={classes}
          aria-label={ariaLabel}
          {...motionProps}
          {...(props as any)}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled || loading}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';
