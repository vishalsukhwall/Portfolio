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
        <label htmlFor={id} className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label} {required && <span className="text-teal-600 dark:text-teal-400">*</span>}
        </label>
        <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
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
            "w-full resize-none rounded-xl px-4 py-3.5 transition-colors duration-200 outline-none text-sm",
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
      </div>
      {isInvalid && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-xs font-medium text-rose-500 dark:text-rose-400">
          {error}
        </p>
      )}
    </div>
  );
};

FormTextarea.displayName = 'FormTextarea';
export default FormTextarea;
