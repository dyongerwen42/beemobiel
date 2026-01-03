'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const prijskaarten = [
  {
    voertuig: 'Motorfiets',
    prijs: '€ 1,300',
    periode: '/Uur',
    features: [
      '90 minuten rijles',
      'Praktijkexamen inbegrepen',
      'Volledige theoriecursus',
      '15 rijlessen',
      'Geen tussentijdse toets'
    ],
    link: '/boek-nu'
  },
  {
    voertuig: 'Auto',
    prijs: '€ 2,200',
    periode: '/Uur',
    features: [
      '60 minuten rijles',
      'Praktijkexamen inbegrepen',
      'Volledige theoriecursus',
      '20 rijlessen',
      'Geen tussentijdse toets'
    ],
    link: '/boek-nu'
  },
  {
    voertuig: 'Scooter en Brommer',
    prijs: '€ 550',
    periode: '/Uur',
    features: [
      '90 minuten rijles',
      'Praktijkexamen inbegrepen',
      'Volledige theoriecursus',
      'Tussentijdse toets inbegrepen',
      'Perfect voor beginners'
    ],
    link: '/boek-nu'
  }
]

export default function LessenPrijzenSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Onze Prijzen
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed px-2">
            Betaalbare rijlessen voor elk budget
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mt-2 sm:mt-3 px-2">
            Bij ons vind je flexibele pakketten en eerlijke tarieven. Of je nu één les wilt of een volledig lespakket, wij hebben iets dat bij jou past.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {prijskaarten.map((kaart, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-yellow-400 transition-opacity duration-700 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {kaart.voertuig}
                </h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                    {kaart.prijs}
                  </span>
                  <span className="text-gray-600 ml-2">{kaart.periode}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {kaart.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-yellow-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={kaart.link}
                className="block w-full text-center px-6 py-3 bg-yellow-600 text-gray-900 font-bold rounded-xl hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Boek Nu
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
