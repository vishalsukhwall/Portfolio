import React from 'react';
import { cn } from '@utils/cn';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string;
  touched?: boolean;
  maxLength?: number;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  id,
  label,
  error,
  touched,
  required,
  className,
  value,
  maxLength = 2000,
  ...props
}) => {
  const isValid = touched && !error && value;
  const isInvalid = touched && !!error;
  const currentValueLength = typeof value === 'string' ? value.length : 0;

  return (
    <div className={cn("w-full mb-4", className)}>
      <div className="flex justify-between items-end mb-2">
        <label htmlFor={id} className="block text-sm font-medium text-neutral-300">
          {label} {required && <span className="text-accent">*</span>}
        </label>
        <span className="text-xs text-neutral-500">
          {currentValueLength}/{maxLength}
        </span>
      </div>
      <div className="relative">
        <textarea
          id={id}
          value={value}
          required={required}
          maxLength={maxLength}
          rows={5}
          aria-required={required}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? `${id}-error` : undefined}
          className={cn(
            "w-full resize-none bg-neutral-800/50 border rounded-lg px-4 py-3 text-white transition-all outline-none",
            "focus:border-accent focus:shadow-[0_0_15px_rgba(0,212,255,0.2)] focus:ring-1 focus:ring-accent",
            isInvalid ? "border-red-500 animate-[shake_0.5s_ease-in-out]" : 
            isValid ? "border-green-500" : "border-neutral-700"
          )}
          {...props}
        />
      </div>
      {isInvalid && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

FormTextarea.displayName = 'FormTextarea';
