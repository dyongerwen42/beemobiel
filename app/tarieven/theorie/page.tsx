import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import TheoryHeroSection from '@/components/TheoryHeroSection'
import TheoryPricingSection from '@/components/TheoryPricingSection'
import TheoryIncludedSection from '@/components/TheoryIncludedSection'
import TheoryExtraPricesSection from '@/components/TheoryExtraPricesSection'
import TheoryHowItWorksSection from '@/components/TheoryHowItWorksSection'
import TheoryCTASection from '@/components/TheoryCTASection'

export const metadata = {
  title: 'Theorie Tarieven - CBR Theorie-examen Voorbereiding | BeeMobiel',
  description:
    'Bereid je CBR theorie-examen optimaal voor met BeeMobiel. Kies een theoriepakket, oefen in CBR-stijl en leer in je eigen tempo. Theoriecursussen voor auto, motor en scooter.',
  keywords: ['theorie examen', 'CBR theorie', 'theoriecursus', 'theorie lessen', 'theorie examen voorbereiding', 'rijbewijs theorie'],
  openGraph: {
    title: 'Theorie Tarieven - BeeMobiel Rijschool',
    description: 'Bereid je CBR theorie-examen optimaal voor met BeeMobiel. Kies een theoriepakket, oefen in CBR-stijl en leer in je eigen tempo.',
    url: 'https://beemobiel.nl/tarieven/theorie',
    type: 'website',
  },
  alternates: {
    canonical: 'https://beemobiel.nl/tarieven/theorie',
  },
}

const theoryServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Theorielessen',
  provider: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    url: 'https://beemobiel.nl',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nederland',
  },
}

const breadcrumbTheoryJsonLd = {
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
      name: 'Tarieven',
      item: 'https://beemobiel.nl/tarieven',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Theorie',
      item: 'https://beemobiel.nl/tarieven/theorie',
    },
  ],
}

export default function TheorieTarievenPage() {
  return (
    <>
      <JsonLd data={theoryServiceJsonLd} />
      <JsonLd data={breadcrumbTheoryJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <TheoryHeroSection />
        <TheoryPricingSection />
        <TheoryIncludedSection />
        <TheoryExtraPricesSection />
        <TheoryHowItWorksSection />
        <TheoryCTASection />
      </main>
      <Footer />
    </>
  )
}






