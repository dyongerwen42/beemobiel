'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const reviews = [
  {
    name: 'Joey Brandon',
    text: 'Hele fijne rijschool voelde me heel erg op me gemak bij samy in de auto altijd veel geduld en duidelijke uitleg echt een aanrader',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJx0WyoI0M0zrvDQ_ZkoKblKDpi8zYu80SGcKoPQgLWJ7ZArw=w40-h40-c-rp-mo-br100',
  },
  {
    name: 'Amelia Rudzka',
    text: 'Top rijschool! Prettige sfeer, duidelijke uitleg en veel geduld. Ik zou deze rijschool zeker aanraden.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJSSzF18n3i78QeM1fgxxFgFhDdSjXK-ivCqu4BNQ1SXQsi98c=w40-h40-c-rp-mo-br100',
  },
  {
    name: 'matt',
    text: 'Ik heb in het verleden bij een andere rijschool in de regio gelest, maar deze rijschool steekt er voor mij bovenuit. Het kwaliteitsverschil is duidelijk zichtbaar. Ik ben vooral onder de indruk van de professionele begeleiding en de manier van lesgeven. De instructeur is rustig, legt alles helder uit en heeft veel kennis, waardoor ik me tijdens de lessen zeer goed ondersteund voel, zeker een aanrader!',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocIBp1eCY8XaDelfO6bq5gmCuT3-QWvFOA9dWz8AFD96XerdSA=w40-h40-c-rp-mo-br100',
  },
  {
    name: 'Marcin Zemler',
    text: 'Ik kon me geen betere rijschool voorstellen om voor het eerst de weg op te gaan. In één keer mijn rijbewijs gehaald. De instructeur legde alles heel handig uit en wanneer ik toch dingen verkeerd deed had hij ERG VEEL GEDULD en gaf mij weer andere tips om het beter te doen. Wat een geweldige ervaring. Ik kan nu veilig de weg op :)',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocLMTWWVbS4yE5xr07nJ3diJ0E6-M1gDOy45CWg-EqeiUJjbiA=w40-h40-c-rp-mo-ba2-br100',
  },
  {
    name: 'Zuzanna Rita',
    text: 'Ik kan deze rijschool echt aanraden! Alles ging snel, makkelijk en super soepel. Ik heb ook nog een paar handige tips meegekregen. Echt een aanrader!',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKi8fET6OcRsB1EimKhGmNKJL_BbUd43XSuX3u_5Em4aQ71ZQ=w40-h40-c-rp-mo-br100',
  },
  {
    name: 'Stefano Fazalalikhan',
    text: 'Zeer goede rij instructeur, heel geduldig en weet heel goed alles over te brengen. Legt je alles op een duidelijke manier uit en is verder heel sociaal en betrouwbaar!',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocL0QD-oMARycTR1RoptdXziAvMopEwqNvrVRBdz1gH7n8GbxQ=w40-h40-c-rp-mo-br100',
  },
  {
    name: 'Crjik X',
    text: 'Fantastisch! Instructeur heeft geduld met je en begeleid je in het volledige process! Kan geen betere rijschool aanraden!',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocL2gJAsu0AWA_E0PnX_JDbD210_nRLi_i50sDwVleC5fpBm=w40-h40-c-rp-mo-br100',
  },
  {
    name: 'amal el atoui',
    text: 'Ik ben superblij met deze rijschool! De instructeur is geduldig en legt alles duidelijk uit. Dankzij hun hulp ben ik in één keer geslaagd. Echt een aanrader!',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocI1MkCbz8NYbJJaHqRi3P95W7K1aOfbICR1YkDgZMja5ERSdg=w40-h40-c-rp-mo-br100',
  },
]

export default function AboutReviewsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const card = container.querySelector('div[class*="min-w-full"]') as HTMLElement
      if (card) {
        const cardWidth = card.offsetWidth + 24 // Include gap
        container.scrollTo({
          left: currentIndex * cardWidth,
          behavior: 'smooth',
        })
      }
    }
  }, [currentIndex])

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/instructor-with-female-student-at-the-driving-school-outdooors-1.jpg"
          alt="Reviews background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${
          isIntersecting ? 'opacity-100' : 'opacity-0'
        }`}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2">
            Wat Onze Leerlingen Zeggen
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-yellow-400 font-semibold">
            Echte Ervaringen, Echte Resultaten
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Left Side - Google Rating Card */}
          <div className={`lg:col-span-1 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Rijschool Beemobiel</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-white/80">14 Google reviews</p>
                </div>
              </div>
              <a
                href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJ0wfnRZP2GKAROE40ul1Xkh8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full mt-4 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-xl text-center transition-colors duration-300"
              >
                Write a review
              </a>
            </div>
          </div>

          {/* Right Side - Reviews Carousel */}
          <div className={`lg:col-span-2 transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Carousel Container */}
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory gap-4 sm:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="min-w-full sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] snap-start flex-shrink-0"
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-700">
                          <Image
                            src={review.avatar}
                            alt={review.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.style.display = 'none'
                              const parent = target.parentElement
                              if (parent) {
                                parent.innerHTML = `<div class="w-full h-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold">${review.name.charAt(0).toUpperCase()}</div>`
                              }
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm sm:text-base">{review.name}</h4>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                        {review.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevReview}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
                aria-label="Previous review"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextReview}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 z-10"
                aria-label="Next review"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Verified Badge */}
            <div className="mt-6 text-center">
              <p className="text-white/60 text-xs sm:text-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified by Trustindex
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

