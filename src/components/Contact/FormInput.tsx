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
      <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
        {label} {required && <span className="text-teal-600 dark:text-teal-400">*</span>}
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
            "w-full rounded-xl px-4 py-3.5 transition-colors duration-200 outline-none text-sm",
            "bg-neutral-100/90 dark:bg-neutral-900/80",
            "border border-neutral-300 dark:border-neutral-800",
            "text-neutral-900 dark:text-white",
            "placeholder:text-neutral-400 dark:placeholder:text-neutral-500",
            "focus:border-teal-500 focus:ring-1 focus:ring-teal-500",
            isInvalid ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500 animate-[shake_0.5s_ease-in-out]" : 
            isValid ? "border-emerald-500 dark:border-emerald-500" : ""
          )}
          {...props}
        />
        {isValid && (
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-500 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        )}
      </div>
      {isInvalid && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-xs font-medium text-rose-500 dark:text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
};

FormInput.displayName = 'FormInput';
export default FormInput;
