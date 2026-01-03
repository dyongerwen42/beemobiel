'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function BoekNuIntroSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div className={`max-w-4xl mx-auto text-center transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Boek Nu Je Rijlessen
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 md:mb-5 px-2">
            Zet de eerste stap richting het behalen van je rijbewijs
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed px-2 sm:px-3 md:px-4">
            Jouw route naar het behalen van je autorijbewijs, motorrijbewijs of scooterrijbewijs begint bij het zetten van de eerste stap; je eerste rijles. Om je hier een handje bij te helpen, hebben we dit proces zo makkelijk mogelijk voor je gemaakt. Zo boek je heel eenvoudig je eerste rijles door hieronder het formulier in te vullen en rijles nummer 1 in te plannen. Voor je het weet, zit je eerste rijles er al op, heb je het goede gevoel te pakken en stoom je zo door naar het binnenhalen van je uiteindelijke rijbewijs. BeeMobiel maakt het van A tot Z zo leuk en makkelijk mogelijk. Ontdek nu hoe fijn het is om aan de hand van de juiste expertise de weg op te gaan!
          </p>
        </div>
      </div>
    </section>
  )
}

