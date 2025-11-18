export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                At Saanayo Electricals, we collect information to provide better services to all our customers. 
                The types of personal information we collect include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contact Information:</strong> Name, email address, phone number, business address</li>
                <li><strong>Business Information:</strong> Company name, industry type, project requirements</li>
                <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
                <li><strong>Communication Data:</strong> Messages, inquiries, and feedback you send us</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and maintain our electrical products and services</li>
                <li>To process your inquiries and provide customer support</li>
                <li>To send technical specifications, quotes, and product information</li>
                <li>To improve our website and services based on your feedback</li>
                <li>To comply with legal obligations and industry standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Trusted partners who assist in website operation and business activities</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with any merger or sale of company assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct or update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Request transfer of your data to another organization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
              <p className="mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and understand where our visitors come from.
              </p>
              <p>
                You can control cookies through your browser settings. However, disabling cookies may affect 
                your experience on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Links</h2>
              <p>
                Our website may contain links to other sites that are not operated by us. We are not responsible 
                for the content or privacy practices of these third-party sites. We encourage you to review the 
                privacy policy of every site you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children. If you are a parent or guardian and believe your child has 
                provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="mb-2">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Saanayo Electricals</strong></p>
                <p>📞 Phone: +91 9667846784</p>
                <p>📧 Email: [Your Email Address]</p>
                <p>📍 Address: Faridabad, Haryana, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}