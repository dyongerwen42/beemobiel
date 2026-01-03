import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import EnhancedStructuredData from '@/components/EnhancedStructuredData'
import FAQHeroSection from '@/components/FAQHeroSection'
import FAQQuestionsSection from '@/components/FAQQuestionsSection'
import FAQCTASection from '@/components/FAQCTASection'

export const metadata = {
  title: "FAQ's - Veelgestelde Vragen over Rijlessen | BeeMobiel Rijschool",
  description:
    'Veelgestelde vragen over rijlessen, examens en onze diensten. Vind snel antwoorden op je vragen over autorijlessen, motorrijlessen, tarieven, examens en meer.',
  keywords: ['FAQ rijschool', 'veelgestelde vragen rijlessen', 'vragen over rijbewijs', 'rijlessen vragen', 'rijschool informatie'],
  openGraph: {
    title: "FAQ's - Veelgestelde Vragen | BeeMobiel Rijschool",
    description: 'Veelgestelde vragen over rijlessen, examens en onze diensten. Vind snel antwoorden op je vragen.',
    url: 'https://beemobiel.nl/faq',
    type: 'website',
    images: [
      {
        url: 'https://beemobiel.nl/images/person-taking-driver-s-license-exam-1_11zon-scaled.webp',
        width: 1200,
        height: 630,
        alt: "FAQ's BeeMobiel Rijschool",
      },
    ],
  },
  alternates: {
    canonical: 'https://beemobiel.nl/faq',
    languages: {
      'nl': 'https://beemobiel.nl/faq',
      'nl-NL': 'https://beemobiel.nl/faq',
    },
  },
}

const qaPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'QAPage',
  mainEntity: {
    '@type': 'Question',
    name: 'Welke rijlessen bieden jullie aan?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Wij bieden rijlessen voor auto\'s (handgeschakeld en automaat), motoren en scooters.',
      author: {
        '@type': 'Organization',
        name: 'BeeMobiel Rijschool',
      },
    },
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  name: "FAQ's - BeeMobiel Rijschool",
  description: 'Veelgestelde vragen over rijlessen, examens en onze diensten',
  url: 'https://beemobiel.nl/faq',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Welke rijlessen bieden jullie aan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bieden rijlessen voor auto\'s (handgeschakeld en automaat), motoren en scooters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kost een rijles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze standaard prijs is ongeveer €60 per uur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hebben jullie pakketten met meerdere lessen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wij bieden verschillende lespakketten aan met voordelige tarieven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik kiezen tussen automaat en handgeschakeld?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zeker, je kunt lessen volgen in een automaat of handgeschakelde auto.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke regio geven jullie rijlessen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij geven les in Nederland en omliggende gebieden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn jullie instructeurs gecertificeerd?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, al onze instructeurs zijn professioneel opgeleid en gecertificeerd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe plan ik mijn eerste rijles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neem contact met ons op via het formulier, WhatsApp of telefonisch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt een rijles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een standaard rijles duurt 60 minuten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik zonder theorie-examen beginnen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, je kunt met praktijklessen starten voordat je je theorie-examen haalt.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke taal worden de lessen gegeven?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze lessen zijn standaard in het Nederlands, maar Engels is ook mogelijk.',
      },
    },
  ],
}

const breadcrumbFAQJsonLd = {
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
      name: "FAQ's",
      item: 'https://beemobiel.nl/faq',
    },
  ],
}

export default function FAQPage() {
  const faqQuestions = [
    { question: 'Welke rijlessen bieden jullie aan?', answer: 'Wij bieden rijlessen voor auto\'s (handgeschakeld en automaat), motoren en scooters.' },
    { question: 'Wat kost een rijles?', answer: 'Onze standaard prijs is ongeveer €60 per uur.' },
    { question: 'Hebben jullie pakketten met meerdere lessen?', answer: 'Ja, wij bieden verschillende lespakketten aan met voordelige tarieven.' },
    { question: 'Kan ik kiezen tussen automaat en handgeschakeld?', answer: 'Zeker, je kunt lessen volgen in een automaat of handgeschakelde auto.' },
    { question: 'In welke regio geven jullie rijlessen?', answer: 'Wij geven les in Nederland en omliggende gebieden.' },
    { question: 'Zijn jullie instructeurs gecertificeerd?', answer: 'Ja, al onze instructeurs zijn professioneel opgeleid en gecertificeerd.' },
    { question: 'Hoe plan ik mijn eerste rijles?', answer: 'Neem contact met ons op via het formulier, WhatsApp of telefonisch.' },
    { question: 'Hoe lang duurt een rijles?', answer: 'Een standaard rijles duurt 60 minuten.' },
    { question: 'Kan ik zonder theorie-examen beginnen?', answer: 'Ja, je kunt met praktijklessen starten voordat je je theorie-examen haalt.' },
    { question: 'In welke taal worden de lessen gegeven?', answer: 'Onze lessen zijn standaard in het Nederlands, maar Engels is ook mogelijk.' },
  ]

  return (
    <>
      <EnhancedStructuredData
        pageType="faq"
        title="FAQ's - Veelgestelde Vragen over Rijlessen"
        description="Veelgestelde vragen over rijlessen, examens en onze diensten. Vind snel antwoorden op je vragen over autorijlessen, motorrijlessen, tarieven, examens en meer."
        breadcrumbs={[
          { name: 'Home', url: 'https://beemobiel.nl' },
          { name: "FAQ's", url: 'https://beemobiel.nl/faq' },
        ]}
        faqData={faqQuestions}
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={qaPageJsonLd} />
      <JsonLd data={breadcrumbFAQJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <FAQHeroSection />
        <FAQQuestionsSection />
        <FAQCTASection />
      </main>
      <Footer />
    </>
  )
}

