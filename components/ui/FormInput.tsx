'use client'

import { forwardRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'default' | 'premium'
  required?: boolean
}

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'default' | 'premium'
  required?: boolean
}

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'default' | 'premium'
  required?: boolean
  children: React.ReactNode
}

const inputVariants = {
  default: {
    base: 'px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 bg-gray-50 focus:bg-white',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50'
  },
  premium: {
    base: 'px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-300 bg-white',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50'
  }
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ 
    label, 
    error, 
    helperText, 
    variant = 'default',
    required = false,
    className, 
    id,
    ...props 
  }, ref) => {
    const [focused, setFocused] = useState(false)
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
    
    const inputClasses = cn(
      // Base styles
      'w-full rounded-xl transition-all duration-200 text-sm sm:text-base',
      'focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600',
      'placeholder:text-gray-400',
      // Variant and state styles
      error 
        ? inputVariants[variant].error 
        : inputVariants[variant].base,
      // Custom classes
      className
    )

    const labelClasses = cn(
      'block text-sm sm:text-base font-semibold mb-2',
      error ? 'text-red-700' : 'text-gray-900'
    )

    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={inputId} className={labelClasses}>
            {label}
            {required && (
              <span className="text-yellow-600 ml-1" aria-label="required field">*</span>
            )}
          </label>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={inputClasses}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${inputId}-error` : 
            helperText ? `${inputId}-helper` : undefined
          }
          {...props}
        />
        
        {error && (
          <p 
            id={`${inputId}-error`}
            className="text-sm text-red-600 flex items-start gap-1"
            role="alert"
          >
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p 
            id={`${inputId}-helper`}
            className="text-sm text-gray-600"
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

FormInput.displayName = 'FormInput'

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ 
    label, 
    error, 
    helperText, 
    variant = 'default',
    required = false,
    className, 
    id,
    rows = 4,
    ...props 
  }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-')
    
    const textareaClasses = cn(
      // Base styles
      'w-full rounded-xl transition-all duration-200 text-sm sm:text-base resize-y min-h-[100px]',
      'focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600',
      'placeholder:text-gray-400',
      // Variant and state styles
      error 
        ? inputVariants[variant].error 
        : inputVariants[variant].base,
      // Custom classes
      className
    )

    const labelClasses = cn(
      'block text-sm sm:text-base font-semibold mb-2',
      error ? 'text-red-700' : 'text-gray-900'
    )

    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={textareaId} className={labelClasses}>
            {label}
            {required && (
              <span className="text-yellow-600 ml-1" aria-label="required field">*</span>
            )}
          </label>
        )}
        
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={textareaClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${textareaId}-error` : 
            helperText ? `${textareaId}-helper` : undefined
          }
          {...props}
        />
        
        {error && (
          <p 
            id={`${textareaId}-error`}
            className="text-sm text-red-600 flex items-start gap-1"
            role="alert"
          >
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p 
            id={`${textareaId}-helper`}
            className="text-sm text-gray-600"
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

FormTextarea.displayName = 'FormTextarea'

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ 
    label, 
    error, 
    helperText, 
    variant = 'default',
    required = false,
    className, 
    id,
    children,
    ...props 
  }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-')
    
    const selectClasses = cn(
      // Base styles
      'w-full rounded-xl transition-all duration-200 text-sm sm:text-base',
      'focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600',
      'cursor-pointer',
      // Variant and state styles
      error 
        ? inputVariants[variant].error 
        : inputVariants[variant].base,
      // Custom classes
      className
    )

    const labelClasses = cn(
      'block text-sm sm:text-base font-semibold mb-2',
      error ? 'text-red-700' : 'text-gray-900'
    )

    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={selectId} className={labelClasses}>
            {label}
            {required && (
              <span className="text-yellow-600 ml-1" aria-label="required field">*</span>
            )}
          </label>
        )}
        
        <select
          ref={ref}
          id={selectId}
          className={selectClasses}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${selectId}-error` : 
            helperText ? `${selectId}-helper` : undefined
          }
          {...props}
        >
          {children}
        </select>
        
        {error && (
          <p 
            id={`${selectId}-error`}
            className="text-sm text-red-600 flex items-start gap-1"
            role="alert"
          >
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p 
            id={`${selectId}-helper`}
            className="text-sm text-gray-600"
          >
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

FormSelect.displayName = 'FormSelect'

// Form field wrapper for consistent spacing
export const FormField = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-2.5 sm:space-y-3', className)} {...props} />
  )
)

FormField.displayName = 'FormField'

export { FormInput, FormTextarea, FormSelect }




