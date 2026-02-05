'use client';

import React from 'react';
import { 
  Search, Dna, Facebook, Twitter, Linkedin, Instagram, 
  Menu, X, Microscope, FlaskConical, Stethoscope, 
  Activity, Syringe, Users, Headphones, Phone, Mail, MapPin,
  ChevronRight, ArrowRight, Wrench, HandCoins,
  UserCheck,
  UserRoundSearchIcon,BadgeDollarSign, LifeBuoy, UsersRound
} from 'lucide-react';
import Link from 'next/link';
import { products } from '@/app/data/products';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      

      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* PLACEHOLDER: Add your hero image at /public/images/hero-bg.jpg */}
          <ImageWithFallback 
            src="/images/hero-bg-1.jpg" 
            fallbackSrc="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Laboratory" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-transparent"></div>
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
            
            <a href="/about" className="bg-gradient-to-r from-teal-500 to-gray-500 hover:from-cyan-600 hover:to-gray-600 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-md w-fit">
              VIEW ALL SERVICES <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Social Sidebar */}
        <div className="hidden md:flex flex-col absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-l-xl overflow-hidden z-20">
          {[
            { Icon: Facebook, url: 'https://facebook.com', label: 'Facebook' },
            { Icon: X, url: 'https://x.com', label: 'X' },
            { Icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
            { Icon: Instagram, url: 'https://instagram.com', label: 'Instagram' }
          ].map(({ Icon, url, label }, idx) => (
            <a 
              key={idx} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 hover:bg-blue-600 text-white transition-colors"
            >
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
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">About DNATRIX</h2>
              <div className="w-20 h-1 bg-linear-to-r from-orange-400 to-orange-600 mb-6"></div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 30 years of experience in the Middle East, the company focuses primarily on the medical and laboratory solutions market.              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our product range expands from basic day-to-day consumables right up to high-priority diagnostic solutions in the healthcare and veterinary markets, including life science and research facilities.              </p>
              
              <a href="/about" className="bg-linear-to-r from-teal-500 to-gray-500 hover:from-cyan-600 hover:to-gray-600 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-md w-fit">
                LEARN MORE <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative">
              {/* Equipment Collage Container */}
              <div className="bg-[#134e4a] rounded-2xl p-6 shadow-2xl relative overflow-hidden min-h-[500px] flex items-center">
                <div className="grid grid-cols-2 gap-6 relative z-10 w-full">
                   {/* Top Left - Large Automated System */}
                   <div className="bg-white p-3 rounded-xl shadow-md aspect-[4/3] flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                       <img 
                         src="/images/collage/image_3.jpg" 
                         className="max-h-full max-w-full object-contain" 
                         alt="Lab Automation System" 
                       />
                   </div>
                   
                   {/* Top Right - Compact Reader */}
                   <div className="bg-white p-3 rounded-xl shadow-md aspect-[4/3] flex items-center justify-center transform hover:scale-105 transition-transform duration-300 translate-y-8">
                       <img 
                         src="/images/collage/image_4.jpg" 
                         className="max-h-full max-w-full object-contain" 
                         alt="Microplate Reader" 
                       />
                   </div>

                   {/* Bottom Left - Thermal Cycler */}
                   <div className="bg-white p-3 rounded-xl shadow-md aspect-[4/3] flex items-center justify-center transform hover:scale-105 transition-transform duration-300 -translate-y-4">
                       <img 
                         src="/images/collage/image_5.jpg" 
                         className="max-h-full max-w-full object-contain" 
                         alt="PCR Thermal Cycler" 
                       />
                   </div>

                   {/* Bottom Right - Analysis System */}
                   <div className="bg-white p-3 rounded-xl shadow-md aspect-[4/3] flex items-center justify-center transform hover:scale-105 transition-transform duration-300 translate-y-4">
                       <img 
                         src="/images/collage/image_6.jpg" 
                         className="max-h-full max-w-full object-contain" 
                         alt="Genomic Analysis" 
                       />
                   </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 p-4 opacity-20">
                  <Dna size={120} className="text-teal-300" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-black/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* OMARK Official Supplier Section */}
      <div className="py-16 bg-linear-to-r from-teal-700 to-teal-600 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-8">
          <p className="text-white uppercase tracking-widest font-semibold text-3xl m-0">Official Supplier of</p>
          <a 
            href="https://www.omarklabware.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white group transform hover:-translate-y-1 block"
          >
            <ImageWithFallback
              src="/images/products_img/brands/foodmicrobiology/laboratoryconsumables/omark.png"
              alt="OMARK"
              width={200}
              height={80}
              className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              fallbackSrc="https://placehold.co/240x100/white/black?text=OMARK"
            />
          </a>
        </div>
      </div>

      {/* Products / Services Section */}
      <div id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold uppercase text-sm tracking-wider">Our Services</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Focus Products</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {products.slice(0, 8).map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group w-full max-w-xs"
              >
                <div className="h-40 overflow-hidden bg-gray-200">
                  <img 
                    src={product.img} 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/400x300?text=" + encodeURIComponent(product.name);
                    }}
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 text-sm">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Service Banner */}
      <div className="relative py-24 bg-cover bg-center">
        <div className="absolute inset-0">
          {/* PLACEHOLDER: Add your hero image at /public/images/hero-bg.jpg */}
          <img 
            src="/images/bg2.jpg" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            }}
            alt="Laboratory" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-transparent"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-green-200/90 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg mb-12">
            Our In-house service center for repair and <br/> after sales service
          </h2>
          
          {/* Services Tiles */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-orange-300 font-bold uppercase text-sm tracking-wider mb-10 relative inline-block">
              Our Services
              <span className="absolute -bottom-3 left-1/2 w-12 h-1 bg-orange-400 rounded-full transform -translate-x-1/2 opacity-80"></span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8 px-4">
              {/* BGI Service Tile */}
              <Link href="/services" className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-teal-900/40 transition-all duration-300 group text-left hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/30 overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-teal-400/20 transition-all"></div>
                
                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 bg-linear-to-br from-teal-400 to-teal-700 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform shadow-lg flex items-center justify-center mb-6">
                     <span
                      className="text-white font-black text-xl tracking-tighter"
                      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                    > 
                      BGI
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors">BGI Genomics</h4>
                  <p className="text-teal-50/90 leading-relaxed font-light">
                    Leading global provider of life science research services and multi-omics workflows.
                  </p>
                </div>
                  
                <div className="mt-8 flex items-center text-teal-200 font-medium text-sm group-hover:translate-x-2 transition-transform relative z-10">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>

              {/* Biomedical Services Tile */}
              <Link href="/services" className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-teal-900/40 transition-all duration-300 group text-left hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/30 overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-blue-400/20 transition-all"></div>
                
                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform shadow-lg flex items-center justify-center mb-6 text-white">
                    <Wrench size={30} />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Biomedical Services</h4>
                  <p className="text-blue-50/90 leading-relaxed font-light">
                    Comprehensive support, installation, and training from our dedicated engineering team.
                  </p>
                </div>
                  
                <div className="mt-8 flex items-center text-blue-300 font-medium text-sm group-hover:translate-x-2 transition-transform relative z-10">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}
