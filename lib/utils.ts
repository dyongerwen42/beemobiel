import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for conflict resolution
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format phone number with Dutch formatting
 */
export function formatPhoneNumber(value: string): string {
  const phoneNumber = value.replace(/\D/g, '')
  if (phoneNumber.length <= 2) return phoneNumber
  if (phoneNumber.length <= 5) return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`
  if (phoneNumber.length <= 7) return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5)}`
  return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7, 9)}`
}

/**
 * Validate email address
 */
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Validate phone number (Dutch format)
 */
export function validatePhone(phone: string): boolean {
  const phoneDigits = phone.replace(/\D/g, '')
  return phoneDigits.length >= 10
}

/**
 * Generate animation delay for staggered animations
 */
export function getStaggerDelay(index: number, baseDelay = 0.1, increment = 0.1): string {
  return `${baseDelay + (index * increment)}s`
}




