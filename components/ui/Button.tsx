'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

// Button variant types based on our analysis
export type ButtonVariant = 'primary' | 'secondary' | 'premium' | 'submit'
export type ButtonSize = 'small' | 'medium' | 'large' | 'premium'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

interface ButtonProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: never
  children: React.ReactNode
}

interface LinkButtonProps extends BaseButtonProps {
  href: string
  children: React.ReactNode
  onClick?: never
  type?: never
  disabled?: never
  loading?: never
}

type ButtonComponent = ButtonProps | LinkButtonProps

const buttonVariants = {
  primary: 'bg-yellow-600 hover:bg-yellow-700 text-gray-900 font-bold',
  secondary: 'bg-gray-900 hover:bg-gray-800 text-white font-bold', 
  premium: 'bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 hover:bg-yellow-700 text-gray-900 font-black hover:scale-105',
  submit: 'bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-gray-900 font-bold disabled:cursor-not-allowed'
}

const buttonSizes = {
  small: 'px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm',
  medium: 'px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base',
  large: 'px-6 sm:px-8 py-3 sm:py-4 md:py-5 text-base sm:text-lg',
  premium: 'px-9 sm:px-11 py-5 sm:py-6 text-sm sm:text-base md:text-lg'
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonComponent>(
  ({ 
    variant = 'primary', 
    size = 'medium', 
    className, 
    children, 
    disabled, 
    loading,
    fullWidth = false,
    ...props 
  }, ref) => {
    const baseClasses = cn(
      // Base styles
      'inline-flex items-center justify-center gap-2',
      'rounded-xl',
      'uppercase tracking-wide',
      'transition-all duration-300',
      'shadow-lg hover:shadow-xl',
      'focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2',
      // Variant styles
      buttonVariants[variant],
      // Size styles  
      buttonSizes[size],
      // Premium specific styles
      variant === 'premium' && 'rounded-2xl shadow-2xl hover:shadow-yellow-600/60 duration-500',
      // Width
      fullWidth && 'w-full',
      // Disabled state
      disabled && 'opacity-50 cursor-not-allowed',
      // Loading state
      loading && 'cursor-wait',
      // Custom classes
      className
    )

    // Loading content
    const loadingContent = (
      <>
        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        {typeof children === 'string' ? 'Loading...' : children}
      </>
    )

    // Link button
    if ('href' in props && props.href) {
      return (
        <Link 
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={props.href}
          className={baseClasses}
        >
          <span className="flex items-center justify-center gap-2">
            {children}
          </span>
        </Link>
      )
    }

    // Regular button
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClasses}
        disabled={disabled || loading}
        {...(props as ButtonProps)}
      >
        {loading ? loadingContent : children}
      </button>
    )
  }
)

Button.displayName = 'Button'

// Types for convenience components (without variant)
type ButtonComponentWithoutVariant = Omit<ButtonProps, 'variant'> | Omit<LinkButtonProps, 'variant'>

// Convenience components for common patterns
export const PrimaryButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonComponentWithoutVariant>((props, ref) => (
  <Button ref={ref} variant="primary" {...props} />
))
PrimaryButton.displayName = 'PrimaryButton'

export const SecondaryButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonComponentWithoutVariant>((props, ref) => (
  <Button ref={ref} variant="secondary" {...props} />
))
SecondaryButton.displayName = 'SecondaryButton'

export const PremiumButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonComponentWithoutVariant>((props, ref) => (
  <Button ref={ref} variant="premium" {...props} />
))
PremiumButton.displayName = 'PremiumButton'

export const SubmitButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant' | 'href'>>((props, ref) => (
  <Button ref={ref} variant="submit" type="submit" fullWidth {...props} />
))
SubmitButton.displayName = 'SubmitButton'

export default Button
