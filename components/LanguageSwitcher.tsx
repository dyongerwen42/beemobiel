'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentLang, setLanguage } = useLanguage()

  const languages = [
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ] as const

  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

  const handleLanguageChange = (langCode: 'nl' | 'en') => {
    setIsOpen(false)
    setLanguage(langCode)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="notranslate flex items-center gap-2 h-10 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors duration-200"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{currentLanguage.flag}</span>
        <span className="hidden sm:block notranslate">{currentLanguage.code.toUpperCase()}</span>
        <svg 
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="notranslate absolute right-0 mt-2 w-44 bg-gray-900 rounded-xl shadow-2xl border border-gray-700/50 overflow-hidden z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium transition-colors duration-150 ${
                  currentLang === lang.code
                    ? 'bg-yellow-500/15 text-yellow-400'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="flex-1">{lang.label}</span>
                {currentLang === lang.code && (
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
