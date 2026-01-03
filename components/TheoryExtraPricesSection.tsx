'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const prices = [
  { label: 'Theorieles', value: '€75' },
  { label: 'Theorie-examen (CBR)', value: '€50' },
  { label: 'Online theorieles', value: '€60' },
]

export default function TheoryExtraPricesSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Text Content */}
          <div className={`${isIntersecting ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
            <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
              <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">
                Slimme prijzen
              </p>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight">
              Kwalitatieve training zonder te veel te betalen
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              Onze tarieven voor theorielessen zijn transparant en concurrerend, zodat je kwaliteitsvolle training krijgt tegen een eerlijke prijs. Of je nu kiest voor klassikale lessen, online leren of alleen het CBR-examen, er is altijd een optie die bij jouw wensen en budget past.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {prices.map((price, idx) => (
                <div
                  key={price.label}
                  className="flex items-center justify-between bg-white rounded-xl p-4 sm:p-5 border-2 border-gray-100 hover:border-yellow-400/60 transition-all duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{price.label}</span>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-600">{price.value}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-yellow-600 text-gray-900 font-bold rounded-xl text-sm sm:text-base uppercase tracking-wide hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Boek nu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-700`} style={{ transitionDelay: '0.2s' }}>
            <Image
              src="/images/person-preparing-get-driver-license-4_11zon-scaled.webp"
              alt="Theorie leren"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

