'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function FAQSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header - Perfectly centered */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 ${
          isIntersecting ? 'animate-fade-in-down' : 'opacity-0'
        }`}>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            Hoeveel rijlessen zijn gemiddeld nodig om je{' '}
            <span className="text-gray-900">
              rijbewijs te halen?
            </span>
          </h2>
          <p className={`text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            Volgens de cijfers van het CBR ligt het gemiddelde aantal rijlessen voor het behalen van je autorijbewijs rond de 40 tot 45 uur. Let op dat dit een gemiddelde is, wat per persoon sterk kan variëren. Bij BeeMobiel zorgen we ervoor dat je leert in je eigen tempo, wat soms een stuk sneller is!
          </p>
        </div>
        
        {/* Images Grid - Perfect alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl group transition-opacity duration-700 hover:shadow-2xl ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <Image
              src="/images/person-taking-driver-s-license-exam-1_11zon-scaled.webp"
              alt="Rijexamen"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl group transition-opacity duration-700 hover:shadow-2xl license-plate-blur ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.4s' }}>
            <Image
              src="/images/DSC03984.jpg"
              alt="Eigen auto van BeeMobiel"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        
        {/* CTA Card - Perfect alignment */}
        <div className={`relative bg-gray-900 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-lg overflow-hidden group transition-opacity duration-700 hover:shadow-xl ${
          isIntersecting ? 'opacity-100' : 'opacity-0'
        }`} style={{ animationDelay: '0.5s' }}>
          {/* Background image */}
          <div className="absolute inset-0 opacity-15">
            <Image
              src="/images/DSC03988.jpg"
              alt="Eigen auto van BeeMobiel"
              fill
              className="object-cover"
              sizes="100vw"
              loading="lazy"
            />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-white">Plan nu je rijlessen</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Kies het tijdstip dat het beste bij jou past en begin direct met je rijopleiding. Onze ervaren instructeurs begeleiden je stap voor stap naar je rijbewijs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6">
              <Link 
                href="/tarieven"
                className="group flex-1 inline-flex items-center justify-center gap-3 bg-white text-gray-900 font-semibold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-10 rounded-xl uppercase tracking-wide hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base md:text-lg"
              >
                <span>Alle Lessen</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/contact"
                className="group flex-1 inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white font-semibold py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-xl uppercase tracking-wide border border-white/30 hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <span>Vraag een consult aan</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
