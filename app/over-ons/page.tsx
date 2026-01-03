import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHeroSection from '@/components/AboutHeroSection'
import AboutPersonalGuidanceSection from '@/components/AboutPersonalGuidanceSection'
import AboutReviewsSection from '@/components/AboutReviewsSection'
import AboutResultsSection from '@/components/AboutResultsSection'
import AboutFeatureCardsSection from '@/components/AboutFeatureCardsSection'
import CTAFinalSection from '@/components/CTAFinalSection'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Over Ons',
  description: 'Leer meer over BeeMobiel, jouw betrouwbare rijschool in Nederland. Meer dan 10 jaar ervaring, 200+ studenten opgeleid en 95% slagingspercentage. Professionele lessen met een persoonlijke aanpak.',
  keywords: ['over rijschool', 'rijschool geschiedenis', 'rijschool ervaring', 'rijschool team', 'rijschool waarden', 'BeeMobiel'],
  openGraph: {
    title: 'Over Ons - BeeMobiel Rijschool',
    description: 'Leer meer over BeeMobiel, jouw betrouwbare rijschool in Nederland. Professionele lessen met een persoonlijke aanpak.',
    url: 'https://beemobiel.nl/over-ons',
    type: 'website',
    images: [
      {
        url: 'https://beemobiel.nl/images/traffic-cones-car-driving-license-test_11zon-scaled.webp',
        width: 1200,
        height: 630,
        alt: 'Over BeeMobiel Rijschool',
      },
    ],
  },
  alternates: {
    canonical: 'https://beemobiel.nl/over-ons',
    languages: {
      'nl': 'https://beemobiel.nl/over-ons',
      'nl-NL': 'https://beemobiel.nl/over-ons',
    },
  },
}

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Over Ons - BeeMobiel Rijschool',
  description: 'Leer meer over BeeMobiel, jouw betrouwbare rijschool in Nederland.',
  url: 'https://beemobiel.nl/over-ons',
  mainEntity: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    foundingDate: '2014',
    numberOfEmployees: '5+',
    description: 'Professionele rijschool met meer dan 10 jaar ervaring in het geven van rijlessen voor auto, motor en scooter.',
  },
}

const breadcrumbAboutJsonLd = {
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
      name: 'Over Ons',
      item: 'https://beemobiel.nl/over-ons',
    },
  ],
}

export default function OverOnsPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <JsonLd data={breadcrumbAboutJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <AboutHeroSection />
        <AboutPersonalGuidanceSection />
        <AboutReviewsSection />
        <AboutResultsSection />
        <AboutFeatureCardsSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  )
}

