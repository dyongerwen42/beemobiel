'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const packages = [
  {
    title: "Motorfiets",
    price: "€1.830",
    features: [
      "25 rijlessen",
      "Inclusief avb examen",
      "Inclusief avd examen"
    ],
    link: "/tarieven/motorfietsen"
  },
  {
    title: "Auto",
    price: "€3.070",
    features: [
      "45 rijlessen",
      "Inclusief iTheorie",
      "Inclusief theorie examen",
      "Inclusief praktijkexamen",
      "Inclusief proefexamen",
      "Gratis proefles"
    ],
    link: "/tarieven/autos",
    popular: true
  },
  {
    title: "Scooter",
    price: "€545",
    features: [
      "5 scooterlessen",
      "Inclusief iTheorie",
      "Inclusief theorie examen",
      "Inclusief praktijkexamen"
    ],
    link: "/tarieven/scooters"
  }
]

export default function PricingSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 ${
          isIntersecting ? 'animate-fade-in-down' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Onze Prijzen</p>
          </div>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            Betaalbare rijlessen voor{' '}
            <span className="text-yellow-600">
              elk budget
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            Bij BeeMobiel werken we met flexibele én betaalbare pakketten. Onze eerlijke tarieven gelden per les én per volledig lespakket. Bekijk zelf waar je de voorkeur aan geeft en kies iets dat echt bij jou als persoon past!
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                pkg.popular 
                  ? 'border-yellow-600 ring-2 sm:ring-4 ring-yellow-100 sm:scale-[1.02]' 
                  : 'border-gray-200 hover:border-yellow-300'
              } overflow-visible group flex flex-col transition-opacity duration-700 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              {/* Background on hover */}
              <div className={`absolute inset-0 ${
                pkg.popular 
                  ? 'bg-yellow-50/30' 
                  : 'bg-transparent'
              } group-hover:bg-yellow-50/40 transition-all duration-500 rounded-2xl`}></div>
              
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-3 -right-3 bg-yellow-600 text-gray-900 px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm uppercase premium-shadow animate-pulse-glow z-[100]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Meest Populair
                  </div>
                </div>
              )}
              
              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">{pkg.title}</h3>
                
                <div className="mb-4 sm:mb-6 md:mb-8">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    {pkg.price}
                  </span>
                </div>
                
                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-600 flex items-center justify-center mr-3 sm:mr-4 mt-0.5 shadow-sm transform group-hover/item:scale-105 transition-transform duration-300">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={pkg.link}
                  className={`w-full px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base group/btn ${
                    pkg.popular
                      ? 'bg-yellow-600 text-gray-900 hover:bg-yellow-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Boek Nu
                    <svg className={`w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300 ${
                      pkg.popular ? 'text-gray-900' : 'text-gray-700'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
