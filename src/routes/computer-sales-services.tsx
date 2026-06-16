import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Check, MessageCircle, Laptop, Cpu, Settings, ShoppingBag, Printer, Monitor, RefreshCw } from 'lucide-react'

export const Route = createFileRoute('/computer-sales-services')({
  component: ComputerSalesServicesPage,
  head: () => ({
    meta: [
      {
        title: 'Computer Sales, Laptops, Accessories & Refurbished Tech | SmythWorld',
      },
      {
        name: 'description',
        content: 'Premium branded computer setups, laptops, genuine accessories, parts, and printers in Alipurduar. Proudly offering high-quality certified refurbished products at budget-friendly prices.',
      },
      {
        name: 'keywords',
        content: 'Computer sales Alipurduar, Laptop shop Kalchini, Computer parts Dooars, Printer repair North Bengal, Refurbished laptops Alipurduar, Second hand computers, PC accessories shop',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Computer Sales, Hardware & Repair Services",
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
          "areaServed": ["Alipurduar", "Kalchini", "Hasimara", "Hamiltonganj", "North Bengal"],
          "description": "Branded desktop setups, laptops, printers, genuine computer accessories, core components, and premium certified refurbished electronics with warranty."
        })
      }
    ],
  }),
})

function ComputerSalesServicesPage() {
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
              href="https://wa.me/919635471621?text=Hi!%20I%20am%20interested%20in%20buying%20computers,%20laptops,%20accessories,%20or%20refurbished%20items."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Check Availability
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-corporate">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-medium text-sm flex items-center gap-2 mx-auto w-fit">
              <ShoppingBag className="w-4 h-4" /> Comprehensive IT Hardware Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-accent">Computer Inventory</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
              Your comprehensive local destination for top-brand laptops, complete desktop setups, official printers, and high-quality parts. Looking for incredible value? Explore our strictly tested, certified refurbished inventory.
            </p>
          </div>
        </section>

        {/* Catalog Categories */}
        <section className="py-16 bg-corporate-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">What We Offer</h2>
              <p className="text-slate-400 text-sm mt-2">Explore our extensive range of products tailored for home, business, and enterprise environments.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-corporate-light p-6 rounded-2xl border border-slate-800 text-center">
                <Monitor className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">Full Setups</h4>
                <p className="text-slate-400 text-xs">Complete branded & custom desktop computers.</p>
              </div>
              <div className="bg-corporate-light p-6 rounded-2xl border border-slate-800 text-center">
                <Laptop className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">Laptops</h4>
                <p className="text-slate-400 text-xs">Premium slim notebooks, business laptops & gaming rigs.</p>
              </div>
              <div className="bg-corporate-light p-6 rounded-2xl border border-slate-800 text-center">
                <Cpu className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">Parts & Tools</h4>
                <p className="text-slate-400 text-xs">Core components like SSDs, RAM, CPUs, and motherboards.</p>
              </div>
              <div className="bg-corporate-light p-6 rounded-2xl border border-slate-800 text-center">
                <Printer className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-1">Printers</h4>
                <p className="text-slate-400 text-xs">Laser, Ink Tank, and multi-function printers.</p>
              </div>
              <div className="bg-corporate-light p-6 rounded-2xl border border-slate-800 text-center border-emerald-500/30 bg-emerald-500/5">
                <RefreshCw className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <h4 className="font-bold text-emerald-400 mb-1">Refurbished</h4>
                <p className="text-slate-400 text-xs">Certified, rigorously tested devices at a fraction of the cost.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Catalog Details */}
        <section className="py-24 bg-corporate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Category Breakdown</h2>
              <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full mb-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Brand New Systems & Printers */}
              <div className="bg-corporate-light rounded-3xl p-8 border border-slate-700 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-cyan-400" /> Complete Systems & Printers
                </h3>
                <p className="text-slate-400 text-xs mb-6">Brand new retail products with original manufacturer warranties.</p>
                <div className="space-y-4 flex-grow">
                  {[
                    "All Branded Total Computer Setups (HP, Dell, Lenovo)",
                    "Latest Laptops for Work, Analytics, and Gaming",
                    "Single & Multi-function Ink Tank/Laser Printers",
                    "High-Resolution Office and Professional Monitors",
                    "Branded All-In-One (AIO) Systems"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accessories & Core Parts */}
              <div className="bg-corporate-light rounded-3xl p-8 border border-slate-700 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-cyan-400" /> Accessories & Core Parts
                </h3>
                <p className="text-slate-400 text-xs mb-6">Genuine add-ons and components to upgrade or build computers.</p>
                <div className="space-y-4 flex-grow">
                  {[
                    "High-Speed Storage Upgrades (SATA, NVMe M.2 SSDs)",
                    "DDR4 & DDR5 Performance RAM Modules",
                    "Premium Keyboards, Wireless Mice, and Tech Audio",
                    "Routers, Network Switches, and LAN Cables",
                    "Power Supplies (SMPS), Cabinet Cases, and UPS Systems"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certified Refurbished Inventory */}
              <div className="bg-corporate-dark rounded-3xl p-8 border-2 border-emerald-400 relative flex flex-col shadow-2xl shadow-emerald-500/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Unbeatable Budget Deals
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-emerald-400" /> Certified Refurbished
                </h3>
                <p className="text-slate-400 text-xs mb-6">Rigorous diagnostic checks with physical restoration and verified performance mapping.</p>
                <div className="space-y-4 flex-grow">
                  {[
                    "Premium Refurbished Laptops (ThinkPad, Latitude, EliteBook series)",
                    "Budget-Friendly Complete Desktop Sets",
                    "Eco-Friendly and Fully Repaired Enterprise Tech",
                    "Passed Comprehensive 30+ Point Diagnostics Checks",
                    "Includes Direct Seller Testing Warranty"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span className="text-white text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct Consultation / Bottom CTA */}
            <div className="mt-16 text-center max-w-2xl mx-auto bg-corporate-light p-8 rounded-3xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-2">Looking for a Specific Model or Part?</h3>
              <p className="text-slate-400 text-sm mb-6">We maintain relationships with distributors across West Bengal to quickly source exact configurations, custom components, or batch orders for local businesses.</p>
              <a 
                href="https://wa.me/919635471621?text=Hi!%20I%20am%20inquiring%20about%20a%20specific%20hardware%20model/accessory."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-8 py-3 rounded-xl transition-colors shadow-lg shadow-cyan-500/20"
              >
                Send Us Your Requirements
              </a>
            </div>

          </div>
        </section>

        {/* Technical Support & Repairs Subsection */}
        <section className="py-16 bg-corporate-dark border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Settings className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Full Hardware Support Included</h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              We don't just hand over a box. SmythWorld provides comprehensive chip-level troubleshooting, professional system cleaning, OS installations, component swap upgrades, and warranty routing tracking for peace of mind.
            </p>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919635471621?text=Hi!%20I%20have%20an%20inquiry%20about%20Computer%20Sales%20or%20Services."
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
