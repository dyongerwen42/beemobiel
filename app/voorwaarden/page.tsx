import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import VoorwaardenHeroSection from '@/components/VoorwaardenHeroSection'
import VoorwaardenContentSection from '@/components/VoorwaardenContentSection'

export const metadata = {
  title: 'Voorwaarden & Beleid - Algemene Voorwaarden Rijschool | BeeMobiel',
  description:
    'Onze algemene voorwaarden en beleid. Alles wat je moet weten over onze diensten, betalingen en annuleringen. Transparante voorwaarden voor rijlessen.',
  keywords: ['voorwaarden rijschool', 'algemene voorwaarden', 'rijschool beleid', 'annuleringsvoorwaarden'],
  openGraph: {
    title: 'Voorwaarden en Beleid - BeeMobiel Rijschool',
    description: 'Onze algemene voorwaarden en beleid. Alles wat je moet weten over onze diensten, betalingen en annuleringen.',
    url: 'https://beemobiel.nl/voorwaarden',
    type: 'website',
  },
  alternates: {
    canonical: 'https://beemobiel.nl/voorwaarden',
  },
}

const voorwaardenJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Voorwaarden en Beleid - BeeMobiel Rijschool',
  description: 'Algemene voorwaarden en beleid',
  url: 'https://beemobiel.nl/voorwaarden',
}

const breadcrumbVoorwaardenJsonLd = {
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
      name: 'Voorwaarden en Beleid',
      item: 'https://beemobiel.nl/voorwaarden',
    },
  ],
}

export default function VoorwaardenPage() {
  return (
    <>
      <JsonLd data={voorwaardenJsonLd} />
      <JsonLd data={breadcrumbVoorwaardenJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <VoorwaardenHeroSection />
        <VoorwaardenContentSection />
      </main>
      <Footer />
    </>
  )
}


