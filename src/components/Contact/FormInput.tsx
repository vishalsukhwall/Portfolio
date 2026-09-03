import React from 'react';
import { cn } from '@utils/cn';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  touched?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  error,
  touched,
  required,
  className,
  value,
  ...props
}) => {
  const isValid = touched && !error && value;
  const isInvalid = touched && !!error;

  return (
    <div className={cn("w-full mb-4", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-300 mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          value={value}
          required={required}
          aria-required={required}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? `${id}-error` : undefined}
          className={cn(
            "w-full bg-neutral-800/50 border rounded-lg px-4 py-3 text-white transition-all outline-none",
            "focus:border-accent focus:shadow-[0_0_15px_rgba(0,212,255,0.2)] focus:ring-1 focus:ring-accent",
            isInvalid ? "border-red-500 animate-[shake_0.5s_ease-in-out]" : 
            isValid ? "border-green-500" : "border-neutral-700"
          )}
          {...props}
        />
        {isValid && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        )}
      </div>
      {isInvalid && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

FormInput.displayName = 'FormInput';
