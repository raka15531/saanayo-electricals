'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react'

export default function TopBanner() {
  const phoneNumbers = [
    { number: '+919667846784', display: '9667846784' },
    { number: '+917838756681', display: '7838756681' },
    { number: '+918010628458', display: '8010628458' }
  ]

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  const handleWhatsApp = () => {
    const message = "Hi, I'm interested in your electrical safety products. Please provide more information."
    window.open(`https://wa.me/919667846784?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleEmail = () => {
    window.open('mailto:support@kasakuelectricals.com', '_self')
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 relative overflow-hidden border-b border-white/20 h-[72px] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-2 right-10 w-6 h-6 bg-green-400 rounded-full opacity-20"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm w-full lg:w-auto">
            {/* Phone Numbers */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              {phoneNumbers.map((phone, index) => (
                <motion.button
                  key={phone.number}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleCall(phone.number)}
                  className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                >
                  <Phone className="w-3 h-3 flex-shrink-0" />
                  <span className={`text-xs sm:text-sm ${index === 0 ? 'font-semibold' : ''}`}>
                    {phone.display}
                  </span>
                  <span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                    📞
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Email */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={handleEmail}
              className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            >
              <Mail className="w-3 h-3 flex-shrink-0" />
              <span className="text-xs sm:text-sm">support@kasakuelectricals.com</span>
              <span className="text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                ✉️
              </span>
            </motion.button>
          </div>

          {/* Right Side - Social Media & Offer */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-center lg:justify-end">
            {/* WhatsApp Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              onClick={handleWhatsApp}
              className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-lg transition-all duration-300 cursor-pointer group border border-green-400"
            >
              <span className="text-sm">💬</span>
              <span className="text-xs font-semibold hidden sm:inline">WhatsApp</span>
              <span className="text-xs font-semibold sm:hidden">WA</span>
            </motion.button>

            {/* Social Media Icons */}
            <div className="flex items-center gap-1">
              <motion.a
                href="https://www.instagram.com/kasakuelectricalspvtltd/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 hover:bg-pink-600 p-1.5 rounded-lg transition-all duration-300 border border-white/20"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
              
              <motion.a
                href="https://x.com/KasakuPvt"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 hover:bg-blue-400 p-1.5 rounded-lg transition-all duration-300 border border-white/20"
                aria-label="Twitter"
              >
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
              
              <motion.a
                href="https://www.facebook.com/people/Kasaku-Electricals-Pvt-Ltd/100086154097375/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 hover:bg-blue-600 p-1.5 rounded-lg transition-all duration-300 border border-white/20"
                aria-label="Facebook"
              >
                <Facebook className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.a>
            </div>

            {/* Special Offer Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-1 bg-yellow-400 text-blue-900 px-2 py-1 rounded-lg text-xs font-bold border border-yellow-300 shadow-lg"
            >
              <span className="text-[10px]">🎯</span>
              <span className="hidden sm:inline">SPECIAL OFFER</span>
              <span className="sm:hidden">OFFER</span>
              <span className="text-[10px]">🎯</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrolling Text Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-400 text-blue-900 py-1.5 overflow-hidden border-t border-white/20">
        <motion.div
          className="flex gap-6 sm:gap-8 whitespace-nowrap text-xs sm:text-sm font-semibold"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1">
                <span>⚡</span>
                <span>Premium Quality Electrical Products</span>
              </span>
              <span className="text-blue-700">•</span>
              <span className="flex items-center gap-1">
                <span>🏭</span>
                <span>Trusted by 5000+ Clients</span>
              </span>
              <span className="text-blue-700">•</span>
              <span className="flex items-center gap-1">
                <span>🚚</span>
                <span>Fast Delivery Across India</span>
              </span>
              <span className="text-blue-700">•</span>
              <span className="flex items-center gap-1">
                <span>⭐</span>
                <span>15+ Years Experience</span>
              </span>
              <span className="text-blue-700">•</span>
              <span className="flex items-center gap-1">
                <span>🛡️</span>
                <span>5-15 Years Warranty</span>
              </span>
              <span className="text-blue-700">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}