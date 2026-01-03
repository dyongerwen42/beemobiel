'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function ErvaringenIntroSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className={`max-w-4xl mx-auto text-center transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Onze Resultaten Spreken Voor Zich
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-5 px-2">
            Slagingspercentages waar we trots op zijn
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-3 md:px-4">
            Met meer dan 500 geslaagde leerlingen en een slagingspercentage dat ruim boven het landelijk gemiddelde ligt, laten wij keer op keer zien dat onze aanpak werkt. Onze persoonlijke begeleiding, flexibele lessen en ervaren instructeurs zorgen ervoor dat elke leerling goed voorbereid en met zelfvertrouwen het examen ingaat.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-600">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-sm sm:text-base text-gray-600"><strong>Geslaagde Leerlingen:</strong></div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-600">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">98%+</div>
              <div className="text-sm sm:text-base text-gray-600"><strong>Slagingspercentage:</strong></div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-600">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">1-op-1</div>
              <div className="text-sm sm:text-base text-gray-600"><strong>Persoonlijke Lessen:</strong></div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-600">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Topkwaliteit</div>
              <div className="text-sm sm:text-base text-gray-600"><strong>Instructeurs:</strong></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
              <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-sm text-gray-600"><strong>Examengericht:</strong></div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
              <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Hand & Auto</div>
              <div className="text-sm text-gray-600"><strong>Rijles:</strong></div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
              <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Flexibele</div>
              <div className="text-sm text-gray-600"><strong>Roosters:</strong></div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
              <div className="text-lg sm:text-xl font-bold text-gray-900 mb-1">NL & EN</div>
              <div className="text-sm text-gray-600"><strong>Beschikbaar:</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

