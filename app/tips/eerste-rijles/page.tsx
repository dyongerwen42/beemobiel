import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import EnhancedStructuredData from '@/components/EnhancedStructuredData'
import ArticleHeroSection from '@/components/ArticleHeroSection'
import TipsContentSection from '@/components/TipsContentSection'

export const metadata = {
  title: 'Eerste Rijles - Wat te Verwachten & Voorbereiding Tips | BeeMobiel',
  description:
    'Wat te verwachten bij je eerste rijles. Bereid je optimaal voor en begin met vertrouwen. Complete gids met praktische tips voor je eerste autorijles.',
  keywords: ['eerste rijles', 'eerste autorijles', 'voorbereiding rijles', 'wat te verwachten rijles', 'rijles tips'],
  openGraph: {
    title: 'Eerste Rijles - BeeMobiel Rijschool',
    description: 'Wat te verwachten bij je eerste rijles. Bereid je optimaal voor en begin met vertrouwen.',
    url: 'https://beemobiel.nl/tips/eerste-rijles',
    type: 'article',
    images: [
      {
        url: 'https://beemobiel.nl/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Eerste rijles bij BeeMobiel',
      },
    ],
    publishedTime: '2024-01-01T00:00:00+01:00',
    modifiedTime: '2024-12-01T00:00:00+01:00',
    authors: ['BeeMobiel Rijschool'],
    section: 'Rijtips',
    tags: ['eerste rijles', 'voorbereiding', 'autorijles tips'],
  },
  alternates: {
    canonical: 'https://beemobiel.nl/tips/eerste-rijles',
    languages: {
      'nl': 'https://beemobiel.nl/tips/eerste-rijles',
      'nl-NL': 'https://beemobiel.nl/tips/eerste-rijles',
    },
  },
}

const eersteRijlesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Eerste Rijles - Wat te Verwachten & Voorbereiding Tips',
  description: 'Wat te verwachten bij je eerste rijles. Bereid je optimaal voor en begin met vertrouwen.',
  url: 'https://beemobiel.nl/tips/eerste-rijles',
  image: {
    '@type': 'ImageObject',
    url: 'https://beemobiel.nl/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg',
    width: 1200,
    height: 630,
    alt: 'Eerste rijles bij BeeMobiel Rijschool',
  },
  datePublished: '2024-01-01T00:00:00+01:00',
  dateModified: '2024-12-01T00:00:00+01:00',
  author: {
    '@type': 'Organization',
    name: 'BeeMobiel Rijschool',
    url: 'https://beemobiel.nl',
    '@id': 'https://beemobiel.nl/#organization',
  },
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
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://beemobiel.nl/tips/eerste-rijles',
  },
  articleSection: 'Rijtips',
  keywords: 'eerste rijles, voorbereiding rijles, autorijles tips',
  inLanguage: 'nl-NL',
  wordCount: '500',
  articleBody: 'Complete gids over wat te verwachten bij je eerste rijles, inclusief voorbereidingstips en praktisch advies.',
}

const breadcrumbEersteRijlesJsonLd = {
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
      name: 'Tips en Trucs',
      item: 'https://beemobiel.nl/tips',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Eerste Rijles',
      item: 'https://beemobiel.nl/tips/eerste-rijles',
    },
  ],
}

