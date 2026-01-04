'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export type CardSize = 'small' | 'medium' | 'large' | 'form'
export type CardVariant = 'default' | 'pricing' | 'feature' | 'info' | 'premium'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: CardSize
  variant?: CardVariant
  hover?: boolean
  popular?: boolean
}

const cardSizes = {
  small: 'p-4 sm:p-5',
  medium: 'p-5 sm:p-6 md:p-8', 
  large: 'p-6 sm:p-8 md:p-10 lg:p-12',
  form: 'p-6 sm:p-8 md:p-10'
}

const cardVariants = {
  default: 'bg-white border-2 border-gray-100',
  pricing: 'bg-white border-2 border-gray-200',
  feature: 'bg-white border border-gray-100',
  info: 'bg-white border border-gray-200',
  premium: 'bg-white border-2 border-yellow-600 ring-2 ring-yellow-100/50'
}

const cardShadows = {
  small: 'shadow-sm hover:shadow-md',
  medium: 'shadow-md hover:shadow-lg',
  large: 'shadow-lg hover:shadow-xl',
  form: 'shadow-xl'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    size = 'medium', 
    variant = 'default', 
    hover = true,
    popular = false,
    className, 
    children, 
    ...props 
  }, ref) => {
    const shadowSize = size === 'form' ? 'form' : 
                      size === 'small' ? 'small' :
                      size === 'large' ? 'large' : 'medium'

    const classes = cn(
      // Base styles
      'relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300',
      // Size-based padding
      cardSizes[size],
      // Variant styles
      popular ? cardVariants.premium : cardVariants[variant],
      // Shadow styles
      hover && size !== 'form' ? cardShadows[shadowSize] : cardShadows.form,
      // Hover effects
      hover && size !== 'form' && 'hover:border-yellow-300 transform hover:-translate-y-0.5',
      // Popular card scaling
      popular && 'scale-[1.02]',
      // Custom classes
      className
    )

    return (
      <div ref={ref} className={classes} {...props}>
        {/* Premium background pattern for popular cards */}
        {popular && (
          <div className="absolute inset-0 opacity-[0.03] hexagon-pattern pointer-events-none" />
        )}
        
        {/* Shimmer effect on hover */}
        {hover && size !== 'form' && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        )}
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {children}
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'

// Card components for common patterns
export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 pb-6', className)} {...props} />
  )
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn('text-xl sm:text-2xl font-bold leading-none tracking-tight', className)} {...props}>
      {children}
    </h3>
  )
)
CardTitle.displayName = 'CardTitle'

export const CardDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm sm:text-base text-gray-600 leading-relaxed', className)} {...props} />
  )
)
CardDescription.displayName = 'CardDescription'

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex-1', className)} {...props} />
  )
)
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center pt-6', className)} {...props} />
  )
)
CardFooter.displayName = 'CardFooter'

// Convenience components for common card types
export const PricingCard = forwardRef<HTMLDivElement, Omit<CardProps, 'variant' | 'size'>>((props, ref) => (
  <Card ref={ref} variant="pricing" size="large" {...props} />
))
PricingCard.displayName = 'PricingCard'

export const FeatureCard = forwardRef<HTMLDivElement, Omit<CardProps, 'variant' | 'size'>>((props, ref) => (
  <Card ref={ref} variant="feature" size="medium" {...props} />
))
FeatureCard.displayName = 'FeatureCard'

export const InfoCard = forwardRef<HTMLDivElement, Omit<CardProps, 'variant' | 'size'>>((props, ref) => (
  <Card ref={ref} variant="info" size="small" {...props} />
))
InfoCard.displayName = 'InfoCard'

export const FormCard = forwardRef<HTMLDivElement, Omit<CardProps, 'variant' | 'size' | 'hover'>>((props, ref) => (
  <Card ref={ref} variant="default" size="form" hover={false} {...props} />
))
FormCard.displayName = 'FormCard'

export default Card

