import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import JsonLd from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://beemobiel.nl'),
  title: {
    default: 'BeeMobiel Rijschool - Professionele Rijlessen Auto, Motor & Scooter',
    template: '%s | BeeMobiel Rijschool'
  },
  description: 'Bij BeeMobiel pakken we het professioneel aan, met flexibele pakketten, ervaren instructeurs en een volledig gepersonaliseerde aanpak. Jouw betrouwbare rijschool in Nederland. Rijlessen voor auto, motor en scooter.',
  keywords: ['rijschool', 'rijlessen', 'autorijlessen', 'motorrijlessen', 'scooterlessen', 'rijbewijs', 'rijschool Nederland', 'autorijschool', 'motorrijschool', 'BeeMobiel', 'rijbewijs halen', 'rijexamen', 'rijinstructeur', 'rijlessen Leiden', 'rijlessen Katwijk', 'rijlessen Wassenaar'],
  authors: [{ name: 'BeeMobiel Rijschool' }],
  creator: 'BeeMobiel Rijschool',
  publisher: 'BeeMobiel Rijschool',
  category: 'Rijschool',
  classification: 'Driving School',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    alternateLocale: ['nl', 'nl-NL'],
    url: 'https://beemobiel.nl',
    siteName: 'BeeMobiel Rijschool',
    title: 'BeeMobiel Rijschool - Professionele Rijlessen Auto, Motor & Scooter',
    description: 'Bij BeeMobiel pakken we het professioneel aan, met flexibele pakketten, ervaren instructeurs en een volledig gepersonaliseerde aanpak. Jouw betrouwbare rijschool in Nederland.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'BeeMobiel Rijschool Logo',
        type: 'image/png',
      },
      {
        url: '/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Rijlessen bij BeeMobiel',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeeMobiel Rijschool - Professionele Rijlessen',
    description: 'Bij BeeMobiel pakken we het professioneel aan, met flexibele pakketten, ervaren instructeurs en een volledig gepersonaliseerde aanpak.',
    images: ['/images/logo.png'],
    creator: '@beemobiel',
    site: '@beemobiel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  alternates: {
    canonical: 'https://beemobiel.nl',
    languages: {
      'nl-NL': 'https://beemobiel.nl',
      'nl': 'https://beemobiel.nl',
    },
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'BeeMobiel Rijschool',
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BeeMobiel Rijschool',
  url: 'https://beemobiel.nl',
  logo: 'https://beemobiel.nl/images/logo.png',
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
    // Add more social media links when available
    // 'https://www.facebook.com/beemobiel',
  ],
  foundingDate: '2014',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '5',
    unitText: 'instructeurs',
  },
  knowsAbout: [
    'Autorijlessen',
    'Motorrijlessen',
    'Scooterlessen',
    'Rijbewijs B',
    'Rijbewijs A',
    'Rijbewijs AM',
    'CBR Examen',
    'Theorie Examen',
    'Praktijkexamen',
  ],
  award: 'Beste Rijschool van de Regio',
  slogan: 'Professionele rijlessen met een persoonlijke aanpak',
  potentialAction: [
    {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://beemobiel.nl/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://beemobiel.nl/boek-nu',
      },
    },
  ],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService', 'EducationalOrganization'],
  '@id': 'https://beemobiel.nl/#organization',
  name: 'BeeMobiel Rijschool',
  image: {
    '@type': 'ImageObject',
    url: 'https://beemobiel.nl/images/logo.png',
    width: 1200,
    height: 630,
  },
  url: 'https://beemobiel.nl',
  telephone: '+31-71-220-3046',
  email: 'rijschool@beemobiel.nl',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
    addressLocality: 'Nederland',
  },
  geo: {
    '@type': 'GeoCoordinates',
    // Add coordinates when available
    // latitude: 52.3676,
    // longitude: 4.9041,
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
  servesCuisine: false,
  areaServed: [
    {
      '@type': 'City',
      name: 'Leiden',
    },
    {
      '@type': 'City',
      name: 'Katwijk aan zee',
    },
    {
      '@type': 'City',
      name: 'Wassenaar',
    },
    {
      '@type': 'City',
      name: 'Voorschoten',
    },
    {
      '@type': 'City',
      name: 'Noordwijk',
    },
    {
      '@type': 'City',
      name: 'Noordwijkerhout',
    },
    {
      '@type': 'City',
      name: 'Valkenburg',
    },
    {
      '@type': 'City',
      name: 'Rijnsburg',
    },
    {
      '@type': 'City',
      name: 'Sassenheim',
    },
    {
      '@type': 'City',
      name: 'Oestgeest',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '14',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Rijlessen Pakketten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Autorijlessen',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Motorrijlessen',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Scooterlessen',
        },
      },
    ],
  },
  serviceType: 'Driving School',
  knowsAbout: ['Autorijlessen', 'Motorrijlessen', 'Scooterlessen', 'Rijbewijs B', 'Rijbewijs A', 'Rijbewijs AM', 'CBR Examen'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        {/* Preconnect to external domains - Performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://img.youtube.com" />
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo.png" as="image" type="image/png" />
        {/* Resource hints for better performance */}
        <link rel="prefetch" href="/tarieven" />
        <link rel="prefetch" href="/contact" />
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="nl-NL" href="https://beemobiel.nl" />
        <link rel="alternate" hrefLang="nl" href="https://beemobiel.nl" />
        <link rel="alternate" hrefLang="x-default" href="https://beemobiel.nl" />
        {/* SEO: Canonical URL */}
        <link rel="canonical" href="https://beemobiel.nl" />
        {/* SEO: Sitemap */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* SEO: RSS Feed (if applicable) */}
        {/* SEO: Author */}
        <link rel="author" href="https://beemobiel.nl/over-ons" />
        {/* SEO: License */}
        <link rel="license" href="https://beemobiel.nl/voorwaarden" />
        {/* Structured Data */}
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={localBusinessJsonLd} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

