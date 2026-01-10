'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({})
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Scroll detection using scroll event listener (more reliable than IntersectionObserver for this use case)
  useEffect(() => {
    const threshold = 10 // Show background after scrolling 10px
    let rafId: number | null = null
    let ticking = false

    const getScrollTop = () => {
      if (typeof window === 'undefined') return 0
      const scrollingElement = document.scrollingElement || document.documentElement || document.body
      return Math.max(0, scrollingElement?.scrollTop ?? window.scrollY ?? window.pageYOffset ?? 0)
    }

    const updateScrollState = () => {
      ticking = false
      const scrollTop = getScrollTop()
      const shouldBeScrolled = scrollTop > threshold

      setIsScrolled(prev => {
        if (prev !== shouldBeScrolled) {
          return shouldBeScrolled
        }
        return prev
      })
    }

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          updateScrollState()
          ticking = false
        })
        ticking = true
      }
    }

    // Initial state check
    updateScrollState()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Also check on resize
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true } as EventListenerOptions)
      window.removeEventListener('resize', handleScroll, { passive: true } as EventListenerOptions)
      if (rafId !== null) window.cancelAnimationFrame(rafId)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
    setMobileDropdowns({})
  }, [pathname])
  
  // Reset mobile dropdowns when menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setMobileDropdowns({})
    }
  }, [isMenuOpen])

  const navItems = [
    { href: '/', label: 'Home' },
    { 
      href: '/tarieven', 
      label: 'Tarieven',
      dropdown: [
        { href: '/tarieven', label: 'Tarieven' },
        { href: '/tarieven/autos', label: "Auto's" },
        { href: '/tarieven/motorfietsen', label: 'Motoren' },
        { href: '/tarieven/scooters', label: 'Scooters & Brommers' },
        { href: '/tarieven/theorie', label: 'Theorie' },
      ]
    },
    { 
      href: '/tips', 
      label: 'Tips en trucs',
      dropdown: [
        { href: '/tips', label: 'Auto Tips' },
        { href: '/tips', label: 'Motor Tips' },
        { href: '/tips', label: 'Scooter Tips' },
        { href: '/tips#driving_theory', label: 'Rijtheorie' },
      ]
    },
    { href: '/over-ons', label: 'Over Ons' },
    { href: '/contact', label: 'Neem Contact Op' },
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname?.startsWith(href)
  }

  // Check if current page should always have header background (dark hero sections)
  const shouldAlwaysHaveBackground = pathname?.startsWith('/tips') || 
                                     pathname?.startsWith('/contact') ||
                                     pathname?.startsWith('/over-ons') ||
                                     pathname?.startsWith('/tarieven') ||
                                     pathname?.startsWith('/lessen') ||
                                     pathname?.startsWith('/ervaringen') ||
                                     pathname?.startsWith('/faq') ||
                                     pathname?.startsWith('/boek-nu') ||
                                     pathname?.startsWith('/voorwaarden') ||
                                     pathname?.startsWith('/hoe-je-je-rijbewijs-haalt')

  return (
    <>
      <header 
        ref={headerRef}
        data-scrolled={isScrolled ? 'true' : 'false'}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled || shouldAlwaysHaveBackground
            ? 'header-scrolled shadow-xl border-b border-yellow-600/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group flex-shrink-0"
              aria-label="BeeMobiel Home"
            >
              <div className="relative w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="BeeMobiel Logo"
                  width={144}
                  height={144}
                  className="object-contain drop-shadow-lg w-full h-auto"
                  priority
                  quality={65}
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, (max-width: 1280px) 144px, 160px"
                />
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <div 
                  key={item.href} 
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className={`flex items-center gap-1 h-10 px-3 xl:px-4 text-sm xl:text-base font-semibold rounded-lg transition-all duration-200 ${
                          isActive(item.href)
                            ? 'text-yellow-500 bg-yellow-500/10'
                            : 'text-white hover:text-yellow-400 hover:bg-white/5'
                        }`}
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        aria-expanded={activeDropdown === item.label}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 pt-2">
                        <div
                          className={`w-52 bg-gray-900 rounded-xl shadow-2xl border border-yellow-600/30 overflow-hidden transition-all duration-200 ${
                            activeDropdown === item.label
                              ? 'opacity-100 visible translate-y-0'
                              : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                          }`}
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem, idx) => (
                              <Link
                                key={`${item.href}-${idx}-${dropdownItem.label}`}
                                href={dropdownItem.href}
                                className={`flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                                  isActive(dropdownItem.href)
                                    ? 'bg-yellow-500/15 text-yellow-400'
                                    : 'text-gray-200 hover:text-yellow-400 hover:bg-white/5'
                                }`}
                              >
                                <span>{dropdownItem.label}</span>
                                <svg 
                                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center h-10 px-3 xl:px-4 text-sm xl:text-base font-semibold rounded-lg transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-yellow-500 bg-yellow-500/10'
                          : 'text-white hover:text-yellow-400 hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <Link 
                href="/boek-nu" 
                className="group flex items-center gap-2 h-10 px-5 xl:px-6 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <span>Boek Nu</span>
                <svg 
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Mobile Right Actions */}
            <div className="flex lg:hidden items-center gap-3">
              <LanguageSwitcher />
              <button
                className="flex items-center justify-center w-10 h-10 text-white hover:text-yellow-400 rounded-lg hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="relative w-5 h-4 flex flex-col justify-between">
                  <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`} />
                  <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 scale-0' : ''
                  }`} />
                  <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 z-[9998] h-full w-72 sm:w-80 max-w-[85vw] bg-gray-900 shadow-2xl border-l border-yellow-500/20 transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="BeeMobiel Logo"
                width={100}
                height={100}
                className="object-contain w-28 h-auto"
                sizes="112px"
                quality={65}
              />
            </Link>
            <button
              className="flex items-center justify-center w-10 h-10 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-1 px-3">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.dropdown ? (
                    <div>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className={`flex-1 flex items-center h-11 px-3 rounded-lg font-semibold transition-colors ${
                            isActive(item.href) 
                              ? 'text-yellow-400 bg-yellow-500/10' 
                              : 'text-white hover:bg-white/5'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => setMobileDropdowns(prev => ({ ...prev, [item.label]: !prev[item.label] }))}
                          className="flex items-center justify-center w-11 h-11 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                          aria-label="Toggle submenu"
                        >
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileDropdowns[item.label] ? 'rotate-180' : ''
                            }`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <div className={`overflow-hidden transition-all duration-200 ${
                        mobileDropdowns[item.label] ? 'max-h-64 mt-1' : 'max-h-0'
                      }`}>
                        <div className="ml-3 pl-3 border-l border-gray-700 space-y-1">
                          {item.dropdown.map((dropdownItem, idx) => (
                            <Link
                              key={`${item.href}-${idx}-${dropdownItem.label}`}
                              href={dropdownItem.href}
                              className={`block h-10 leading-10 px-3 rounded-lg text-sm font-medium transition-colors ${
                                isActive(dropdownItem.href)
                                  ? 'text-yellow-400 bg-yellow-500/10'
                                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center h-11 px-3 rounded-lg font-semibold transition-colors ${
                        isActive(item.href)
                          ? 'text-yellow-400 bg-yellow-500/10'
                          : 'text-white hover:bg-white/5'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-800">
            <Link
              href="/boek-nu"
              className="flex items-center justify-center gap-2 w-full h-12 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-bold shadow-lg transition-all duration-200 active:scale-[0.98]"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Boek Nu</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
