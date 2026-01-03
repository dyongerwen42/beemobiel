import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import TipsHeroSection from '@/components/TipsHeroSection'
import TipsIntroSection from '@/components/TipsIntroSection'
import TipsBasisTheorieSection from '@/components/TipsBasisTheorieSection'
import TipsEersteRijlesSection from '@/components/TipsEersteRijlesSection'
import TipsExamenfoutenSection from '@/components/TipsExamenfoutenSection'
import TipsRotondesSection from '@/components/TipsRotondesSection'
import CTAFinalSection from '@/components/CTAFinalSection'
import TipsPageClient from '@/components/TipsPageClient'

export const metadata = {
  title: 'Tips & Trucs - Handige Rijtips voor Rijlessen & Examen | BeeMobiel',
  description: 'Handige tips en adviezen voor rijlessen en examen. Leer alles over je eerste rijles, veelgemaakte examen fouten, rotondes rijden en meer.',
  keywords: ['rijtips', 'rijlessen tips', 'examen tips', 'rijbewijs tips', 'autorijden tips', 'rijlessen advies'],
  openGraph: {
    title: 'Tips & Trucs - BeeMobiel Rijschool',
    description: 'Handige tips en adviezen voor rijlessen en examen',
    url: 'https://beemobiel.nl/tips',
    type: 'website',
    images: [
      {
        url: 'https://beemobiel.nl/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Tips & Trucs BeeMobiel',
      },
    ],
  },
  alternates: {
    canonical: 'https://beemobiel.nl/tips',
    languages: {
      'nl': 'https://beemobiel.nl/tips',
      'nl-NL': 'https://beemobiel.nl/tips',
    },
  },
}

const tipsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://beemobiel.nl/tips#collection',
  name: 'Tips en Trucs - BeeMobiel Rijschool',
  description: 'Handige tips en adviezen voor rijlessen en examen',
  url: 'https://beemobiel.nl/tips',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Article',
          headline: 'Eerste Rijles',
          url: 'https://beemobiel.nl/tips/eerste-rijles',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Article',
          headline: 'Top 5 Examenfouten',
          url: 'https://beemobiel.nl/tips/examenfouten',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Article',
          headline: 'Rotondes Rijden',
          url: 'https://beemobiel.nl/tips/rotondes',
        },
      },
    ],
  },
}

const videoCollectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://beemobiel.nl/tips#videos',
  name: 'Rijtips Video Collectie',
  description: 'Instructievideo\'s over rijlessen en examen',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'VideoObject',
        name: 'Zo gaat het bij het theorie-examen',
        description: 'Voorbereiding op je eerste autorijles',
        thumbnailUrl: 'https://img.youtube.com/vi/5wWiTaIgW90/maxresdefault.jpg',
        uploadDate: '2024-01-01',
        contentUrl: 'https://www.youtube.com/watch?v=5wWiTaIgW90',
        embedUrl: 'https://www.youtube.com/embed/5wWiTaIgW90',
        publisher: {
          '@type': 'Organization',
          name: 'CBR',
        },
      },
    },
  ],
}

const breadcrumbTipsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://beemobiel.nl',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Tips en Trucs',
      item: 'https://beemobiel.nl/tips',
    },
  ],
}

export default function TipsPage() {
  return (
    <>
      <JsonLd data={tipsJsonLd} />
      <JsonLd data={videoCollectionJsonLd} />
      <JsonLd data={breadcrumbTipsJsonLd} />
      <TipsPageClient />
    </>
  )
}

