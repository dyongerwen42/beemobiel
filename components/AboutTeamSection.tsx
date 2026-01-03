'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const teamMembers = [
  {
    name: "Ervaren Instructeurs",
    role: "Professioneel Team",
    description: "Onze instructeurs hebben jarenlange ervaring en blijven continu bijscholen om je de beste rijopleiding te bieden.",
  },
  {
    name: "Persoonlijke Begeleiding",
    role: "Individuele Aanpak",
    description: "Iedere instructeur werkt met een persoonlijke aanpak, aangepast op jouw leerstijl en tempo.",
  },
  {
    name: "Geduld & Begrip",
    role: "Rustige Sfeer",
    description: "Onze instructeurs zijn geduldig en begripvol. Ze zorgen ervoor dat je je op je gemak voelt tijdens de lessen.",
  },
]

export default function AboutTeamSection() {
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
            <p className="text-gray-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Ons Team</p>
          </div>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.1s' }}>
            Ontmoet onze{' '}
            <span className="text-yellow-600">
              professionals
            </span>
          </h2>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`group text-center bg-white rounded-lg p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-yellow-300 flex flex-col transition-opacity duration-700 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-yellow-50 border-2 border-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-yellow-700 transform group-hover:scale-105 transition-all duration-300 shadow-sm">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                {member.name}
              </h3>
              <p className="text-yellow-600 font-semibold text-sm sm:text-base mb-3 sm:mb-4">
                {member.role}
              </p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed flex-grow">{member.description}</p>
            </div>
          ))}
        </div>
        
        {/* Image */}
        <div className={`relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300 ${
          isIntersecting ? 'animate-fade-in-up' : 'opacity-0'
        }`} style={{ animationDelay: '0.6s' }}>
          <Image
            src="/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg"
            alt="Ons team"
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
            sizes="100vw"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}



