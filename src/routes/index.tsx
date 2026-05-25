import { createFileRoute } from '@tanstack/react-router'
import {
  MonitorSmartphone,
  Megaphone,
  Target,
  Wrench,
  ShieldCheck,
  Cpu,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
  ChevronRight,
  Monitor
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formState }),
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error(error)
      alert("There was an error submitting the form.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      title: "Website Designing",
      description: "Creative, responsive, and SEO-optimized business websites.",
      icon: <MonitorSmartphone className="w-10 h-10 text-accent mb-4" />
    },
    {
      title: "Digital Marketing",
      description: "Strategic social media management, brand growth, and local SEO.",
      icon: <Megaphone className="w-10 h-10 text-accent mb-4" />
    },
    {
      title: "Google Ads & Meta Ads",
      description: "High-ROI paid advertising campaigns targeted to scale your sales.",
      icon: <Target className="w-10 h-10 text-accent mb-4" />
    },
    {
      title: "IT Support",
      description: "Proactive desktop support, network troubleshooting, and hardware maintenance.",
      icon: <Wrench className="w-10 h-10 text-accent mb-4" />
    },
    {
      title: "CCTV Solutions",
      description: "Smart security surveillance setup, installation, and remote monitoring.",
      icon: <ShieldCheck className="w-10 h-10 text-accent mb-4" />
    },
    {
      title: "Computer Sales & Services",
      description: "Reliable computer hardware sales, custom builds, and expert repair services.",
      icon: <Cpu className="w-10 h-10 text-accent mb-4" />
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-corporate/90 backdrop-blur-md border-b border-corporate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Monitor className="w-6 h-6 text-corporate-dark" />
              </div>
              <span className="text-xl font-bold tracking-tight">SmythWorld IT Solutions</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-white transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-accent/20 cursor-pointer"
              >
                Get Free Consultation
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-corporate border-b border-corporate-light">
            <div className="px-4 pt-2 pb-6 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-slate-300 hover:text-white py-2">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-slate-300 hover:text-white py-2">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-slate-300 hover:text-white py-2">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-slate-300 hover:text-white py-2">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-white px-6 py-3 rounded-lg font-medium w-full mt-2 cursor-pointer"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-sm">
              Alipurduar's Premier Tech Agency
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              SmythWorld IT Solutions <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                Your Trusted Technology Partner
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-12 leading-relaxed">
              Empowering businesses with top-tier IT support, digital marketing, and robust security solutions in Alipurduar & Beyond.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-medium transition-all transform hover:-translate-y-1 shadow-xl shadow-accent/20 flex items-center justify-center gap-2 text-lg cursor-pointer"
              >
                Start Your Project <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto bg-corporate-light hover:bg-slate-700 text-white px-8 py-4 rounded-full font-medium transition-all border border-slate-600 hover:border-slate-500 text-lg cursor-pointer"
              >
                Explore Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-corporate">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Comprehensive technology solutions designed to scale your business, secure your assets, and amplify your digital presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-corporate-light rounded-2xl p-8 border border-slate-700 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-corporate-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-square shadow-2xl border border-slate-800">
                  {/* High-quality tech-related placeholder imagery */}
                  <img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" 
                    alt="Tech professionals working" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-corporate/90 backdrop-blur p-4 rounded-xl border border-slate-700">
                      <p className="font-bold text-lg text-white">10+ Years of Excellence</p>
                      <p className="text-slate-300 text-sm">Serving the Alipurduar tech community</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About SmythWorld IT Solutions</h2>
                <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
                
                <div className="space-y-6 text-slate-300 text-lg">
                  <p>
                    At SmythWorld IT Solutions, we are more than just an IT service provider—we are your dedicated technology partners. Based in the heart of Kalchini, Alipurduar, we bring world-class tech solutions directly to local businesses.
                  </p>
                  <p>
                    Our team of certified experts is committed to delivering unparalleled reliability. From constructing robust IT infrastructure to executing high-converting digital marketing campaigns, we ensure your business stays ahead of the curve.
                  </p>
                  <ul className="space-y-4 mt-8">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">✓</div>
                      <span className="font-medium text-white">Certified Expert Technicians</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">✓</div>
                      <span className="font-medium text-white">Dedicated Local Customer Support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">✓</div>
                      <span className="font-medium text-white">End-to-End Technology Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-corporate relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Ready to transform your business? Reach out for a free consultation and let's build something great together.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 bg-corporate-dark p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl">
              {/* Left Column: Contact Form */}
              <div className="w-full lg:w-3/5">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                    <p className="text-slate-400 max-w-md">Your message has been sent successfully. We will get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-accent hover:text-accent-hover font-medium underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          value={formState.name}
                          onChange={handleFormChange}
                          className="w-full bg-corporate-light border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formState.email}
                          onChange={handleFormChange}
                          className="w-full bg-corporate-light border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formState.phone}
                          onChange={handleFormChange}
                          className="w-full bg-corporate-light border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-slate-300">Service Required</label>
                        <select 
                          id="service" 
                          name="service"
                          value={formState.service}
                          onChange={handleFormChange}
                          className="w-full bg-corporate-light border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                          required
                        >
                          <option value="" disabled>Select a service...</option>
                          <option value="website">Website Designing</option>
                          <option value="marketing">Digital Marketing</option>
                          <option value="ads">Google/Meta Ads</option>
                          <option value="it-support">IT Support</option>
                          <option value="cctv">CCTV Solutions</option>
                          <option value="hardware">Computer Sales & Repair</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-300">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        value={formState.message}
                        onChange={handleFormChange}
                        rows={4}
                        className="w-full bg-corporate-light border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your project or requirements..."
                        required
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent-hover disabled:opacity-50 text-white font-medium py-4 rounded-xl transition-colors shadow-lg shadow-accent/20 cursor-pointer"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Company Details & Map */}
              <div className="w-full lg:w-2/5 flex flex-col gap-8">
                <div className="space-y-6 bg-corporate-light p-6 rounded-2xl border border-slate-700">
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-corporate-dark flex items-center justify-center shrink-0 border border-slate-700">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Our Location</p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        SmythWorld IT Solutions<br />
                        Kalchini, Alipurduar<br />
                        West Bengal, Pin-735217
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-corporate-dark flex items-center justify-center shrink-0 border border-slate-700">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Phone Number</p>
                      <p className="text-slate-400 text-sm">+91 9635471621</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-corporate-dark flex items-center justify-center shrink-0 border border-slate-700">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Email Address</p>
                      <p className="text-slate-400 text-sm">smythworld96@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="flex-grow min-h-[200px] bg-slate-800 rounded-2xl overflow-hidden relative border border-slate-700 group">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
                    alt="Map of Kalchini, Alipurduar" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-corporate-dark/50 pointer-events-none text-center p-4">
                    <MapPin className="w-8 h-8 text-accent mb-2" />
                    <span className="font-medium text-white shadow-sm">Kalchini, Alipurduar Region</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-corporate-dark border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-corporate-dark" />
                </div>
                <span className="text-xl font-bold tracking-tight">SmythWorld IT Solutions</span>
              </div>
              <p className="text-slate-400 mb-6 max-w-sm">
                Empowering Alipurduar's businesses with cutting-edge IT support, digital marketing, and security solutions.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-corporate-light flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-corporate-light flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-corporate-light flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('home')} className="text-slate-400 hover:text-accent transition-colors cursor-pointer">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-accent transition-colors cursor-pointer">Our Services</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-accent transition-colors cursor-pointer">About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-accent transition-colors cursor-pointer">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-slate-400 hover:text-accent transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; 2026 SmythWorld IT Solutions. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              Crafted with care in <span className="text-slate-300">Alipurduar</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
