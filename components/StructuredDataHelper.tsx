'use client'

import JsonLd from './JsonLd'

/**
 * Helper component to add comprehensive structured data to any page
 * Automatically includes organization and local business schemas
 */
export function addStructuredData(schemas: object[]) {
  return schemas.map((schema, index) => (
    <JsonLd key={index} data={schema} />
  ))
}

/**
 * Creates a complete WebPage schema with all necessary fields
 */
export function createCompleteWebPageSchema(
  url: string,
  title: string,
  description: string,
  breadcrumbs: Array<{name: string, url: string}>,
  image?: string,
  datePublished?: string,
  dateModified?: string
) {
  const baseUrl = 'https://beemobiel.nl'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: 'nl-NL',
    isPartOf: {
      '@type': 'WebSite',
      name: 'BeeMobiel Rijschool',
      url: baseUrl,
      publisher: {
        '@type': 'Organization',
        name: 'BeeMobiel Rijschool',
        '@id': `${baseUrl}/#organization`,
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    },
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#organization`,
    },
    ...(image && {
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${baseUrl}${image}`,
        width: 1200,
        height: 630,
      },
    }),
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
  }
}


