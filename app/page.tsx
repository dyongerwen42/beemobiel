import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import EnhancedStructuredData from '@/components/EnhancedStructuredData'
import JsonLd from '@/components/JsonLd'

// Dynamic imports for below-the-fold components (reduces initial bundle size)
const DrivingLicenseProcessSection = dynamic(() => import('@/components/DrivingLicenseProcessSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const ReviewsSection = dynamic(() => import('@/components/ReviewsSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const TrafficSignsSection = dynamic(() => import('@/components/TrafficSignsSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const LessonsSection = dynamic(() => import('@/components/LessonsSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const InstructorQualitiesSection = dynamic(() => import('@/components/InstructorQualitiesSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const StatsSection = dynamic(() => import('@/components/StatsSection'), {
  loading: () => <div className="min-h-[400px]" />,
})
const CTAFinalSection = dynamic(() => import('@/components/CTAFinalSection'), {
  loading: () => <div className="min-h-[400px]" />,
})

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BeeMobiel Rijschool',
  url: 'https://beemobiel.nl',
  description: 'Professionele rijschool voor autorijlessen, motorrijlessen en scooterlessen in Nederland.',
  inLanguage: 'nl-NL',
  publisher: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    logo: {
      '@type': 'ImageObject',
      url: 'https://beemobiel.nl/images/logo.png',
      width: 1200,
      height: 630,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://beemobiel.nl/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Driving School',
  provider: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    url: 'https://beemobiel.nl',
    telephone: '+31-71-220-3046',
    email: 'rijschool@beemobiel.nl',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nederland',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Rijlessen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Autorijlessen',
          description: 'Professionele autorijlessen voor het behalen van je rijbewijs B.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Motorrijlessen',
          description: 'Professionele motorrijlessen voor het behalen van je rijbewijs A.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Scooterlessen',
          description: 'Professionele scooterlessen voor het behalen van je rijbewijs AM.',
        },
      },
    ],
  },
}

const aggregateRatingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#organization',
  },
  ratingValue: '5',
  reviewCount: '14',
  bestRating: '5',
  worstRating: '1',
}

const reviewJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#organization',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Person',
    name: 'Mark J.',
  },
  reviewBody: 'Ik had helemaal geen ervaring, maar mijn instructeur was rustig, geduldig en duidelijk. Ik ben in één keer geslaagd en voel me nu zeker in het verkeer.',
  datePublished: '2024-01-01',
}

const videoJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'BeeMobiel Rijschool - Professionele Rijlessen',
  description: 'Professionele rijlessen voor auto, motor en scooter bij BeeMobiel Rijschool',
  thumbnailUrl: 'https://beemobiel.nl/images/logo.png',
  uploadDate: '2024-01-01',
  contentUrl: 'https://beemobiel.nl/videos/Home-Hero-2.mp4',
  embedUrl: 'https://beemobiel.nl/videos/Home-Hero-2.mp4',
  duration: 'PT30S',
  publisher: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    logo: {
      '@type': 'ImageObject',
      url: 'https://beemobiel.nl/images/logo.png',
    },
  },
}

const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Rijlessen - BeeMobiel Rijschool',
  description: 'Professionele rijlessen voor autorijbewijs, motorrijbewijs en scooterrijbewijs',
  provider: {
    '@type': 'LocalBusiness',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#organization',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nederland',
  },
  serviceType: 'Driving Instruction',
  category: 'Education',
}

const educationalProgramJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOccupationalProgram',
  '@id': 'https://beemobiel.nl/#educational-program',
  name: 'Rijopleiding BeeMobiel',
  description: 'Complete rijopleiding voor het behalen van je rijbewijs',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#organization',
  },
  educationalCredentialAwarded: 'Rijbewijs',
  programType: 'Vocational',
  occupationalCategory: 'Driving Instructor',
  timeRequired: 'P40H',
  numberOfCredits: {
    '@type': 'StructuredValue',
    value: '40',
    unitText: 'hours',
  },
  sameAs: 'https://beemobiel.nl/lessen',
}

const datasetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  '@id': 'https://beemobiel.nl/#statistics',
  name: 'BeeMobiel Rijschool Statistieken',
  description: 'Statistieken over onze rijschool prestaties',
  keywords: 'rijschool statistieken, slagingspercentage, studenten opgeleid',
  creator: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#organization',
  },
  distribution: {
    '@type': 'DataDownload',
    encodingFormat: 'application/json',
    contentUrl: 'https://beemobiel.nl/api/statistics',
  },
  variableMeasured: [
    {
      '@type': 'PropertyValue',
      name: 'Studenten Opgeleid',
      value: '200+',
    },
    {
      '@type': 'PropertyValue',
      name: 'Slagingspercentage',
      value: '90%',
    },
    {
      '@type': 'PropertyValue',
      name: 'Jaar Ervaring',
      value: '10+',
    },
    {
      '@type': 'PropertyValue',
      name: 'Professionele Instructeurs',
      value: '5+',
    },
  ],
}

const itemListPackagesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': 'https://beemobiel.nl/#packages',
  name: 'Rijlessen Pakketten',
  description: 'Overzicht van alle beschikbare rijlespakketten',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Product',
        name: 'BEE NEXT',
        description: '45 rijlessen inclusief praktijkexamen',
        offers: {
          '@type': 'Offer',
          price: '3070',
          priceCurrency: 'EUR',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Product',
        name: 'BEE SMART',
        description: '35 rijlessen inclusief praktijkexamen',
        offers: {
          '@type': 'Offer',
          price: '2520',
          priceCurrency: 'EUR',
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Product',
        name: 'BEE QUICK',
        description: '20 rijlessen inclusief praktijkexamen',
        offers: {
          '@type': 'Offer',
          price: '1540',
          priceCurrency: 'EUR',
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
        },
      },
    },
  ],
}

const speakableJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://beemobiel.nl/#speakable',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.speakable'],
    xpath: ['/html/head/title'],
  },
}

const personInstructorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://beemobiel.nl/#instructor',
  name: 'Gecertificeerde Rijinstructeur',
  jobTitle: 'Rijinstructeur',
  worksFor: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#organization',
  },
  knowsAbout: [
    'Autorijlessen',
    'Motorrijlessen',
    'Scooterlessen',
    'Verkeersregels',
    'Rijexamen voorbereiding',
  ],
  memberOf: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
  },
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://beemobiel.nl/#webpage',
  name: 'BeeMobiel Rijschool - Homepage',
  description: 'Professionele rijlessen voor auto, motor en scooter',
  url: 'https://beemobiel.nl',
  inLanguage: 'nl-NL',
  isPartOf: {
    '@type': 'WebSite',
    name: 'BeeMobiel Rijschool',
    url: 'https://beemobiel.nl',
  },
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://beemobiel.nl/#organization',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://beemobiel.nl',
      },
    ],
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://beemobiel.nl/images/logo.png',
    width: 1200,
    height: 630,
  },
}

const reviewActionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ReviewAction',
  object: {
    '@type': 'LocalBusiness',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#organization',
  },
  resultReview: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
  },
}

const softwareApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://beemobiel.nl/#app',
  name: 'BeeMobiel Rijschool Website',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '14',
  },
  author: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    '@id': 'https://beemobiel.nl/#organization',
  },
}

const imageGalleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  '@id': 'https://beemobiel.nl/#gallery',
  name: 'BeeMobiel Rijschool Foto Galerij',
  description: 'Foto\'s van onze rijschool, instructeurs en leerlingen',
  associatedMedia: [
    {
      '@type': 'ImageObject',
      contentUrl: 'https://beemobiel.nl/images/logo.png',
      description: 'BeeMobiel Rijschool Logo',
    },
  ],
}

const brandJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Brand',
  '@id': 'https://beemobiel.nl/#brand',
  name: 'BeeMobiel',
  description: 'BeeMobiel Rijschool - Professionele rijlessen',
  logo: 'https://beemobiel.nl/images/logo.png',
  slogan: 'Professionele rijlessen met een persoonlijke aanpak',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '14',
  },
}

export default function Home() {
  return (
    <>
      <EnhancedStructuredData
        pageType="home"
        title="BeeMobiel Rijschool - Professionele Rijlessen Auto, Motor & Scooter"
        description="Bij BeeMobiel pakken we het professioneel aan, met flexibele pakketten, ervaren instructeurs en een volledig gepersonaliseerde aanpak. Jouw betrouwbare rijschool in Nederland."
        breadcrumbs={[{ name: 'Home', url: 'https://beemobiel.nl' }]}
        listData={{
          name: 'Rijlessen Diensten',
          description: 'Overzicht van alle rijlessen diensten',
          items: [
            { name: 'Autorijlessen', description: 'Professionele autorijlessen voor rijbewijs B', url: 'https://beemobiel.nl/tarieven/autos' },
            { name: 'Motorrijlessen', description: 'Professionele motorrijlessen voor rijbewijs A', url: 'https://beemobiel.nl/tarieven/motorfietsen' },
            { name: 'Scooterlessen', description: 'Professionele scooterlessen voor rijbewijs AM', url: 'https://beemobiel.nl/tarieven/scooters' },
            { name: 'Theoriecursus', description: 'Theoriecursus voor rijbewijs', url: 'https://beemobiel.nl/tarieven/theorie' },
          ],
        }}
      />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={aggregateRatingJsonLd} />
      <JsonLd data={reviewJsonLd} />
      <JsonLd data={videoJsonLd} />
      <JsonLd data={professionalServiceJsonLd} />
      <JsonLd data={educationalProgramJsonLd} />
      <JsonLd data={datasetJsonLd} />
      <JsonLd data={itemListPackagesJsonLd} />
      <JsonLd data={speakableJsonLd} />
      <JsonLd data={personInstructorJsonLd} />
      <JsonLd data={reviewActionJsonLd} />
      <JsonLd data={softwareApplicationJsonLd} />
      <JsonLd data={imageGalleryJsonLd} />
      <JsonLd data={brandJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <HeroSection />
        <FeaturesSection />
        <DrivingLicenseProcessSection />
        <ReviewsSection />
        <PricingSection />
        <TrafficSignsSection />
        <AboutSection />
        <LessonsSection />
        <InstructorQualitiesSection />
        <FAQSection />
        <StatsSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  )
}
