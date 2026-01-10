'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const individualRates = [
  { service: "Losse les", price: "€59" },
  { service: "Theorie-examen A", price: "€69" },
  { service: "Praktijkexamen A (AVB)", price: "€195" },
  { service: "Praktijkexamen A (AVD)", price: "€295" },
  { service: "TTT A", price: "€240" },
  { service: "Herexamen A (AVB)", price: "€195" },
  { service: "Herexamen A (AVD)", price: "€295" },
  { service: "iTheorie", price: "€65" }
]

export default function MotorIndividualRatesSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-stretch">
          {/* 3 Overlapping Images */}
          <div className="relative">
            {/* Desktop - 3 Overlapping Images */}
            <div className="hidden lg:block relative w-full h-[650px] xl:h-[700px]">
              {/* Yellow Accent Circle */}
              <div className={`absolute left-0 bottom-[15%] w-16 h-16 bg-yellow-500 rounded-full z-0 transition-all duration-700 ${
                isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`} style={{ animationDelay: '0.5s' }}></div>
              
              {/* First Image - Top Left */}
              <div className={`absolute left-0 top-0 w-[85%] h-[30%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group z-10 transform -rotate-2 transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`} style={{ animationDelay: '0.1s' }}>
                <Image
                  src="/images/motorcycle_11zon-scaled.webp"
                  alt="Motorrijlessen"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity duration-500"></div>
              </div>
              
              {/* Second Image - Middle Right */}
              <div className={`absolute right-0 top-[28%] w-[80%] h-[35%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group z-20 transform rotate-1 transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`} style={{ animationDelay: '0.25s' }}>
                <Image
                  src="/images/female-student-learning-to-ride-motorcycle-concep-2024-12-06-09-57-07-utc-scaled.jpg"
                  alt="Motorrijlessen bij BeeMobiel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity duration-500"></div>
                {/* Decorative border */}
                <div className="absolute inset-0 border-4 border-white/50 rounded-xl sm:rounded-2xl pointer-events-none"></div>
              </div>
              
              {/* Third Image - Bottom Left */}
              <div className={`absolute left-[5%] top-[58%] w-[85%] h-[32%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl group z-30 transform -rotate-1 transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`} style={{ animationDelay: '0.4s' }}>
                <Image
                  src="/images/motorcycle-lessons_11zon_11zon-scaled.webp"
                  alt="Motor rijlessen bij BeeMobiel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-opacity duration-500"></div>
                {/* Decorative border */}
                <div className="absolute inset-0 border-3 border-white/40 rounded-xl sm:rounded-2xl pointer-events-none"></div>
              </div>
            </div>

            {/* Mobile - Single Image */}
            <div className={`lg:hidden relative h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl mb-6 sm:mb-8 transition-all duration-700 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Image
                src="/images/motorcycle_11zon-scaled.webp"
                alt="Motorrijlessen BeeMobiel"
                fill
                className="object-cover"
                sizes="100vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
          
          {/* Rates Table */}
          <div className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 shadow-xl border-2 border-gray-100 hover:border-yellow-400/50 transition-all duration-500 flex flex-col lg:min-h-[650px] xl:min-h-[700px] ${
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

