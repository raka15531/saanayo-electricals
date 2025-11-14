'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, Twitter, Facebook } from 'lucide-react'

export default function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute top-0 right-10 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-0 left-20 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          {/* Left Side - Contact Info */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm">
            {/* Phone Numbers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              <Phone className="w-3 h-3" />
              <span className="font-semibold">+91 9667846784</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              <Phone className="w-3 h-3" />
              <span>+91 7838756681</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              <Phone className="w-3 h-3" />
              <span>+91 8010628458</span>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full"
            >
              <Mail className="w-3 h-3" />
              <span>support@kasakuelectricals.com</span>
            </motion.div>
          </div>

          {/* Right Side - Social Media & Offer */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2">
              <motion.a
                href="https://www.instagram.com/kasakuelectricalspvtltd/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 hover:bg-pink-600 p-1 rounded transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </motion.a>
              
              <motion.a
                href="https://x.com/KasakuPvt"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 hover:bg-blue-400 p-1 rounded transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-3 h-3" />
              </motion.a>
              
              <motion.a
                href="https://www.facebook.com/people/Kasaku-Electricals-Pvt-Ltd/100086154097375/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 hover:bg-blue-600 p-1 rounded transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-3 h-3" />
              </motion.a>
            </div>

            {/* Special Offer Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex items-center space-x-1 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs font-bold"
            >
              <span>🎯</span>
              <span>SPECIAL OFFER</span>
              <span>🎯</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scrolling Text Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-yellow-400 text-blue-900 py-1 overflow-hidden">
        <motion.div
          className="flex space-x-8 whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {Array(5).fill(0).map((_, index) => (
            <div key={index} className="flex items-center space-x-8 font-semibold text-sm">
              <span>⚡ Premium Quality Electrical Products</span>
              <span>•</span>
              <span>🏭 Trusted by 5000+ Clients</span>
              <span>•</span>
              <span>🚚 Fast Delivery Across India</span>
              <span>•</span>
              <span>⭐ 15+ Years Experience</span>
              <span>•</span>
              <span>🛡️ 5-15 Years Warranty</span>
              <span>•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}