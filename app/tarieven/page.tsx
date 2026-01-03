import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PricingHeroSection from '@/components/PricingHeroSection'
import VehicleTypesSection from '@/components/VehicleTypesSection'
import WhyVehiclesSection from '@/components/WhyVehiclesSection'
import AllPricingSection from '@/components/AllPricingSection'
import EnhancedStructuredData from '@/components/EnhancedStructuredData'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'Tarieven & Prijzen - Transparante Prijzen voor Rijlessen | BeeMobiel',
  description: 'Bekijk onze transparante tarieven voor autorijlessen, motorrijlessen en scooterlessen. Geen verborgen kosten, alleen eerlijke prijzen. Vanaf €60 per les.',
  keywords: ['rijschool tarieven', 'rijlessen prijzen', 'autorijlessen kosten', 'motorrijlessen prijs', 'scooterlessen tarief', 'rijlessen prijzen Nederland'],
  openGraph: {
    title: 'Tarieven & Prijzen - BeeMobiel Rijschool',
    description: 'Bekijk onze transparante tarieven voor autorijlessen, motorrijlessen en scooterlessen. Geen verborgen kosten, alleen eerlijke prijzen.',
    url: 'https://beemobiel.nl/tarieven',
    type: 'website',
    images: [
      {
        url: 'https://beemobiel.nl/images/home-4_11zon_11zon-scaled.webp',
        width: 1200,
        height: 630,
        alt: 'BeeMobiel Rijschool Tarieven',
      },
    ],
  },
  alternates: {
    canonical: 'https://beemobiel.nl/tarieven',
    languages: {
      'nl': 'https://beemobiel.nl/tarieven',
      'nl-NL': 'https://beemobiel.nl/tarieven',
    },
  },
}

const breadcrumbJsonLd = {
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
  ],
}

// Enhanced structured data for pricing page
const itemListPricingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Rijlessen Tarieven',
  description: 'Overzicht van alle tarieven voor rijlessen',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Autorijlessen',
        url: 'https://beemobiel.nl/tarieven/autos',
        description: 'Professionele autorijlessen voor rijbewijs B',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Motorrijlessen',
        url: 'https://beemobiel.nl/tarieven/motorfietsen',
        description: 'Professionele motorrijlessen voor rijbewijs A',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Scooterlessen',
        url: 'https://beemobiel.nl/tarieven/scooters',
        description: 'Professionele scooterlessen voor rijbewijs AM',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Theoriecursus',
        url: 'https://beemobiel.nl/tarieven/theorie',
        description: 'Theoriecursus voor rijbewijs',
      },
    },
  ],
}

export default function TarievenPage() {
  return (
    <>
      <EnhancedStructuredData
        pageType="list"
        title="Tarieven & Prijzen - BeeMobiel Rijschool"
        description="Bekijk onze transparante tarieven voor autorijlessen, motorrijlessen en scooterlessen. Geen verborgen kosten, alleen eerlijke prijzen."
        breadcrumbs={[
          { name: 'Home', url: 'https://beemobiel.nl' },
          { name: 'Tarieven', url: 'https://beemobiel.nl/tarieven' },
        ]}
        listData={{
          name: 'Rijlessen Tarieven',
          description: 'Overzicht van alle tarieven voor rijlessen',
          items: [
            {
              name: 'Autorijlessen',
              description: 'Professionele autorijlessen voor rijbewijs B',
              url: 'https://beemobiel.nl/tarieven/autos',
            },
            {
              name: 'Motorrijlessen',
              description: 'Professionele motorrijlessen voor rijbewijs A',
              url: 'https://beemobiel.nl/tarieven/motorfietsen',
            },
            {
              name: 'Scooterlessen',
              description: 'Professionele scooterlessen voor rijbewijs AM',
              url: 'https://beemobiel.nl/tarieven/scooters',
            },
            {
              name: 'Theoriecursus',
              description: 'Theoriecursus voor rijbewijs',
              url: 'https://beemobiel.nl/tarieven/theorie',
            },
          ],
        }}
      />
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={itemListPricingJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <PricingHeroSection />
        <VehicleTypesSection />
        <WhyVehiclesSection />
        <AllPricingSection />
      </main>
      <Footer />
    </>
  )
}

