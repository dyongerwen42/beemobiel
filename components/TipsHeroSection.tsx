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
        const scrolled = window.pageYOffset
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Image with Parallax */}
      <div ref={parallaxRef} className="absolute inset-0 z-0">
        <Image
          src="/images/instructor-showing-traffic-shemes-to-a-female-student-outdooors-1.jpg"
          alt="Rijtips en advies"
          fill
          className="object-cover scale-110 transition-transform duration-[20s] ease-out"
          sizes="100vw"
          priority
        />
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.7)_100%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-yellow-600/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
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
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          <span className="text-yellow-500/70">›</span>
          <span className="text-white/90 font-medium">Tips en trucs</span>
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

        {/* Main Heading with Gradient Text */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 md:mb-10 leading-[1.05] tracking-tighter transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
            TIPS EN
          </span>
          <br />
          <span className="bg-gradient-to-r from-white via-yellow-50 to-yellow-100 bg-clip-text text-transparent drop-shadow-lg">
            TRUCS
          </span>
        </h1>

        {/* Description with Glassmorphism Card */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-xl">
            <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed font-medium">
              Handige tips, praktische adviezen en nuttige informatie om je voor te bereiden op je rijlessen en examen.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-yellow-200/90 mt-4 leading-relaxed">
              Leer van onze ervaring en haal je rijbewijs met vertrouwen.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.7s' }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 border-2 border-yellow-500/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
            </div>
            <p className="text-xs text-yellow-400/70 uppercase tracking-wider">Scroll</p>
          </div>
        </div>
      </div>
    </section>
  )
}

