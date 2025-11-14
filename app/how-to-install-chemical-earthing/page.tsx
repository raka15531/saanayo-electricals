import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Install Chemical Earthing: Step-by-Step Guide 2024',
  description: '✅ Complete step-by-step guide: How to install chemical earthing system properly. DIY installation guide with safety precautions and best practices.',
  keywords: 'how to install chemical earthing, chemical earthing installation, earthing installation guide, chemical earthing steps, earthing installation process',
}

export default function ChemicalEarthingInstallationPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            How to Install Chemical Earthing
          </h1>
          <p className="text-xl text-center mb-8 max-w-3xl mx-auto">
            ✅ Complete step-by-step installation guide with safety precautions
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Safety Warning */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-900 mb-3">⚠️ Safety First</h3>
            <p className="text-red-700">
              Electrical work can be dangerous. We recommend hiring professional electricians for earthing installation. This guide is for informational purposes only.
            </p>
          </div>

          {/* Installation Steps */}
          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Site Selection & Preparation',
                description: 'Choose a location away from building foundations and underground utilities. Clear the area of debris and mark the installation spot.',
                tips: ['Select moist soil area if possible', 'Keep 2m distance from buildings', 'Check for underground cables/pipes']
              },
              {
                step: '2',
                title: 'Digging the Pit',
                description: 'Excavate a pit 3-4 feet deep and 1 foot in diameter. The depth may vary based on soil resistivity.',
                tips: ['Use proper digging tools', 'Maintain vertical walls', 'Remove stones and debris']
              },
              {
                step: '3',
                title: 'Electrode Installation',
                description: 'Place the chemical earthing electrode vertically in the center of the pit. Ensure it stands straight.',
                tips: ['Handle electrode carefully', 'Use level for vertical alignment', 'Secure with temporary support']
              },
              {
                step: '4',
                title: 'Backfill Process',
                description: 'Pour the special conductive compound around the electrode. Add water as per manufacturer instructions and mix properly.',
                tips: ['Use recommended compound', 'Mix thoroughly with soil', 'Maintain proper moisture']
              },
              {
                step: '5',
                title: 'Connection & Testing',
                description: 'Connect the earthing wire to the electrode using proper clamps. Test the resistance using earth tester.',
                tips: ['Use copper clamps', 'Ensure tight connections', 'Test resistance (<1 ohm ideal)']
              },
              {
                step: '6',
                title: 'Final Backfilling',
                description: 'Fill the remaining pit with soil and compact properly. Mark the location for future reference.',
                tips: ['Compact soil layers', 'Create access chamber', 'Mark location clearly']
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">💡 Pro Tips:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {item.tips.map((tip, tipIndex) => (
                          <li key={tipIndex}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools Required */}
          <div className="mt-12 bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools & Materials Required</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Digging tools (shovel, spade)',
                    'Earth resistance tester',
                    'Measuring tape',
                    'Level instrument',
                    'Safety equipment',
                    'Mixing container',
                  ].map((tool, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">🔧</span>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Materials</h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Chemical earthing electrode',
                    'Conductive compound',
                    'Copper earthing wire',
                    'Earthing clamps',
                    'Bentonite compound',
                    'Water for mixing',
                  ].map((material, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-blue-500 mr-2">📦</span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Help */}
          <div className="mt-8 text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Professional Installation?</h3>
              <p className="text-gray-700 mb-6">
                Our certified technicians can install your chemical earthing system with proper testing and certification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919667846784" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  📞 Call for Installation
                </a>
                <Link href="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  🗓️ Schedule Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}