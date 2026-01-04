'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

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
        { href: '/tarieven/motorfietsen', label: 'Motorfietsen' },
        { href: '/tarieven/scooters', label: 'Scooters & Brommers' },
        { href: '/tarieven/theorie', label: 'Theorie' },
      ]
    },
    { 
      href: '/tips', 
      label: 'Tips en trucs',
      dropdown: [
        { href: '/tips#driving_theory', label: 'Rijtheorie' },
        { href: '/tips#v1', label: 'Eerste Rijles' },
        { href: '/tips#v2', label: 'Examenfouten' },
        { href: '/tips#v3', label: 'Rotondes' },
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
        <nav className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-1 sm:py-1.5 md:py-2">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group relative z-10 flex-shrink-0"
              aria-label="BeeMobiel Home"
            >
              <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="BeeMobiel Logo"
                  width={144}
                  height={144}
                  className="object-contain relative z-10 drop-shadow-lg p-0.5 sm:p-1 w-full h-auto"
                  priority
                  quality={65}
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, (max-width: 1280px) 128px, 144px"
                />
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-shrink-0">
              {navItems.map((item, index) => (
                <div 
                  key={item.href} 
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className={`relative px-4 xl:px-5 py-2.5 text-sm xl:text-base font-semibold transition-all duration-300 rounded-xl ${
                            isActive(item.href)
                              ? 'text-yellow-600 bg-yellow-600/10'
                              : 'text-white hover:text-yellow-400 hover:bg-white/5'
                          }`}
                        >
                          <span className="relative z-10">{item.label}</span>
                        </Link>
                        <button
                          className={`px-2 py-2.5 text-sm xl:text-base font-semibold transition-all duration-300 rounded-xl ${
                            isActive(item.href)
                              ? 'text-yellow-600'
                              : 'text-white hover:text-yellow-400'
                          }`}
                          onClick={(e) => {
                            e.preventDefault()
                            setActiveDropdown(activeDropdown === item.label ? null : item.label)
                          }}
                          aria-expanded={activeDropdown === item.label}
                          aria-haspopup="true"
                          aria-label="Toggle dropdown"
                        >
                          <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {/* Dropdown Menu - Connected directly to button with invisible bridge */}
                      <div className="absolute top-full left-0 w-full pt-1">
                        <div
                          className={`w-56 bg-gray-900 rounded-xl shadow-xl border-2 border-yellow-600/30 overflow-hidden transition-all duration-300 ${
                            activeDropdown === item.label
                              ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                              : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                          }`}
                        >
                          <div className="p-2">
                            {item.dropdown.map((dropdownItem, idx) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 relative overflow-hidden group/item ${
                                  isActive(dropdownItem.href)
                                    ? 'bg-yellow-600/20 text-yellow-400'
                                    : 'text-white hover:text-yellow-400 hover:bg-white/10'
                                }`}
                              >
                                <span className="relative z-10 flex items-center justify-between">
                                  {dropdownItem.label}
                                  <svg 
                                    className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transform translate-x-[-8px] group-hover/item:translate-x-0 transition-all duration-200" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative px-4 xl:px-5 py-2.5 text-sm xl:text-base font-semibold transition-all duration-300 rounded-xl ${
                        isActive(item.href)
                          ? 'text-yellow-600 bg-yellow-600/10'
                          : 'text-white hover:text-yellow-400 hover:bg-white/5'
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <Link 
                href="/boek-nu" 
                className="relative group/cta ml-2 xl:ml-3"
              >
                <div className="relative bg-yellow-600 text-gray-900 px-5 xl:px-7 py-2.5 xl:py-3 rounded-xl font-black text-xs xl:text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Boek Nu
                    <svg 
                      className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-20 text-white hover:text-yellow-500 transition-colors p-2 rounded-xl hover:bg-white/10 active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-2.5' : ''
                }`}></span>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-2.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out ${
          isMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible'
        }`}
        style={{ paddingTop: headerRef.current?.offsetHeight || 80 }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] sm:max-w-[85vw] bg-gray-900 shadow-xl border-l-2 border-yellow-600/30 transform transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="h-full overflow-y-auto p-4 sm:p-5 md:p-6 space-y-1">
            {/* Logo in mobile menu */}
            <div className="mb-4 pb-3 border-b-2 border-yellow-600/20">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <div className="relative w-32">
                  <Image
                    src="/images/logo.png"
                    alt="BeeMobiel Logo"
                    width={128}
                    height={128}
                    className="object-contain p-1 w-full h-auto"
                    sizes="128px"
                    quality={65}
                  />
                </div>
              </Link>
            </div>

            {navItems.map((item, index) => (
              <div key={item.href} className="overflow-hidden">
                {item.dropdown ? (
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={`flex-1 px-4 py-3 rounded-xl font-bold text-white transition-all duration-200 ${
                          isActive(item.href) ? 'bg-yellow-600/20 text-yellow-400' : 'hover:bg-white/10'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() => setMobileDropdowns(prev => ({ ...prev, [item.label]: !prev[item.label] }))}
                        className={`px-3 py-3 rounded-xl font-bold text-white transition-all duration-200 ${
                          isActive(item.href) ? 'text-yellow-400' : 'hover:bg-white/10'
                        }`}
                        aria-label="Toggle dropdown"
                      >
                        <svg 
                          className={`w-5 h-5 transition-transform duration-300 ${
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
                    <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${
                      mobileDropdowns[item.label] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                            isActive(dropdownItem.href)
                              ? 'bg-yellow-600/20 text-yellow-400'
                              : 'text-gray-300 hover:text-yellow-400 hover:bg-white/10'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-xl font-bold transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-yellow-600/20 text-yellow-400'
                        : 'text-white hover:text-yellow-400 hover:bg-white/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-6 mt-6 border-t-2 border-yellow-600/20">
              <Link
                href="/boek-nu"
                className="block w-full bg-yellow-600 text-gray-900 px-6 py-4 rounded-xl text-center font-black text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-center gap-2">
                  Boek Nu
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
