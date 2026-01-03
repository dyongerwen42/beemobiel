'use client'

import { usePathname } from 'next/navigation'
import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  noindex?: boolean
  nofollow?: boolean
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  ogImage = '/images/logo.png',
  ogType = 'website',
  noindex = false,
  nofollow = false,
}: SEOHeadProps) {
  const pathname = usePathname()
  const baseUrl = 'https://beemobiel.nl'
  const fullUrl = `${baseUrl}${pathname}`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1',
  ].join(', ')

  return (
    <Head>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Robots Meta */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Open Graph */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="nl_NL" />
      <meta property="og:site_name" content="BeeMobiel Rijschool" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="nl" href={fullUrl} />
      <link rel="alternate" hrefLang="nl-NL" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
    </Head>
  )
}

