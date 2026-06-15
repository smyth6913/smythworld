import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Check, MessageCircle, Wrench, Server, Shield, Terminal } from 'lucide-react'

export const Route = createFileRoute('/it-support')({
  component: ITSupportPage,
  head: () => ({
    meta: [
      {
        title: 'Professional IT Support & Desktop Services | SmythWorld Alipurduar',
      },
      {
        name: 'description',
        content: 'Expert desktop support, network troubleshooting, and IT infrastructure maintenance in Kalchini and Alipurduar. Certified technicians for your business.',
      },
      {
        name: 'keywords',
        content: 'IT Support Alipurduar, Desktop Support Engineer Kalchini, Network troubleshooting Dooars, Computer AMC services North Bengal, Windows server support, Email configuration',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "IT Support & Desktop Services",
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
          "areaServed": ["Alipurduar", "Kalchini", "Hasimara", "Birpara", "North Bengal"],
          "description": "Proactive desktop support, advanced network diagnostics, and enterprise IT infrastructure maintenance."
        })
      }
    ],
  }),
})

function ITSupportPage() {
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
              href="https://wa.me/919635471621?text=Hi!%20I%20need%20IT%20Support%20services%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Request Support
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-corporate">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-medium text-sm flex items-center gap-2 mx-auto w-fit">
              <Wrench className="w-4 h-4" /> Enterprise-Grade Reliability
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Proactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">IT Support</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
              Minimize downtime and maximize productivity. We provide expert desktop support, network configuration, and infrastructure management backed by CompTIA, Cisco, and Microsoft standard practices.
            </p>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 bg-corporate-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Terminal className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Advanced Diagnostics</h3>
                <p className="text-slate-400 text-sm">Deep system troubleshooting utilizing Windows CMD, remote desktop tools, and performance monitoring.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Server className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Network & Email Config</h3>
                <p className="text-slate-400 text-sm">Seamless management of local networks and secure email protocols including POP3, IMAP, and SMTP.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Shield className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Preventative Maintenance</h3>
                <p className="text-slate-400 text-sm">Regular software updates, hardware health checks, and data backup solutions to prevent failures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-24 bg-corporate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">IT Support Packages</h2>
              <div className="w-20 h-1 bg-blue-400 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400">Flexible service plans tailored to keep your business running smoothly.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Remote Assistance Plan */}
              <div className="bg-corporate-light rounded-3xl p-8 border border-slate-700 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Remote Desktop Support</h3>
                  <p className="text-slate-400 text-sm mb-4">Fast, on-demand help for software and configuration issues.</p>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {[
                    "Instant Remote Troubleshooting",
                    "Email Client Setup (Outlook/Thunderbird)",
                    "Software Installation & Updates",
                    "Virus & Malware Removal",
                    "Printer & Peripheral Configuration",
                    "Operating System Optimization"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-slate-700 pt-6">
                  <a 
                    href="https://wa.me/919635471621?text=I%20need%20Remote%20IT%20Support%20assistance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 rounded-xl transition-colors"
                  >
                    Get Remote Support
                  </a>
                </div>
              </div>

              {/* Comprehensive AMC Plan */}
              <div className="bg-corporate-dark rounded-3xl p-8 border-2 border-blue-400 relative flex flex-col shadow-2xl shadow-blue-500/10 transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-400 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended for Businesses
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Annual Maintenance Contract (AMC)</h3>
                  <p className="text-slate-400 text-sm mb-4">Complete peace of mind with scheduled on-site maintenance.</p>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {[
                    "Routine On-Site Hardware Checks",
                    "Priority Emergency Dispatch",
                    "Local Area Network (LAN) Management",
                    "Router & Switch Configuration",
                    "Data Backup & Recovery Planning",
                    "Hardware Upgrades & Replacements",
                    "Unlimited Remote Support Consultations"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-slate-700 pt-6">
                  <a 
                    href="https://wa.me/919635471621?text=I%20would%20like%20a%20quote%20for%20an%20IT%20Support%20AMC%20contract."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-blue-500/20"
                  >
                    Discuss AMC Pricing
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919635471621?text=Hi!%20I%20have%20an%20IT%20Support%20inquiry."
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
