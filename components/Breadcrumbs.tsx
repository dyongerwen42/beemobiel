'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import JsonLd from './JsonLd'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  showHome?: boolean
}

export default function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
  const pathname = usePathname()
  const baseUrl = 'https://beemobiel.nl'

  // Auto-generate breadcrumbs from pathname if items not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items

    const paths = pathname?.split('/').filter(Boolean) || []
    const breadcrumbs: BreadcrumbItem[] = []

    if (showHome) {
      breadcrumbs.push({ name: 'Home', href: '/' })
    }

    let currentPath = ''
    paths.forEach((path, index) => {
      currentPath += `/${path}`
      const name = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      breadcrumbs.push({ name, href: currentPath })
    })

    return breadcrumbs
  }

  const breadcrumbItems = generateBreadcrumbs()

  // Generate JSON-LD structured data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  }

  if (breadcrumbItems.length <= 1) return null

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <nav
        className="mb-4 sm:mb-6 text-xs sm:text-sm"
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap items-center gap-1 sm:gap-2 text-gray-600">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1
            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <span className="mx-1 sm:mx-2 text-gray-400" aria-hidden="true">
                    ›
                  </span>
                )}
                {isLast ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-yellow-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

