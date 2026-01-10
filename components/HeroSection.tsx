'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const sourcesLoadedRef = useRef(false)

  useEffect(() => {
    // Only load and play video when section is visible
    if (!isIntersecting || sourcesLoadedRef.current) return
    
    const playVideo = async () => {
      if (videoRef.current && !sourcesLoadedRef.current) {
        try {
          // Load video sources when visible (WebM first for better compression, MP4 as fallback)
          const webmSource = document.createElement('source')
          webmSource.src = '/videos/Home-Hero-2.webm'
          webmSource.type = 'video/webm'
          videoRef.current.appendChild(webmSource)
          
          const mp4Source = document.createElement('source')
          mp4Source.src = '/videos/Home-Hero-2.mp4'
          mp4Source.type = 'video/mp4'
          videoRef.current.appendChild(mp4Source)
          
          sourcesLoadedRef.current = true
          videoRef.current.load()
          await videoRef.current.play()
        } catch (err) {
          // Video autoplay failed, silently continue
        }
      }
    }
    
    playVideo()
  }, [isIntersecting])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ marginTop: 0, paddingTop: 0 }}>
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0" style={{ top: 0, left: 0, margin: 0, padding: 0 }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            minHeight: '100vh',
            filter: 'none',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
        >
          {/* Video sources will be loaded dynamically when visible (WebM preferred, MP4 fallback) */}
        </video>
        <div className="absolute inset-0 bg-black/75 z-[1]"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-600/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>
      
      {/* Content - Premium centered */}
      <div className={`relative z-[10] w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-6 sm:py-8 md:py-12 lg:py-16 text-center flex flex-col justify-center`}>
        {/* Main Heading - Premium with Bold Animation */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-[1.1] tracking-tight px-2">
          <span 
            className={`block mb-0.5 sm:mb-1 md:mb-2 lg:mb-3 text-shadow-premium ${isIntersecting ? 'hero-text-animate' : 'opacity-0'}`} 
            style={{ animationDelay: '0s' }}
          >
            PROFESSIONELE
          </span>
          <span 
            className={`block mb-0.5 sm:mb-1 md:mb-2 lg:mb-3 text-yellow-600 ${isIntersecting ? 'hero-text-animate' : 'opacity-0'}`} 
            style={{ animationDelay: '0.15s' }}
          >
            RIJLESSEN VOOR AUTO,
          </span>
          <span 
            className={`block text-shadow-premium ${isIntersecting ? 'hero-text-animate' : 'opacity-0'}`} 
            style={{ animationDelay: '0.3s' }}
          >
            MOTOR EN SCOOTER
          </span>
        </h1>
        
        {/* Description - Premium */}
        <p className={`text-xs xs:text-sm sm:text-base md:text-lg text-white/95 max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 leading-relaxed px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 text-shadow-premium transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.45s' }}>
          Bij BeeMobiel pakken we het professioneel aan, met flexibele pakketten, ervaren instructeurs en een volledig gepersonaliseerde aanpak. Wij begrijpen als geen ander dat iedereen verschillend is. Wij behandelen je daarom niet als een nummertje, maar als een individueel persoon. Zo zorgen wij er als rijschool voor dat jij vol zelfvertrouwen de weg op gaat!
        </p>
        
        {/* CTA Buttons - Premium */}
        <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 justify-center items-stretch sm:items-center px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
          <div className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <Link 
              href="/tarieven" 
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-yellow-600 text-gray-900 font-bold rounded-xl text-sm sm:text-base uppercase tracking-wide hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Bekijk onze pakketten</span>
              <svg className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <div className={`transition-opacity duration-700 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl text-sm sm:text-base uppercase tracking-wide border border-white/30 hover:border-yellow-600/50 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <span>Neem contact met ons op</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
