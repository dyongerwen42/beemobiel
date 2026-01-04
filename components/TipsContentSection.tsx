'use client'

import { ReactNode } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface TipsContentSectionProps {
  children: ReactNode
}

export default function TipsContentSection({ children }: TipsContentSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        <div
          className={`prose prose-lg max-w-none transition-opacity duration-700 ${
            isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  )
}


