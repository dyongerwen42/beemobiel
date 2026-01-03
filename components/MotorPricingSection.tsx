'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const motorPackages = [
  {
    title: "Pakket 25",
    price: "€1.830",
    features: [
      "25 rijlessen",
      "Inclusief AVB examen",
      "Inclusief AVD examen"
    ],
    popular: false
  },
  {
    title: "Pakket 20",
    price: "€1.580",
    features: [
      "20 rijlessen",
      "Inclusief AVB examen",
      "Inclusief AVD examen"
    ],
    popular: true
  },
  {
    title: "Pakket 10",
    price: "€1.040",
    features: [
      "10 rijlessen",
      "Inclusief AVB examen",
      "Inclusief AVD examen"
    ],
    popular: false
  }
]

export default function MotorPricingSection() {
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
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Motorrijlessen</p>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-4 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Leer rijden met vertrouwen en controle
          </h2>
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Begin vandaag nog met motorrijlessen van hoge kwaliteit. Onze privé-instructeurs begeleiden je stap voor stap naar je rijbewijs.
          </p>
        </div>
        
        {/* Image and Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Image */}
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group ${
            isIntersecting ? 'animate-slide-in-left' : 'opacity-0 invisible'
          }`} style={{ animationDelay: '0.45s' }}>
            <Image
              src="/images/motorcycle_11zon-scaled.webp"
              alt="Motorrijlessen"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity duration-500"></div>
          </div>
          
          {/* Features List */}
          <div className={`flex flex-col justify-center mt-8 lg:mt-0 ${
            isIntersecting ? 'animate-slide-in-right' : 'opacity-0 invisible'
          }`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">
              Bij de motorrijlessen van BeeMobiel leer je:
            </h3>
            <ul className="space-y-3 sm:space-y-4 md:space-y-5">
              {[
                "Alle basisvaardigheden (gassen, remmen, knipperlichten)",
                "Schakelen",
                "Motorbeheersing in verschillende verkeerssituaties",
                "De belangrijkste verkeersregels",
                "Kijkgedrag naar de omgeving",
                "Op de juiste manier bochten nemen",
                "Bijzondere verrichtingen, zoals noodremmen, uitwijken en wegrijden op hellingen",
                "Balans en lichaamshouding op de motor",
                "Omgaan met stressvolle situaties"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start group/item">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-600 flex items-center justify-center mr-3 sm:mr-4 mt-0.5 shadow-md transform group-hover/item:scale-125 transition-transform duration-300">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-8 mb-6 font-medium">
              Plan nu je eerste rijles in en zet de eerste stap naar het behalen van je rijbewijs!
            </p>
            <Link 
              href="#pricing"
              className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-600 text-gray-900 font-bold rounded-xl hover:bg-yellow-700 transition-all duration-300 shadow-xl hover:shadow-2xl btn-premium"
            >
              <span>Bekijk Lespakketten</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div id="pricing" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {motorPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 lg:p-14 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                pkg.popular 
                  ? 'border-yellow-600 ring-4 ring-yellow-100/50 scale-105 lg:scale-110' 
                  : 'border-gray-200 hover:border-yellow-400'
              } overflow-visible group flex flex-col ${
                isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
              }`}
              style={{ animationDelay: `${index * 0.15 + 0.75}s` }}
            >
              {/* Premium background pattern */}
              <div className="absolute inset-0 opacity-[0.02] hexagon-pattern pointer-events-none"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none opacity-0 group-hover:opacity-100"></div>
              
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 -right-4 bg-yellow-600 text-gray-900 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl font-bold text-xs sm:text-sm uppercase shadow-lg animate-pulse z-[100]">
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
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-yellow-600 transition-colors duration-300">{pkg.title}</h3>
                  {pkg.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-yellow-100 rounded-full mt-2">
                      <span className="text-yellow-700 text-xs font-bold uppercase tracking-wider">Meest Populair</span>
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
                  href="/contact"
                  className={`w-full py-3 sm:py-4 md:py-5 px-5 sm:px-6 md:px-8 rounded-xl font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base group/btn relative overflow-hidden ${
                    pkg.popular
                      ? 'bg-yellow-600 text-gray-900 hover:bg-yellow-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Aanmelden
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
        
        {/* Comparison Table */}
        <div className={`mt-16 sm:mt-20 md:mt-24 ${
          isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
        }`} style={{ animationDelay: '1.2s' }}>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center">
            Kies wat bij jou past
          </h3>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto">
            Niet iedereen leert op dezelfde manier. Deze overzichtelijke tabel laat precies zien wat elk pakket bevat, zodat jij makkelijk de juiste keuze maakt.
          </p>
          
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 overflow-x-auto shadow-xl border-2 border-gray-100 hover:border-yellow-400/50 transition-all duration-500 -mx-3 sm:mx-0">
            {/* Mobile: Card Layout */}
            <div className="md:hidden space-y-4">
              {[
                { name: 'Pakket 10', lessons: 10 },
                { name: 'Pakket 20', lessons: 20 },
                { name: 'Pakket 25', lessons: 25 }
              ].map((pkg) => (
                <div key={pkg.name} className="bg-gray-50 rounded-2xl p-5 border-2 border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">{pkg.name}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Aantal lessen</span>
                      <span className="text-base font-semibold text-gray-900">{pkg.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">AVB examen</span>
                      <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">AVD examen</span>
                      <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Desktop: Table Layout */}
            <table className="hidden md:table w-full min-w-[600px] md:min-w-0">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 sm:py-5 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-bold text-gray-900">Inbegrepen</th>
                  <th className="text-center py-4 sm:py-5 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-bold text-gray-900">Pakket 10</th>
                  <th className="text-center py-4 sm:py-5 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-bold text-gray-900">Pakket 20</th>
                  <th className="text-center py-4 sm:py-5 px-4 sm:px-6 text-base sm:text-lg md:text-xl font-bold text-gray-900">Pakket 25</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-sm sm:text-base md:text-lg font-medium text-gray-700">Aantal lessen</td>
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-center text-sm sm:text-base md:text-lg text-gray-900">10</td>
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-center text-sm sm:text-base md:text-lg text-gray-900">20</td>
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-center text-sm sm:text-base md:text-lg text-gray-900">25</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-sm sm:text-base md:text-lg font-medium text-gray-700">AVB examen</td>
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-sm sm:text-base md:text-lg font-medium text-gray-700">AVD examen</td>
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

