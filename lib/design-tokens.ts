/**
 * BeeMobiel Design Token System
 * Centralized design tokens for consistent styling across components
 */

// Color tokens
export const colors = {
  // Primary brand colors
  primary: {
    50: '#fefce8',
    100: '#fef3c7', 
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',  // Main yellow
    600: '#d97706',  // Primary button yellow
    700: '#b45309',  // Hover yellow
    800: '#92400e',
    900: '#78350f'
  },
  
  // Secondary/gray scale
  secondary: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',  // Light borders
    300: '#d1d5db',  // Form borders
    400: '#9ca3af',  // Placeholder text
    500: '#6b7280',
    600: '#4b5563',  // Body text
    700: '#374151',  // Dark text
    800: '#1f2937',  // Heading text
    900: '#111827'   // Dark buttons
  },
  
  // Semantic colors
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    500: '#ef4444',  // Error states
    600: '#dc2626',
    700: '#b91c1c'
  },
  
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    500: '#10b981',
    600: '#059669'
  }
} as const

// Typography tokens
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif']
  },
  
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
    '7xl': ['4.5rem', { lineHeight: '1' }]
  },
  
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  }
} as const

// Spacing tokens (consistent with Tailwind but documented)
export const spacing = {
  // Card padding patterns
  cardPadding: {
    small: 'p-4 sm:p-5',
    medium: 'p-5 sm:p-6 md:p-8',
    large: 'p-6 sm:p-8 md:p-10 lg:p-12',
    form: 'p-6 sm:p-8 md:p-10'
  },
  
  // Button padding patterns
  buttonPadding: {
    small: 'px-4 sm:px-5 py-2 sm:py-2.5',
    medium: 'px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4',
    large: 'px-6 sm:px-8 py-3 sm:py-4 md:py-5',
    premium: 'px-9 sm:px-11 py-5 sm:py-6'
  },
  
  // Form input padding
  inputPadding: {
    default: 'px-4 sm:px-5 py-3 sm:py-4',
    compact: 'px-3 sm:px-4 py-2.5 sm:py-3'
  },
  
  // Section padding patterns  
  sectionPadding: {
    small: 'py-6 sm:py-8 md:py-10 lg:py-12',      // Stats
    standard: 'py-6 sm:py-10 md:py-14 lg:py-16',    // Most sections
    large: 'py-12 sm:py-16 md:py-20 lg:py-24',      // Tips sections
    pricing: 'py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40', // Pricing sections
    cta: 'py-16 sm:py-20 md:py-24 lg:py-28'         // CTA sections
  },
  
  // Container padding (consistent across all)
  containerPadding: 'px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8',
  
  // Gaps for grids
  gridGap: {
    small: 'gap-3 sm:gap-4',
    medium: 'gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12',
    large: 'gap-6 sm:gap-8 md:gap-10 lg:gap-12',
    tips: 'gap-12 sm:gap-16 md:gap-20 lg:gap-16'
  }
} as const

// Shadow tokens
export const shadows = {
  card: {
    small: 'shadow-sm hover:shadow-md',
    medium: 'shadow-md hover:shadow-lg', 
    large: 'shadow-lg hover:shadow-xl',
    form: 'shadow-xl',
    premium: 'shadow-xl hover:shadow-2xl',
    hero: 'shadow-2xl'
  },
  
  button: {
    default: 'shadow-lg hover:shadow-xl',
    premium: 'shadow-2xl hover:shadow-yellow-600/60'
  }
} as const

// Border radius tokens
export const borderRadius = {
  card: {
    default: 'rounded-xl sm:rounded-2xl',
    small: 'rounded-lg sm:rounded-xl', 
    premium: 'rounded-2xl',
    badge: 'rounded-full'
  },
  
  input: {
    default: 'rounded-xl',
    compact: 'rounded-lg sm:rounded-xl'
  },
  
  button: {
    default: 'rounded-xl',
    premium: 'rounded-2xl'
  }
} as const

// Animation/transition tokens
export const animation = {
  transition: {
    default: 'transition-all duration-300',
    premium: 'transition-all duration-500',
    hero: 'transition-all duration-700',
    tips: 'transition-all duration-1000'
  },
  
  scale: {
    button: 'hover:scale-105',
    premium: 'hover:scale-110',
    card: 'hover:scale-[1.02]',
    popular: 'scale-[1.02]'
  },
  
  delays: {
    stagger: (index: number) => `${index * 0.1 + 0.1}s`,
    hero: (index: number) => `${index * 0.15}s`,
    tips: (index: number) => `${index * 0.2}s`
  }
} as const

// Hero section tokens
export const hero = {
  minHeight: {
    standard: 'min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh]',
    large: 'min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh]',
    homepage: 'min-h-screen',
    article: 'min-h-[60vh] sm:min-h-[70vh]',
    compact: 'min-h-[30vh] sm:min-h-[35vh] md:min-h-[40vh] lg:min-h-[45vh]'
  },
  
  typography: {
    standard: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold',
    large: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold', 
    homepage: 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold',
    tips: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black'
  },
  
  badge: {
    standard: 'px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full border border-yellow-200/60 shadow-md',
    premium: 'px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-yellow-600/20 backdrop-blur-md rounded-full border border-yellow-500/30'
  }
} as const

// Form tokens
export const forms = {
  input: {
    default: 'w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base bg-gray-50 focus:bg-white',
    error: 'w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-red-500 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-sm sm:text-base bg-red-50 focus:bg-white'
  },
  
  label: {
    default: 'block text-sm sm:text-base font-semibold text-gray-900 mb-2',
    error: 'block text-sm sm:text-base font-semibold text-red-700 mb-2'
  },
  
  error: 'text-sm text-red-600 flex items-start gap-1',
  helper: 'text-sm text-gray-600'
} as const

// Export complete design system
export const designTokens = {
  colors,
  typography,
  spacing,
  shadows,
  borderRadius,
  animation,
  hero,
  forms
} as const

// Type definitions for TypeScript
export type ColorToken = keyof typeof colors
export type SpacingToken = keyof typeof spacing
export type ShadowToken = keyof typeof shadows
export type BorderRadiusToken = keyof typeof borderRadius
export type AnimationToken = keyof typeof animation

// Utility functions for accessing tokens
export const getColor = (token: string) => colors
export const getSpacing = (token: string) => spacing
export const getShadow = (token: string) => shadows

export default designTokens

