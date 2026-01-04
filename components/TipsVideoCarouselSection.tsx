'use client'

import { useState, useEffect, useCallback } from 'react'
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

  // Use provided videos or empty array (videos should always be provided)
  const defaultVideos: Video[] = videos && videos.length > 0 ? videos : []

  // Get YouTube thumbnail URL
  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  // Get YouTube embed URL
  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % defaultVideos.length)
    setPlayingVideo(null) // Stop playing when navigating
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + defaultVideos.length) % defaultVideos.length)
    setPlayingVideo(null) // Stop playing when navigating
  }

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(videoId)
  }

  const handleCloseVideo = () => {
    setPlayingVideo(null)
  }

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
    <section id={id} ref={ref} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50/80 to-white relative overflow-hidden scroll-mt-20">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-600/10 to-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-yellow-50 via-yellow-100/90 to-yellow-50 backdrop-blur-md rounded-full mb-4 sm:mb-5 md:mb-6 border-2 border-yellow-300/60 shadow-lg group/badge hover:shadow-xl transition-all duration-300">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full mr-2 sm:mr-3 animate-pulse shadow-md shadow-yellow-600/50"></div>
            <p className="text-yellow-800 uppercase font-black text-xs sm:text-sm md:text-base tracking-widest group-hover/badge:text-yellow-900 transition-colors duration-300">
              {label}
            </p>
          </div>
          
          {/* Enhanced Heading with Gradient */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4 sm:mb-5 md:mb-6 leading-tight tracking-tight">
            <span className="relative inline-block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              {title.split(' – ')[0]}
            </span>
            {title.includes(' – ') && (
              <>
                <br />
                <span className="relative inline-block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent [text-shadow:_0_2px_10px_rgba(251,191,36,0.2)]">
                  {title.split(' – ')[1]}
                </span>
              </>
            )}
          </h2>
          
          {/* Enhanced Description with Premium Glassmorphism */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-gray-200/60 shadow-xl mb-10 sm:mb-12 max-w-4xl group/desc overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 via-transparent to-yellow-50/50 opacity-0 group-hover/desc:opacity-100 transition-opacity duration-500"></div>
            <p className="relative z-10 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-semibold">
              {description}
            </p>
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-400/30 rounded-tr-2xl"></div>
          </div>

          {/* Premium Video Carousel with Enhanced Effects */}
          {defaultVideos.length > 0 ? (
            <div className="relative group/carousel">
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-600/30 via-yellow-500/30 to-yellow-600/30 rounded-3xl blur-3xl opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-700"></div>
              {/* Secondary glow */}
              <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-xl opacity-50"></div>
              
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-2 border-gray-200/60 bg-white/50 backdrop-blur-sm">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {defaultVideos.map((video, index) => (
                  <div key={`${video.youtubeId}-${index}`} className="min-w-full relative">
                    {playingVideo === video.youtubeId ? (
                      // Enhanced Premium Video Player
                      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Glowing border effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-3xl blur opacity-75 animate-pulse"></div>
                        
                        <iframe
                          src={getYouTubeEmbedUrl(video.youtubeId)}
                          className="absolute inset-0 w-full h-full z-10 rounded-3xl"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={video.title}
                          loading="lazy"
                        />
                        
                        {/* Enhanced Close Button */}
                        <button
                          onClick={handleCloseVideo}
                          className="absolute top-4 right-4 bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl hover:from-black hover:to-black text-white rounded-full p-3.5 z-20 transition-all duration-300 hover:scale-110 shadow-2xl border-2 border-white/20 hover:border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-gray-900"
                          aria-label="Sluit video"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              handleCloseVideo()
                            }
                          }}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        
                        {/* Enhanced Video Title Overlay */}
                        <div className="absolute bottom-4 left-4 right-20 bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-xl text-white px-5 py-3 rounded-2xl border-2 border-white/10 shadow-2xl z-20">
                          <p className="text-sm font-bold truncate">{video.title}</p>
                        </div>
                      </div>
                    ) : (
                      // Enhanced Premium Video Thumbnail
                      <div 
                        className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-900 rounded-3xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
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
                        {imageErrors.has(video.youtubeId) ? (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <div className="text-center p-8">
                              <svg className="w-16 h-16 text-yellow-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              <p className="text-white font-semibold">{video.title}</p>
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={video.thumbnail || getYouTubeThumbnail(video.youtubeId)}
                            alt={video.title}
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            sizes="100vw"
                            loading="lazy"
                            onError={() => handleImageError(video.youtubeId)}
                          />
                        )}
                        
                        {/* Multi-layer Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        
                        {/* Enhanced Play Button with Premium Styling */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative bg-gradient-to-br from-white via-white to-gray-100 rounded-full p-5 sm:p-6 md:p-7 lg:p-8 group-hover:scale-110 transition-all duration-700 shadow-2xl border-4 border-yellow-600/40 group-hover:border-yellow-500/60 group-hover:shadow-yellow-500/50">
                            {/* Multiple glow layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 to-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <svg
                              className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-yellow-600 ml-1.5 group-hover:text-yellow-500 transition-colors duration-300 drop-shadow-lg"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            
                            {/* Enhanced Pulse Rings */}
                            <div className="absolute inset-0 rounded-full border-4 border-yellow-600/40 animate-ping"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-yellow-500/30 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                          </div>
                        </div>
                        
                        {/* Enhanced Video Info Card */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-2xl text-white px-7 py-5 rounded-2xl border-2 border-white/15 shadow-2xl transform group-hover:translate-y-0 translate-y-2 transition-all duration-500 group-hover:shadow-yellow-500/20">
                            <p className="text-base sm:text-lg md:text-xl font-black mb-2">{video.title}</p>
                            <div className="flex items-center gap-3">
                              <div className="w-2.5 h-2.5 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>
                              <p className="text-sm sm:text-base text-gray-200 font-semibold">Klik om video te bekijken</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                </div>
              </div>

              {/* Enhanced Premium Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-gradient-to-br from-white to-gray-50 backdrop-blur-xl hover:from-white hover:to-white rounded-full p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:scale-125 z-10 opacity-0 group-hover/carousel:opacity-100 border-2 border-gray-200/60 hover:border-yellow-600/60 hover:shadow-yellow-600/30 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:opacity-100"
                aria-label="Vorige video"
                disabled={defaultVideos.length <= 1}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-gradient-to-br from-white to-gray-50 backdrop-blur-xl hover:from-white hover:to-white rounded-full p-5 sm:p-6 shadow-2xl transition-all duration-300 hover:scale-125 z-10 opacity-0 group-hover/carousel:opacity-100 border-2 border-gray-200/60 hover:border-yellow-600/60 hover:shadow-yellow-600/30 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:opacity-100"
                aria-label="Volgende video"
                disabled={defaultVideos.length <= 1}
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Enhanced Premium Pagination Dots */}
              <div className="flex justify-center gap-3 mt-10 sm:mt-12">
                {defaultVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index)
                      setPlayingVideo(null)
                    }}
                    className={`rounded-full transition-all duration-500 ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 w-12 h-4 shadow-xl shadow-yellow-600/60 hover:shadow-yellow-600/80' 
                        : 'bg-gray-300 w-3 h-3 hover:bg-yellow-400 hover:w-8 hover:h-3 hover:shadow-md'
                    }`}
                    aria-label={`Ga naar slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

