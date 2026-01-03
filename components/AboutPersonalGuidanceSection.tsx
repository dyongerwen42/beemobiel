'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useState, useEffect } from 'react'

export default function AboutPersonalGuidanceSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isIntersecting && count < 100) {
      const duration = 2000
      const steps = 50
      const increment = 100 / steps
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        setCount(Math.min(Math.round(currentStep * increment), 100))
        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isIntersecting, count])

  const features = [
    'Ervaren, begripvolle instructeurs',
    'Persoonlijke aanpak',
    'Flexibele lestijden',
    'Transparante, eerlijke prijzen',
    'Verschillende lesmogelijkheden (auto, motor, scooter)',
    'Handgeschakeld of automaat',
    'Gunstige ligging binnen heel Nederland',
  ]

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Side - Images */}
          <div className={`relative transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/instructor-showing-traffic-shemes-to-a-female-stud-2025-03-15-11-49-02-utc_11zon_11zon-scaled.webp"
                alt="Veilig persoonlijk en afgestemd"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            {/* Overlapping Image */}
            <div className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12 w-3/4 h-3/4 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/male-instructor-and-female-student-driving-lesson.jpg"
                alt="Persoonlijke begeleiding"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 75vw, 37.5vw"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`space-y-6 sm:space-y-8 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-gray-100/90 backdrop-blur-sm rounded-full mb-2.5 sm:mb-3 md:mb-4 border border-gray-200/60 shadow-md">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-600 rounded-full mr-1.5 sm:mr-2"></div>
              <p className="text-gray-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Over ons</p>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight">
              Persoonlijke begeleiding op weg naar je rijbewijs
            </h2>

            <div className="space-y-3 sm:space-y-4 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                Bij BeeMobiel kiezen we voor een speciale, verfijnde en extra effectieve aanpak. Wij gaan net een stapje verder dan men van de andere rijscholen gewend is, om ervoor te zorgen dat je je 100% op je gemak voelt en zo snel mogelijk verantwoord je rijbewijs weet te halen. Door een combinatie van persoonlijke aandacht, geduld en kwaliteit behaal jij binnen de kortste keren al je doel. Je autorijbewijs, motorrijbewijs of scooterrijbewijs ligt binnen handbereik!
              </p>
              <p>
                Een keuze voor BeeMobiel is een keuze voor:
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-opacity duration-700 ${
                    isIntersecting ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Success Counter */}
            <div className={`mt-8 sm:mt-10 p-6 sm:p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200 shadow-lg transition-opacity duration-700 ${
              isIntersecting ? 'opacity-100' : 'opacity-0'
            }`} style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-1">
                    {count}+
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-700">
                    Succesverhalen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

