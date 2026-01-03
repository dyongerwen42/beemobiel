'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function AboutStorySection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 ${
          isIntersecting ? 'animate-fade-in-down' : 'opacity-0'
        }`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-gray-100/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-gray-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full mr-1.5 sm:mr-2"></div>
            <p className="text-gray-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Ons Verhaal</p>
          </div>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            Meer dan 10 jaar{' '}
            <span className="text-yellow-600">
              ervaring
            </span>
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Image */}
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 ${
            isIntersecting ? 'animate-slide-in-left' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <Image
              src="/images/instructor-showing-traffic-shemes-to-a-female-student-outdooors-1.jpg"
              alt="Ons verhaal"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          
          {/* Text Content */}
          <div className={`space-y-4 sm:space-y-6 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              BeeMobiel is opgericht met één duidelijk doel: iedereen helpen om vol zelfvertrouwen de weg op te gaan. Sinds onze oprichting hebben we honderden studenten succesvol opgeleid voor hun rijbewijs.
            </p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              We geloven dat iedereen anders leert en daarom passen we onze lesmethode aan op jouw persoonlijke leerstijl. Geen standaard aanpak, maar een volledig gepersonaliseerde route naar je rijbewijs.
            </p>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Onze ervaren instructeurs zijn niet alleen experts in het geven van rijlessen, maar ook geduldig en begripvol. Ze zorgen ervoor dat je je op je gemak voelt en in je eigen tempo leert.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}



