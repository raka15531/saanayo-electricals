'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Instagram, Twitter, Facebook, ChevronDown } from 'lucide-react'

interface NavbarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Navigation items with dropdown support
  const navItems = [
    { 
      name: 'Home', 
      href: '/' 
    },
    { 
      name: 'Products', 
      href: '/products',
      dropdown: [
        { name: 'All Products', href: '/products' },
        { name: 'Chemical Earthing', href: '/chemical-earthing' },
        { name: 'Gel Earthing', href: '/gel-earthing' },
        { name: 'Copper Bonded Rods', href: '/copper-bonded-rods' },
        { name: 'GI Earthing Pipes', href: '/gi-earthing-pipes' },
        { name: 'Lightning Arresters', href: '/lightning-arresters' },
        { name: 'Electrical Panels', href: '/electrical-panels' },
        { name: 'Surge Protection', href: '/surge-protection-devices' },
      ]
    },
    { 
      name: 'Service Areas', 
      href: '/earthing-in-faridabad',
      dropdown: [
        { name: 'Faridabad', href: '/earthing-in-faridabad' },
        { name: 'Noida', href: '/earthing-in-noida' },
        { name: 'Gurgaon', href: '/earthing-in-gurgaon' },
        { name: 'Delhi', href: '/earthing-in-delhi' },
      ]
    },
    { 
      name: 'Resources', 
      href: '/blog',
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'Chemical Earthing Price', href: '/chemical-earthing-price' },
        { name: 'Copper vs GI Electrodes', href: '/copper-bonded-rods-vs-gi-electrodes' },
        { name: 'Gel Earthing Benefits', href: '/gel-earthing-benefits' },
        { name: 'Installation Guide', href: '/how-to-install-chemical-earthing' },
        { name: 'Home Earthing Guide', href: '/earthing-for-home' },
        { name: 'Industrial Requirements', href: '/industrial-earthing-requirements' },
      ]
    },
    { 
      name: 'About', 
      href: '/about' 
    },
    { 
      name: 'Contact', 
      href: '/contact' 
    },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">SE</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                Sannayo Electric Limited
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Powering Safety. Grounding Reliability.
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 font-semibold transition-all duration-300 hover:text-primary-600 ${
                        isActive(item.href) || item.dropdown.some(drop => isActive(drop.href))
                          ? 'text-primary-600 border-b-2 border-primary-600'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className={`block px-4 py-3 text-sm transition-colors ${
                                  isActive(dropdownItem.href)
                                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                                onClick={() => setServicesOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-semibold transition-all duration-300 hover:text-primary-600 ${
                      isActive(item.href)
                        ? 'text-primary-600 border-b-2 border-primary-600'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 ml-4">
              <a
                href="https://www.instagram.com/kasakuelectricalspvtltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/KasakuPvt"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Kasaku-Electricals-Pvt-Ltd/100086154097375/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div className="px-4">
                        <button
                          onClick={() => {
                            if (item.name === 'Service Areas') setServicesOpen(!servicesOpen)
                            else if (item.name === 'Products') setProductsOpen(!productsOpen)
                          }}
                          className={`flex items-center justify-between w-full py-3 font-semibold transition-colors ${
                            isActive(item.href) || item.dropdown.some(drop => isActive(drop.href))
                              ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${(item.name === 'Service Areas' && servicesOpen) || (item.name === 'Products' && productsOpen) ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Mobile Dropdown */}
                        <AnimatePresence>
                          {((item.name === 'Service Areas' && servicesOpen) || (item.name === 'Products' && productsOpen) || (item.name === 'Resources' && servicesOpen)) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-700"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={() => {
                                    setIsOpen(false)
                                    setServicesOpen(false)
                                    setProductsOpen(false)
                                  }}
                                  className={`block py-2 px-4 text-sm transition-colors ${
                                    isActive(dropdownItem.href)
                                      ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                  }`}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 font-semibold transition-colors ${
                          isActive(item.href)
                            ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Social Media Icons */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 px-4">
                  <a
                    href="https://www.instagram.com/kasakuelectricalspvtltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/KasakuPvt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Kasaku-Electricals-Pvt-Ltd/100086154097375/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}