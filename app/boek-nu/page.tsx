import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import BoekNuHeroSection from '@/components/BoekNuHeroSection'
import BoekNuIntroSection from '@/components/BoekNuIntroSection'
import BookingFormSection from '@/components/BookingFormSection'
import ContactInfoSection from '@/components/ContactInfoSection'

export const metadata = {
  title: 'Boek Nu - Plan Je Eerste Rijles Online | BeeMobiel Rijschool',
  description:
    'Plan je eerste rijles direct online. Vul het formulier in en wij nemen zo snel mogelijk contact met je op. Start vandaag nog met je rijopleiding!',
  keywords: ['rijles boeken', 'online rijles boeken', 'rijlessen reserveren', 'eerste rijles', 'rijles aanvragen'],
  openGraph: {
    title: 'Boek Nu - Plan Je Rijles Online | BeeMobiel',
    description: 'Plan je eerste rijles direct online. Vul het formulier in en wij nemen zo snel mogelijk contact met je op.',
    url: 'https://beemobiel.nl/boek-nu',
    type: 'website',
  },
  alternates: {
    canonical: 'https://beemobiel.nl/boek-nu',
  },
}

const boekNuJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Boek Nu - BeeMobiel Rijschool',
  description: 'Boek je rijles online',
  url: 'https://beemobiel.nl/boek-nu',
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://beemobiel.nl/boek-nu',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: {
      '@type': 'Reservation',
      name: 'Rijles Reservering',
    },
  },
}

const breadcrumbBoekNuJsonLd = {
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
      name: 'Boek Nu',
      item: 'https://beemobiel.nl/boek-nu',
    },
  ],
}

export default function BoekNuPage() {
  return (
    <>
      <JsonLd data={boekNuJsonLd} />
      <JsonLd data={breadcrumbBoekNuJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <BoekNuHeroSection />
        <BoekNuIntroSection />
        <BookingFormSection />
        <ContactInfoSection />
      </main>
      <Footer />
    </>
  )
}

