import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import ArticleHeroSection from '@/components/ArticleHeroSection'
import TipsContentSection from '@/components/TipsContentSection'

export const metadata = {
  title: 'Rotondes Rijden - BeeMobiel Rijschool',
  description:
    'Alles wat je moet weten over rotondes. Regels, tips en veelgemaakte fouten.',
}

const rotondesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rotondes Rijden - BeeMobiel Rijschool',
  description: 'Alles wat je moet weten over rotondes',
  url: 'https://beemobiel.nl/tips/rotondes',
}

const breadcrumbRotondesJsonLd = {
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
      name: 'Rotondes Rijden',
      item: 'https://beemobiel.nl/tips/rotondes',
    },
  ],
}

export default function RotondesPage() {
  return (
    <>
      <JsonLd data={rotondesJsonLd} />
      <JsonLd data={breadcrumbRotondesJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <ArticleHeroSection
          title="Rotondes Rijden"
          subtitle="Alles wat je moet weten over rotondes"
          image="/images/highway-lessons_11zon-scaled.webp"
          imageAlt="Rotondes rijden"
        />
        <TipsContentSection>
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Rotondes: Regels en Tips</h2>
            <p className="text-gray-600 leading-relaxed">
              Rotondes kunnen in het begin ingewikkeld lijken, maar met de juiste kennis en oefening 
              worden ze eenvoudig. Hier is alles wat je moet weten.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Basisregels voor Rotondes</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">→</span>
                    <span><strong>Verkeer op de rotonde heeft voorrang:</strong> Verkeer dat al op de rotonde rijdt, heeft altijd voorrang.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">→</span>
                    <span><strong>Kies de juiste rijstrook:</strong> Rechtsaf = rechterstrook, rechtdoor = meestal rechterstrook, linksaf = linkerstrook.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">→</span>
                    <span><strong>Gebruik je richtingaanwijzer:</strong> Richtingaanwijzer naar rechts bij het verlaten van de rotonde.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">→</span>
                    <span><strong>Rijd langzaam:</strong> Rotondes zijn bedoeld om de doorstroming te verbeteren, maar rijd altijd voorzichtig.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Stap-voor-stap: Hoe rijd je een rotonde?</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">1. Naderen</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Rijd langzaam naar de rotonde toe. Kijk goed naar het verkeer dat al op de rotonde rijdt 
                      en wacht tot je veilig kunt invoegen.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">2. Invoegen</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Kies de juiste rijstrook voor je bestemming. Geef voorrang aan verkeer dat al op de 
                      rotonde rijdt en voeg in wanneer het veilig is.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">3. Op de rotonde</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Houd je snelheid laag en blijf op je rijstrook. Blijf alert op andere weggebruikers 
                      en gebruik je spiegels regelmatig.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">4. Uitvoegen</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Zet je richtingaanwijzer naar rechts voordat je de rotonde verlaat. Controleer je 
                      spiegels en dode hoek voordat je uitvoegt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Veelgemaakte Fouten</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Vergeten voorrang te verlenen aan verkeer op de rotonde</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Niet tijdig richtingaanwijzer gebruiken bij uitvoegen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Te hard rijden op de rotonde</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Verkeerde rijstrook kiezen voor de bestemming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Niet goed kijken bij het invoegen of uitvoegen</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 sm:p-8 border-2 border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gouden Tip</h3>
                <p className="text-gray-600 leading-relaxed">
                  Bij rotondes geldt: wanneer je twijfelt, geef dan voorrang. Het is beter om iets 
                  langzamer te zijn dan een ongeluk te veroorzaken. Oefen regelmatig op verschillende 
                  rotondes om vertrouwen te krijgen.
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
