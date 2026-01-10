/**
 * Comprehensive SEO Schema Library
 * Provides reusable schema.org structured data for maximum crawlability
 */

const baseUrl = 'https://beemobiel.nl'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}/#organization`,
  name: 'BeeMobiel Rijschool',
  url: baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${baseUrl}/images/logo.png`,
    width: 1200,
    height: 630,
  },
  description: 'Professionele rijschool voor autorijlessen, motorrijlessen en scooterlessen in Nederland.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
    addressLocality: 'Nederland',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+31-71-220-3046',
    contactType: 'customer service',
    email: 'rijschool@beemobiel.nl',
    availableLanguage: ['nl', 'en'],
    areaServed: 'NL',
  },
  sameAs: [
    'https://www.instagram.com/beemobiel',
  ],
  foundingDate: '2014',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '5',
    unitText: 'instructeurs',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService', 'EducationalOrganization'],
  '@id': `${baseUrl}/#organization`,
  name: 'BeeMobiel Rijschool',
  image: {
    '@type': 'ImageObject',
    url: `${baseUrl}/images/logo.png`,
    width: 1200,
    height: 630,
  },
  url: baseUrl,
  telephone: '+31-71-220-3046',
  email: 'rijschool@beemobiel.nl',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
    addressLocality: 'Nederland',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Leiden' },
    { '@type': 'City', name: 'Katwijk aan zee' },
    { '@type': 'City', name: 'Wassenaar' },
    { '@type': 'City', name: 'Voorschoten' },
    { '@type': 'City', name: 'Noordwijk' },
    { '@type': 'City', name: 'Noordwijkerhout' },
    { '@type': 'City', name: 'Valkenburg' },
    { '@type': 'City', name: 'Rijnsburg' },
    { '@type': 'City', name: 'Sassenheim' },
    { '@type': 'City', name: 'Oestgeest' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '16',
    bestRating: '5',
    worstRating: '1',
  },
}

export function createWebPageSchema(url: string, title: string, description: string, breadcrumbs: Array<{name: string, url: string}>) {
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
  }
}

export function createCourseSchema(
  name: string,
  description: string,
  courseCode: string,
  provider: string,
  educationalLevel: string,
  timeRequired: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    courseCode,
    provider: {
      '@type': 'Organization',
      name: provider,
      '@id': `${baseUrl}/#organization`,
    },
    educationalLevel: {
      '@type': 'DefinedTerm',
      name: educationalLevel,
    },
    timeRequired: timeRequired,
    inLanguage: 'nl-NL',
    teaches: [
      'Autorijden',
      'Verkeersregels',
      'Veilig rijden',
      'Rijexamen voorbereiding',
    ],
  }
}

export function createArticleSchema(
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified: string,
  author: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: image.startsWith('http') ? image : `${baseUrl}${image}`,
    },
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: author,
      '@id': `${baseUrl}/#organization`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BeeMobiel Rijschool',
      '@id': `${baseUrl}/#organization`,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/#webpage`,
    },
  }
}

export function createHowToSchema(
  name: string,
  description: string,
  steps: Array<{name: string, text: string, image?: string}>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image.startsWith('http') ? step.image : `${baseUrl}${step.image}`,
        },
      }),
    })),
  }
}

export function createOfferSchema(
  name: string,
  description: string,
  price: string,
  priceCurrency: string,
  availability: string,
  url: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name,
    description,
    price,
    priceCurrency,
    availability: `https://schema.org/${availability}`,
    url,
    seller: {
      '@type': 'Organization',
      name: 'BeeMobiel Rijschool',
      '@id': `${baseUrl}/#organization`,
    },
    validFrom: new Date().toISOString(),
  }
}

export function createItemListSchema(
  name: string,
  description: string,
  items: Array<{name: string, description: string, url: string}>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Thing',
        name: item.name,
        description: item.description,
        url: item.url,
      },
    })),
  }
}

export function createVideoSchema(
  name: string,
  description: string,
  thumbnailUrl: string,
  contentUrl: string,
  embedUrl: string,
  duration: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl: thumbnailUrl.startsWith('http') ? thumbnailUrl : `${baseUrl}${thumbnailUrl}`,
    contentUrl: contentUrl.startsWith('http') ? contentUrl : `${baseUrl}${contentUrl}`,
    embedUrl: embedUrl.startsWith('http') ? embedUrl : `${baseUrl}${embedUrl}`,
    duration,
    uploadDate: new Date().toISOString(),
    publisher: {
      '@type': 'Organization',
      name: 'BeeMobiel Rijschool',
      '@id': `${baseUrl}/#organization`,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
  }
}

export function createFAQSchema(questions: Array<{question: string, answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  }
}

export function createReviewSchema(
  author: string,
  reviewBody: string,
  ratingValue: number,
  datePublished: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'BeeMobiel Rijschool',
      '@id': `${baseUrl}/#organization`,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: ratingValue.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: author,
    },
    reviewBody,
    datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'BeeMobiel Rijschool',
      '@id': `${baseUrl}/#organization`,
    },
  }
}






