'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function TheoryHeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/person-taking-driver-s-license-exam_11zon-scaled.webp"
          alt="Theorie-examen voorbereiding"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-8 sm:py-10 md:py-12 lg:py-14 text-center">
        <div
          className={`inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
          <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">
            Tarieven • Theorie
          </p>
        </div>

        <h1
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white mb-1 sm:mb-1.5 md:mb-2 leading-[1.15] sm:leading-[1.1] md:leading-[1.05] tracking-tight text-shadow-lg transition-opacity duration-700 px-2 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Theorie
        </h1>

        <p
          className={`text-xs sm:text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed text-shadow-md transition-opacity duration-700 px-2 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          Bereid je CBR theorie-examen zo goed mogelijk voor. Met volledige theorielessen, studiemateriaal en oefenvragen in echte CBR-stijl ben je optimaal voorbereid.
        </p>

        <div
          className={`mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          {[
            'In je eigen tempo leren met flexibele lestijden',
            'Geschikt voor beginners, gevorderden én ervaren leerlingen',
            'Oefenvragen in de echte “CBR-stijl”',
            'Interactieve lessen die sneller leren mogelijk maken',
          ].map((item) => (
            <div
              key={item}
              className="bg-white/10 border border-white/15 backdrop-blur-sm rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-white/95"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 w-6 h-6 rounded-full bg-yellow-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base font-medium leading-relaxed">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


