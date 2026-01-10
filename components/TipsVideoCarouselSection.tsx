'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface Video {
  youtubeId: string
  title: string
  thumbnail?: string
}

interface VideoCarouselProps {
  id: string
  label: string
  title: string
  description: string
  image: string
  link: string
  videos?: Video[] // Array of YouTube video IDs and titles
}

export default function TipsVideoCarouselSection({ id, label, title, description, image, link, videos }: VideoCarouselProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  const [currentSlide, setCurrentSlide] = useState(0)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showSwipeHint, setShowSwipeHint] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Hide swipe hint after 5 seconds
  useEffect(() => {
    if (showSwipeHint) {
      const timer = setTimeout(() => setShowSwipeHint(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showSwipeHint])

  // Use provided videos or empty array (videos should always be provided)
  const defaultVideos: Video[] = videos && videos.length > 0 ? videos : []

  // Get YouTube thumbnail URL
  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  // Get YouTube embed URL - Mobile optimized
  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`
  }

  // Haptic feedback for mobile (if available)
  const triggerHaptic = () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10) // Short vibration
    }
  }

  const nextSlide = () => {
    triggerHaptic()
    setCurrentSlide((prev) => (prev + 1) % defaultVideos.length)
    setPlayingVideo(null) // Stop playing when navigating
  }

  const prevSlide = () => {
    triggerHaptic()
    setCurrentSlide((prev) => (prev - 1 + defaultVideos.length) % defaultVideos.length)
    setPlayingVideo(null) // Stop playing when navigating
  }

  const handleVideoClick = (videoId: string) => {
    setIsLoading(true)
    setPlayingVideo(videoId)
    // Prevent body scroll when video is playing
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
    setTimeout(() => setIsLoading(false), 500)
  }

  const handleCloseVideo = () => {
    triggerHaptic()
    setPlayingVideo(null)
    setIsFullscreen(false)
    // Restore body scroll
    if (typeof window !== 'undefined') {
      document.body.style.overflow = ''
      // Unlock orientation
      try {
        if (screen.orientation && screen.orientation.unlock) {
          screen.orientation.unlock()
        }
      } catch (e) {
        // Orientation unlock not supported
      }
    }
  }

  // Enhanced swipe detection for mobile - Only horizontal swipes
  const minSwipeDistance = 50
  const touchStartYRef = useRef<number | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    touchStartYRef.current = e.targetTouches[0].clientY
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || !touchStartYRef.current) return
    
    const distanceX = touchStart - touchEnd
    const distanceY = Math.abs((touchStartYRef.current || 0) - (touchEnd || 0))
    
    // Only trigger swipe if horizontal movement is greater than vertical (prevents accidental swipes during scroll)
    if (Math.abs(distanceX) > distanceY && Math.abs(distanceX) > minSwipeDistance) {
      const isLeftSwipe = distanceX > minSwipeDistance
      const isRightSwipe = distanceX < -minSwipeDistance

      if (isLeftSwipe && defaultVideos.length > 1) {
        triggerHaptic()
        nextSlide()
      }
      if (isRightSwipe && defaultVideos.length > 1) {
        triggerHaptic()
        prevSlide()
      }
    }
    
    touchStartYRef.current = null
  }

  // Fullscreen support
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Prevent pull-to-refresh on mobile when swiping videos
  useEffect(() => {
    const preventPullToRefresh = (e: TouchEvent) => {
      if (carouselRef.current?.contains(e.target as Node)) {
        e.preventDefault()
      }
    }

    document.addEventListener('touchmove', preventPullToRefresh, { passive: false })
    return () => document.removeEventListener('touchmove', preventPullToRefresh)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only handle if carousel is visible
      if (!isIntersecting) return

      // Don't interfere with typing in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        setCurrentSlide((prev) => (prev - 1 + defaultVideos.length) % defaultVideos.length)
        setPlayingVideo(null)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        setCurrentSlide((prev) => (prev + 1) % defaultVideos.length)
        setPlayingVideo(null)
      } else if (e.key === 'Escape' && playingVideo) {
        e.preventDefault()
        setPlayingVideo(null)
      }
    }

    if (isIntersecting) {
      window.addEventListener('keydown', handleKeyPress)
      return () => window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isIntersecting, playingVideo, defaultVideos.length])

  // Auto-play next slide (optional, can be disabled)
  // useEffect(() => {
  //   if (playingVideo) return // Don't auto-advance when video is playing
  //   const timer = setTimeout(() => {
  //     nextSlide()
  //   }, 5000) // Auto-advance every 5 seconds
  //   return () => clearTimeout(timer)
  // }, [currentSlide, playingVideo])

  const handleImageError = useCallback((videoId: string) => {
    setImageErrors((prev) => new Set(prev).add(videoId))
  }, [])

  return (
    <section id={id} ref={ref} className="py-8 sm:py-12 md:py-16 lg:py-24 xl:py-28 bg-gradient-to-br from-white via-gray-50/90 to-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Ultra Premium Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-yellow-500/15 via-yellow-400/10 to-yellow-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-yellow-600/15 via-yellow-500/10 to-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-yellow-400/8 to-yellow-500/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
        
        {/* Premium dot pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.4) 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Ultra Premium Badge */}
          <div className="inline-flex items-center px-4 sm:px-5 md:px-6 lg:px-7 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-gradient-to-r from-yellow-50 via-yellow-100/95 to-yellow-50 backdrop-blur-xl rounded-full mb-4 sm:mb-5 md:mb-6 lg:mb-8 border-2 border-yellow-300/70 shadow-lg sm:shadow-xl group/badge sm:hover:shadow-2xl sm:hover:scale-105 transition-all duration-300 relative overflow-hidden">
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/badge:translate-x-full transition-transform duration-1000"></div>
            <div className="relative flex items-center">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-400 rounded-full mr-2.5 sm:mr-3 md:mr-3.5 animate-pulse shadow-lg shadow-yellow-600/60 ring-2 ring-yellow-400/30"></div>
              <p className="text-yellow-800 uppercase font-black text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg tracking-widest sm:tracking-[0.15em] group-hover/badge:text-yellow-900 transition-colors duration-300 relative z-10">
                {label}
              </p>
            </div>
          </div>
          
          {/* Ultra Premium Heading with Advanced Gradients */}
          <h2 className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-5 md:mb-6 lg:mb-8 leading-[1.05] sm:leading-tight tracking-tight px-1 relative">
            <span className="relative inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">
              {title.split(' – ')[0]}
            </span>
            {title.includes(' – ') && (
              <>
                <br className="hidden sm:block" />
                <span className="block sm:inline-block mt-1.5 sm:mt-0 relative">
                  <span className="relative inline-block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent [text-shadow:_0_2px_20px_rgba(251,191,36,0.3)] animate-gradient-x">
                    {title.split(' – ')[1]}
                  </span>
                  {/* Glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent blur-xl opacity-50 -z-10">
                    {title.split(' – ')[1]}
                  </span>
                </span>
              </>
            )}
          </h2>
          
          {/* Ultra Premium Description Card */}
          <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 border-2 border-gray-200/70 shadow-2xl mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-4xl group/desc overflow-hidden">
            {/* Multi-layer background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/60 via-transparent to-yellow-50/40 opacity-0 sm:group-hover/desc:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-100/20 to-transparent opacity-0 sm:group-hover/desc:opacity-100 transition-opacity duration-700" style={{ transitionDelay: '0.1s' }}></div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full sm:group-hover/desc:translate-x-full transition-transform duration-1000"></div>
            
            {/* Content */}
            <p className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 leading-relaxed sm:leading-relaxed md:leading-relaxed font-medium sm:font-semibold md:font-bold">
              {description}
            </p>
            
            {/* Premium decorative corners */}
            <div className="hidden sm:block absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-t-3 border-r-3 border-yellow-400/40 rounded-tr-2xl sm:rounded-tr-3xl"></div>
            <div className="hidden md:block absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-yellow-300/30 rounded-bl-2xl"></div>
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.5) 1px, transparent 0)`,
              backgroundSize: '20px 20px',
            }}></div>
          </div>

          {/* Ultra Premium Video Carousel */}
          {defaultVideos.length > 0 ? (
            <div className="relative group/carousel">
              {/* Multi-layer glow effects */}
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-600/40 via-yellow-500/35 to-yellow-600/40 rounded-3xl blur-3xl opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/25 to-yellow-600/25 rounded-3xl blur-2xl opacity-60"></div>
              <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-500/20 via-transparent to-yellow-400/20 rounded-3xl blur-xl opacity-40"></div>
              
              {/* Premium border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/30 via-yellow-500/30 to-yellow-600/30 rounded-3xl blur-md opacity-0 sm:group-hover/carousel:opacity-100 transition-opacity duration-500"></div>
              
              {/* Swipe indicator - Premium styling */}
              {defaultVideos.length > 1 && showSwipeHint && (
                <div className={`md:hidden absolute top-4 sm:top-5 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-[11px] xs:text-xs font-black flex items-center gap-2 sm:gap-2.5 shadow-2xl border-2 border-white/40 transition-all duration-500 ${
                  showSwipeHint ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}>
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span className="whitespace-nowrap tracking-wide">Swipe</span>
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              )}
              
              <div 
                ref={carouselRef}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2rem] shadow-2xl sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-3 border-gray-200/80 sm:border-gray-200/70 bg-gradient-to-br from-white/80 via-white/70 to-white/80 backdrop-blur-xl video-carousel-container"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-out will-change-transform video-carousel"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {defaultVideos.map((video, index) => (
                  <div key={`${video.youtubeId}-${index}`} className="min-w-full relative carousel-slide">
                    {playingVideo === video.youtubeId ? (
                      // Ultra Premium Video Player
                      <div className={`relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl sm:rounded-3xl md:rounded-[2rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] ${isFullscreen ? 'fixed inset-0 z-[9999] rounded-none' : ''}`} style={{ aspectRatio: isFullscreen ? 'auto' : '16/9', minHeight: isFullscreen ? '100vh' : '200px' }}>
                        {/* Premium loading overlay */}
                        {isLoading && (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-[20] flex flex-col items-center justify-center gap-4 sm:gap-5">
                            <div className="relative">
                              {/* Outer ring */}
                              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-yellow-600/30 border-t-yellow-600 rounded-full animate-spin"></div>
                              {/* Inner ring */}
                              <div className="absolute inset-2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-3 border-yellow-500/50 border-t-yellow-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
                              {/* Play icon */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-yellow-500 animate-pulse drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </div>
                            <p className="text-white/90 text-sm sm:text-base font-bold animate-pulse tracking-wide">Video wordt geladen...</p>
                          </div>
                        )}
                        
                        {/* Ultra premium glowing border */}
                        <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-yellow-600 via-yellow-500 via-yellow-400 to-yellow-600 rounded-2xl sm:rounded-3xl md:rounded-[2rem] blur-lg opacity-60 sm:opacity-80 animate-pulse"></div>
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500/40 via-yellow-400/40 to-yellow-500/40 rounded-2xl sm:rounded-3xl md:rounded-[2rem] blur-md opacity-50"></div>
                        
                        <iframe
                          src={getYouTubeEmbedUrl(video.youtubeId)}
                          className="absolute inset-0 w-full h-full z-[5] rounded-2xl sm:rounded-3xl md:rounded-[2rem]"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                          allowFullScreen
                          title={video.title}
                          loading="lazy"
                          style={{ width: '100%', height: '100%', border: 'none' }}
                          onLoad={() => {
                            setIsLoading(false)
                            triggerHaptic()
                          }}
                          onError={() => {
                            setIsLoading(false)
                            setPlayingVideo(null)
                          }}
                        />
                        
                        {/* Ultra Premium Control Buttons */}
                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 z-[15] flex gap-2.5 sm:gap-3">
                          {/* Fullscreen button - Premium styling */}
                          <button
                            onClick={async () => {
                              const container = carouselRef.current?.closest('.relative')
                              if (!isFullscreen && container) {
                                try {
                                  await container.requestFullscreen()
                                } catch (e) {}
                              } else {
                                try {
                                  await document.exitFullscreen()
                                } catch (e) {}
                              }
                            }}
                            className="md:hidden bg-gradient-to-br from-black/98 via-gray-900/98 to-black/98 backdrop-blur-2xl text-white rounded-full p-3 sm:p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-2 border-white/30 active:border-yellow-500/70 active:scale-90 transition-all duration-200 touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center hover:shadow-yellow-500/20"
                            aria-label="Volledig scherm"
                          >
                            <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                          </button>
                          
                          {/* Close button - Ultra premium */}
                          <button
                            onClick={handleCloseVideo}
                            className="bg-gradient-to-br from-black/98 via-gray-900/98 to-black/98 backdrop-blur-2xl text-white rounded-full p-3 sm:p-3.5 md:p-4 lg:p-4.5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-2 border-white/30 sm:hover:border-yellow-500/70 focus:outline-none focus:ring-3 focus:ring-yellow-600/50 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-90 transition-all duration-200 touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center hover:shadow-yellow-500/20 group/close"
                            aria-label="Sluit video"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                handleCloseVideo()
                              }
                            }}
                          >
                            <svg className="w-5.5 h-5.5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-200 group-hover/close:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        {/* Ultra Premium Video Title Overlay */}
                        <div className="absolute bottom-3 left-3 right-20 sm:bottom-4 sm:left-4 sm:right-24 md:bottom-5 md:left-5 md:right-32 bg-gradient-to-r from-black/98 via-black/95 to-black/98 backdrop-blur-2xl text-white px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] z-[10]">
                          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-black line-clamp-2 leading-tight sm:leading-snug tracking-tight">{video.title}</p>
                        </div>
                      </div>
                    ) : (
                      // Ultra Premium Video Thumbnail
                      <div 
                        className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl sm:rounded-3xl md:rounded-[2rem] overflow-hidden group cursor-pointer transform transition-all duration-500 active:scale-[0.97] sm:hover:scale-[1.02] md:hover:scale-[1.03] touch-manipulation select-none shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]"
                        style={{ aspectRatio: '16/9', minHeight: '200px', touchAction: 'pan-y' }}
                        onClick={() => handleVideoClick(video.youtubeId)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            handleVideoClick(video.youtubeId)
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Bekijk video: ${video.title}`}
                      >
                        {/* Premium border glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/30 via-yellow-500/30 to-yellow-600/30 rounded-2xl sm:rounded-3xl md:rounded-[2rem] blur-lg opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {imageErrors.has(video.youtubeId) ? (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                            <div className="text-center p-8 sm:p-10">
                              <div className="relative">
                                <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-yellow-500 mx-auto mb-4 sm:mb-5 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full"></div>
                              </div>
                              <p className="text-white text-base sm:text-lg md:text-xl font-bold px-4">{video.title}</p>
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={video.thumbnail || getYouTubeThumbnail(video.youtubeId)}
                            alt={video.title}
                            fill
                            className="object-cover opacity-90 sm:opacity-85 sm:group-hover:opacity-100 sm:group-hover:scale-110 transition-all duration-700 video-thumbnail"
                            sizes="100vw"
                            {...(index === 0 ? { priority: true } : { loading: 'lazy' })}
                            onError={() => handleImageError(video.youtubeId)}
                          />
                        )}
                        
                        {/* Ultra Premium Multi-layer Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/80 to-black/60 sm:from-black/98 sm:via-black/75 sm:to-black/50"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 sm:from-yellow-600/25 via-transparent to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-500/10 to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-700" style={{ transitionDelay: '0.1s' }}></div>
                        
                        {/* Premium Shine Effect */}
                        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                        
                        {/* Ultra Premium Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-full p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 active:scale-85 sm:group-hover:scale-115 transition-all duration-500 shadow-[0_20px_60px_-15px_rgba(251,191,36,0.4)] border-4 border-yellow-500/60 sm:border-yellow-500/50 sm:group-hover:border-yellow-400/80 sm:group-hover:shadow-[0_25px_70px_-15px_rgba(251,191,36,0.6)] touch-manipulation min-w-[72px] min-h-[72px] sm:min-w-[88px] sm:min-h-[88px] md:min-w-[100px] md:min-h-[100px] flex items-center justify-center group/play">
                            {/* Multiple premium glow layers */}
                            <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-yellow-500/40 to-yellow-400/20 rounded-full opacity-0 group-hover/play:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                            <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-yellow-600/30 to-transparent rounded-full opacity-0 group-hover/play:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full opacity-50"></div>
                            
                            {/* Play icon */}
                            <svg
                              className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 text-yellow-600 ml-1 sm:ml-1.5 md:ml-2 sm:group-hover:text-yellow-500 transition-all duration-300 drop-shadow-2xl z-10"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            
                            {/* Ultra Premium Pulse Rings */}
                            <div className="absolute inset-0 rounded-full border-4 border-yellow-500/50 animate-ping opacity-60"></div>
                            <div className="hidden sm:block absolute inset-0 rounded-full border-4 border-yellow-400/40 animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
                            <div className="hidden md:block absolute inset-0 rounded-full border-4 border-yellow-300/30 animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
                          </div>
                        </div>
                        
                        {/* Ultra Premium Video Info Card */}
                        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-5 md:left-5 md:right-5 lg:bottom-6 lg:left-6 lg:right-6">
                          <div className="bg-gradient-to-r from-black/98 via-black/95 to-black/98 backdrop-blur-2xl text-white px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 xl:px-7 xl:py-5 rounded-xl sm:rounded-2xl md:rounded-3xl border-2 border-white/25 sm:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] transform sm:group-hover:translate-y-0 translate-y-0 transition-all duration-500 sm:group-hover:shadow-[0_12px_40px_rgba(251,191,36,0.3)] active:scale-[0.98] group/info">
                            {/* Shine effect on info card */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full sm:group-hover/info:translate-x-full transition-transform duration-1000 rounded-xl sm:rounded-2xl md:rounded-3xl"></div>
                            
                            <p className="relative z-10 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-black mb-1.5 sm:mb-2 md:mb-2.5 line-clamp-2 leading-tight sm:leading-snug tracking-tight">{video.title}</p>
                            <div className="relative z-10 flex items-center gap-2 sm:gap-2.5 md:gap-3">
                              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 rounded-full animate-pulse shadow-lg shadow-yellow-500/60 flex-shrink-0 ring-2 ring-yellow-400/30"></div>
                              <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 font-semibold sm:font-bold">Tik om video te bekijken</p>
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-yellow-500 ml-auto animate-bounce flex-shrink-0 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                </div>
              </div>

              {/* Ultra Premium Desktop Navigation Arrows */}
              {defaultVideos.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="hidden md:block absolute left-5 lg:left-7 xl:left-8 top-1/2 -translate-y-1/2 bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 backdrop-blur-2xl hover:from-white hover:via-white hover:to-white rounded-full p-3.5 lg:p-4.5 xl:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(251,191,36,0.3)] z-[5] opacity-0 group-hover/carousel:opacity-100 border-2 border-gray-200/70 hover:border-yellow-500/70 focus:outline-none focus:ring-3 focus:ring-yellow-600/50 focus:ring-offset-2 focus:opacity-100 group/nav"
                    aria-label="Vorige video"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
                    <svg className="relative w-5.5 h-5.5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-900 group-hover/nav:text-yellow-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="hidden md:block absolute right-5 lg:right-7 xl:right-8 top-1/2 -translate-y-1/2 bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 backdrop-blur-2xl hover:from-white hover:via-white hover:to-white rounded-full p-3.5 lg:p-4.5 xl:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(251,191,36,0.3)] z-[5] opacity-0 group-hover/carousel:opacity-100 border-2 border-gray-200/70 hover:border-yellow-500/70 focus:outline-none focus:ring-3 focus:ring-yellow-600/50 focus:ring-offset-2 focus:opacity-100 group/nav"
                    aria-label="Volgende video"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300"></div>
                    <svg className="relative w-5.5 h-5.5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-gray-900 group-hover/nav:text-yellow-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
              
              {/* Ultra Premium Mobile Navigation */}
              {defaultVideos.length > 1 && (
                <div className="md:hidden flex flex-col items-center gap-3.5 sm:gap-4 mt-6 sm:mt-7">
                  <div className="flex justify-center gap-3.5 sm:gap-4">
                    <button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      className={`flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-white via-white to-gray-50 backdrop-blur-xl rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-2 transition-all duration-300 active:scale-85 touch-manipulation min-w-[64px] min-h-[64px] group/nav ${
                        currentSlide === 0 
                          ? 'border-gray-200/60 opacity-40 cursor-not-allowed' 
                          : 'border-yellow-600/80 active:border-yellow-500 active:shadow-[0_12px_32px_rgba(251,191,36,0.4)]'
                      }`}
                      aria-label="Vorige video"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/15 to-transparent rounded-full opacity-0 ${currentSlide === 0 ? '' : 'group-active/nav:opacity-100'} transition-opacity duration-300`}></div>
                      <svg className={`relative w-7 h-7 sm:w-8 sm:h-8 ${currentSlide === 0 ? 'text-gray-400' : 'text-gray-900'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      disabled={currentSlide === defaultVideos.length - 1}
                      className={`flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-white via-white to-gray-50 backdrop-blur-xl rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.15)] border-2 transition-all duration-300 active:scale-85 touch-manipulation min-w-[64px] min-h-[64px] group/nav ${
                        currentSlide === defaultVideos.length - 1 
                          ? 'border-gray-200/60 opacity-40 cursor-not-allowed' 
                          : 'border-yellow-600/80 active:border-yellow-500 active:shadow-[0_12px_32px_rgba(251,191,36,0.4)]'
                      }`}
                      aria-label="Volgende video"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/15 to-transparent rounded-full opacity-0 ${currentSlide === defaultVideos.length - 1 ? '' : 'group-active/nav:opacity-100'} transition-opacity duration-300`}></div>
                      <svg className={`relative w-7 h-7 sm:w-8 sm:h-8 ${currentSlide === defaultVideos.length - 1 ? 'text-gray-400' : 'text-gray-900'} transition-colors duration-300`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-[11px] xs:text-xs text-gray-600 font-semibold tracking-wide">Swipe of gebruik de knoppen</p>
                </div>
              )}

              {/* Ultra Premium Pagination Dots */}
              <div className="flex flex-col items-center gap-3 sm:gap-3.5 mt-6 sm:mt-7 md:mt-9 lg:mt-11">
                <div className="flex justify-center items-center gap-2 sm:gap-2.5 md:gap-3">
                  {defaultVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentSlide(index)
                        setPlayingVideo(null)
                      }}
                      className={`rounded-full transition-all duration-500 touch-manipulation relative min-w-[36px] min-h-[36px] flex items-center justify-center group/dot ${
                        currentSlide === index 
                          ? 'bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 w-10 sm:w-12 md:w-14 lg:w-16 h-3 sm:h-3.5 md:h-4 shadow-lg sm:shadow-xl md:shadow-2xl shadow-yellow-600/60 active:shadow-yellow-600/80 ring-2 ring-yellow-400/30' 
                          : 'bg-gray-300/80 w-3 h-3 sm:w-3.5 sm:h-3.5 active:bg-yellow-400 active:w-8 active:h-3 sm:hover:bg-yellow-400 sm:hover:w-8 sm:hover:h-3 active:shadow-md sm:hover:shadow-md'
                      }`}
                      aria-label={`Ga naar slide ${index + 1}`}
                    >
                      {currentSlide === index && (
                        <span className="absolute -top-6 sm:-top-7 md:-top-8 left-1/2 -translate-x-1/2 text-[11px] xs:text-xs sm:text-sm font-black text-yellow-600 whitespace-nowrap drop-shadow-lg">
                          {index + 1}/{defaultVideos.length}
                        </span>
                      )}
                      {/* Glow effect on active dot */}
                      {currentSlide === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-yellow-400/30 rounded-full blur-md animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
                {/* Ultra Premium Progress bar for mobile */}
                <div className="md:hidden w-full max-w-[300px] sm:max-w-xs h-1.5 sm:h-2 bg-gray-200/90 rounded-full overflow-hidden shadow-inner border border-gray-300/30">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 transition-all duration-700 ease-out rounded-full shadow-lg shadow-yellow-500/50 relative overflow-hidden"
                    style={{ width: `${((currentSlide + 1) / defaultVideos.length) * 100}%` }}
                  >
                    {/* Shine effect on progress bar */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

