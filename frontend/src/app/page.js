'use client';

import React from 'react';
import {
  Search, Dna, Facebook, Twitter, Linkedin, Instagram,
  Menu, X, Microscope, FlaskConical, Stethoscope,
  Activity, Syringe, Users, Headphones, Phone, Mail, MapPin,
  ChevronRight, ArrowRight, Wrench, HandCoins,
  UserCheck,
  UserRoundSearchIcon, BadgeDollarSign, LifeBuoy, UsersRound
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
              Transforming <br />
              <span className="text-blue-300">Life Science</span> with <br />
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

      </div>

      {/* Social Sidebar - Made Fixed/Stable with Official Icons */}
      <div className="hidden md:flex flex-col fixed right-0 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md rounded-l-2xl overflow-hidden z-[60] border border-white/20 border-r-0 shadow-2xl">
        {[
          {
            name: 'Facebook',
            url: 'https://facebook.com',
            color: 'bg-[#1877F2]',
            svg: (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            )
          },
          {
            name: 'X',
            url: 'https://x.com',
            color: 'bg-black',
            svg: (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298L17.607 20.65z" />
              </svg>
            )
          },
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dna-trix-lab-medical-supplies-sole-proprietorship-l-l-c-4b8bb83a7/',
            color: 'bg-[#0077B5]',
            svg: (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            )
          },
          {
            name: 'Instagram',
            url: 'https://instagram.com',
            color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
            svg: (
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            )
          }
        ].map(({ name, url, svg, color }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`p-4 text-white transition-all duration-300 hover:pl-6 group ${color}`}
          >
            <div className="group-hover:scale-125 transition-transform duration-300">
              {svg}
            </div>
          </a>
        ))}
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-500 font-bold uppercase text-sm tracking-wider">Introduction</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">About Us</h2>
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

      {/* Official Distributor Section */}
      <div className="py-12 bg-linear-to-r from-teal-700 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center md:text-left">
              <p className="text-teal-100 uppercase tracking-widest font-semibold text-sm mb-2">Partnering for Excellence</p>
              <h2 className="text-white font-bold text-3xl m-0">Official Distributor</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <a
                href="https://www.omarklabware.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 block"
              >
                <ImageWithFallback
                  src="/images/products_img/brands/foodmicrobiology/laboratoryconsumables/omark.png"
                  alt="OMARK"
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  fallbackSrc="https://placehold.co/200x80/white/black?text=OMARK"
                />
              </a>
              <a
                href="https://www.bgi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 block"
              >
                <ImageWithFallback
                  src="/images/products_img/brands/lifescience/bgi.jpg"
                  alt="BGI"
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  fallbackSrc="https://placehold.co/200x80/white/black?text=BGI"
                />
              </a>
              <a
                href="https://www.takarabio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 block"
              >
                <ImageWithFallback
                  src="/images/products_img/brands/lifescience/takara.png"
                  alt="Takara Bio"
                  width={160}
                  height={60}
                  className="h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  fallbackSrc="https://placehold.co/200x80/white/black?text=Takara"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <span className="text-orange-500 font-bold uppercase text-sm tracking-wider">Quality Assurance</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-6">Our Certifications</h2>
              <div className="w-20 h-1 bg-linear-to-r from-teal-400 to-teal-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "We are proud to be ISO 9001 and ICV Certified, reflecting our commitment to the highest standards of quality management and our contribution to the UAE's local economy."
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center items-center gap-12">
              <div className="flex flex-col items-center gap-3 group">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-teal-200 bg-white">
                  <ImageWithFallback
                    src="/images/iso_certified.png"
                    alt="ISO 9001 Certification"
                    width={100}
                    height={100}
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">ISO 9001 Certified</p>
              </div>

              <div className="flex flex-col items-center gap-3 group">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-teal-200 bg-white">
                  <ImageWithFallback
                    src="/images/icv_certified.png"
                    alt="ICV Certification"
                    width={100}
                    height={100}
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">ICV Certified</p>
              </div>
            </div>
          </div>
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
          {/* <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg mb-12">
            Our In-house service center for repair and <br/> after sales service
          </h2> */}

          {/* Services Tiles */}
          <div className="max-w-7xl mx-auto">
            <h2 className="text-orange-300 font-bold uppercase text-xl tracking-wider mb-10 relative inline-block">
              Our Services
              <span className="absolute -bottom-3 left-1/2 w-12 h-1 bg-orange-400 rounded-full transform -translate-x-1/2 opacity-80"></span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 px-4">
              {/* Turnkey Laboratory Solutions Tile */}
              <Link href="/services" className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-teal-900/40 transition-all duration-300 group text-left hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/30 overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-blue-400/20 transition-all"></div>

                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform shadow-lg flex items-center justify-center mb-6">
                    <FlaskConical className="text-white w-8 h-8" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">Turnkey Laboratory Solutions</h4>
                  <p className="text-teal-50/90 leading-relaxed font-light">
                    End-to-end management from concept to handover for medical and food testing facilities.
                  </p>
                </div>

                <div className="mt-8 flex items-center text-blue-200 font-medium text-sm group-hover:translate-x-2 transition-transform relative z-10">
                  Learn more <ArrowRight size={16} className="ml-2" />
                </div>
              </Link>

              {/* Laboratory Setup Consultation Tile */}
              <Link href="/services" className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-teal-900/40 transition-all duration-300 group text-left hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/30 overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-teal-400/20 transition-all"></div>

                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-700 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform shadow-lg flex items-center justify-center mb-6">
                    <Wrench className="text-white w-8 h-8" />
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors">Laboratory Setup Consultation</h4>
                  <p className="text-teal-50/90 leading-relaxed font-light">
                    Expert planning, layout, and compliance services for medical and food testing facilities.
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
