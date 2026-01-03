import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AutoHeroSection from '@/components/AutoHeroSection'
import AutoPricingSection from '@/components/AutoPricingSection'
import AutoIndividualRatesSection from '@/components/AutoIndividualRatesSection'
import BookingFormSection from '@/components/BookingFormSection'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'Auto Tarieven - Prijzen Autorijlessen Handgeschakeld & Automaat | BeeMobiel',
  description: 'Bekijk onze transparante tarieven voor autorijlessen. Handgeschakeld of automatisch, kies het pakket dat bij jou past. Vanaf €60 per les.',
  keywords: ['autorijlessen tarieven', 'rijlessen auto prijs', 'autorijschool kosten', 'rijbewijs B kosten', 'handgeschakeld automaat'],
  openGraph: {
    title: 'Auto Tarieven - BeeMobiel Rijschool',
    description: 'Bekijk onze transparante tarieven voor autorijlessen. Handgeschakeld of automatisch, kies het pakket dat bij jou past.',
    url: 'https://beemobiel.nl/tarieven/autos',
    type: 'website',
  },
  alternates: {
    canonical: 'https://beemobiel.nl/tarieven/autos',
  },
}

const autoServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Autorijlessen',
  name: 'Autorijlessen - BeeMobiel Rijschool',
  description: 'Professionele autorijlessen voor het behalen van je rijbewijs B. Handgeschakeld of automatisch.',
  provider: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    url: 'https://beemobiel.nl',
    telephone: '+31-71-220-3046',
    email: 'rijschool@beemobiel.nl',
    '@id': 'https://beemobiel.nl/#organization',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nederland',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'BEE NEXT',
      description: '45 rijlessen inclusief praktijkexamen, proefles, proefexamen, iTheorie en theorie examen',
      price: '3070',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://beemobiel.nl/tarieven/autos',
      priceValidUntil: '2025-12-31',
    },
    {
      '@type': 'Offer',
      name: 'BEE SMART',
      description: '35 rijlessen inclusief praktijkexamen, proefles, proefexamen, iTheorie en theorie examen',
      price: '2520',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://beemobiel.nl/tarieven/autos',
      priceValidUntil: '2025-12-31',
    },
    {
      '@type': 'Offer',
      name: 'BEE QUICK',
      description: '20 rijlessen inclusief praktijkexamen, proefles en proefexamen',
      price: '1540',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://beemobiel.nl/tarieven/autos',
      priceValidUntil: '2025-12-31',
    },
    {
      '@type': 'Offer',
      name: 'BEE READY',
      description: '10 rijlessen inclusief praktijkexamen',
      price: '890',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: 'https://beemobiel.nl/tarieven/autos',
      priceValidUntil: '2025-12-31',
    },
  ],
}

const productAutoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': 'https://beemobiel.nl/tarieven/autos#product',
  name: 'Autorijlessen Pakketten',
  description: 'Complete autorijlessen pakketten voor het behalen van je rijbewijs B',
  brand: {
    '@type': 'Brand',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#brand',
  },
  category: 'Rijlessen',
  offers: {
    '@type': 'AggregateOffer',
    offerCount: '4',
    lowPrice: '890',
    highPrice: '3070',
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
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
    },
    author: {
      '@type': 'Person',
      name: 'Tevreden Leerling',
    },
  },
}

const itemListAutoPackagesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://beemobiel.nl/tarieven/autos#packages',
  name: 'Auto Lespakketten',
  description: 'Overzicht van alle autorijlespakketten',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'BEE NEXT',
        description: '45 rijlessen inclusief praktijkexamen, proefles, proefexamen, iTheorie en theorie examen',
        offers: {
          '@type': 'Offer',
          price: '3070',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'BEE SMART',
        description: '35 rijlessen inclusief praktijkexamen, proefles, proefexamen, iTheorie en theorie examen',
        offers: {
          '@type': 'Offer',
          price: '2520',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'BEE QUICK',
        description: '20 rijlessen inclusief praktijkexamen, proefles en proefexamen',
        offers: {
          '@type': 'Offer',
          price: '1540',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Product',
        name: 'BEE READY',
        description: '10 rijlessen inclusief praktijkexamen',
        offers: {
          '@type': 'Offer',
          price: '890',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      },
    },
  ],
}

const breadcrumbAutoJsonLd = {
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
      name: "Auto's",
      item: 'https://beemobiel.nl/tarieven/autos',
    },
  ],
}

export default function AutoTarievenPage() {
  return (
    <>
      <JsonLd data={autoServiceJsonLd} />
      <JsonLd data={productAutoJsonLd} />
      <JsonLd data={itemListAutoPackagesJsonLd} />
      <JsonLd data={breadcrumbAutoJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <AutoHeroSection />
        <AutoPricingSection />
        <AutoIndividualRatesSection />
        <BookingFormSection />
      </main>
      <Footer />
    </>
  )
}

