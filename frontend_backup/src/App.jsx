import React, { useState } from 'react';
import { 
  Search, Dna, Facebook, Twitter, Linkedin, Instagram, 
  Menu, X, Microscope, FlaskConical, Stethoscope, 
  Activity, Syringe, Users, Headphones, Phone, Mail, MapPin,
  ChevronRight, ArrowRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* Top Bar / Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* Replace with actual logo image if available: <img src="/images/logo.png" alt="DNA TRIX" className="h-10" /> */}
              {/* <Dna className="h-8 w-8 text-blue-600" /> */}
              <div className="flex flex-col">
                <img src="/images/dnalogo1.png" alt="DNA TRIX" className="h-18 w-40" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Applications', 'Events', 'Careers', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-blue-600 text-sm font-semibold uppercase tracking-wide transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button className="text-gray-500 hover:text-blue-600">
                <Search size={20} />
              </button>
              <button 
                className="md:hidden text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['Home', 'About', 'Applications', 'Events', 'Careers', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* PLACEHOLDER: Add your hero image at /public/images/hero-bg.jpg */}
          <img 
            src="/images/hero-bg.jpg" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            }}
            alt="Laboratory" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transforming <br/>
              <span className="text-blue-300">Life Science</span> with <br/>
              Advanced Technology
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              Pioneering medical and laboratory solutions for a healthier tomorrow.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transform transition hover:scale-105">
              VIEW ALL SERVICES
            </button>
          </div>
        </div>

        {/* Social Sidebar */}
        <div className="hidden md:flex flex-col absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-l-xl overflow-hidden">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
            <a key={idx} href="#" className="p-3 hover:bg-blue-600 text-white transition-colors">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-bold uppercase text-sm tracking-wider">Introduction</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">About DNA Trix</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mb-6"></div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 40 years of experience in the Middle East, the company focuses primarily on the medical and laboratory solutions market.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our product range extends from daily consumables to high-end diagnostic instruments. We are dedicated to fueling the scientific revolution in medicine by delivering state-of-the-art technologies to our partners.
              </p>
              
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
                LEARN MORE <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              {/* PLACEHOLDER: Add your about image at /public/images/about-dna.jpg */}
              <img 
                src="/images/about-dna.jpg" 
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                }}
                alt="DNA Research" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Applications / Services Section */}
      <div id="applications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold uppercase text-sm tracking-wider">Our Services</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Focus Applications</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Molecular Biology', img: '/images/services/molecular.jpg' },
              { title: 'Genomics', img: '/images/services/genomics.jpg' },
              { title: 'Proteomics', img: '/images/services/proteomics.jpg' },
              { title: 'Clinical Diagnostics', img: '/images/services/diagnostics.jpg' },
              { title: 'Microbiology', img: '/images/services/microbiology.jpg' },
              { title: 'Veterinary Diagnostics', img: '/images/services/veterinary.jpg' },
              { title: 'Haematology', img: '/images/services/haematology.jpg' },
              { title: 'Histopathology', img: '/images/services/histopathology.jpg' },
            ].map((app, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="h-40 overflow-hidden bg-gray-200">
                  <img 
                    src={app.img} 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/400x300?text=" + encodeURIComponent(app.title);
                    }}
                    alt={app.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 text-sm">{app.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Banner */}
      <div className="relative py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-center text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our In-house service center for repair and <br/> after sales service
          </h2>
        </div>
      </div>

      {/* Support Cards */}
      <div className="py-16 bg-white relative -mt-10 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Market Support', icon: Users, color: 'from-orange-400 to-orange-600' },
              { title: 'Sales Support', icon: Headphones, color: 'from-green-400 to-emerald-600' },
              { title: 'Technical Support', icon: Activity, color: 'from-blue-400 to-blue-600' },
              { title: 'Financial Support', icon: FlaskConical, color: 'from-purple-400 to-indigo-600' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group hover:-translate-y-2 transition-transform">
                <div className={`h-24 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <item.icon className="text-white w-10 h-10" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500">
                    Dedicated professional support providing expert assistance for our customers.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners / Key Account */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-500 font-bold uppercase text-sm tracking-wider">Our Partners</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-12">Key Account</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
             {/* PLACEHOLDER: Add partner logos in /public/images/partners/1.png, 2.png, etc. */}
             {[1,2,3,4,5,6,7,8].map((i) => (
               <div key={i} className="bg-white p-4 rounded-lg shadow-sm h-20 flex items-center justify-center">
                 <img 
                   src={`/images/partners/${i}.png`} 
                   onError={(e) => {
                     e.target.onerror = null; 
                     e.target.style.display = 'none';
                     e.target.nextSibling.style.display = 'block';
                   }}
                   alt={`Partner ${i}`}
                   className="max-h-full max-w-full"
                 />
                 <span className="font-bold text-gray-400 hidden">PARTNER {i}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* News & Events */}
      <div id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-blue-600 font-bold uppercase text-sm tracking-wider">Our Latest</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-12">News & Events</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl h-64 cursor-pointer">
                {/* PLACEHOLDER: Add news images at /public/images/news/1.jpg, etc. */}
                <img 
                  src={`/images/news/${i}.jpg`} 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80"
                  }}
                  alt="News" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-left">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded w-fit mb-2">NEWS</span>
                  <h3 className="text-white font-bold text-lg leading-tight">
                    Transforming Healthcare with AI Diagnostics
                  </h3>
                  <p className="text-gray-300 text-xs mt-2">28 Jan 2026</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold shadow-md transition-colors">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-blue-800 pb-8">
            <h2 className="text-2xl font-bold">Focused on Working with Advancement</h2>
            <button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold">
              CONTACT US
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm text-blue-100">
            <div>
              <h4 className="font-bold text-white mb-4 uppercase">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 uppercase">Applications</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Molecular Biology</a></li>
                <li><a href="#" className="hover:text-white">Genomics</a></li>
                <li><a href="#" className="hover:text-white">Clinical Diagnostics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 uppercase">Corporate Headquarters</h4>
              <div className="space-y-4">
                <p className="font-bold text-white">DNA Trix</p>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 shrink-0" />
                  <p>Al-Ain, Industrial Area, UAE<br/>PO Box: 11234</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  <p>info@dnatrix.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  <p>+971 50 123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-700 py-4 mt-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>© 2026 DNA Trix. All rights reserved.</p>
            <p>Designed by Sinina</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
