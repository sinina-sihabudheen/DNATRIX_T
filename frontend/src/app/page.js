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
import { applications } from '@/app/data/applications';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      

      {/* Hero Section */}
      <div className="relative bg-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* PLACEHOLDER: Add your hero image at /public/images/hero-bg.jpg */}
          <img 
            src="/images/hero-bg-1.jpg" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            }}
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
                With over 30 years of experience in the Middle East, the company focuses primarily on the medical and laboratory solutions market.              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our product range expands from basic day-to-day consumables right up to high-priority diagnostic solutions in the healthcare and veterinary markets, including life science and research facilities.              </p>
              
              <a href="/about" className="bg-gradient-to-r from-teal-500 to-gray-500 hover:from-cyan-600 hover:to-gray-600 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-md w-fit">
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

      {/* Applications / Services Section */}
      <div id="applications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold uppercase text-sm tracking-wider">Our Services</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Focus Applications</h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {applications.slice(0, 8).map((app) => (
              <Link
                key={app.slug}
                href={`/applications/${app.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                <div className="h-40 overflow-hidden bg-gray-200">
                  <img 
                    src={app.img} 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://placehold.co/400x300?text=" + encodeURIComponent(app.name);
                    }}
                    alt={app.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-800 text-sm">{app.name}</h3>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            Our In-house service center for repair and <br/> after sales service
          </h2>
        </div>
      </div>
      <div className='relative z-10 max-w-2xl mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-4xl font-semibold text-amber-600 leading-tight drop-shadow-lg'>
            OUR MISSION
          </h2>
        </div>

      {/* Support Cards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="grid md:grid-cols-3 gap-6"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">

            {[
              {
                title: "Cost Effective Solutions",
                icon: BadgeDollarSign,
                text: "Delivering high-quality, cost-efficient diagnostic and laboratory solutions across diverse applications, ensuring accurate and reliable research outcomes."
              },
              {
                title: "Excellent Support",
                icon: LifeBuoy,
                text: "Comprehensive technical and customer support covering product delivery, installation, training, and ongoing assistance to ensure seamless operations."
              },
              {
                title: "Dedicated Team",
                icon: UsersRound,
                text: "A highly skilled team of biomedical engineers and application specialists committed to supporting customers before, during, and after implementation."
              }
              
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-b from-teal-500 to-gray-700 rounded-xl p-8 text-center text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg ring-4 ring-white/20">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners / Key Account */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-500 font-bold uppercase text-sm tracking-wider">Our Partners</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-12">Key Accounts</h2>
          
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all"> */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 ">

             {/* PLACEHOLDER: Add partner logos in /public/images/partners/1.png, 2.png, etc. */}
             {[1,2,3,4,5,6,7,8,9,10].map((i) => (
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
            {[
              {
                id: 1,
                tag: 'WEBINAR',
                dateAbove: 'On 10th Jan 2026',
                title: 'Digital pathology transforming workflows',
                author: 'Dr. Raj Singh',
                image: '/images/news/1.jpg'
              },
              {
                id: 2,
                tag: 'NEWS',
                title: 'NHS to trial AI + robotics for early lung cancer detection',
                dateBelow: '28 Jan 2026',
                image: '/images/news/2.jpg'
              },
              {
                id: 3,
                tag: 'NEWS',
                title: 'New rehabilitation tech helping veterans',
                dateBelow: '28 Jan 2026',
                image: '/images/news/3.jpg'
              }
            ].map((news) => (
              <div key={news.id} className="relative group overflow-hidden rounded-xl h-80 cursor-pointer shadow-lg">
                <img 
                  src={news.image} 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80"
                  }}
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 text-center items-center">
                  
                  {/* Tag/Badge */}
                  <span className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded uppercase mb-3 tracking-wide">
                    {news.tag}
                  </span>

                  {/* Date Above Title (for webinar style) */}
                  {news.dateAbove && (
                    <p className="text-gray-300 text-xs mb-2">{news.dateAbove}</p>
                  )}

                  {/* Title */}
                  <h3 className="text-white font-bold text-xl leading-snug mb-4">
                    {news.title}
                  </h3>
                  
                  {/* Footer: Author or Date */}
                  {news.author ? (
                    <div className="flex items-center justify-center gap-2 text-gray-300 text-xs mt-2 border-t border-gray-600 pt-3 w-full max-w-[200px]">
                       <div className="w-5 h-5 rounded-full bg-gray-400 overflow-hidden">
                         <Users size={20} className="text-gray-600 p-0.5" />
                       </div>
                       <span>By {news.author}</span>
                    </div>
                  ) : (
                     <p className="text-gray-400 text-xs mt-1">{news.dateBelow}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <button className="bg-gradient-to-r from-teal-500 to-gray-500 hover:from-cyan-700 hover:to-gray-700 text-white px-8 py-3 rounded-full font-bold shadow-md transition-all hover:shadow-lg">
              MORE NEWS
            </button>
          </div>
          
        </div>
      </div>

    </div>
  );
}
