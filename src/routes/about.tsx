import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, MessageCircle, ShieldCheck, Award, Briefcase, Users, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title: 'About SmythWorld IT Solutions | Certified IT & Digital Agency Alipurduar',
      },
      {
        name: 'description',
        content: 'Meet SmythWorld IT Solutions in Kalchini, Alipurduar. Backed by expert certifications from Cisco, CompTIA, and Microsoft, we provide trusted IT support, custom computer sales, CCTV setups, and high-ROI digital marketing across North Bengal.',
      },
      {
        name: 'keywords',
        content: 'About SmythWorld IT Solutions, IT Support Engineer Alipurduar, Computer hardware shop Kalchini, Best digital marketing agency Dooars, Cisco certified network engineer West Bengal, CCTV camera installation Alipurduar, Refurbished laptops North Bengal',
      },
      // Open Graph / Facebook Meta Tags for Social SEO
      {
        property: 'og:title',
        content: 'About SmythWorld IT Solutions | Certified IT & Digital Agency Alipurduar',
      },
      {
        property: 'og:description',
        content: 'Professional IT support engineering, computer sales, CCTV surveillance, and digital growth solutions in Alipurduar, West Bengal.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "SmythWorld IT Solutions",
          "description": "Expert desktop support, custom computer sales, certified refurbished laptops, professional CCTV installation, and high-ROI Google & Meta ad management.",
          "url": "https://smythworld.netlify.app/about",
          "telephone": "+919635471621",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kalchini",
            "addressLocality": "Alipurduar",
            "addressRegion": "West Bengal",
            "postalCode": "735217",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.6917", 
            "longitude": "89.4683"
          },
          "areaServed": [
            {"@type": "Place", "name": "Alipurduar"},
            {"@type": "Place", "name": "Kalchini"},
            {"@type": "Place", "name": "Hasimara"},
            {"@type": "Place", "name": "Jaigaon"},
            {"@type": "Place", "name": "Dooars"},
            {"@type": "Place", "name": "North Bengal"}
          ],
          "sameAs": [
            "https://www.facebook.com",
            "https://www.youtube.com"
          ]
        })
      }
    ],
  }),
})

function AboutPage() {
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
              href="https://wa.me/919635471621?text=Hi!%20I%20read%20your%20About%20page%20and%20wanted%20to%20consult%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Free Consultation
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-corporate">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-slate-700 bg-corporate-light text-slate-300 font-medium text-sm flex items-center gap-2 mx-auto w-fit">
              <ShieldCheck className="w-4 h-4 text-accent" /> Trusted Local IT Partners
            </div>
            {/* H1 Title: Targeted for core regional keywords */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">IT Support & Digital Agency</span> in Alipurduar
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
              SmythWorld IT Solutions bridges the gap between complex enterprise technology and local businesses. Operating out of Kalchini, we deliver dependable technical field engineering, advanced networking setups, premium computer sales, and high-impact digital marketing solutions.
            </p>
          </div>
        </section>

        {/* Professional Trust Indicators */}
        <section className="py-16 bg-corporate-dark border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800 text-center">
                <Award className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Industry Certified</h3>
                <p className="text-slate-400 text-sm">Our workflows strictly follow global frameworks set by Cisco, CompTIA, and Microsoft standard security practices.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800 text-center">
                <Briefcase className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Enterprise-Grade Support</h3>
                <p className="text-slate-400 text-sm">Deep hands-on experience in desktop field engineering, network diagnostics, and corporate infrastructure upkeep.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800 text-center">
                <Users className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Local Commitment</h3>
                <p className="text-slate-400 text-sm">Proudly serving local businesses, schools, retail shops, and homeowners across Kalchini, Hasimara, and the Dooars belt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Methodology Section */}
        <section className="py-24 bg-corporate">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Alipurduar Businesses Trust SmythWorld</h2>
                <p className="text-slate-400 leading-relaxed mb-6">
                  We don't believe in temporary, quick-fix adjustments. Whether configuring secure POP3/IMAP/SMTP email client setups, running advanced Windows CMD systems diagnostics, or assembling high-performance custom computer builds, we follow rigorous architectural blueprints.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Our comprehensive product inventory matches our technical capabilities. From supplying top-tier branded computers and multi-function laser printers to offering strictly tested, certified refurbished laptops, we maintain budget-friendly premium quality.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-corporate-light p-6 rounded-2xl border border-slate-800 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Standardized Engineering Checklists</h4>
                    <p className="text-slate-400 text-sm">System administration, network routing, and smart CCTV camera architecture are handled by certified technology professionals.</p>
                  </div>
                </div>
                <div className="bg-corporate-light p-6 rounded-2xl border border-slate-800 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">All-In-One Technical Center</h4>
                    <p className="text-slate-400 text-sm">Get website design, paid lead generation ads (Google & Meta), hardware repairs, and genuine computer accessories under one unified umbrella.</p>
                  </div>
                </div>
                <div className="bg-corporate-light p-6 rounded-2xl border border-slate-800 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-1">Data-Backed Growth Results</h4>
                    <p className="text-slate-400 text-sm">Our social media marketing and brand promotion blueprints use advanced platform metrics to scale organic reach on Facebook and YouTube.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919635471621?text=Hi!%20I%20have%20an%20inquiry%20about%20your%20IT%20or%20Digital%20services."
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
