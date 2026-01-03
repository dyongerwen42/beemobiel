'use client'

import { useState, useEffect, useMemo, memo } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const stats = [
  {
    number: 200,
    suffix: "+",
    label: "Studenten Opgeleid"
  },
  {
    number: 90,
    suffix: "%",
    label: "Slagingspercentage"
  },
  {
    number: 10,
    suffix: "+",
    label: "Jaar Ervaring"
  },
  {
    number: 5,
    suffix: "+",
    label: "Professionele Instructeurs"
  }
] as const

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) {
      setCount(0)
      return
    }

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Ease out cubic
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOutCubic * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, start])

  return count
}

const StatItem = memo(({ stat, count, isIntersecting, index }: { stat: typeof stats[number], count: number, isIntersecting: boolean, index: number }) => (
  <div 
    className={`text-center group transition-opacity duration-500 ${
      isIntersecting ? 'opacity-100' : 'opacity-0'
    }`}
  >
    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-1 sm:mb-2 transition-all duration-300 group-hover:scale-105">
      {count}{stat.suffix}
    </div>
    <div className="text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wider px-1 sm:px-2 leading-tight">
      {stat.label}
    </div>
  </div>
))

StatItem.displayName = 'StatItem'

export default function StatsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })
  
  const count200 = useCountUp(200, 2000, isIntersecting)
  const count90 = useCountUp(90, 1500, isIntersecting)
  const count10 = useCountUp(10, 1000, isIntersecting)
  const count5 = useCountUp(5, 800, isIntersecting)

  // Memoize counts array to prevent unnecessary re-renders
  const counts = useMemo(() => [count200, count90, count10, count5], [count200, count90, count10, count5])
  
  return (
    <section ref={ref} className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gray-900 relative overflow-hidden border-t border-yellow-600/20 border-b border-yellow-600/20">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {stats.map((stat, index) => (
            <StatItem 
              key={`${stat.label}-${index}`}
              stat={stat}
              count={counts[index]}
              isIntersecting={isIntersecting}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
