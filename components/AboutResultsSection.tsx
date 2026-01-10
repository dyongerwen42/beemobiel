'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const highlights = [
  { label: 'Studenten Opgeleid:', value: '200+' },
  { label: 'Slagingspercentage:', value: '90%' },
  { label: 'Jaar Ervaring:', value: '10+' },
  { label: 'Professionele Instructeurs:', value: '5+' },
  { label: 'Persoonlijke Lessen:', value: '1-op-1' },
  { label: 'Rijles:', value: 'Hand & Auto' },
  { label: 'Roosters:', value: 'Flexibele' },
  { label: 'Beschikbaar:', value: 'NL & EN' },
]

export default function AboutResultsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-stretch">
          {/* Left Side - Image */}
          <div className={`relative transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/images/DSC04116.jpg"
                alt="Eigen auto van BeeMobiel"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`space-y-6 sm:space-y-8 transition-opacity duration-700 flex flex-col lg:min-h-[500px] ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight">
                Onze Resultaten Spreken Voor Zich
              </h2>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4 md:mb-5">
                Slagingspercentages waar we trots op zijn
              </h3>
            </div>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Met meer dan 200 geslaagde leerlingen en een slagingspercentage van 90% dat ruim boven het landelijk gemiddelde ligt, laten wij keer op keer zien dat onze aanpak werkt. Onze persoonlijke begeleiding, flexibele lessen en ervaren instructeurs zorgen ervoor dat elke leerling goed voorbereid en met zelfvertrouwen het examen ingaat.
            </p>

            {/* Highlights Grid */}
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Hoogtepunten
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 transition-opacity duration-700 ${
                      isIntersecting ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="flex-1">
                      <span className="text-gray-700 text-sm sm:text-base font-medium">
                        <strong>{highlight.label}</strong> {highlight.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className={`pt-4 transition-opacity duration-700 ${
              isIntersecting ? 'opacity-100' : 'opacity-0'
            }`} style={{ animationDelay: '0.7s' }}>
              <Link
                href="/boek-nu"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white font-bold rounded-xl hover:from-yellow-700 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Boek Nu
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

