'use client'

import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function FAQCTASection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-900 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 text-center">
        <div className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Klaar om te starten met rijlessen?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto px-2">
            Begin vandaag nog met jouw rijopleiding! Kies het pakket dat bij je past en leer rijden op jouw tempo, met professionele begeleiding.
          </p>
          <Link
            href="/boek-nu"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-yellow-600 text-gray-900 font-bold rounded-xl hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Plan je eerste les
          </Link>
        </div>
      </div>
    </section>
  )
}





