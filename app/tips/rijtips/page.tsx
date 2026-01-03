import Header from '@/components/Header'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import ArticleHeroSection from '@/components/ArticleHeroSection'
import TipsContentSection from '@/components/TipsContentSection'

export const metadata = {
  title: 'Rijtips - BeeMobiel Rijschool',
  description:
    'Handige tips voor veilig en zelfverzekerd rijden. Leer de beste praktijken van ervaren instructeurs.',
}

const rijtipsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rijtips - BeeMobiel Rijschool',
  description: 'Handige tips voor veilig en zelfverzekerd rijden',
  url: 'https://beemobiel.nl/tips/rijtips',
}

const breadcrumbRijtipsJsonLd = {
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
      name: 'Rijtips',
      item: 'https://beemobiel.nl/tips/rijtips',
    },
  ],
}

export default function RijtipsPage() {
  return (
    <>
      <JsonLd data={rijtipsJsonLd} />
      <JsonLd data={breadcrumbRijtipsJsonLd} />
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <ArticleHeroSection
          title="Rijtips"
          subtitle="Handige tips voor veilig en zelfverzekerd rijden"
          image="/images/instructor-showing-traffic-shemes-to-a-female-student-outdooors-1.jpg"
          imageAlt="Rijtips en advies"
        />
        <TipsContentSection>
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Basis Rijtips</h2>
            <p className="text-gray-600 leading-relaxed">
              Hier zijn enkele essentiële rijtips die je helpen om veilig en zelfverzekerd de weg op te gaan.
            </p>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Blijf altijd alert</h3>
                <p className="text-gray-600 leading-relaxed">
                  Houd altijd je ogen op de weg en anticipeer op wat andere weggebruikers kunnen doen. 
                  Vermijd afleidingen zoals je telefoon en blijf gefocust op het verkeer.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Houd voldoende afstand</h3>
                <p className="text-gray-600 leading-relaxed">
                  Houd altijd voldoende afstand tot de auto voor je. De regel is: minimaal 2 seconden 
                  afstand bij normale omstandigheden, en meer bij slecht weer of hoge snelheden.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Gebruik je spiegels regelmatig</h3>
                <p className="text-gray-600 leading-relaxed">
                  Controleer regelmatig je binnenspiegel en buitenspiegels. Dit helpt je om een goed 
                  overzicht te houden van wat er om je heen gebeurt.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Wees voorspelbaar</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gebruik altijd je richtingaanwijzers tijdig en wees duidelijk in je bedoelingen. 
                  Dit helpt andere weggebruikers om te anticiperen op jouw acties.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Pas je snelheid aan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pas je snelheid altijd aan aan de omstandigheden: het weer, het verkeer, en de 
                  wegcondities. Snelheid is een van de belangrijkste factoren voor veiligheid.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 p-6 sm:p-8 bg-yellow-50 rounded-xl border-2 border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Extra Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Zorg voor voldoende rust voordat je gaat rijden</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Controleer regelmatig je voertuig (banden, verlichting, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Wees geduldig en blijf kalm in stressvolle situaties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Oefen regelmatig om je vaardigheden te verbeteren</span>
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
