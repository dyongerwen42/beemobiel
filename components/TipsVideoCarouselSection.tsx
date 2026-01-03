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

  // Default videos if none provided - use placeholder
  const defaultVideos: Video[] = videos || [
    { youtubeId: 'XHOmBV4js_E', title: 'Video 1', thumbnail: image },
    { youtubeId: 'XHOmBV4js_E', title: 'Video 2', thumbnail: image },
    { youtubeId: 'XHOmBV4js_E', title: 'Video 3', thumbnail: image },
  ]

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
    <section id={id} ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden scroll-mt-20">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Badge */}
          <div className="inline-flex items-center px-2.5 sm:px-3 md:px-3.5 py-1 sm:py-1.5 md:py-1.5 bg-yellow-50/90 backdrop-blur-sm rounded-full mb-1.5 sm:mb-2 md:mb-2.5 border border-yellow-200/60 shadow-md">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-600 rounded-full mr-1.5 sm:mr-2 animate-pulse"></div>
            <p className="text-yellow-700 uppercase font-bold text-xs sm:text-sm tracking-wider">
              {label}
            </p>
          </div>
          
          {/* Heading with Gradient */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4 md:mb-5 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              {title.split(' – ')[0]}
            </span>
            {title.includes(' – ') && (
              <>
                <br />
                <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  {title.split(' – ')[1]}
                </span>
              </>
            )}
          </h2>
          
          {/* Description with Glassmorphism */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-gray-200/50 shadow-lg mb-8 sm:mb-10 max-w-4xl">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
              {description}
            </p>
          </div>

          {/* Premium Video Carousel */}
          <div className="relative group/carousel">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-600/20 via-yellow-500/20 to-yellow-600/20 rounded-2xl blur-2xl opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200/50">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {defaultVideos.map((video, index) => (
                  <div key={`${video.youtubeId}-${index}`} className="min-w-full relative">
                    {playingVideo === video.youtubeId ? (
                      // Premium Video Player
                      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[550px] bg-gray-900 rounded-2xl overflow-hidden">
                        <iframe
                          src={getYouTubeEmbedUrl(video.youtubeId)}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={video.title}
                          loading="lazy"
                        />
                        <button
                          onClick={handleCloseVideo}
                          className="absolute top-4 right-4 bg-black/90 backdrop-blur-md hover:bg-black text-white rounded-full p-3 z-10 transition-all duration-300 hover:scale-110 shadow-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-600"
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
                        {/* Video Title Overlay */}
                        <div className="absolute bottom-4 left-4 right-20 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/10">
                          <p className="text-sm font-semibold truncate">{video.title}</p>
                        </div>
                      </div>
                    ) : (
                      // Premium Video Thumbnail
                      <div 
                        className="relative h-64 sm:h-80 md:h-96 lg:h-[550px] bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer"
                        onClick={() => handleVideoClick(video.youtubeId)}
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
                        
                        {/* Play Button with Premium Styling */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative bg-gradient-to-br from-white via-white to-gray-100 rounded-full p-5 sm:p-7 md:p-9 lg:p-11 group-hover:scale-110 transition-all duration-500 shadow-xl border-4 border-yellow-600/30 group-hover:border-yellow-500/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <svg
                              className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-yellow-600 ml-1 group-hover:text-yellow-500 transition-colors duration-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            {/* Pulse Ring */}
                            <div className="absolute inset-0 rounded-full border-4 border-yellow-600/30 animate-ping"></div>
                          </div>
                        </div>
                        
                        {/* Video Info Card */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-black/90 backdrop-blur-xl text-white px-6 py-4 rounded-2xl border border-white/10 shadow-lg transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                            <p className="text-base sm:text-lg font-black mb-1">{video.title}</p>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
                              <p className="text-sm text-gray-300">Klik om video te bekijken</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md hover:bg-white rounded-full p-4 sm:p-5 shadow-lg transition-all duration-300 hover:scale-110 z-10 opacity-0 group-hover/carousel:opacity-100 border-2 border-gray-200/50 hover:border-yellow-600/50 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:opacity-100"
              aria-label="Vorige video"
              disabled={defaultVideos.length <= 1}
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md hover:bg-white rounded-full p-4 sm:p-5 shadow-lg transition-all duration-300 hover:scale-110 z-10 opacity-0 group-hover/carousel:opacity-100 border-2 border-gray-200/50 hover:border-yellow-600/50 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:opacity-100"
              aria-label="Volgende video"
              disabled={defaultVideos.length <= 1}
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Premium Pagination Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {defaultVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setPlayingVideo(null)
                  }}
                  className={`rounded-full transition-all duration-500 ${
                    currentSlide === index 
                      ? 'bg-gradient-to-r from-yellow-600 to-yellow-500 w-10 h-3 shadow-lg shadow-yellow-600/50' 
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400 hover:w-6'
                  }`}
                  aria-label={`Ga naar slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

