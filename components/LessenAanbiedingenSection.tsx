'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function LessenAanbiedingenSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-stretch">
          {/* Content Column */}
          <div className={`transition-opacity duration-700 flex flex-col ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-yellow-600 uppercase font-bold text-xs sm:text-sm tracking-wide mb-2 sm:mb-2.5">
              Actuele Aanbiedingen & Kortingen
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 leading-tight">
              Vraag naar onze huidige kortingen
            </h2>
            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6 md:mb-8">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                We bieden het hele jaar door speciale tarieven — ook voor studenten en nieuwe leerlingen. Neem contact met ons op en ontdek welke korting jij kunt krijgen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Geldig voor zowel auto- als scooterrijlessen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Alleen voor nieuwe inschrijvingen</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-600 text-gray-900 font-bold rounded-xl hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Neem contact met ons op
              </Link>
              
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center">
                  <span className="mr-2">🇳🇱</span>
                  <span>Netherlands</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📞</span>
                  <span>(+62)81 115 8596</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📧</span>
                  <span>rijschool@beemobiel.nl</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className={`bg-gray-50 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg transition-opacity duration-700 flex flex-col ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Volledige naam
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base"
                  placeholder="Volledige naam"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  E-mailadres
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base"
                  placeholder="E-mailadres"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Uw onderwerp
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base"
                  placeholder="Uw onderwerp"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Uw bericht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base resize-none"
                  placeholder="Uw bericht"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Bericht verzenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
