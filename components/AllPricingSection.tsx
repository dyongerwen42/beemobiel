'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const allPackages = [
  {
    category: "Auto",
    packages: [
      {
        title: "BEE NEXT",
        price: "€3.070",
        features: ["45 rijlessen", "Inclusief praktijkexamen", "Gratis proefles", "Proefexamen", "Theorie", "Theorie examen"],
        link: "/tarieven/autos",
        popular: false
      },
      {
        title: "BEE SMART",
        price: "€2.520",
        features: ["35 rijlessen", "Inclusief praktijkexamen", "Gratis proefles", "Proefexamen", "Theorie", "Theorie examen"],
        link: "/tarieven/autos",
        popular: true
      },
      {
        title: "BEE QUICK",
        price: "€1.540",
        features: ["20 rijlessen", "Inclusief praktijkexamen", "Gratis proefles", "Proefexamen"],
        link: "/tarieven/autos",
        popular: false
      }
    ]
  },
  {
    category: "Motor",
    packages: [
      {
        title: "Pakket 25",
        price: "€1.830",
        features: ["25 rijlessen", "Inclusief AVB examen", "Inclusief AVD examen"],
        link: "/tarieven/motorfietsen",
        popular: false
      },
      {
        title: "Pakket 20",
        price: "€1.580",
        features: ["20 rijlessen", "Inclusief AVB examen", "Inclusief AVD examen"],
        link: "/tarieven/motorfietsen",
        popular: true
      },
      {
        title: "Pakket 10",
        price: "€1.040",
        features: ["10 rijlessen", "Inclusief AVB examen", "Inclusief AVD examen"],
        link: "/tarieven/motorfietsen",
        popular: false
      }
    ]
  },
  {
    category: "Scooter",
    packages: [
      {
        title: "Dagcursus 2",
        price: "€545",
        features: ["5 scooterlessen", "Inclusief praktijkexamen", "Inclusief Theorie", "Inclusief theorie examen"],
        link: "/tarieven/scooters",
        popular: true
      },
      {
        title: "Dagcursus 1",
        price: "€465",
        features: ["5 scooterlessen", "Inclusief praktijkexamen"],
        link: "/tarieven/scooters",
        popular: false
      },
      {
        title: "Herkansing",
        price: "€365",
        features: ["3 scooterlessen", "Inclusief praktijkexamen"],
        link: "/tarieven/scooters",
        popular: false
      }
    ]
  }
]

export default function AllPricingSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Onze Pakketten</p>
          </div>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Alle{' '}
            <span className="text-yellow-600">Pakketten</span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Kies het pakket dat het beste bij jou past. Alle pakketten zijn transparant geprijsd zonder verborgen kosten.
          </p>
        </div>
        
        {/* Categories */}
        {allPackages.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 ${
              isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
            }`} style={{ animationDelay: `${categoryIndex * 0.2 + 0.45}s` }}>
              {category.category}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
              {category.packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    pkg.popular 
                      ? 'border-yellow-600 ring-2 sm:ring-4 ring-yellow-100/50 sm:scale-[1.02]' 
                      : 'border-gray-200 hover:border-yellow-400'
                  } overflow-visible group flex flex-col transition-opacity duration-700 ${
                    isIntersecting ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(categoryIndex * 0.15) + (index * 0.1) + 0.3}s` }}
                >
                  {/* Premium background pattern */}
                  <div className="absolute inset-0 opacity-[0.03] hexagon-pattern pointer-events-none"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer-god opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                  
                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute -top-3 -right-3 bg-yellow-600 text-gray-900 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs uppercase shadow-lg z-[100]">
                      MEEST POPULAIR
                    </div>
                  )}
                  
                  <div className="relative z-10 flex flex-col flex-grow">
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-yellow-600 transition-colors duration-300">{pkg.title}</h4>
                    </div>
                    
                    <div className="mb-6 sm:mb-8 pb-4 border-b-2 border-gray-100">
                      <div className="flex items-baseline">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mr-1">€</span>
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-none">
                          {pkg.price.replace('€', '').replace(/\./g, '').split(',')[0]}
                        </span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-500 ml-2">
                          {pkg.price.includes(',') ? ',' + pkg.price.split(',')[1] : ''}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 md:mb-10 flex-grow">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-600 flex items-center justify-center mr-3 sm:mr-4 mt-0.5 shadow-sm transform group-hover/item:scale-105 transition-transform duration-300">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium pt-0.5">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={pkg.link}
                      className={`w-full px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base group/btn uppercase tracking-wide ${
                        pkg.popular
                          ? 'bg-yellow-600 text-gray-900 hover:bg-yellow-700'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2 sm:gap-3">
                        Bekijk Details
                        <svg className={`w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300 ${
                          pkg.popular ? 'text-gray-900' : 'text-white'
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
        ))}
      </div>
    </section>
  )
}

