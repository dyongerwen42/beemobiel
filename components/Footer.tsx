'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const locations1 = [
    'Leiden', 'Katwijk aan zee', 'Wassenaar', 'Voorschoten', 
    'Noordwijk', 'Noordwijkerhout', 'Valkenburg', 'Rijnsburg', 'Sassenheim'
  ]
  
  const locations2 = [
    'Lissen', 'Roelofarendsveen', 'Warmond', 'Hazerswoude dorp',
    'Hazerswoude Rijndijk', 'Oestgeest', 'Zoeterwoude', 'Voorhout'
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,186,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>
      
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-12 sm:py-14 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-16 md:gap-20 lg:gap-24 mb-16 sm:mb-20 md:mb-24">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            <div className="flex items-center">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="BeeMobiel Logo"
                  width={112}
                  height={112}
                  className="object-contain w-full h-auto drop-shadow-lg"
                  loading="lazy"
                  quality={65}
                />
              </div>
            </div>
            
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
              Jouw betrouwbare rijschool in Nederland. Professionele lessen voor elke bestuurder met een persoonlijke aanpak.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-gray-800/50">
              <a 
                href="mailto:rijschool@beemobiel.nl" 
                className="flex items-center group text-gray-400 hover:text-yellow-600 transition-all duration-300 text-sm sm:text-base"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center mr-4 group-hover:bg-yellow-600/10 group-hover:border-yellow-600/30 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">rijschool@beemobiel.nl</span>
              </a>
              
              <a 
                href="tel:+31712203046" 
                className="flex items-center group text-gray-400 hover:text-yellow-600 transition-all duration-300 text-sm sm:text-base"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center mr-4 group-hover:bg-yellow-600/10 group-hover:border-yellow-600/30 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">071 220 3046</span>
              </a>
              
              <div className="flex items-center group text-gray-400 text-sm sm:text-base">
                <div className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Netherlands</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 sm:mb-8 text-base sm:text-lg relative pb-3 border-b border-gray-800/50">
              Snelle Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { href: '/tarieven', label: 'Tarieven' },
                { href: '/over-ons', label: 'Over Ons' },
                { href: '/ervaringen', label: 'Ervaringen' },
                { href: '/contact', label: 'Neem Contact Op' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-gray-400 hover:text-yellow-600 transition-all duration-300 text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600/0 group-hover:bg-yellow-600 mr-3 transition-all duration-300 group-hover:mr-4"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold mb-6 sm:mb-8 text-base sm:text-lg relative pb-3 border-b border-gray-800/50">
              Nuttige Links
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { href: '/voorwaarden', label: 'Voorwaarden en Beleid' },
                { href: '/faq', label: "FAQ's" },
                { href: '/hoe-je-je-rijbewijs-haalt', label: 'Hoe je je rijbewijs haalt' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-gray-400 hover:text-yellow-600 transition-all duration-300 text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600/0 group-hover:bg-yellow-600 mr-3 transition-all duration-300 group-hover:mr-4"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-bold mb-6 sm:mb-8 text-base sm:text-lg relative pb-3 border-b border-gray-800/50">
              Onze Locaties
            </h4>
            <div className="space-y-3">
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                {locations1.map((location) => (
                  <Link
                    key={location}
                    href="/contact"
                    className="text-gray-400 hover:text-yellow-600 transition-colors duration-300 break-words py-1"
                  >
                    {location}
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
                {locations2.map((location) => (
                  <Link
                    key={location}
                    href="/contact"
                    className="text-gray-400 hover:text-yellow-600 transition-colors duration-300 break-words py-1"
                  >
                    {location}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800/50 pt-8 sm:pt-10 md:pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <p>Copyright © 2025 BeeMobiel</p>
              <span className="hidden sm:inline text-gray-700">•</span>
              <p>Alle rechten voorbehouden</p>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-xs sm:text-sm text-gray-500 font-medium">Volg Ons</span>
              <a 
                href="https://instagram.com/beemobiel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-yellow-600 hover:bg-yellow-600/10 hover:border-yellow-600/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
