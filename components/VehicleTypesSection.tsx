'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const vehicleTypes = [
  {
    title: "Handgeschakelde auto's",
    description: "Voor leerlingen die het handmatig schakelen willen leren.",
    image: "/images/manual-scaled.jpg",
    link: "/tarieven/autos",
    gradient: "from-black/40 to-black/60"
  },
  {
    title: "Automatische auto's",
    description: "Voor wie het makkelijker en stressvrij wil houden.",
    image: "/images/DSC04096.jpg",
    link: "/tarieven/autos",
    gradient: "from-black/40 to-black/60"
  },
  {
    title: "Motoren",
    description: "Professionele motorrijlessen op veilige motorfietsen.",
    image: "/images/motorcycle_11zon-scaled.webp",
    link: "/tarieven/motorfietsen",
    gradient: "from-black/40 to-black/60"
  },
  {
    title: "Scooters & Brommers",
    description: "Voor rijlessen op tweewielers met deskundige begeleiding.",
    image: "/images/scooter_11zon_11zon-scaled.webp",
    link: "/tarieven/scooters",
    gradient: "from-black/40 to-black/60"
  }
]

export default function VehicleTypesSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  
  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-5 sm:mb-6 md:mb-8 lg:mb-12 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">Onze Voertuigen</p>
          </div>
          <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2.5 sm:mb-3 md:mb-4 leading-tight px-2 transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            Onze Lesvoertuigen
          </h2>
        </div>
        
        {/* Vehicle Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {vehicleTypes.map((vehicle, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-yellow-400/70 flex flex-col transition-opacity duration-700 ${
                isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              {/* Full-card click target (prevents nested <a> issues) */}
              <Link
                href={vehicle.link}
                aria-label={`Bekijk ${vehicle.title}`}
                className="absolute inset-0 z-10"
              >
                <span className="sr-only">Bekijk {vehicle.title}</span>
              </Link>

              {/* Premium background pattern */}
              <div className="absolute inset-0 opacity-[0.02] hexagon-pattern pointer-events-none z-0"></div>
              
              {/* Image */}
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-opacity duration-700"></div>
                <div className="absolute inset-0 shimmer-god opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-20 p-6 sm:p-8 md:p-10 flex flex-col flex-grow bg-white pointer-events-none">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                  {vehicle.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 flex-grow">
                  {vehicle.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pointer-events-auto">
                  <Link href={vehicle.link} className="inline-flex items-center justify-center gap-2 sm:gap-3 text-yellow-600 font-bold text-sm sm:text-base group-hover:gap-4 transition-all duration-300 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl bg-yellow-50 hover:bg-yellow-100 w-full sm:w-auto shadow-lg hover:shadow-xl uppercase tracking-wide">
                    <span>Zie prijzen</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 sm:gap-3 text-white font-bold text-sm sm:text-base group-hover:gap-4 transition-all duration-300 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-xl bg-yellow-600 hover:bg-yellow-700 w-full sm:w-auto shadow-lg hover:shadow-xl uppercase tracking-wide">
                    <span>BOEK NU</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

