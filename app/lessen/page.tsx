import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import EnhancedStructuredData from '@/components/EnhancedStructuredData'
import LessenHeroSection from '@/components/LessenHeroSection'
import LessenContentSection from '@/components/LessenContentSection'
import LessenAanbiedingenSection from '@/components/LessenAanbiedingenSection'
import LessenPrijzenSection from '@/components/LessenPrijzenSection'

export const metadata = {
  title: 'Rijlessen - Professionele Rijlessen Auto, Motor & Scooter | BeeMobiel',
  description:
    'Leer rijden met vertrouwen en gemak. Professionele rijlessen voor auto, motor en scooter. Ervaren instructeurs, flexibele planning en persoonlijke begeleiding.',
  keywords: ['rijlessen', 'autorijlessen', 'motorrijlessen', 'scooterlessen', 'rijlessen Nederland', 'rijinstructeur', 'rijopleiding'],
  openGraph: {
    title: 'Rijlessen - BeeMobiel Rijschool',
    description: 'Leer rijden met vertrouwen en gemak. Professionele rijlessen voor auto, motor en scooter.',
    url: 'https://beemobiel.nl/lessen',
    type: 'website',
    images: [
      {
        url: 'https://beemobiel.nl/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Rijlessen bij BeeMobiel',
      },
    ],
  },
  alternates: {
    canonical: 'https://beemobiel.nl/lessen',
    languages: {
      'nl': 'https://beemobiel.nl/lessen',
      'nl-NL': 'https://beemobiel.nl/lessen',
    },
  },
}

const lessenJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lessen - BeeMobiel Rijschool',
  description: 'Professionele rijlessen voor auto, motor en scooter',
  url: 'https://beemobiel.nl/lessen',
}

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Rijlessen BeeMobiel',
  description: 'Professionele rijlessen voor het behalen van je rijbewijs',
  provider: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    url: 'https://beemobiel.nl',
    telephone: '+31-71-220-3046',
    email: 'rijschool@beemobiel.nl',
  },
  courseCode: 'RIJLES-BEEMOBIEL',
  educationalLevel: 'Beginner tot Gevorderd',
  teaches: [
    'Autorijden',
    'Motorrijden',
    'Scooter rijden',
    'Verkeersregels',
    'Verkeersveiligheid',
    'Parkeren',
    'Rotondes',
  ],
  hasCourseInstance: [
    {
      '@type': 'CourseInstance',
      courseMode: 'on-site',
      instructor: {
        '@type': 'Person',
        name: 'Gecertificeerde Rijinstructeur',
      },
    },
  ],
}

const breadcrumbLessenJsonLd = {
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
      name: 'Lessen',
      item: 'https://beemobiel.nl/lessen',
    },
  ],
}

export default function LessenPage() {
  return (
    <>
      <EnhancedStructuredData
        pageType="course"
        title="Rijlessen - Professionele Rijlessen Auto, Motor & Scooter"
        description="Leer rijden met vertrouwen en gemak. Professionele rijlessen voor auto, motor en scooter. Ervaren instructeurs, flexibele planning en persoonlijke begeleiding."
        breadcrumbs={[
          { name: 'Home', url: 'https://beemobiel.nl' },
          { name: 'Lessen', url: 'https://beemobiel.nl/lessen' },
        ]}
        courseData={{
          name: 'Rijlessen BeeMobiel',
          description: 'Professionele rijlessen voor het behalen van je rijbewijs',
          courseCode: 'RIJLES-BEEMOBIEL',
          educationalLevel: 'Beginner tot Gevorderd',
          timeRequired: 'P40H',
        }}
      />
      <JsonLd data={lessenJsonLd} />
      <JsonLd data={courseJsonLd} />
      <JsonLd data={breadcrumbLessenJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <LessenHeroSection />
        <LessenContentSection />
        <LessenAanbiedingenSection />
        <LessenPrijzenSection />
      </main>
      <Footer />
    </>
  )
}

