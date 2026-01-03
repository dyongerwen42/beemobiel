'use client'

import { useEffect, useRef, useState, useMemo } from 'react'

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Memoize options to prevent endless loops
  const observerOptions = useMemo(() => ({
    threshold: options?.threshold ?? 0.1,
    rootMargin: options?.rootMargin ?? '0px 0px -50px 0px',
    root: options?.root,
  }), [options?.threshold, options?.rootMargin, options?.root])

  useEffect(() => {
    const element = ref.current
    if (!element || hasAnimated) return

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsIntersecting(true)
          setHasAnimated(true)
          if (observerRef.current) {
            observerRef.current.disconnect()
          }
        }
      },
      observerOptions
    )

    observerRef.current.observe(element)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [hasAnimated, observerOptions])

  return { ref, isIntersecting, hasAnimated }
}

