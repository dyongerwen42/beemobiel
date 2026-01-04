'use client'

import { usePathname } from 'next/navigation'
import JsonLd from './JsonLd'
import { 
  organizationSchema, 
  localBusinessSchema,
  createWebPageSchema,
  createCourseSchema,
  createArticleSchema,
  createHowToSchema,
  createOfferSchema,
  createItemListSchema,
  createFAQSchema,
} from '@/lib/seo-schemas'

interface EnhancedStructuredDataProps {
  pageType?: 'home' | 'course' | 'article' | 'howto' | 'offer' | 'faq' | 'list'
  title: string
  description: string
  breadcrumbs?: Array<{name: string, url: string}>
  courseData?: {
    name: string
    description: string
    courseCode: string
    educationalLevel: string
    timeRequired: string
  }
  articleData?: {
    headline: string
    image: string
    datePublished: string
    dateModified: string
  }
  howToData?: {
    name: string
    steps: Array<{name: string, text: string, image?: string}>
  }
  offerData?: {
    name: string
    description: string
    price: string
    priceCurrency: string
    availability: string
    url: string
  }
  faqData?: Array<{question: string, answer: string}>
  listData?: {
    name: string
    description: string
    items: Array<{name: string, description: string, url: string}>
  }
}

export default function EnhancedStructuredData({
  pageType = 'home',
  title,
  description,
  breadcrumbs = [],
  courseData,
  articleData,
  howToData,
  offerData,
  faqData,
  listData,
}: EnhancedStructuredDataProps) {
  const pathname = usePathname()
  const baseUrl = 'https://beemobiel.nl'
  const fullUrl = `${baseUrl}${pathname || ''}`

  // Default breadcrumbs if not provided
  const defaultBreadcrumbs = breadcrumbs.length > 0 
    ? breadcrumbs 
    : [{ name: 'Home', url: baseUrl }]

  const schemas = []

  // Always include organization and local business
  schemas.push(organizationSchema)
  schemas.push(localBusinessSchema)

  // WebPage schema for all pages
  schemas.push(createWebPageSchema(fullUrl, title, description, defaultBreadcrumbs))

  // Page-specific schemas
  switch (pageType) {
    case 'course':
      if (courseData) {
        schemas.push(createCourseSchema(
          courseData.name,
          courseData.description,
          courseData.courseCode,
          'BeeMobiel Rijschool',
          courseData.educationalLevel,
          courseData.timeRequired
        ))
      }
      break

    case 'article':
      if (articleData) {
        schemas.push(createArticleSchema(
          articleData.headline,
          description,
          articleData.image,
          articleData.datePublished,
          articleData.dateModified,
          'BeeMobiel Rijschool'
        ))
      }
      break

    case 'howto':
      if (howToData) {
        schemas.push(createHowToSchema(
          howToData.name,
          description,
          howToData.steps
        ))
      }
      break

    case 'offer':
      if (offerData) {
        schemas.push(createOfferSchema(
          offerData.name,
          offerData.description,
          offerData.price,
          offerData.priceCurrency,
          offerData.availability,
          offerData.url
        ))
      }
      break

    case 'faq':
      if (faqData) {
        schemas.push(createFAQSchema(faqData))
      }
      break

    case 'list':
      if (listData) {
        schemas.push(createItemListSchema(
          listData.name,
          listData.description,
          listData.items
        ))
      }
      break
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}
    </>
  )
}


