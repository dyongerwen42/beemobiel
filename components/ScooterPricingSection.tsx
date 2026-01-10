'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const scooterPackages = [
  {
    title: "Dagcursus 2",
    price: "€545",
    features: [
      "5 scooterlessen",
      "Inclusief praktijkexamen",
      "Inclusief Theorie",
      "Inclusief theorie examen"
    ],
    popular: true
  },
  {
    title: "Dagcursus 1",
    price: "€465",
    features: [
      "5 scooterlessen",
      "Inclusief praktijkexamen"
    ],
    popular: false
  },
  {
    title: "Herkansing",
    price: "€365",
    features: [
      "3 scooterlessen",
      "Inclusief praktijkexamen"
    ],
    popular: false
  }
]

export default function ScooterPricingSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Scooters & Brommers</p>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-4 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Scooter & Brommer Lespakketten
          </h2>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {scooterPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                pkg.popular 
                  ? 'border-yellow-600 ring-4 ring-yellow-100/50 scale-105 lg:scale-110' 
                  : 'border-gray-200 hover:border-yellow-400'
              } overflow-visible group flex flex-col ${
                isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
              }`}
              style={{ animationDelay: `${index * 0.15 + 0.45}s` }}
            >
              {/* Premium background pattern */}
              <div className="absolute inset-0 opacity-[0.02] hexagon-pattern pointer-events-none"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none opacity-0 group-hover:opacity-100"></div>
              
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 -right-4 bg-yellow-600 text-gray-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm uppercase shadow-lg animate-pulse z-[100]">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Meest Gekozen
                  </div>
                </div>
              )}
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-yellow-600 transition-colors duration-300">{pkg.title}</h3>
                  {pkg.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-yellow-100 rounded-full mt-2">
                      <span className="text-yellow-700 text-xs font-bold uppercase tracking-wider">Meest Gekozen</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-6 sm:mb-8 md:mb-10 pb-4 border-b-2 border-gray-100">
                  <div className="flex items-baseline">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mr-1">€</span>
                    <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-none">
                      {pkg.price.replace('€', '').replace(/\./g, '').split(',')[0]}
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-500 ml-2">
                      {pkg.price.includes(',') ? ',' + pkg.price.split(',')[1] : ''}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-600 flex items-center justify-center mr-3 mt-0.5 shadow-md transform group-hover/item:scale-125 transition-transform duration-300">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed font-medium pt-0.5">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/boek-nu?vehicle=scooter"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base group/btn relative overflow-hidden ${
                    pkg.popular
                      ? 'bg-yellow-600 text-gray-900 hover:bg-yellow-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <span>{pkg.popular ? 'Aanmeld' : 'Meer info'}</span>
                  <svg className={`w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300 ${
                    pkg.popular ? 'text-gray-900' : 'text-white'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

