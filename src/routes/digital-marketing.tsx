import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Check, MessageCircle, Megaphone, TrendingUp, Users, Share2 } from 'lucide-react'

export const Route = createFileRoute('/digital-marketing')({
  component: DigitalMarketingPage,
  head: () => ({
    meta: [
      {
        title: 'Digital Marketing & Social Media Management | SmythWorld',
      },
      {
        name: 'description',
        content: 'Grow your brand with strategic social media management, content creation, and organic audience engagement in Alipurduar, Kalchini, and North Bengal.',
      },
      {
        name: 'keywords',
        content: 'Digital Marketing Alipurduar, Social Media Management Kalchini, Brand promotion Dooars, Facebook marketing, YouTube content strategy, SmythWorld IT Solutions',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Marketing Services",
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
          "description": "Strategic digital marketing and social media management designed to grow your brand's online presence."
        })
      }
    ],
  }),
})

function DigitalMarketingPage() {
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
              href="https://wa.me/919635471621?text=Hi!%20I%20want%20to%20grow%20my%20business%20with%20Digital%20Marketing."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Start Growing
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-corporate">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 font-medium text-sm flex items-center gap-2 mx-auto w-fit">
              <Megaphone className="w-4 h-4" /> Amplify Your Voice
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent">Brand Growth</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
              Transform your online presence. We craft engaging content, manage your social media channels, and build loyal communities that turn followers into paying customers across North Bengal.
            </p>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 bg-corporate-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Share2 className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Social Media Management</h3>
                <p className="text-slate-400 text-sm">Consistent, high-quality posting schedules for Instagram, Facebook, and LinkedIn.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Users className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Community Engagement</h3>
                <p className="text-slate-400 text-sm">Active response management and audience interaction to build a loyal local customer base.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Growth Analytics</h3>
                <p className="text-slate-400 text-sm">Data-driven strategies and monthly reporting to track your brand's digital expansion.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-24 bg-corporate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketing Packages</h2>
              <div className="w-20 h-1 bg-purple-400 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400">Choose the perfect tier to match your brand's ambitions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Starter Package */}
              <div className="bg-corporate-light rounded-3xl p-8 border border-slate-700 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Social Essentials</h3>
                  <p className="text-slate-400 text-sm mb-4">Perfect for establishing a professional online baseline.</p>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {[
                    "Profile Setup & Optimization",
                    "3 High-Quality Posts Per Week",
                    "Basic Graphic Design",
                    "Monthly Content Calendar",
                    "Facebook & Instagram Focus",
                    "Standard Analytics Report"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-slate-700 pt-6">
                  <a 
                    href="https://wa.me/919635471621?text=I%20am%20interested%20in%20the%20Social%20Essentials%20Marketing%20Package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 rounded-xl transition-colors"
                  >
                    Select Essentials
                  </a>
                </div>
              </div>

              {/* Dominance Package */}
              <div className="bg-corporate-dark rounded-3xl p-8 border-2 border-purple-400 relative flex flex-col shadow-2xl shadow-purple-500/10 transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-400 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Maximum Impact
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Brand Dominance Pro</h3>
                  <p className="text-slate-400 text-sm mb-4">Aggressive growth strategies for market leaders.</p>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {[
                    "5-7 Premium Posts Per Week",
                    "Reels & Short Video Editing",
                    "Advanced Graphic & Carousel Design",
                    "Proactive Community Engagement",
                    "Competitor Analysis Strategy",
                    "Multi-Platform (FB, IG, LinkedIn, YT)",
                    "Comprehensive ROI & Growth Reporting"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-slate-700 pt-6">
                  <a 
                    href="https://wa.me/919635471621?text=I%20want%20to%20dominate%20my%20market%20with%20the%20Brand%20Dominance%20Pro%20Package."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-purple-500/20"
                  >
                    Select Brand Dominance
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919635471621?text=Hi!%20I%20have%20a%20question%20about%20your%20Digital%20Marketing%20services."
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
