'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (options: {
          pageLanguage: string
          includedLanguages: string
          layout: number
        }, elementId: string) => void
      }
    }
  }
}

export type Language = 'nl' | 'en'

interface LanguageContextType {
  currentLang: Language
  setLanguage: (lang: Language) => void
  isGoogleTranslateReady: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'beemobiel-language-preference'
let googleTranslateScriptLoaded = false

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLang, setCurrentLang] = useState<Language>('nl')
  const [isGoogleTranslateReady, setIsGoogleTranslateReady] = useState(false)
  const [hasInitialized, setHasInitialized] = useState(false)
  const pathname = usePathname()

  const languages = [
    { code: 'nl', googleCode: 'nl' },
    { code: 'en', googleCode: 'en' },
  ]

  // Load saved language preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null
      if (savedLang && (savedLang === 'nl' || savedLang === 'en')) {
        setCurrentLang(savedLang)
      }
    }
  }, [])

  // Initialize Google Translate script once
  useEffect(() => {
    if (googleTranslateScriptLoaded) {
      setIsGoogleTranslateReady(true)
      return
    }

    // Check if script is already loaded
    if (document.getElementById('google-translate-script')) {
      googleTranslateScriptLoaded = true
      setIsGoogleTranslateReady(true)
      return
    }

    // Create and load Google Translate script
    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    
    // Initialize Google Translate when script loads
    ;(window as any).googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'nl',
            includedLanguages: 'nl,en',
            layout: 0, // Simple layout (no dropdown shown)
          },
          'google_translate_element'
        )
        
        setTimeout(() => {
          googleTranslateScriptLoaded = true
          setIsGoogleTranslateReady(true)
          setHasInitialized(true)
        }, 500)
      }
    }

    document.head.appendChild(script)
  }, [])

  // Restore language when Google Translate is ready and we have a saved preference
  useEffect(() => {
    if (!isGoogleTranslateReady || !hasInitialized) return

    const savedLang = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    if (savedLang && (savedLang === 'nl' || savedLang === 'en')) {
      restoreLanguage(savedLang as Language)
    }
  }, [isGoogleTranslateReady, hasInitialized])

  // Restore language on navigation changes
  useEffect(() => {
    if (!isGoogleTranslateReady || !hasInitialized) return

    const timer = setTimeout(() => {
      const savedLang = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
      if (savedLang && (savedLang === 'nl' || savedLang === 'en')) {
        restoreLanguage(savedLang as Language)
      }
    }, 300) // Small delay to ensure page has loaded

    return () => clearTimeout(timer)
  }, [pathname, isGoogleTranslateReady, hasInitialized])

  const restoreLanguage = (lang: Language) => {
    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo')
    if (select) {
      const googleCode = languages.find(l => l.code === lang)?.googleCode || lang
      if (select.value !== googleCode) {
        select.value = googleCode
        select.dispatchEvent(new Event('change'))
      }
      setCurrentLang(lang)
    }
  }

  const setLanguage = (lang: Language) => {
    // Update state immediately
    setCurrentLang(lang)
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang)
    }
    
    // Trigger Google Translate if ready
    if (isGoogleTranslateReady) {
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo')
      if (select) {
        const googleCode = languages.find(l => l.code === lang)?.googleCode || lang
        if (select.value !== googleCode) {
          select.value = googleCode
          select.dispatchEvent(new Event('change'))
        }
      }
    }
  }

  // Hide Google Translate's default UI
  useEffect(() => {
    const styleId = 'google-translate-custom-styles'
    if (document.getElementById(styleId)) return

    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      #google_translate_element {
        display: none !important;
      }
      .goog-te-banner-frame {
        display: none !important;
      }
      .goog-te-menu-frame {
        z-index: 9999 !important;
      }
      body {
        top: 0 !important;
      }
      .skiptranslate {
        display: none !important;
      }
      .goog-te-combo {
        display: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      const existingStyle = document.getElementById(styleId)
      if (existingStyle) {
        document.head.removeChild(existingStyle)
      }
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, isGoogleTranslateReady }}>
      {/* Hidden Google Translate element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}