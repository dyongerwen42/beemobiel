'use client'

import { useEffect } from 'react'
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
  // Handle anchor links on page load and navigation
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            const headerOffset = 100 // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 300) // Delay to ensure page is loaded
      }
    }

    // Handle initial load
    handleHashScroll()

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
            const headerOffset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
            // Update URL
            window.history.pushState(null, '', href)
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
      document.removeEventListener('click', handleAnchorClick)
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

