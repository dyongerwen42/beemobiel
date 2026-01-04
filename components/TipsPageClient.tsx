'use client'

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TipsHeroSection from '@/components/TipsHeroSection'
import TipsIntroSection from '@/components/TipsIntroSection'
import TipsBasisTheorieSection from '@/components/TipsBasisTheorieSection'
import TipsEersteRijlesSection from '@/components/TipsEersteRijlesSection'
import TipsExamenfoutenSection from '@/components/TipsExamenfoutenSection'
import TipsRotondesSection from '@/components/TipsRotondesSection'
import CTAFinalSection from '@/components/CTAFinalSection'

export default function TipsPageClient() {
  const timeoutRefs = useRef<NodeJS.Timeout[]>([])
  
  // Handle anchor links on page load and navigation with improved stability
  useEffect(() => {
    const scrollToHash = (hash: string, retries = 5) => {
      if (!hash) return

      const element = document.querySelector(hash)
      if (element) {
        const headerOffset = 120 // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        })
        return true
      }
      
      // Retry if element not found yet
      if (retries > 0) {
        setTimeout(() => scrollToHash(hash, retries - 1), 200)
      }
      return false
    }

    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        // Try immediately
        if (!scrollToHash(hash)) {
          // If not found, wait a bit and try again
          const timeout1 = setTimeout(() => scrollToHash(hash, 3), 100)
          const timeout2 = setTimeout(() => scrollToHash(hash, 2), 500)
          const timeout3 = setTimeout(() => scrollToHash(hash, 1), 1000)
          timeoutRefs.current.push(timeout1, timeout2, timeout3)
        }
      }
    }

    // Handle initial load - wait for page to be ready
    if (document.readyState === 'complete') {
      handleHashScroll()
    } else {
      window.addEventListener('load', handleHashScroll, { once: true })
      // Also try after a short delay
      const initialTimeout = setTimeout(handleHashScroll, 100)
      timeoutRefs.current.push(initialTimeout)
    }

    // Handle hash changes (when clicking anchor links)
    window.addEventListener('hashchange', handleHashScroll)

    // Also handle clicks on anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href.startsWith('#') && href !== '#') {
          const element = document.querySelector(href)
          if (element) {
            e.preventDefault()
            scrollToHash(href)
            // Update URL
            window.history.pushState(null, '', href)
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
      window.removeEventListener('load', handleHashScroll)
      document.removeEventListener('click', handleAnchorClick)
      // Clear all timeouts
      timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
      timeoutRefs.current = []
    }
  }, [])

  return (
    <>
      <Header />
      <main className="relative" style={{ marginTop: 0, paddingTop: 0 }}>
        <TipsHeroSection />
        <TipsIntroSection />
        <TipsBasisTheorieSection />
        <TipsEersteRijlesSection />
        <TipsExamenfoutenSection />
        <TipsRotondesSection />
        <CTAFinalSection />
      </main>
      <Footer />
    </>
  )
}