export default function EersteRijlesPage() {
  return (
    <>
      <EnhancedStructuredData
        pageType="article"
        title="Eerste Rijles - Wat te Verwachten & Voorbereiding Tips"
        description="Wat te verwachten bij je eerste rijles. Bereid je optimaal voor en begin met vertrouwen. Complete gids met praktische tips voor je eerste autorijles."
        breadcrumbs={[
          { name: 'Home', url: 'https://beemobiel.nl' },
          { name: 'Tips en Trucs', url: 'https://beemobiel.nl/tips' },
          { name: 'Eerste Rijles', url: 'https://beemobiel.nl/tips/eerste-rijles' },
        ]}
        articleData={{
          headline: 'Eerste Rijles - Wat te Verwachten & Voorbereiding Tips',
          image: '/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg',
          datePublished: '2024-01-01T00:00:00+01:00',
          dateModified: '2024-12-01T00:00:00+01:00',
        }}
        howToData={{
          name: 'Hoe bereid je je voor op je eerste rijles',
          steps: [
            {
              name: 'Zorg dat je op tijd bent',
              text: 'Kom ongeveer 10 minuten van tevoren aan, zodat je rustig kunt beginnen.',
            },
            {
              name: 'Neem je identiteitsbewijs mee',
              text: 'Je instructeur moet je identiteit kunnen verifiëren.',
            },
            {
              name: 'Draag comfortabele kleding',
              text: 'Kies kleding waarin je je goed kunt bewegen en comfortabel zit.',
            },
            {
              name: 'Draag geschikt schoeisel',
              text: 'Vermijd hoge hakken of slippers. Kies voor platte, stevige schoenen.',
            },
            {
              name: 'Wees uitgerust',
              text: 'Zorg dat je voldoende hebt geslapen en alert bent.',
            },
          ],
        }}
      />
      <JsonLd data={eersteRijlesJsonLd} />
      <JsonLd data={breadcrumbEersteRijlesJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <ArticleHeroSection
          title="Eerste Rijles"
          subtitle="Wat te verwachten bij je eerste rijles"
          image="/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg"
          imageAlt="Eerste rijles"
        />
        <TipsContentSection>
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Voorbereiding op je Eerste Rijles</h2>
            <p className="text-gray-600 leading-relaxed">
              Je eerste rijles kan spannend zijn, maar met de juiste voorbereiding begin je met vertrouwen. 
              Hier is wat je kunt verwachten en hoe je je het beste kunt voorbereiden.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat gebeurt er tijdens je eerste rijles?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tijdens je eerste rijles zal je instructeur je eerst kennis laten maken met de auto en de 
                  basisbediening. Je leert over de pedalen, de versnellingspook, en de belangrijkste knoppen 
                  en schakelaars.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Daarna ga je meestal naar een rustige omgeving waar je voor het eerst achter het stuur 
                  plaatsneemt. Je instructeur zal je stap voor stap begeleiden en je leren hoe je de auto 
                  moet starten, wegrijden en stoppen.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hoe bereid je je voor?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">✓</span>
                    <span><strong>Zorg dat je op tijd bent:</strong> Kom ongeveer 10 minuten van tevoren aan, zodat je rustig kunt beginnen.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">✓</span>
                    <span><strong>Neem je identiteitsbewijs mee:</strong> Je instructeur moet je identiteit kunnen verifiëren.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">✓</span>
                    <span><strong>Draag comfortabele kleding:</strong> Kies kleding waarin je je goed kunt bewegen en comfortabel zit.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">✓</span>
                    <span><strong>Draag geschikt schoeisel:</strong> Vermijd hoge hakken of slippers. Kies voor platte, stevige schoenen.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">✓</span>
                    <span><strong>Wees uitgerust:</strong> Zorg dat je voldoende hebt geslapen en alert bent.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wat als je zenuwachtig bent?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Het is volkomen normaal om zenuwachtig te zijn voor je eerste rijles. Onthoud dat:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Je instructeur is er om je te helpen en heeft veel geduld</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Iedereen moet ergens beginnen - je bent niet de enige</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>De auto heeft dubbele bediening, dus je instructeur kan altijd ingrijpen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    <span>Fouten maken hoort bij het leerproces</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 sm:p-8 border-2 border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tips voor een goede start</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stel vragen als je iets niet begrijpt, luister goed naar de uitleg van je instructeur, 
                  en wees niet bang om fouten te maken. Het belangrijkste is dat je je op je gemak voelt 
                  en vertrouwen krijgt in je eigen kunnen.
                </p>
              </div>
            </div>
          </div>
        </TipsContentSection>
      </main>
      <Footer />
    </>
  )
}

