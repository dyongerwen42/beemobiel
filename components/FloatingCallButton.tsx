'use client'

import { useState, useEffect } from 'react'

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          // Hide button when scrolling down, show when scrolling up
          setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
          lastScrollY = currentScrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="tel:+31712203046"
      className={`fixed bottom-6 right-6 z-[9998] w-16 h-16 sm:w-20 sm:h-20 bg-yellow-600 hover:bg-yellow-700 text-gray-900 rounded-full shadow-2xl hover:shadow-yellow-600/50 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Bel ons direct"
    >
      <svg 
        className="w-7 h-7 sm:w-8 sm:h-8" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2.5} 
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
        />
      </svg>
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-yellow-600 animate-ping opacity-20"></span>
    </a>
  )
}

