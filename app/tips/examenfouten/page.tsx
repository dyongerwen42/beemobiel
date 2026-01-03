import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import ArticleHeroSection from '@/components/ArticleHeroSection'
import TipsContentSection from '@/components/TipsContentSection'

export const metadata = {
  title: 'Top 5 Examenfouten - BeeMobiel Rijschool',
  description:
    'De meest gemaakte fouten tijdens het rijexamen. Leer hoe je deze kunt voorkomen.',
}

const examenfoutenJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Top 5 Examenfouten - BeeMobiel Rijschool',
  description: 'De meest gemaakte fouten tijdens het rijexamen',
  url: 'https://beemobiel.nl/tips/examenfouten',
}

const breadcrumbExamenfoutenJsonLd = {
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
      name: 'Top 5 Examenfouten',
      item: 'https://beemobiel.nl/tips/examenfouten',
    },
  ],
}

const examenfouten = [
  {
    nummer: 1,
    titel: 'Te weinig kijken in spiegels',
    beschrijving:
      'Veel kandidaten vergeten regelmatig in hun spiegels te kijken, vooral bij het wisselen van richting of rijstrook. Dit is een van de meest voorkomende fouten.',
    oplossing:
      'Maak er een gewoonte van om regelmatig je binnenspiegel en buitenspiegels te controleren. Kijk altijd eerst in je spiegels voordat je een actie uitvoert.',
  },
  {
    nummer: 2,
    titel: 'Onvoldoende voorrang verlenen',
    beschrijving:
      'Het niet correct verlenen van voorrang aan andere weggebruikers is een veelvoorkomende fout die direct tot zakken kan leiden.',
    oplossing:
      'Wees altijd alert op voorrangsregels, vooral bij rotondes, kruispunten en uitritten. Twijfel je? Geef dan voorrang.',
  },
  {
    nummer: 3,
    titel: 'Te hard of te langzaam rijden',
    beschrijving:
      'Het niet aanpassen van je snelheid aan de omstandigheden, of te hard rijden waar het niet mag, is een veelgemaakte fout.',
    oplossing:
      'Houd je altijd aan de maximumsnelheid en pas je snelheid aan aan de omstandigheden. Bij twijfel: rij langzamer.',
  },
  {
    nummer: 4,
    titel: 'Onvoldoende kijkgedrag bij bijzondere verrichtingen',
    beschrijving:
      'Bij het parkeren, keren of achteruitrijden vergeten kandidaten vaak goed om zich heen te kijken.',
    oplossing:
      'Bij elke bijzondere verrichting: kijk goed om je heen, gebruik je spiegels, en controleer dode hoeken. Neem de tijd en haast je niet.',
  },
  {
    nummer: 5,
    titel: 'Niet anticiperen op verkeer',
    beschrijving:
      'Veel kandidaten reageren alleen op wat er direct voor hen gebeurt, in plaats van vooruit te kijken en te anticiperen.',
    oplossing:
      'Kijk ver vooruit en probeer te voorspellen wat andere weggebruikers kunnen doen. Dit helpt je om tijdig te reageren en vloeiend te rijden.',
  },
]

export default function ExamenfoutenPage() {
  return (
    <>
      <JsonLd data={examenfoutenJsonLd} />
      <JsonLd data={breadcrumbExamenfoutenJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <ArticleHeroSection
          title="Top 5 Examenfouten"
          subtitle="De meest gemaakte fouten tijdens het rijexamen"
          image="/images/person-taking-driver-s-license-exam_11zon-scaled.webp"
          imageAlt="Rijexamen fouten"
        />
        <TipsContentSection>
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Meest Gemaakte Fouten</h2>
            <p className="text-gray-600 leading-relaxed">
              Hier zijn de top 5 meest gemaakte fouten tijdens het rijexamen. Door deze te kennen en te 
              voorkomen, vergroot je je kansen om in één keer te slagen.
            </p>

            <div className="space-y-6">
              {examenfouten.map((fout) => (
                <div
                  key={fout.nummer}
                  className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-gray-900 font-bold text-xl shadow-lg">
                      {fout.nummer}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{fout.titel}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{fout.beschrijving}</p>
                      <div className="bg-white rounded-xl p-4 border-2 border-yellow-200">
                        <p className="text-sm font-semibold text-yellow-700 mb-2">Hoe te voorkomen:</p>
                        <p className="text-gray-700 leading-relaxed">{fout.oplossing}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 p-6 sm:p-8 bg-yellow-50 rounded-xl border-2 border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Extra Tips voor het Examen</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Zorg dat je goed uitgerust bent en op tijd aanwezig</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Blijf rustig en vertrouw op je vaardigheden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Neem de tijd - haast je niet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Luister goed naar de instructies van de examinator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Als je een fout maakt, blijf kalm en ga door</span>
                </li>
              </ul>
            </div>
          </div>
        </TipsContentSection>
      </main>
      <Footer />
    </>
  )
}

