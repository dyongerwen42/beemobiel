'use client'

import Image from 'next/image'
import { useState, useCallback, useRef, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

function BookingFormContent() {
  const { ref, isIntersecting } = useIntersectionObserver()
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const formRef = useRef<HTMLFormElement>(null)
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    package: '',
    transmission: '',
    startDate: '',
    streetAddress: '',
    postalCodeCity: '',
    remarks: '',
    agree: false
  })

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/\D/g, '')
    if (phoneNumber.length <= 2) return phoneNumber
    if (phoneNumber.length <= 5) return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`
    if (phoneNumber.length <= 7) return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5)}`
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 5)} ${phoneNumber.slice(5, 7)} ${phoneNumber.slice(7, 9)}`
  }

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Volledige naam is verplicht'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mailadres is verplicht'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ongeldig e-mailadres'
    }
    
    if (!formData.birthDate.trim()) {
      newErrors.birthDate = 'Geboortedatum is verplicht'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefoonnummer is verplicht'
    } else {
      const phoneDigits = formData.phone.replace(/\D/g, '')
      if (phoneDigits.length < 10) {
        newErrors.phone = 'Voer een geldig telefoonnummer in (minimaal 10 cijfers)'
      }
    }
    
    if (formData.startDate) {
      const selectedDate = new Date(formData.startDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.startDate = 'Startdatum moet in de toekomst liggen'
      }
    }
    
    if (!formData.package) {
      newErrors.package = 'Selecteer een voertuigtype'
    }
    
    if (formData.package === 'auto' && !formData.transmission.trim()) {
      newErrors.transmission = 'Transmissie is verplicht voor auto'
    }
    
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = 'Straatnaam en huisnummer zijn verplicht'
    }
    
    if (!formData.postalCodeCity.trim()) {
      newErrors.postalCodeCity = 'Postcode en plaats zijn verplicht'
    }
    
    if (!formData.agree) {
      newErrors.agree = 'Je moet akkoord gaan met de voorwaarden'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    let newValue: string | boolean = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    
    // Format phone number
    if (name === 'phone' && type !== 'checkbox') {
      newValue = formatPhoneNumber(value)
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
    
    // Clear submit status when user makes changes
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
    }
  }, [errors, submitStatus])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      // Focus first error field
      const firstErrorField = formRef.current?.querySelector('[aria-invalid="true"]') as HTMLElement
      firstErrorField?.focus()
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Handle form submission
      // Form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        birthDate: '',
        package: '',
        transmission: '',
        startDate: '',
        streetAddress: '',
        postalCodeCity: '',
        remarks: '',
        agree: false
      })
      setErrors({})
      setSubmitStatus('success')
      
      // Clear any existing timeout
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current)
      }
      
      // Reset form after 3 seconds
      resetTimeoutRef.current = setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          birthDate: '',
          package: '',
          transmission: '',
          startDate: '',
          streetAddress: '',
          postalCodeCity: '',
          remarks: '',
          agree: false
        })
        setSubmitStatus('idle')
        resetTimeoutRef.current = null
      }, 3000)
    } catch (error) {
      // Handle error
      setSubmitStatus('error')
      // Log error for debugging (only in development)
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, validateForm])

  // Vehicle preselection based on URL params or referrer
  useEffect(() => {
    const vehicleParam = searchParams?.get('vehicle')
    const referrer = document.referrer
    
    let preselectedVehicle = ''
    
    // Check URL parameter first
    if (vehicleParam) {
      switch (vehicleParam.toLowerCase()) {
        case 'auto':
        case 'autos':
          preselectedVehicle = 'auto'
          break
        case 'motor':
        case 'motorfiets':
        case 'motorfietsen':
          preselectedVehicle = 'motorfiets'
          break
        case 'scooter':
        case 'scooters':
        case 'scooters-brommers':
          preselectedVehicle = 'scooters-brommers'
          break
        case 'theorie':
          preselectedVehicle = 'theorie'
          break
      }
    }
    // Check referrer URL patterns
    else if (referrer) {
      if (referrer.includes('/tarieven/autos')) {
        preselectedVehicle = 'auto'
      } else if (referrer.includes('/tarieven/motorfietsen') || referrer.includes('/tarieven/motoren')) {
        preselectedVehicle = 'motorfiets'
      } else if (referrer.includes('/tarieven/scooters')) {
        preselectedVehicle = 'scooters-brommers'
      } else if (referrer.includes('/tarieven/theorie')) {
        preselectedVehicle = 'theorie'
      }
    }
    
    // Update form data if vehicle type detected
    if (preselectedVehicle && !formData.package) {
      setFormData(prev => ({
        ...prev,
        package: preselectedVehicle
      }))
    }
  }, [searchParams, formData.package])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
        {/* Header */}
        <div className={`text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 ${
          isIntersecting ? 'animate-fade-in-down' : 'opacity-0 invisible'
        }`}>
          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight px-2 ${
            isIntersecting ? 'animate-fade-in-up' : 'opacity-0 invisible'
          }`} style={{ animationDelay: '0.15s' }}>
            Plan je eerste rijles
          </h2>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 items-start">
          {/* Images Gallery */}
          <div className={`order-2 lg:order-1 space-y-4 sm:space-y-5 md:space-y-6 ${
            isIntersecting ? 'animate-slide-in-left' : 'opacity-0 invisible'
          }`} style={{ animationDelay: '0.3s' }}>
            {/* Main Large Image */}
            <div className="relative h-48 sm:h-56 md:h-72 lg:h-[380px] xl:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group">
              <div className="license-plate-blur w-full h-full">
                <Image
                  src="/images/DSC03996.jpg"
                  alt="Eigen auto van BeeMobiel"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-black/10 group-hover:from-black/50 transition-opacity duration-500"></div>
            </div>
            
            {/* Smaller Images Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {/* Second Image */}
              <div className="relative h-32 sm:h-40 md:h-48 lg:h-[200px] xl:h-[220px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group">
                <div className="license-plate-blur w-full h-full">
                  <Image
                    src="/images/DSC04031.jpg"
                    alt="Autorijlessen bij BeeMobiel"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent group-hover:from-black/40 transition-opacity duration-500"></div>
              </div>
              
              {/* Third Image */}
              <div className="relative h-32 sm:h-40 md:h-48 lg:h-[200px] xl:h-[220px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group">
                <div className="license-plate-blur w-full h-full">
                  <Image
                    src="/images/DSC04051.jpg"
                    alt="Lesvoertuig van BeeMobiel"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent group-hover:from-black/40 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className={`bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 shadow-xl border-2 border-gray-100 hover:border-yellow-400/50 transition-all duration-500 order-1 lg:order-2 ${
            isIntersecting ? 'animate-slide-in-right' : 'opacity-0 invisible'
          }`} style={{ animationDelay: '0.45s' }}>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 text-premium-yellow">
              Klaar voor je eerste les?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 font-medium">
              Vul het formulier in en wij nemen zo snel mogelijk contact met je op
            </p>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border-2 border-green-200 rounded-lg sm:rounded-xl animate-fade-in">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-green-800 font-semibold text-sm sm:text-base">Bedankt voor je aanmelding!</p>
                    <p className="text-green-700 text-xs sm:text-sm mt-1">We nemen zo snel mogelijk contact met je op via e-mail of telefoon.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-lg sm:rounded-xl animate-fade-in">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-red-800 font-semibold text-sm sm:text-base">Er is iets misgegaan</p>
                    <p className="text-red-700 text-xs sm:text-sm mt-1">Probeer het later opnieuw of neem direct contact met ons op via <a href="tel:0712203046" className="underline font-medium">071 220 3046</a>.</p>
                  </div>
                </div>
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3 md:space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Volledige naam <span className="text-yellow-600" aria-label="verplicht veld">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 border-2 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50 focus:bg-white' : 'border-gray-200 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="Bijv. Jan Jansen"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs sm:text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  E-mailadres <span className="text-yellow-600" aria-label="verplicht veld">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  autoComplete="email"
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 border-2 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50 focus:bg-white' : 'border-gray-200 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="bijv. jan@voorbeeld.nl"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs sm:text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="birthDate" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Geboortedatum <span className="text-yellow-600" aria-label="verplicht veld">*</span>
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  required
                  value={formData.birthDate}
                  onChange={handleChange}
                  max={new Date(Date.now() - 16 * 365.25 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  aria-invalid={!!errors.birthDate}
                  aria-describedby={errors.birthDate ? 'birthDate-error' : undefined}
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 border-2 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base ${
                    errors.birthDate ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50 focus:bg-white' : 'border-gray-200 bg-gray-50 focus:bg-white'
                  }`}
                />
                {errors.birthDate && (
                  <p id="birthDate-error" className="mt-1 text-xs sm:text-sm text-red-600" role="alert">
                    {errors.birthDate}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Telefoonnummer <span className="text-yellow-600" aria-label="verplicht veld">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  autoComplete="tel"
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 border-2 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base ${
                    errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50 focus:bg-white' : 'border-gray-200 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="06 12 34 56 78"
                  maxLength={15}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-xs sm:text-sm text-red-600" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="package" className="block text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 sm:mb-1.5">
                  Kies je voertuigtype <span className="text-yellow-600" aria-label="verplicht veld">*</span>
                </label>
                <select
                  id="package"
                  name="package"
                  required
                  value={formData.package}
                  onChange={handleChange}
                  aria-invalid={!!errors.package}
                  aria-describedby={errors.package ? 'package-error' : undefined}
                  className={`w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base bg-white ${
                    errors.package ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecteer voertuigtype</option>
                  <option value="auto">Auto</option>
                  <option value="motorfiets">Motor</option>
                  <option value="scooters-brommers">Scooters & Brommers</option>
                  <option value="theorie">Theorie</option>
                </select>
                {errors.package && (
                  <p id="package-error" className="mt-1 text-xs sm:text-sm text-red-600" role="alert">
                    {errors.package}
                  </p>
                )}
              </div>
              
              {/* Transmission options - only show for cars */}
              {formData.package === 'auto' && (
                <div>
                  <label htmlFor="transmission" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                    Transmissie <span className="text-yellow-600" aria-label="verplicht veld">*</span>
                  </label>
                  <select
                    id="transmission"
                    name="transmission"
                    required={formData.package === 'auto'}
                    value={formData.transmission}
                    onChange={handleChange}
                    aria-invalid={!!errors.transmission}
                    aria-describedby={errors.transmission ? 'transmission-error' : undefined}
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 border-2 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base ${
                      errors.transmission ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50 focus:bg-white' : 'border-gray-200 bg-gray-50 focus:bg-white'
                    }`}
                  >
                    <option value="">Selecteer transmissie</option>
                    <option value="handgeschakeld">Handgeschakeld</option>
                    <option value="automaat">Automaat</option>
                  </select>
                  {errors.transmission && (
                    <p id="transmission-error" className="mt-1 text-xs sm:text-sm text-red-600" role="alert">
                      {errors.transmission}
                    </p>
                  )}
                </div>
              )}
              
              <div>
                <label htmlFor="startDate" className="block text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 sm:mb-1.5">
                  Wanneer wil je starten?
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base bg-white"
                />
              </div>
              
              <div>
                <label htmlFor="streetAddress" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Straatnaam + Huisnummer <span className="text-yellow-600" aria-label="verplicht veld">*</span>
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  name="streetAddress"
                  required
                  value={formData.streetAddress}
                  onChange={handleChange}
                  aria-invalid={!!errors.streetAddress}
                  aria-describedby={errors.streetAddress ? 'streetAddress-error' : undefined}
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 border-2 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base ${
                    errors.streetAddress ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50 focus:bg-white' : 'border-gray-200 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="Bijv. Hoofdstraat 123"
                />
                {errors.streetAddress && (
                  <p id="streetAddress-error" className="mt-1 text-xs sm:text-sm text-red-600" role="alert">
                    {errors.streetAddress}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="postalCodeCity" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Postcode + Plaats <span className="text-yellow-600" aria-label="verplicht veld">*</span>
                </label>
                <input
                  type="text"
                  id="postalCodeCity"
                  name="postalCodeCity"
                  required
                  value={formData.postalCodeCity}
                  onChange={handleChange}
                  aria-invalid={!!errors.postalCodeCity}
                  aria-describedby={errors.postalCodeCity ? 'postalCodeCity-error' : undefined}
                  className={`w-full px-4 sm:px-5 py-3 sm:py-4 border-2 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base ${
                    errors.postalCodeCity ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50 focus:bg-white' : 'border-gray-200 bg-gray-50 focus:bg-white'
                  }`}
                  placeholder="Bijv. 1234 AB Amsterdam"
                />
                {errors.postalCodeCity && (
                  <p id="postalCodeCity-error" className="mt-1 text-xs sm:text-sm text-red-600" role="alert">
                    {errors.postalCodeCity}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="remarks" className="block text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 sm:mb-1.5">
                  Opmerkingen <span className="text-gray-500 text-xs">(optioneel)</span>
                </label>
                <textarea
                  id="remarks"
                  name="remarks"
                  rows={3}
                  value={formData.remarks}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base resize-none bg-white"
                  placeholder="Heb je nog vragen of opmerkingen?"
                />
              </div>
              
              <div className="flex items-start gap-2 sm:gap-2.5">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  required
                  checked={formData.agree}
                  onChange={handleChange}
                  aria-invalid={!!errors.agree}
                  aria-describedby={errors.agree ? 'agree-error' : undefined}
                  className="mt-0.5 sm:mt-1 w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 border-gray-300 rounded focus:ring-2 focus:ring-yellow-600 flex-shrink-0 cursor-pointer"
                />
                <label htmlFor="agree" className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed cursor-pointer">
                  Ik ga akkoord met de{' '}
                  <a href="/voorwaarden" className="text-yellow-600 hover:text-yellow-700 underline font-medium" target="_blank" rel="noopener noreferrer">
                    Algemene Voorwaarden
                  </a>
                  <span className="text-yellow-600 ml-1" aria-label="verplicht veld">*</span>
                </label>
              </div>
              {errors.agree && (
                <p id="agree-error" className="text-xs sm:text-sm text-red-600 -mt-2" role="alert">
                  {errors.agree}
                </p>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-yellow-600 text-gray-900 font-bold rounded-xl text-sm sm:text-base uppercase tracking-wide hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verzenden...
                  </span>
                ) : (
                  'Verzenden'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function BookingFormSection() {
  return (
    <Suspense fallback={
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8">
          <div className="text-center">
            <p className="text-gray-600">Formulier wordt geladen...</p>
          </div>
        </div>
      </section>
    }>
      <BookingFormContent />
    </Suspense>
  )
}