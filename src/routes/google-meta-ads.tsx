import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Check, MessageCircle, Target, MousePointerClick, TrendingUp, BarChart } from 'lucide-react'

export const Route = createFileRoute('/google-meta-ads')({
  component: GoogleMetaAdsPage,
  head: () => ({
    meta: [
      {
        title: 'Google Ads & Meta Ads Management | SmythWorld Alipurduar',
      },
      {
        name: 'description',
        content: 'High-converting Google Ads and Facebook/Meta Ads campaigns. Generate local leads, increase sales, and maximize ROI in Kalchini and North Bengal.',
      },
      {
        name: 'keywords',
        content: 'Google Ads management Alipurduar, Facebook Ads expert Kalchini, PPC agency North Bengal, Lead generation Dooars, Social media advertising, SmythWorld IT Solutions',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Paid Advertising (Google & Meta Ads)",
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
          "areaServed": ["Alipurduar", "Kalchini", "Jalpaiguri", "Siliguri", "North Bengal"],
          "description": "Data-driven Google Search, Display, and Meta (Facebook/Instagram) advertising campaigns tailored for high ROI and lead generation."
        })
      }
    ],
  }),
})

function GoogleMetaAdsPage() {
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
              href="https://wa.me/919635471621?text=Hi!%20I%20need%20help%20running%20profitable%20Google%20or%20Facebook%20Ads."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-accent/20 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Start Advertising
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-corporate">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium text-sm flex items-center gap-2 mx-auto w-fit">
              <Target className="w-4 h-4" /> High-ROI Lead Generation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Data-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-accent">Paid Ads</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
              Stop guessing and start growing. We build hyper-targeted Google and Meta advertising campaigns designed to drive local traffic, capture high-quality leads, and multiply your revenue.
            </p>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 bg-corporate-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <MousePointerClick className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Google Search Ads</h3>
                <p className="text-slate-400 text-sm">Capture customers at the exact moment they are searching for your products or services.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <Target className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Meta (Facebook/IG) Ads</h3>
                <p className="text-slate-400 text-sm">Visually stunning, highly-targeted social media campaigns to build awareness and generate leads.</p>
              </div>
              <div className="bg-corporate-light p-8 rounded-2xl border border-slate-800">
                <BarChart className="w-10 h-10 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Conversion Tracking</h3>
                <p className="text-slate-400 text-sm">Every click is measured. We install Facebook Pixels and Google Analytics to ensure maximum ROI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Offerings */}
        <section className="py-24 bg-corporate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ad Management Solutions</h2>
              <div className="w-20 h-1 bg-emerald-400 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400">Expert campaign management to ensure your ad spend turns into profit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Local Lead Generation */}
              <div className="bg-corporate-light rounded-3xl p-8 border border-slate-700 flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Local Lead Generation</h3>
                  <p className="text-slate-400 text-sm mb-4">Designed for service businesses needing direct customer inquiries.</p>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {[
                    "Campaign Strategy & Setup",
                    "Local Keyword Optimization",
                    "Geo-Targeting (Alipurduar & Surrounding)",
                    "Ad Copywriting & A/B Testing",
                    "Lead Form Setup (Meta & Google)",
                    "Monthly Performance Check-ins"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-slate-700 pt-6">
                  <a 
                    href="https://wa.me/919635471621?text=I%20am%20interested%20in%20Local%20Lead%20Generation%20Ads."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 rounded-xl transition-colors"
                  >
                    Get Leads Now
                  </a>
                </div>
              </div>

              {/* Aggressive Scaling Plan */}
              <div className="bg-corporate-dark rounded-3xl p-8 border-2 border-emerald-400 relative flex flex-col shadow-2xl shadow-emerald-500/10 transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-400 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Highest ROI
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">E-Commerce & Scaling</h3>
                  <p className="text-slate-400 text-sm mb-4">Advanced multi-channel funnels for growing brands and online stores.</p>
                </div>
                
                <div className="flex-grow space-y-4 mb-8">
                  {[
                    "Google Search, Display & YouTube Ads",
                    "Facebook & Instagram Retargeting Funnels",
                    "Advanced Pixel & Conversion API Setup",
                    "Dynamic Catalog Ads Setup",
                    "Competitor Traffic Interception",
                    "Custom Ad Creatives & Video Optimization",
                    "Weekly ROI & Scaling Reports"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-slate-700 pt-6">
                  <a 
                    href="https://wa.me/919635471621?text=I%20want%20to%20scale%20my%20business%20with%20advanced%20Ad%20campaigns."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
                  >
                    Scale My Business
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919635471621?text=Hi!%20I%20have%20questions%20about%20your%20Google%20and%20Meta%20Ads%20services."
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
