'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function VoorwaardenContentSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div
          className={`prose prose-lg max-w-none transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Algemene Voorwaarden</h2>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Lesafspraken</h3>
              <p className="text-gray-600 leading-relaxed">
                Alle rijlessen dienen vooraf gepland te worden. Annuleringen moeten minimaal 24 uur van tevoren worden doorgegeven. Te late annuleringen kunnen volledig in rekening worden gebracht.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Betalingen</h3>
              <p className="text-gray-600 leading-relaxed">
                Betalingen dienen vooraf of op de dag van de les voldaan te worden. Lespakketten moeten vóór aanvang van de eerste les volledig betaald zijn.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Duur van de les</h3>
              <p className="text-gray-600 leading-relaxed">
                Een standaard rijles duurt 60 minuten, tenzij anders overeengekomen. Vertragingen veroorzaakt door de leerling verkorten de lestijd zonder recht op restitutie.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Vereisten voor leerlingen</h3>
              <p className="text-gray-600 leading-relaxed">
                Leerlingen dienen tijdens elke les een geldig identiteitsbewijs en, indien van toepassing, een geldig leerlingbewijs bij zich te hebben. De rijschool behoudt zich het recht voor om een les te weigeren als de leerling ongeschikt of onveilig wordt geacht om te rijden.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">5. Aansprakelijkheid</h3>
              <p className="text-gray-600 leading-relaxed">
                De rijschool en haar instructeurs zijn niet aansprakelijk voor vertragingen of annuleringen als gevolg van verkeer, weersomstandigheden of andere externe factoren buiten onze controle.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">6. Examenplanning</h3>
              <p className="text-gray-600 leading-relaxed">
                Praktijkexamens worden in overleg met de instructeur ingepland. De leerling moet het theorie-examen hebben behaald voordat een praktijkexamen kan worden geboekt.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold text-gray-900 mb-4">7. Retourbeleid</h3>
              <p className="text-gray-600 leading-relaxed">
                Restitutie is alleen mogelijk voor niet-gebruikte lessen binnen vooraf betaalde pakketten. Reeds gevolgde lessen worden niet gerestitueerd.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 sm:p-8 border-2 border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Voor vragen over deze voorwaarden kun je contact met ons opnemen via:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">📧</span>
                  <span>E-mail: rijschool@beemobiel.nl</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">📞</span>
                  <span>Telefoon: 071 220 3046</span>
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-500 pt-6 border-t border-gray-200">
              <p>Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

