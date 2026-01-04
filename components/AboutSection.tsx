'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const features = [
  {
    title: "Persoonlijke aanpak",
    description: "Geen onpersoonlijke rijlessen hier. We passen de lesmethode aan op jouw tempo en leerstijl."
  },
  {
    title: "Flexibele planning",
    description: "Drukke agenda? Geen probleem. We plannen je lessen wanneer het jou uitkomt, inclusief avonden en weekenden."
  },
  {
    title: "Eerlijke communicatie",
    description: "Altijd duidelijkheid over je voortgang, kosten en het examenproces. Geen verrassingen, alleen vertrouwen."
  }
]

export default function AboutSection() {
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
            <p className="text-gray-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Over ons</p>
          </div>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            Jouw persoonlijke route naar{' '}
            <span className="text-gray-900">
              je rijbewijs
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            Bij BeeMobiel hechten we veel waarde aan een persoonlijke aanpak. Daarmee is jouw route naar je autorijbewijs, motor rijbewijs of scooter rijbewijs ook echt een individuele. Wij zorgen er aan de hand van persoonlijke aandacht, geduld en constructieve feedback voor dat je stap voor stap je rijbewijs weet te halen.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group text-center bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-yellow-300 flex flex-col transition-opacity duration-700 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-yellow-50 border border-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 text-yellow-700 transform group-hover:scale-105 transition-all duration-300 shadow-sm">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index === 0 ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  ) : index === 1 ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  )}
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 ${
            isIntersecting ? 'animate-slide-in-left' : 'opacity-0'
          }`} style={{ animationDelay: '0.75s' }}>
            <Image
              src="/images/DSC04005.jpg"
              alt="BeeMobiel lesauto’s"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 ${
            isIntersecting ? 'animate-slide-in-right' : 'opacity-0'
          }`} style={{ animationDelay: '0.9s' }}>
            <Image
              src="/images/DSC04078.jpg"
              alt="Persoonlijke begeleiding in de lesauto"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
        
        {/* CTA */}
        <div className={`text-center ${
          isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
        }`} style={{ animationDelay: '1.05s' }} suppressHydrationWarning>
          <Link 
            href="/contact"
            className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-yellow-600 text-gray-900 font-bold rounded-xl text-sm sm:text-base uppercase tracking-wide hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Begin vandaag</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
