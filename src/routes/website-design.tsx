import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Check, MessageCircle, MonitorSmartphone, Zap, Search, Shield } from 'lucide-react'

export const Route = createFileRoute('/website-design')({
  component: WebsiteDesignPage,
  head: () => ({
    meta: [
      {
        title: 'Website Design Services in Alipurduar & Kalchini | SmythWorld',
      },
      {
        name: 'description',
        content: 'Professional website design and development services in Alipurduar, Kalchini, and North Bengal. Choose from Starter to Enterprise plans with SEO, mobile optimization, and SSL included.',
      },
      {
        name: 'keywords',
        content: 'Website design Alipurduar, Web development Kalchini, E-commerce website North Bengal, SmythWorld IT Solutions, Web designer near me, Dooars web design',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Professional Website Design",
          "provider": {
            "@type": "LocalBusiness",
            "name": "SmythWorld IT Solutions",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Kalchini",
              "addressLocality": "Alipurduar",
              "addressRegion": "WB",
              "postalCode": "735217",
              "addressCountry": "IN"
            }
          },
          "areaServed": ["Alipurduar", "Kalchini", "Jalpaiguri", "North Bengal"],
          "description": "Custom, responsive website design and development tailored for small businesses and growing brands.",
          "offers": [
            {
              "@type": "Offer",
              "name": "Starter Growth Plan",
              "price": "10999",
              "priceCurrency": "INR",
              "description": "Ideal for Small Businesses & Portfolios. Up to 5 Pages."
            },
            {
              "@type": "Offer",
              "name": "Enterprise Pro Plan",
              "price": "18999",
              "priceCurrency": "INR",
              "description": "Ideal for Growing Brands & E-commerce. Up to 15 Pages."
            }
          ]
        })
      }
    ],
  }),
})

function WebsiteDesignPage() {
  return (
    <div className="flex flex-col min-h-screen bg-corporate-dark text-slate-50 font-sans">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-corporate/90 backdrop-blur-md border-b border-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2 text-slate-300 hover:text-accent transition-colors group">
              <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <a 
              href="https://wa.me/919635471621?text=Hi!%20I%20am%20interested%20in%20your%20Website%20Design%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Let's Chat
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-corporate">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-sm">
              Digital Excellence for Your Business
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Website Design</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
              We build blazing-fast, visually stunning, and highly optimized websites designed to turn your visitors into paying customers. Dominate the local market in North Bengal with a world-class digital storefront.
            </p>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 bg-corporate-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <MonitorSmartphone className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">100% Responsive</h3>
                <p className="text-slate-400 text-sm">Flawless design across mobile phones, tablets, and desktop computers.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Search className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">SEO Optimized</h3>
                <p className="text-slate-400 text-sm">Built from the ground up to rank higher on Google search results.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Zap className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                <p className="text-slate-400 text-sm">Optimized loading speeds to reduce bounce rates and improve user experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-24 bg-corporate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing Plans</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400">Choose the perfect tier to match your business goals.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Starter Growth Plan */}
              <div className="bg-corporate-light rounded-3xl p-8 border border-slate-700 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Starter Growth Plan</h3>
                  <p className="text-slate-400 text-sm mb-4">Ideal for Small Businesses & Portfolios</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">₹10,999</span>
                  </div>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {[
                    "Up to 5 Pages Included",
                    "Responsive & Modern Design",
                    "Mobile Optimization Included",
                    "Basic On-Page SEO",
                    "Contact Forms Included",
                    "Social Media Integration",
                    "SSL Certificate Included",
                    "Standard Speed Optimization",
                    "1 Month Maintenance Support"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-slate-700 pt-6">
                  <p className="text-slate-400 text-sm mb-4 text-center">Annual Renewal: ₹1,999</p>
                  <a 
                    href="https://wa.me/919635471621?text=I%20would%20like%20to%20start%20with%20the%20Starter%20Growth%20Plan%20for%20₹10,999."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 rounded-xl transition-colors"
                  >
                    Select Starter Plan
                  </a>
                </div>
              </div>

              {/* Enterprise Pro Plan */}
              <div className="bg-corporate-dark rounded-3xl p-8 border-2 border-accent relative flex flex-col shadow-2xl shadow-accent/10 transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise Pro Plan</h3>
                  <p className="text-slate-400 text-sm mb-4">Ideal for Growing Brands & E-commerce</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">₹18,999</span>
                  </div>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {[
                    "Up to 15 Pages Included",
                    "Custom Premium Design",
                    "Advanced Mobile Optimization",
                    "Advanced SEO Setup",
                    "Lead Integration Contact Forms",
                    "Social Media Feed Integration",
                    "SSL Certificate Included",
                    "High-Performance Speed",
                    "3 Months Maintenance Support"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-slate-700 pt-6">
                  <p className="text-slate-400 text-sm mb-4 text-center">Annual Renewal: ₹1,999</p>
                  <a 
                    href="https://wa.me/919635471621?text=I%20would%20like%20to%20start%20with%20the%20Enterprise%20Pro%20Plan%20for%20₹18,999."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-accent hover:bg-accent-hover text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-accent/20"
                  >
                    Select Enterprise Plan
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919635471621?text=Hi!%20I%20have%20a%20question%20about%20your%20Website%20Design%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-all transform hover:scale-110 cursor-pointer"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Simplified Footer */}
      <footer className="bg-corporate border-t border-slate-800 py-8 text-center">
        <p className="text-slate-500 text-sm">
          &copy; 2026 SmythWorld IT Solutions. All rights reserved. | Alipurduar, West Bengal
        </p>
      </footer>
    </div>
  )
}
