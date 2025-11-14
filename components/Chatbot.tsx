'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Download } from 'lucide-react'

interface Message {
  text: string
  isUser: boolean
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your Saanayo Electricals assistant. How can I help you with our electrical safety products today?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')

    // Simulate bot response based on keywords
    setTimeout(() => {
      let response = ""

      if (inputMessage.toLowerCase().includes('price') || inputMessage.toLowerCase().includes('cost')) {
        response = "I'd be happy to provide pricing information! Please share your specific requirements and quantity needed, and I'll connect you with our sales team for the best quote."
      } else if (inputMessage.toLowerCase().includes('catalog') || inputMessage.toLowerCase().includes('brochure')) {
        response = "You can download our complete product catalog here: [Download Brochure]. For technical specifications, please contact our support team."
      } else if (inputMessage.toLowerCase().includes('contact') || inputMessage.toLowerCase().includes('call')) {
        response = "You can reach us at:\n📞 +91 9667846784\n📧 saanayoelectricindustries@gmail.com\n🏢 SCF-112, Sector 28, Faridabad"
      } else if (inputMessage.toLowerCase().includes('product') || inputMessage.toLowerCase().includes('earthing')) {
        response = "We manufacture premium electrical safety products including Earthing Electrodes, Copper Bonded Rods, Chemical Earthing Systems, Lightning Arresters, and more. Which product are you interested in?"
      } else {
        response = "Thank you for your message! For detailed information about our products, pricing, or technical specifications, please contact our team at +91 9667846784 or email saanayoelectricindustries@gmail.com"
      }

      const botMessage: Message = {
        text: response,
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  const quickReplies = [
    { text: 'Product Catalog', icon: Download },
    { text: 'Pricing Info', icon: null },
    { text: 'Contact Sales', icon: null },
    { text: 'Technical Support', icon: null }
  ]

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-40 group"
          >
            <MessageCircle className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-20 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Saanayo Assistant</h3>
                  <p className="text-sm opacity-90">Online • Ready to help</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.isUser
                        ? 'bg-primary-600 text-white rounded-br-none'
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 rounded-bl-none'
                    }`}
                  >
                    {message.text}
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${message.isUser ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => setInputMessage(reply.text)}
                      className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm transition-colors flex items-center space-x-1"
                    >
                      {reply.icon && <reply.icon className="w-3 h-3" />}
                      <span>{reply.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 focus:outline-none focus:border-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}