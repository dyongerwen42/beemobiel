'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const items = [
  {
    title: 'Flexibele planningen',
    description:
      "Plan lessen op tijden die bij jouw leven passen, of het nu 's ochtends, 's avonds of in het weekend is.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Bewezen slagingspercentage',
    description:
      'Sluit je aan bij leerlingen die hun theorie in één keer halen met gerichte oefening en feedback.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 12h2m-1-1v2m8 1a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

export default function TheoryIncludedSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">
              Wat is inbegrepen
            </p>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Alles wat je nodig hebt voor succes
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            Theoriepakketten met begeleiding, oefenvragen en slimme voorbereiding zodat je met vertrouwen je examen ingaat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-gray-100 hover:border-yellow-400/60 transition-all duration-300 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600 mb-4 sm:mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}







