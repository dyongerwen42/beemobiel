import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScooterHeroSection from '@/components/ScooterHeroSection'
import ScooterPricingSection from '@/components/ScooterPricingSection'
import ScooterIndividualRatesSection from '@/components/ScooterIndividualRatesSection'
import BookingFormSection from '@/components/BookingFormSection'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'Scooter & Brommer Tarieven - Prijzen Scooterlessen | BeeMobiel',
  description: 'Bekijk onze transparante tarieven voor scooter- en brommerlessen. Leer veilig scooter of brommer rijden. Rijbewijs AM halen.',
  keywords: ['scooterlessen tarieven', 'brommerlessen prijs', 'rijbewijs AM kosten', 'scooter rijschool', 'brommer rijlessen'],
  openGraph: {
    title: 'Scooter & Brommer Tarieven - BeeMobiel Rijschool',
    description: 'Bekijk onze transparante tarieven voor scooter- en brommerlessen. Leer veilig scooter of brommer rijden.',
    url: 'https://beemobiel.nl/tarieven/scooters',
    type: 'website',
  },
  alternates: {
    canonical: 'https://beemobiel.nl/tarieven/scooters',
  },
}

const scooterServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Scooterlessen',
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

const breadcrumbScooterJsonLd = {
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
      name: 'Scooters & Brommers',
      item: 'https://beemobiel.nl/tarieven/scooters',
    },
  ],
}

export default function ScooterTarievenPage() {
  return (
    <>
      <JsonLd data={scooterServiceJsonLd} />
      <JsonLd data={breadcrumbScooterJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <ScooterHeroSection />
        <ScooterPricingSection />
        <ScooterIndividualRatesSection />
        <BookingFormSection />
      </main>
      <Footer />
    </>
  )
}

