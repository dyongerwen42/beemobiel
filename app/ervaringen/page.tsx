import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import EnhancedStructuredData from '@/components/EnhancedStructuredData'
import ErvaringenHeroSection from '@/components/ErvaringenHeroSection'
import ErvaringenIntroSection from '@/components/ErvaringenIntroSection'
import ReviewsSection from '@/components/ReviewsSection'
import ErvaringenFAQSection from '@/components/ErvaringenFAQSection'

export const metadata = {
  title: 'Ervaringen & Reviews - Echte Verhalen van Onze Leerlingen | BeeMobiel',
  description:
    'Lees wat onze leerlingen zeggen over hun ervaring bij BeeMobiel. Echte verhalen van echte mensen die hun rijbewijs hebben gehaald. 5 sterren beoordelingen en succesverhalen.',
  keywords: ['ervaringen rijschool', 'reviews rijschool', 'beoordelingen rijschool', 'rijschool reviews', 'ervaringen leerlingen'],
  openGraph: {
    title: 'Ervaringen & Reviews - BeeMobiel Rijschool',
    description: 'Lees wat onze leerlingen zeggen over hun ervaring bij BeeMobiel. Echte verhalen van echte mensen die hun rijbewijs hebben gehaald.',
    url: 'https://beemobiel.nl/ervaringen',
    type: 'website',
    images: [
      {
        url: 'https://beemobiel.nl/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Ervaringen BeeMobiel Rijschool',
      },
    ],
  },
  alternates: {
    canonical: 'https://beemobiel.nl/ervaringen',
    languages: {
      'nl': 'https://beemobiel.nl/ervaringen',
      'nl-NL': 'https://beemobiel.nl/ervaringen',
    },
  },
}

const ervaringenJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Ervaringen - BeeMobiel Rijschool',
  description: 'Ervaringen en reviews van leerlingen',
  url: 'https://beemobiel.nl/ervaringen',
}

const aggregateRatingErvaringenJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#organization',
  },
  ratingValue: '5',
  reviewCount: '16',
  bestRating: '5',
  worstRating: '1',
}

const reviewsErvaringenJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'BeeMobiel Rijschool',
      '@id': 'https://beemobiel.nl/#organization',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: 'Mark J.',
    },
    reviewBody: 'Ik had helemaal geen ervaring, maar mijn instructeur was rustig, geduldig en duidelijk. Ik ben in één keer geslaagd en voel me nu zeker in het verkeer.',
    datePublished: '2024-01-01T00:00:00+01:00',
    publisher: {
      '@type': 'Organization',
      name: 'BeeMobiel Rijschool',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'BeeMobiel Rijschool',
      '@id': 'https://beemobiel.nl/#organization',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: 'Sofia L.',
    },
    reviewBody: 'De rijschool was erg flexibel met tijden. Mijn instructeur gaf altijd nuttige tips. Ik was goed voorbereid en ben zonder stress geslaagd voor mijn examen.',
    datePublished: '2024-01-15T00:00:00+01:00',
    publisher: {
      '@type': 'Organization',
      name: 'BeeMobiel Rijschool',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'BeeMobiel Rijschool',
      '@id': 'https://beemobiel.nl/#organization',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: 'David P.',
    },
    reviewBody: 'Ik vond de moderne auto en professionele aanpak top. Elke les was duidelijk en goed opgebouwd. Dankzij hun hulp heb ik snel vertrouwen opgebouwd en gehaald.',
    datePublished: '2024-02-01T00:00:00+01:00',
    publisher: {
      '@type': 'Organization',
      name: 'BeeMobiel Rijschool',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'BeeMobiel Rijschool',
      '@id': 'https://beemobiel.nl/#organization',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: 'Noah S.',
    },
    reviewBody: 'Rijles in het Engels was geen probleem. De instructeur legde alles duidelijk uit en hield rekening met mijn tempo. Binnen een paar maanden was ik geslaagd.',
    datePublished: '2024-02-15T00:00:00+01:00',
    publisher: {
      '@type': 'Organization',
      name: 'BeeMobiel Rijschool',
    },
  },
]

const breadcrumbErvaringenJsonLd = {
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
      name: 'Ervaringen',
      item: 'https://beemobiel.nl/ervaringen',
    },
  ],
}

export default function ErvaringenPage() {
  return (
    <>
      <EnhancedStructuredData
        pageType="home"
        title="Ervaringen & Reviews - Echte Verhalen van Onze Leerlingen"
        description="Lees wat onze leerlingen zeggen over hun ervaring bij BeeMobiel. Echte verhalen van echte mensen die hun rijbewijs hebben gehaald. 5 sterren beoordelingen en succesverhalen."
        breadcrumbs={[
          { name: 'Home', url: 'https://beemobiel.nl' },
          { name: 'Ervaringen', url: 'https://beemobiel.nl/ervaringen' },
        ]}
        listData={{
          name: 'Ervaringen van Leerlingen',
          description: 'Reviews en ervaringen van leerlingen bij BeeMobiel Rijschool',
          items: reviewsErvaringenJsonLd.map((review, index) => ({
            name: review.author.name,
            description: review.reviewBody,
            url: `https://beemobiel.nl/ervaringen#review-${index + 1}`,
          })),
        }}
      />
      <JsonLd data={ervaringenJsonLd} />
      <JsonLd data={aggregateRatingErvaringenJsonLd} />
      {reviewsErvaringenJsonLd.map((review, index) => (
        <JsonLd key={index} data={review} />
      ))}
      <JsonLd data={breadcrumbErvaringenJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <ErvaringenHeroSection />
        <ErvaringenIntroSection />
        <ReviewsSection />
        <ErvaringenFAQSection />
      </main>
      <Footer />
    </>
  )
}

