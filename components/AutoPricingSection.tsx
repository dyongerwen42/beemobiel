'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const autoPackages = [
  {
    title: "BEE NEXT",
    price: "€3070",
    features: [
      "45 rijlessen",
      "inclusief praktijkexamen",
      "Gratis proefles",
      "Inclusief proefexamen",
      "Inclusief iTheorie",
      "Inclusief theorie examen"
    ],
    popular: false
  },
  {
    title: "BEE SMART",
    price: "€2520",
    features: [
      "35 rijlessen",
      "inclusief praktijkexamen",
      "Gratis proefles",
      "Inclusief proefexamen",
      "Inclusief iTheorie",
      "Inclusief theorie examen"
    ],
    popular: true
  },
  {
    title: "BEE QUICK",
    price: "€1540",
    features: [
      "20 rijlessen",
      "Inclusief praktijkexamen",
      "Gratis proefles",
      "Inclusief proefexamen"
    ],
    popular: false
  },
  {
    title: "BEE READY",
    price: "€890",
    features: [
      "10 rijlessen",
      "inclusief praktijkexamen"
    ],
    popular: false
  },
  {
    title: "AANVULLEND PAKKET",
    price: "€300",
    features: [
      "5 rijlessen"
    ],
    popular: false
  }
]

export default function AutoPricingSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Auto Lespakketten</p>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-4 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Auto Lespakketten
          </h2>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 lg:gap-12 justify-items-center">
          {autoPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl sm:rounded-2xl p-7 sm:p-8 md:p-9 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 border-2 w-full max-w-[380px] lg:max-w-[380px] ${
                pkg.popular 
                  ? 'border-yellow-600 ring-4 ring-yellow-100/50 scale-[1.02] shadow-xl shadow-yellow-600/20' 
                  : 'border-gray-200 hover:border-yellow-400'
              } overflow-visible group flex flex-col transition-opacity duration-700 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              } lg:col-span-2 ${autoPackages.length === 5 && index === 3 ? 'lg:col-start-2' : ''}`}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              {/* Premium background pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 -right-4 bg-yellow-600 text-gray-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-black text-xs sm:text-sm uppercase shadow-lg shadow-yellow-600/30 z-[100] animate-pulse">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Meest Populair
                  </div>
                </div>
              )}
              
              <div className="relative z-10 flex flex-col flex-grow">
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-yellow-600 transition-colors duration-300">{pkg.title}</h3>
                </div>
                
                <div className="mb-6 sm:mb-8 md:mb-10 pb-4 border-b-2 border-gray-100">
                  <div className="flex items-baseline">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mr-1">€</span>
                    <span className="text-4xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-none">
                      {pkg.price.replace('€', '').replace(/\./g, '')}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-4 sm:space-y-5 mb-10 sm:mb-12 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-600 flex items-center justify-center mr-3 sm:mr-4 mt-0.5 shadow-md transform group-hover/item:scale-125 transition-transform duration-300">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed font-medium pt-0.5 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {pkg.popular ? (
                  <Link 
                    href="/contact"
                    className="w-full py-5 sm:py-6 md:py-6 px-8 sm:px-10 rounded-2xl font-black text-center transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg md:text-lg group/btn relative overflow-hidden bg-yellow-600 text-gray-900 hover:bg-yellow-700 uppercase tracking-wide"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      AANMELDEN
                      <svg className="w-6 h-6 transform group-hover/btn:translate-x-3 transition-transform duration-300 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ) : (
                  <Link 
                    href="/contact"
                    className="w-full py-5 sm:py-6 md:py-6 px-8 sm:px-10 rounded-2xl font-black text-center transition-all duration-300 shadow-xl hover:shadow-2xl text-base sm:text-lg md:text-lg group/btn btn-premium relative overflow-hidden bg-gray-900 text-white hover:bg-gray-800 uppercase tracking-wide"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      MEER INFO
                      <svg className="w-6 h-6 transform group-hover/btn:translate-x-3 transition-transform duration-300 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

