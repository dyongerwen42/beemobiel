'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export default function ContactFormSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: 'Auto',
    address: '',
    remarks: '',
    agree: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    // Reset status when user starts typing
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
    }
  }, [submitStatus])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Handle form submission
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          vehicleType: 'Auto',
          address: '',
          remarks: '',
          agree: false
        })
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  return (
    <section ref={ref} className="py-6 sm:py-10 md:py-14 lg:py-16 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left side - Image */}
          <div className={`hidden lg:block transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/images/male-instructor-and-female-student-driving-lesson.jpg"
                alt="Instructor helping student"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className={`transition-all duration-700 ${isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Volledige naam *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base bg-gray-50 focus:bg-white"
                  placeholder="Volledige naam"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base bg-gray-50 focus:bg-white"
                  placeholder="E-mailadres"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Telefoonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base bg-gray-50 focus:bg-white"
                  placeholder="Telefoonnummer"
                />
              </div>
              
              <div>
                <label htmlFor="vehicleType" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Kies je voertuigtype *
                </label>
                <select
                  id="vehicleType"
                  required
                  value={formData.vehicleType}
                  onChange={handleChange}
                  name="vehicleType"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base bg-gray-50 focus:bg-white cursor-pointer"
                >
                  <option value="Auto">Auto</option>
                  <option value="Motor">Motor</option>
                  <option value="Scooter">Scooter</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Adresgegevens
                </label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  name="address"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base bg-gray-50 focus:bg-white"
                  placeholder="Adresgegevens (optioneel)"
                />
              </div>
              
              <div>
                <label htmlFor="remarks" className="block text-sm sm:text-base font-semibold text-gray-900 mb-2">
                  Opmerkingen
                </label>
                <textarea
                  id="remarks"
                  rows={6}
                  value={formData.remarks}
                  onChange={handleChange}
                  name="remarks"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 transition-all duration-200 text-sm sm:text-base resize-none bg-gray-50 focus:bg-white"
                  placeholder="Opmerkingen (optioneel)"
                />
              </div>
              
              <div className="flex items-start pt-2">
                <input
                  type="checkbox"
                  id="agree"
                  required
                  checked={formData.agree}
                  onChange={handleChange}
                  name="agree"
                  className="mt-1 w-5 h-5 text-yellow-600 border-2 border-gray-300 rounded focus:ring-yellow-600 focus:ring-2 cursor-pointer"
                />
                <label htmlFor="agree" className="ml-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                  Ik ga akkoord met de{' '}
                  <a href="/voorwaarden" className="text-yellow-600 hover:text-yellow-700 underline font-semibold transition-colors">
                    Algemene Voorwaarden
                  </a>
                </label>
              </div>
              
              {/* Status message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-800 text-sm sm:text-base">
                  Bedankt! Je bericht is verzonden. We nemen zo snel mogelijk contact met je op.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-800 text-sm sm:text-base">
                  Er is iets misgegaan. Probeer het later opnieuw of neem direct contact met ons op.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 sm:py-5 md:py-6 bg-yellow-600 text-black font-black rounded-xl text-base sm:text-lg md:text-xl uppercase tracking-wider hover:bg-yellow-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? 'VERZENDEN...' : 'VERZENDEN'}
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

