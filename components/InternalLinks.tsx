'use client'

import Link from 'next/link'

interface InternalLink {
  href: string
  text: string
  rel?: 'next' | 'prev' | 'related'
}

interface InternalLinksProps {
  links: InternalLink[]
  className?: string
}

/**
 * InternalLinks component for better internal linking structure
 * Helps search engines understand page relationships
 */
export default function InternalLinks({ links, className = '' }: InternalLinksProps) {
  if (links.length === 0) return null

  return (
    <nav className={`internal-links ${className}`} aria-label="Gerelateerde pagina's">
      <ul className="flex flex-wrap gap-4 sm:gap-6">
        {links.map((link, index) => (
          <li key={link.href}>
            <Link
              href={link.href}
              rel={link.rel}
              className="text-yellow-600 hover:text-yellow-700 underline transition-colors duration-200 text-sm sm:text-base"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

