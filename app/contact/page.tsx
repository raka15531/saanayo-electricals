'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Building, Shield, Calendar } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:saanayoelectricindustries@gmail.com?subject=Contact Form: ${formData.subject}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-100 dark:from-gray-900 dark:to-primary-900/20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Sanaayo Electric Industries
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with India's leading earthing solutions provider. 10-year warranty, 50+ years lifespan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Company Information</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
                <Building className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-900 dark:text-blue-400 mb-2">Business Type</h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">Private Limited Company</p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
                <Calendar className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-green-900 dark:text-green-400 mb-2">Incorporation</h3>
                <p className="text-green-700 dark:text-green-300 text-sm">17 January 2025</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
                <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <h3 className="font-semibold text-purple-900 dark:text-purple-400 mb-2">Product Warranty</h3>
                <p className="text-purple-700 dark:text-purple-300 text-sm">10 Years</p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
                <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400 mx-auto mb-3" />
                <h3 className="font-semibold text-orange-900 dark:text-orange-400 mb-2">Product Lifespan</h3>
                <p className="text-orange-700 dark:text-orange-300 text-sm">50+ Years</p>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl max-w-2xl mx-auto">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Core Business</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Earthing/grounding systems using green earth electrodes made with conductive concrete granules. 
                We design, install, and maintain these earthing systems, plus provide testing services.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Registered Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Plot No. 5B/7, 2nd Floor, Railway Road<br />
                      NIT-5, Faridabad, Haryana – 121001<br />
                      India
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      <strong>CIN:</strong> U43219HR2025PTC127630<br />
                      <strong>GSTIN:</strong> 06ABPCS0518J1Z5
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Phone Number</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 9667846784</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Email Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">saanayoelectricindustries@gmail.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800"
              >
                <h3 className="font-semibold text-green-900 dark:text-green-400 mb-2">Quick Response via WhatsApp</h3>
                <p className="text-green-700 dark:text-green-300 mb-4 text-sm">
                  Get instant answers to your queries about our green earth electrode systems
                </p>
                <a
                  href="https://wa.me/919667846784?text=Hi, I'm interested in Sanaayo Electric's earthing solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
                >
                  <span>💬 Chat on WhatsApp</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="Chemical Earthing Price">Chemical Earthing Price</option>
                    <option value="Green Earth Electrode">Green Earth Electrode</option>
                    <option value="Earthing Installation">Earthing Installation</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Site Survey Request">Free Site Survey</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                    placeholder="Tell us about your earthing requirements, project details, or any specific questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  We'll get back to you within 24 hours with the best earthing solution for your needs.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - STATIC SOLUTION THAT WORKS */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Visit Our Registered Office</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Plot No. 5B/7, 2nd Floor, Railway Road, NIT-5, Faridabad, Haryana – 121001
            </p>
          </motion.div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            {/* Static Map Design - No iframe blocking issues */}
            <div className="h-96 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-gray-800 dark:to-purple-900/20 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
              </div>
              
              {/* Map Pin and Location Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 max-w-md mx-4">
                  <div className="text-5xl mb-4 animate-bounce">📍</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Sanaayo Electric Industries
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    <strong>Plot No. 5B/7, 2nd Floor</strong><br />
                    Railway Road, NIT-5<br />
                    Faridabad, Haryana – 121001
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Plot+No.+5B%2F7+Railway+Road+NIT+Faridabad+Haryana+121001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>🗺️</span>
                      <span>View on Maps</span>
                    </a>
                    <a
                      href="https://www.google.com/maps/dir//Plot+No.+5B%2F7+Railway+Road+NIT+Faridabad+Haryana+121001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>🚗</span>
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location Details */}
            <div className="p-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>Location Information</span>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <p><strong>Area:</strong> Railway Road, NIT-5</p>
                    <p><strong>City:</strong> Faridabad, Haryana</p>
                    <p><strong>Pincode:</strong> 121001</p>
                    <p><strong>Landmark:</strong> Near Railway Road Market</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span>Visit Information</span>
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <p><strong>Parking:</strong> Available nearby</p>
                    <p><strong>Accessibility:</strong> Ground floor access</p>
                    <p><strong>Public Transport:</strong> Well connected</p>
                    <p><strong>Appointment:</strong> Recommended</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Coverage Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Faridabad</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">All sectors & areas</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌆</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Delhi NCR</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Complete coverage</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Industrial</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Factories & plants</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Residential</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Homes & apartments</p>
            </div>
          </motion.div>

          {/* Additional Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-200 dark:border-blue-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call Us Directly</h3>
              <p className="text-gray-600 dark:text-gray-300">+91 9667846784</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Sat, 9AM-6PM</p>
              <a 
                href="tel:+919667846784"
                className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Call Now
              </a>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-green-200 dark:border-green-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-300">saanayoelectricindustries@gmail.com</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">24-hour response</p>
              <a 
                href="mailto:saanayoelectricindustries@gmail.com"
                className="inline-block mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Email Now
              </a>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-purple-200 dark:border-purple-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Site Survey</h3>
              <p className="text-gray-600 dark:text-gray-300">Free Professional Assessment</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Book your slot</p>
              <a 
                href="https://wa.me/919667846784?text=Hi, I'd like to book a free site survey for earthing installation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Book Survey
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}