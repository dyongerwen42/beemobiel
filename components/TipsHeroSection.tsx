'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function TipsHeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY || window.pageYOffset || 0
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll, { passive: true } as EventListenerOptions)
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <Image
          src="/images/DSC03914.jpg"
          alt="Rijtips en advies"
          fill
          className="object-cover scale-110 transition-transform duration-[20s] ease-out group-hover:scale-115"
          sizes="100vw"
          priority
        />
        {/* Multi-layer Gradient Overlay with animated gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 via-transparent to-yellow-600/5"></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const delay = Math.random() * 5
          const duration = 4 + Math.random() * 6
          return (
            <div
              key={i}
              className="absolute bg-yellow-600/40 rounded-full blur-sm"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationName: 'float',
                animationDuration: `${duration}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${delay}s`,
              }}
            />
          )
        })}
        {/* Larger glowing particles */}
        {[...Array(10)].map((_, i) => {
          const delay = Math.random() * 8
          const duration = 6 + Math.random() * 8
          return (
            <div
              key={`large-${i}`}
              className="absolute bg-yellow-500/20 rounded-full blur-md"
              style={{
                width: `${8 + Math.random() * 12}px`,
                height: `${8 + Math.random() * 12}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationName: 'float',
                animationDuration: `${duration}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${delay}s`,
              }}
            />
          )
        })}
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-8 sm:py-10 md:py-12 lg:py-14 text-center">
        {/* Breadcrumbs */}
        <nav
          className={`mb-4 sm:mb-6 md:mb-8 flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          aria-label="Breadcrumb"
          style={{ animationDelay: '0s' }}
        >
          <Link
            href="/"
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-medium flex items-center leading-none"
          >
            Home
          </Link>
          <span className="text-yellow-500/70 flex items-center leading-none">›</span>
          <span className="text-white/90 font-medium flex items-center leading-none">Tips en trucs</span>
        </nav>

        {/* Badge with Glassmorphism */}
        <div
          className={`inline-flex items-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-yellow-600/20 backdrop-blur-md rounded-full mb-6 sm:mb-8 md:mb-10 border border-yellow-500/30 shadow-lg transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-600 rounded-full mr-3 animate-pulse shadow-lg shadow-yellow-600/50"></div>
          <p className="text-yellow-400 uppercase font-bold text-xs sm:text-sm md:text-base tracking-widest">
            Tips en trucs
          </p>
        </div>

        {/* Main Heading with Enhanced Gradient Text */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-black mb-6 sm:mb-8 md:mb-10 leading-[1.05] tracking-tighter transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <span className="relative inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-2xl [text-shadow:_0_0_30px_rgba(251,191,36,0.5)] animate-gradient-x">
            TIPS EN
          </span>
          <br />
          <span className="relative inline-block bg-gradient-to-r from-white via-yellow-50 to-white bg-clip-text text-transparent drop-shadow-2xl [text-shadow:_0_0_20px_rgba(255,255,255,0.3)]">
            TRUCS
          </span>
          {/* Glowing effect behind text */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-yellow-500/20 to-yellow-600/20 blur-3xl -z-10 opacity-50"></div>
        </h1>

        {/* Enhanced Description with Premium Glassmorphism Card */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 md:p-12 border border-white/20 shadow-2xl overflow-hidden group/desc">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-yellow-600/10 opacity-0 group-hover/desc:opacity-100 transition-opacity duration-700"></div>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/desc:translate-x-full transition-transform duration-1000"></div>
            
            <div className="relative z-10">
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-semibold mb-4">
              Handige tips, praktische adviezen en nuttige informatie om je voor te bereiden op je rijlessen en examen.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-yellow-200/95 leading-relaxed font-medium">
              Leer van onze ervaring en haal je rijbewijs met vertrouwen.
            </p>
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-yellow-500/30 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-yellow-500/30 rounded-br-3xl"></div>
          </div>
        </div>

      </div>
    </section>
  )
}

