import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactHeroSection from '@/components/ContactHeroSection'
import ContactIntroSection from '@/components/ContactIntroSection'
import ContactFormSection from '@/components/ContactFormSection'
import ContactMapSection from '@/components/ContactMapSection'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title: 'Contact - Neem Contact Op | BeeMobiel Rijschool',
  description: 'Neem contact met ons op voor meer informatie over onze rijlessen. Bel 071 220 3046 of stuur een e-mail naar rijschool@beemobiel.nl. We helpen je graag verder!',
  keywords: ['contact rijschool', 'rijschool bellen', 'rijlessen informatie', 'contact opnemen rijschool'],
  openGraph: {
    title: 'Contact - BeeMobiel Rijschool',
    description: 'Neem contact met ons op voor meer informatie over onze rijlessen. We helpen je graag verder!',
    url: 'https://beemobiel.nl/contact',
    type: 'website',
    images: [
      {
        url: 'https://beemobiel.nl/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact BeeMobiel Rijschool',
      },
    ],
  },
  alternates: {
    canonical: 'https://beemobiel.nl/contact',
    languages: {
      'nl': 'https://beemobiel.nl/contact',
      'nl-NL': 'https://beemobiel.nl/contact',
    },
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact - BeeMobiel Rijschool',
  description: 'Neem contact met ons op voor meer informatie over onze rijlessen.',
  url: 'https://beemobiel.nl/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    telephone: '+31-71-220-3046',
    email: 'rijschool@beemobiel.nl',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
      addressLocality: 'Nederland',
    },
  },
}

const breadcrumbContactJsonLd = {
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
      name: 'Contact',
      item: 'https://beemobiel.nl/contact',
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
      <JsonLd data={breadcrumbContactJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <ContactHeroSection />
        <ContactIntroSection />
        <ContactFormSection />
        <ContactMapSection />
      </main>
      <Footer />
    </>
  )
}

