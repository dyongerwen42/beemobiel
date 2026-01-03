'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const features = [
  {
    title: "Voordelige pakketten",
    description: "Kies voor een rijlessen pakket dat perfect is afgestemd op jouw precieze voorkeuren. Door zonder verborgen kosten te werken, weet je bij BeeMobiel zeker dat je op je eigen, zelfverzekerde tempo je rijbewijs haalt.",
    link: "/tarieven"
  },
  {
    title: "Ervaren instructeurs",
    description: "Onze rij-instructeurs hebben inmiddels al jarenlang ervaring, werken met een flexibele mindset en blijven altijd rustig en vriendelijk. Zo weet jij zeker dat je voor de beste, meest voordelige rijopleiding kiest in jouw directe omgeving.",
    link: "/over-ons"
  }
]

export default function FeaturesSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        {/* First two features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative bg-white rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 premium-shadow hover-lift-premium transition-all duration-500 border border-gray-100 hover:border-yellow-300 overflow-hidden transition-opacity duration-700 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              {/* Background on hover */}
              <div className="absolute inset-0 bg-yellow-50/0 group-hover:bg-yellow-50/30 transition-all duration-500 rounded-2xl"></div>
              
              {/* Icon */}
              <div className="relative mb-4 sm:mb-6 md:mb-8 transition-opacity duration-700" style={{ animationDelay: `${index * 0.1 + 0.15}s`, opacity: isIntersecting ? 1 : 0 }}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl bg-yellow-50 border-2 border-yellow-200 p-3 sm:p-4 md:p-5 flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 premium-shadow">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-yellow-700 transform group-hover:scale-105 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                  </svg>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 leading-tight relative z-10 transition-opacity duration-700" style={{ animationDelay: `${index * 0.1 + 0.2}s`, opacity: isIntersecting ? 1 : 0 }}>
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8 relative z-10 transition-opacity duration-700" style={{ animationDelay: `${index * 0.1 + 0.3}s`, opacity: isIntersecting ? 1 : 0 }}>
                {feature.description}
              </p>
              <Link 
                href={feature.link} 
                className="inline-flex items-center gap-2 sm:gap-3 text-yellow-600 font-bold hover:text-yellow-700 transition-all duration-300 group-hover:gap-5 text-base sm:text-lg relative z-10"
              >
                <span className="relative">
                  Lees meer
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
                </span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Third feature with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          <div className={`relative bg-gray-900 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 premium-shadow hover-lift-premium transition-all duration-500 overflow-hidden group order-2 lg:order-1 border-2 border-yellow-600/30 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-yellow-600/20 border-2 border-yellow-600/40 rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 md:mb-8 transform group-hover:scale-105 transition-all duration-300 flex items-center justify-center premium-glow">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-yellow-600 transform group-hover:scale-105 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">Vanaf 16,5 jaar autorijles</h3>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8">
                Bij BeeMobiel geven we rijles aan jong en oud. Wist je dat je vanaf 16,5 al mag beginnen met auto rijles? Voor de scooter is dit zelfs al vanaf 16 jaar. Zo begin je bij ons zo vroeg (of oud) als je zelf wilt met het halen van je rijbewijs!
              </p>
              <Link 
                href="/tarieven" 
                className="inline-flex items-center gap-2 sm:gap-3 bg-yellow-600 text-gray-900 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl font-bold hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base group"
              >
                <span>Lees meer</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden premium-shadow hover-lift-premium group order-1 lg:order-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <Image
              src="/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg"
              alt="Instructeur met leerling"
              fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
