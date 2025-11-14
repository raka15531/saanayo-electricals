'use client'

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import TopBanner from '../components/TopBanner'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark'
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <TopBanner />
      {/* Fixed navbar with proper spacing */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {/* Main content with safe margin */}
      <main className="pt-32 md:pt-28"> {/* Increased padding to prevent overlap */}
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  )
}