'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function LessenContentSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div
          className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">
              Rijlessen
            </p>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Leer rijden met vertrouwen en gemak.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            De rijlessen zelf zijn uiteindelijk de doorslaggevende factor bij het wel of niet behalen van je rijbewijs. En dan leggen we bij BeeMobiel specifiek de nadruk op een aantal elementen.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border-l-4 border-yellow-600 shadow-lg">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4">Rij-instructeurs</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5">
              Wij vinden het enorm belangrijk dat onze rij-instructeurs aan de hoogst mogelijke kwaliteitsstandaarden voldoen. Het maakt dan verder geen verschil of het om auto rijlessen, motor rijlessen of scooter rijlessen gaat. Onder de streep moet de rij-instructeur altijd ervaren, vriendelijk en up-to-date zijn. Zodoende garanderen wij dat iedere lesnemer ook krijgt wat hij of zij mag verwachten.
            </p>
            <Link
              href="/tarieven"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-600 text-gray-900 font-bold rounded-xl hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Bekijk Tarieven
            </Link>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border-l-4 border-yellow-600 shadow-lg">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4">Oog voor detail</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5">
              Ook hebben we bij BeeMobiel oog voor detail tijdens onze rijlessen. Wij kijken specifiek naar het optimaliseren van het rijgedrag waar het CBR waarde aan hecht tijdens je praktijkexamen. Denk dan aan zelfverzekerd rijden, duidelijk kijkgedrag en correct handelen in stressvolle situaties. Wanneer je deze zaken goed onder de knie hebt, is de kans op snel je rijbewijs halen het grootst. En dat wil uiteindelijk iedereen!
            </p>
            <Link
              href="/tarieven"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-600 text-gray-900 font-bold rounded-xl hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Bekijk Tarieven
            </Link>
          </div>

          <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border-l-4 border-yellow-600 shadow-lg">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4">Persoonlijke feedback</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-5">
              Bovendien kijken wij ook altijd naar het persoonlijke traject. Iedereen is anders en iedereen heeft dus ook zijn of haar sterke en zwakkere kanten. Onze instructeurs voorzien je daarom steevast van persoonlijke feedback, zodat je precies weet waar je aan moet werken. Daarmee ben je optimaal voorbereid en leer je zo snel mogelijk de punten die voor jou persoonlijk zo essentieel zijn.
            </p>
            <Link
              href="/tarieven"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-600 text-gray-900 font-bold rounded-xl hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Bekijk Tarieven
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

