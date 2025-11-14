'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Download, RefreshCw, Sparkles } from 'lucide-react'

export default function Generator() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [error, setError] = useState('')
  const [imageSize, setImageSize] = useState('512x512')

  const samplePrompts = [
    'Electrical earthing system installation at industrial plant with copper rods and safety equipment',
    'Copper bonded rods for electrical grounding system with detailed connections',
    'Lightning protection system installation on building rooftop with arresters',
    'Modern electrical panel with safety equipment and wiring diagram',
    'Surge protection device installation in industrial setting'
  ]

  // Function to generate image using a free AI API
  const generateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a description for the image')
      return
    }

    setIsGenerating(true)
    setError('')
    
    try {
      // Using Hugging Face's stable diffusion (free tier)
      const response = await fetch(
        'https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5',
        {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer your_huggingface_token_here', // You need to get a free token
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: prompt,
            parameters: {
              width: parseInt(imageSize.split('x')[0]),
              height: parseInt(imageSize.split('x')[1]),
            }
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Failed to generate image. Please try again.')
      }

      const blob = await response.blob()
      const imageUrl = URL.createObjectURL(blob)
      setGeneratedImage(imageUrl)
      
    } catch (err) {
      console.error('Image generation error:', err)
      
      // Fallback: Use a placeholder service for demo
      try {
        const fallbackResponse = await fetch(`/api/placeholder?text=${encodeURIComponent(prompt)}&size=${imageSize}`)
        if (fallbackResponse.ok) {
          setGeneratedImage(`/api/placeholder?text=${encodeURIComponent(prompt)}&size=${imageSize}`)
        } else {
          throw new Error('Image generation service unavailable')
        }
      } catch (fallbackErr) {
        setError('Image generation service is currently unavailable. Please try again later.')
      }
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = `saanayo-electrical-${prompt.slice(0, 20).replace(/\s+/g, '-')}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const useSamplePrompt = (sample: string) => {
    setPrompt(sample)
    setError('')
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-purple-900/20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-4">
              <Sparkles className="w-12 h-12 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              AI Image Generator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Generate custom images of electrical safety products and installations using AI
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Describe the electrical safety image you want:
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Example: Electrical earthing system installation at industrial plant with copper rods, safety equipment, and proper grounding..."
                  rows={6}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-all duration-300"
                />
              </div>

              {/* Image Size Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Image Size:
                </label>
                <div className="flex flex-wrap gap-3">
                  {['512x512', '768x768', '1024x1024'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setImageSize(size)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        imageSize === size
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sample Prompts */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                <h3 className="text-sm font-medium text-blue-900 dark:text-blue-400 mb-3">
                  Try these sample prompts:
                </h3>
                <div className="space-y-2">
                  {samplePrompts.map((sample, index) => (
                    <button
                      key={index}
                      onClick={() => useSamplePrompt(sample)}
                      className="w-full text-left p-3 bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg text-sm text-gray-600 dark:text-gray-300 transition-all duration-300 hover:shadow-md"
                    >
                      {sample}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={generateImage}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-purple-400 disabled:to-blue-400 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-3 shadow-lg"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Generating Image...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Generate Image</span>
                  </>
                )}
              </button>

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4"
                >
                  <p className="text-red-800 dark:text-red-400 text-sm">
                    {error}
                  </p>
                  <p className="text-red-700 dark:text-red-500 text-xs mt-2">
                    Note: For full functionality, you need to add a free Hugging Face token in the code.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                {generatedImage ? (
                  <div className="text-center w-full">
                    <div className="relative inline-block">
                      <img
                        src={generatedImage}
                        alt="Generated electrical safety product"
                        className="w-full max-w-md h-auto rounded-lg shadow-2xl mx-auto"
                      />
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Generated
                      </div>
                    </div>
                    <div className="flex space-x-3 justify-center mt-6">
                      <button
                        onClick={downloadImage}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 shadow-lg"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                      <button
                        onClick={() => {
                          setGeneratedImage(null)
                          setPrompt('')
                        }}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Generate New
                      </button>
                    </div>
                  </div>
                ) : isGenerating ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      AI is creating your image...
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                      This may take 10-30 seconds
                    </p>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="text-6xl mb-4">🖼️</div>
                    <p className="font-medium mb-2">Your generated image will appear here</p>
                    <p className="text-sm">Describe what you want to see and click generate</p>
                  </div>
                )}
              </div>

              {/* Features & Instructions */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span>How to get the best results:</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Be specific about the electrical product or system</li>
                  <li>• Mention the environment (industrial, residential, etc.)</li>
                  <li>• Include details about materials (copper, GI, etc.)</li>
                  <li>• Describe the installation context</li>
                  <li>• Add safety equipment details if relevant</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Setup Instructions */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-400 mb-4">
              Setup Instructions for Full Functionality
            </h3>
            <div className="text-blue-800 dark:text-blue-300 text-sm space-y-3">
              <p>To enable real AI image generation:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Get a free API token from Hugging Face</li>
                <li>Replace 'your_huggingface_token_here' with your actual token</li>
                <li>The free tier includes generous usage limits</li>
                <li>Currently using placeholder service for demo</li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}