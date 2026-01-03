import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import EnhancedStructuredData from '@/components/EnhancedStructuredData'
import GuideHeroSection from '@/components/GuideHeroSection'
import GuideStepsSection from '@/components/GuideStepsSection'
import GuideStepsDetailedSection from '@/components/GuideStepsDetailedSection'
import CTAFinalSection from '@/components/CTAFinalSection'

export const metadata = {
  title: 'Hoe je je Rijbewijs Haalt - Stap-voor-Stap Gids | BeeMobiel',
  description:
    'Volg deze eenvoudige stappen binnenkort zelf achter het stuur. Een complete gids van aanmelding tot het behalen van je rijbewijs. Van theorie tot praktijkexamen.',
  keywords: ['rijbewijs halen', 'rijbewijs stappen', 'rijbewijs gids', 'hoe rijbewijs halen', 'rijbewijs proces'],
  openGraph: {
    title: 'Hoe je je Rijbewijs Haalt - BeeMobiel Rijschool',
    description: 'Volg deze eenvoudige stappen binnenkort zelf achter het stuur. Een complete gids van aanmelding tot het behalen van je rijbewijs.',
    url: 'https://beemobiel.nl/hoe-je-je-rijbewijs-haalt',
    type: 'article',
    images: [
      {
        url: 'https://beemobiel.nl/images/traffic-cones-car-driving-license-test_11zon-scaled.webp',
        width: 1200,
        height: 630,
        alt: 'Rijbewijs halen gids',
      },
    ],
  },
  alternates: {
    canonical: 'https://beemobiel.nl/hoe-je-je-rijbewijs-haalt',
    languages: {
      'nl': 'https://beemobiel.nl/hoe-je-je-rijbewijs-haalt',
      'nl-NL': 'https://beemobiel.nl/hoe-je-je-rijbewijs-haalt',
    },
  },
}

const guideJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hoe je je Rijbewijs Haalt',
  description: 'Stap-voor-stap gids voor het behalen van je rijbewijs',
  url: 'https://beemobiel.nl/hoe-je-je-rijbewijs-haalt',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Kies je Pakket',
      text: 'Kies het rijlespakket dat bij jou past.',
    },
    {
      '@type': 'HowToStep',
      name: 'Theorie Examen',
      text: 'Bereid je voor op het theorie-examen en slaag voor je theorie-examen bij het CBR.',
    },
    {
      '@type': 'HowToStep',
      name: 'Rijlessen',
      text: 'Volg praktijklessen met ervaren instructeurs.',
    },
    {
      '@type': 'HowToStep',
      name: 'Praktijkexamen',
      text: 'Doe examen bij het CBR wanneer je instructeur aangeeft dat je er klaar voor bent.',
    },
    {
      '@type': 'HowToStep',
      name: 'Rijbewijs',
      text: 'Ontvang je rijbewijs na het behalen van je praktijkexamen.',
    },
  ],
}

const breadcrumbGuideJsonLd = {
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
      name: 'Hoe je je Rijbewijs Haalt',
      item: 'https://beemobiel.nl/hoe-je-je-rijbewijs-haalt',
    },
  ],
}

export default function HoeJeJeRijbewijsHaaltPage() {
  return (
    <>
      <EnhancedStructuredData
        pageType="howto"
        title="Hoe je je Rijbewijs Haalt - Stap-voor-Stap Gids"
        description="Volg deze eenvoudige stappen binnenkort zelf achter het stuur. Een complete gids van aanmelding tot het behalen van je rijbewijs. Van theorie tot praktijkexamen."
        breadcrumbs={[
          { name: 'Home', url: 'https://beemobiel.nl' },
          { name: 'Hoe je je Rijbewijs Haalt', url: 'https://beemobiel.nl/hoe-je-je-rijbewijs-haalt' },
        ]}
        howToData={{
          name: 'Hoe je je Rijbewijs Haalt',
          steps: [
            {
              name: 'Kies je Pakket',
              text: 'Kies het rijlespakket dat bij jou past. We bieden verschillende pakketten aan voor autorijlessen, motorrijlessen en scooterlessen.',
            },
            {
              name: 'Theorie Examen',
              text: 'Bereid je voor op het theorie-examen en slaag voor je theorie-examen bij het CBR. We bieden ook theoriecursussen aan.',
            },
            {
              name: 'Rijlessen',
              text: 'Volg praktijklessen met ervaren instructeurs. Onze instructeurs passen zich aan jouw leerstijl aan en zorgen voor persoonlijke begeleiding.',
            },
            {
              name: 'Praktijkexamen',
              text: 'Doe examen bij het CBR wanneer je instructeur aangeeft dat je er klaar voor bent. We bereiden je grondig voor op het examen.',
            },
            {
              name: 'Rijbewijs',
              text: 'Ontvang je rijbewijs na het behalen van je praktijkexamen. Gefeliciteerd! Je kunt nu zelfstandig de weg op.',
            },
          ],
        }}
      />
      <JsonLd data={guideJsonLd} />
      <JsonLd data={breadcrumbGuideJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <GuideHeroSection />
        <GuideStepsSection />
        <GuideStepsDetailedSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  )
}

