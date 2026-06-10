import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Check, MessageCircle, ShieldCheck, Video, Smartphone, Wifi } from 'lucide-react'

export const Route = createFileRoute('/cctv-solutions')({
  component: CCTVSolutionsPage,
  head: () => ({
    meta: [
      {
        title: 'CCTV Camera Installation & Security Solutions | SmythWorld Alipurduar',
      },
      {
        name: 'description',
        content: 'Expert CCTV installation, smart security surveillance, and remote monitoring setup for homes and businesses in Kalchini, Alipurduar, and North Bengal.',
      },
      {
        name: 'keywords',
        content: 'CCTV installation Alipurduar, Security cameras Kalchini, Hikvision dealer Dooars, CP Plus installation North Bengal, Home security systems, IP camera setup',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "CCTV & Security Solutions",
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
          "areaServed": ["Alipurduar", "Kalchini", "Hasimara", "Jaigaon", "North Bengal"],
          "description": "Professional CCTV camera installation, network video recording (NVR/DVR), and mobile surveillance setup."
        })
      }
    ],
  }),
})

function CCTVSolutionsPage() {
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
              href="https://wa.me/919635471621?text=Hi!%20I%20need%20a%20consultation%20for%20CCTV%20Installation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Get a Quote
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-corporate">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-medium text-sm flex items-center gap-2 mx-auto w-fit">
              <ShieldCheck className="w-4 h-4" /> Uncompromising Security
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-accent">CCTV Solutions</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
              Protect your home, office, or retail space with state-of-the-art surveillance systems. We provide expert installation, high-definition recording, and seamless mobile access across the Alipurduar district.
            </p>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 bg-corporate-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Video className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Crystal Clear HD</h3>
                <p className="text-slate-400 text-sm">High-resolution cameras with advanced night vision for 24/7 uncompromised clarity.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Smartphone className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Remote Mobile Viewing</h3>
                <p className="text-slate-400 text-sm">Monitor your property securely from anywhere in the world using your smartphone.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Wifi className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">IP & Wireless Setups</h3>
                <p className="text-slate-400 text-sm">Modern network-based security solutions ensuring stable connectivity and zero data loss.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-24 bg-corporate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Surveillance Packages</h2>
              <div className="w-20 h-1 bg-red-400 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400">Customized security solutions featuring top brands like CP Plus, Hikvision, and Dahua.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Home Security Setup */}
              <div className="bg-corporate-light rounded-3xl p-8 border border-slate-700 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Home Security Setup</h3>
                  <p className="text-slate-400 text-sm mb-4">Perfect for residential properties and small shops.</p>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {[
                    "4-Channel HD DVR Setup",
                    "Up to 4 HD Bullet/Dome Cameras",
                    "1TB Dedicated Surveillance Hard Drive",
                    "Standard Night Vision Support",
                    "Cabling and Conduit Installation",
                    "Smartphone App Configuration",
                    "1 Year Hardware Warranty"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-slate-700 pt-6">
                  <a 
                    href="https://wa.me/919635471621?text=I%20am%20interested%20in%20the%20Home%20Security%20CCTV%20Setup."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 rounded-xl transition-colors"
                  >
                    Request Estimate
                  </a>
                </div>
              </div>

              {/* Commercial IP Setup */}
              <div className="bg-corporate-dark rounded-3xl p-8 border-2 border-red-400 relative flex flex-col shadow-2xl shadow-red-500/10 transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-400 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Enterprise Grade
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Commercial IP Setup</h3>
                  <p className="text-slate-400 text-sm mb-4">Advanced surveillance for large retail, offices, and warehouses.</p>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {[
                    "8/16-Channel Advanced NVR Setup",
                    "High-Resolution IP PoE Cameras",
                    "2TB+ Surveillance Storage Array",
                    "Audio Recording Capabilities",
                    "Color Night Vision & Motion Alerts",
                    "Professional Rack & Network Setup",
                    "Multi-Device Remote Access",
                    "Priority Technical Support"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-slate-700 pt-6">
                  <a 
                    href="https://wa.me/919635471621?text=I%20need%20a%20custom%20quote%20for%20a%20Commercial%20IP%20CCTV%20Setup."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-red-500/20"
                  >
                    Get Custom Quote
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919635471621?text=Hi!%20I%20have%20a%20question%20about%20your%20CCTV%20services."
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
