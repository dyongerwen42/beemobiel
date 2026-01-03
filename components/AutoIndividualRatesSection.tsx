'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const individualRates = [
  { service: "Losse Rijles", price: "€60" },
  { service: "Theorie-examen B", price: "€65" },
  { service: "Praktijkexamen B", price: "€320" },
  { service: "Faalangstexamen B", price: "€370" },
  { service: "TTT auto B", price: "€220" },
  { service: "BNOR-examen B", price: "€350" },
  { service: "Herexamen B", price: "€320" },
  { service: "Spoedcursus toeslag", price: "€400" },
  { service: "iTheorie", price: "€80" },
  { service: "Proefexamen", price: "€110" }
]

export default function AutoIndividualRatesSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 bg-gray-50 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 ${
          isIntersecting ? 'animate-fade-in-down' : 'opacity-0 invisible'
        }`}>
          <div className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-yellow-50 rounded-full mb-4 sm:mb-6 md:mb-8 border border-yellow-100">
            <p className="text-yellow-700 uppercase font-semibold text-xs sm:text-sm md:text-base tracking-wider">Losse Lessen & Extra Kosten</p>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-4 ${
            isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
          }`} style={{ animationDelay: '0.15s' }}>
            Duidelijke prijzen, flexibel leren
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Image */}
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden god-shadow-lg group ${
            isIntersecting ? 'animate-slide-in-left' : 'opacity-0 invisible'
          }`} style={{ animationDelay: '0.3s' }}>
            <Image
              src="/images/DSC04031.jpg"
              alt="Autorijlessen"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity duration-500"></div>
          </div>
          
          {/* Rates Table */}
          <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 god-shadow-lg border-2 border-gray-100 hover:border-yellow-400/50 transition-all duration-500 ${
            isIntersecting ? 'animate-slide-in-right' : 'opacity-0 invisible'
          }`} style={{ animationDelay: '0.45s' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 text-center text-premium-yellow">Losse Tarieven</h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              {individualRates.map((rate, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gray-50 hover:bg-yellow-50/80 border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300 group/item hover-god gap-2 sm:gap-0"
                >
                  <span className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg group-hover:text-gray-900 transition-colors">{rate.service}</span>
                  <span className="text-premium-yellow font-bold text-lg sm:text-xl md:text-2xl">{rate.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

