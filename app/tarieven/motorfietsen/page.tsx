import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MotorHeroSection from '@/components/MotorHeroSection'
import MotorPricingSection from '@/components/MotorPricingSection'
import MotorIndividualRatesSection from '@/components/MotorIndividualRatesSection'
import BookingFormSection from '@/components/BookingFormSection'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Motorfiets Tarieven',
  description: 'Bekijk onze transparante tarieven voor motorrijlessen. Leer veilig en zelfverzekerd rijden op twee wielen. Pakketten vanaf €1.040. Inclusief AVB en AVD examen.',
  keywords: ['motorrijlessen tarieven', 'rijlessen motor prijs', 'motorrijschool kosten', 'motorrijbewijs kosten', 'AVB examen', 'AVD examen'],
  openGraph: {
    title: 'Motorfiets Tarieven - BeeMobiel Rijschool',
    description: 'Bekijk onze transparante tarieven voor motorrijlessen. Leer veilig en zelfverzekerd rijden op twee wielen.',
    url: 'https://beemobiel.nl/tarieven/motorfietsen',
  },
  alternates: {
    canonical: 'https://beemobiel.nl/tarieven/motorfietsen',
  },
}

const motorServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Motorrijlessen',
  name: 'Motorrijlessen - BeeMobiel Rijschool',
  description: 'Professionele motorrijlessen voor het behalen van je rijbewijs A. Inclusief AVB en AVD examen.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#organization',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nederland',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Pakket 10',
      description: '10 rijlessen inclusief AVB en AVD examen',
      price: '1040',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://beemobiel.nl/tarieven/motorfietsen',
      priceValidUntil: '2025-12-31',
      itemCondition: 'https://schema.org/NewCondition',
    },
    {
      '@type': 'Offer',
      name: 'Pakket 20',
      description: '20 rijlessen inclusief AVB en AVD examen',
      price: '1580',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://beemobiel.nl/tarieven/motorfietsen',
      priceValidUntil: '2025-12-31',
      itemCondition: 'https://schema.org/NewCondition',
    },
    {
      '@type': 'Offer',
      name: 'Pakket 25',
      description: '25 rijlessen inclusief AVB en AVD examen',
      price: '1830',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://beemobiel.nl/tarieven/motorfietsen',
      priceValidUntil: '2025-12-31',
      itemCondition: 'https://schema.org/NewCondition',
    },
  ],
}

const productMotorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': 'https://beemobiel.nl/tarieven/motorfietsen#product',
  name: 'Motorrijlessen Pakketten',
  description: 'Complete motorrijlessen pakketten inclusief AVB en AVD examen',
  brand: {
    '@type': 'Brand',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#brand',
  },
  category: 'Rijlessen',
  offers: {
    '@type': 'AggregateOffer',
    offerCount: '3',
    lowPrice: '1040',
    highPrice: '1830',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '14',
    bestRating: '5',
    worstRating: '1',
  },
}

const itemListMotorPackagesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://beemobiel.nl/tarieven/motorfietsen#packages',
  name: 'Motor Lespakketten',
  description: 'Overzicht van alle motorrijlespakketten',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'Pakket 10',
        description: '10 rijlessen inclusief AVB en AVD examen',
        offers: {
          '@type': 'Offer',
          price: '1040',
          priceCurrency: 'EUR',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'Pakket 20',
        description: '20 rijlessen inclusief AVB en AVD examen',
        offers: {
          '@type': 'Offer',
          price: '1580',
          priceCurrency: 'EUR',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'Pakket 25',
        description: '25 rijlessen inclusief AVB en AVD examen',
        offers: {
          '@type': 'Offer',
          price: '1830',
          priceCurrency: 'EUR',
        },
      },
    },
  ],
}

const breadcrumbMotorJsonLd = {
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
      name: 'Motorfiets Tarieven',
      item: 'https://beemobiel.nl/tarieven/motorfietsen',
    },
  ],
}

export default function MotorTarievenPage() {
  return (
    <>
      <JsonLd data={motorServiceJsonLd} />
      <JsonLd data={productMotorJsonLd} />
      <JsonLd data={itemListMotorPackagesJsonLd} />
      <JsonLd data={breadcrumbMotorJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <MotorHeroSection />
        <MotorPricingSection />
        <MotorIndividualRatesSection />
        <BookingFormSection />
      </main>
      <Footer />
    </>
  )
}

