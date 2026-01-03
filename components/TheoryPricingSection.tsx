'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const theoryPackages = [
  {
    title: 'THEORIE',
    price: '€ 66,-',
    cta: 'aanmelden',
    href: '/contact',
    featured: true,
  },
  {
    title: 'THEORIE INDIVIDUEEL',
    price: '€ 145,-',
    cta: 'aanmelden',
    href: '/contact',
    featured: false,
  },
  {
    title: 'THEORIE BOEK',
    price: '€ 50,-',
    cta: 'aanmelden',
    href: '/contact',
    featured: false,
  },
  {
    title: 'ONLINE THEORIE CURSUS',
    price: '€ 99,-',
    cta: 'aanmelden',
    href: '/contact',
    featured: false,
  },
]

export default function TheoryPricingSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Theorie</p>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Jouw theorie-examen halen
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Kies het pakket dat bij jou past. Snel starten, flexibel leren en oefenen met CBR-stijl vragen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {theoryPackages.map((pkg, idx) => (
            <div
              key={pkg.title}
              className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 overflow-visible group ${
                pkg.featured ? 'border-yellow-600 ring-4 ring-yellow-100/60 scale-[1.02]' : 'border-gray-200 hover:border-yellow-400'
              } ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {pkg.featured && (
                <div className="absolute -top-3 -right-3 bg-yellow-600 text-gray-900 px-4 py-2 rounded-xl font-bold text-xs uppercase shadow-lg z-[100]">
                  POPULAIR
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{pkg.title}</h3>
              </div>

              <div className="mb-6">
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900">{pkg.price}</div>
              </div>

              <Link
                href={pkg.href}
                className={`w-full inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold uppercase tracking-wide text-sm transition-all duration-300 shadow-lg hover:shadow-xl ${
                  pkg.featured ? 'bg-yellow-600 text-gray-900 hover:bg-yellow-700' : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


