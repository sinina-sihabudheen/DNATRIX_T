'use client';

import React from 'react';
import { 
  Search, Dna, Facebook, Twitter, Linkedin, Instagram, 
  Menu, X, Microscope, FlaskConical, Stethoscope, 
  Activity, Syringe, Users, Headphones, Phone, Mail, MapPin,
  ChevronRight, ArrowRight, Wrench, HandCoins,
  UserCheck, BadgeDollarSign, LifeBuoy, UsersRound,
  Building2, Map, Truck, Settings
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      

      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/profile/about1.jpg" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1516549655169-df83a092fc43?auto=format&fit=crop&w=2000&q=80"
            }}
            alt="About DNATRIX" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-teal-500 drop-shadow-lg">About</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              {/* DNA Circle Logo Placeholder */}
               <div className="w-64 h-64 relative flex items-center justify-center">
                 {/* <div className="absolute inset-0 border-4 border-dashed border-gray-300 rounded-full animate-spin-slow"></div> */}
                 <Dna size={120} className="text-teal-600" />
                 <img 
                    src="/images/profile/img_circle.png" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://images.unsplash.com/photo-1516549655169-df83a092fc43?auto=format&fit=crop&w=2000&q=80"
                    }}
                    alt="About DNATRIX logo" 
                    className="w-full h-full object-cover"
                  />        
                 {/* Or use an image if available */}
                 {/* <img src="/images/dna-circle.png" alt="DNA Circle" className="w-full h-full object-contain" /> */}
               </div>
            </div>
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                With over 30 years of experience in the Middle East, the company focuses primarily
                on the medical and laboratory solutions market. Our product range expands from
                basic day-to-day consumables right up to high-priority diagnostic solutions in the
                healthcare and veterinary markets, including life science and research facilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500 uppercase tracking-wide">Our Mission</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {[
              {
                title: "Cost Effective Solutions",
                icon: BadgeDollarSign,
                text: "Diverse diagnostic applications to guarantee reliable, result-oriented research."
              },
              {
                title: "Excellent Support",
                icon: Headphones,
                text: "Right from product deliveries, installations to application training."
              },
              {
                title: "Dedicated Team",
                icon: UsersRound,
                text: "To help customers before, during, and after the instrument is incorporated into a customer's workflow."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-b from-teal-500 to-gray-700 rounded-xl p-8 text-center text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">

              {/* // <div key={idx} className="bg-gradient-to-b from-teal-400 to-teal-600 rounded-xl p-8 text-center text-white shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center w-full h-full"> */}
                <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center mb-6 shadow-lg ring-4 ring-white/20">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 capitalize">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    <div className="py-16 bg-[#0d8173]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-white text-3xl font-bold uppercase mb-12">
          Who We Are
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              img: "/images/profile/image_14.png",
              text: "More than 30 years of\nexperience in the industry",
            },
            {
              img: "/images/profile/image_18.jpg",
              text: "Laboratory\nfocused",
            },
            {
              img: "/images/profile/image_13.jpg",
              text: "In house certified center\nfor repair and after sale service",
            },
            {
              img: "/images/profile/image_15.png",
              text: "Key accounts include universities,\ngovernment authorities and private institutions",
            },
            {
              img: "/images/profile/image_12.jpg",
              text: "Middle east\nmarket access",
            },
            {
              img: "/images/profile/image_11.png",
              text: "21000 sq/ft of warehousing space",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
              bg-[#08504a]
                rounded-lg
                shadow-md
                px-6
                py-8
                flex
                flex-col
                items-center
                text-center
                h-[230px]
              "
            >
              {/* Icon circle */}
              <div className="w-30 h-30 bg-[#0f766e]  flex items-center justify-center mb-4">
                <img
                  src={item.img}
                  alt="icon"
                  className="w-35 h-35  object-contain"
                />
              </div>

              {/* Text */}
              <p className="text-white text-sm font-medium leading-snug whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
   

      {/* Key Accounts (Partners) */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-500 font-bold uppercase text-sm tracking-wider">Our Partners</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-12">Key Accounts</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
             {/* Reusing the loop from home page, limiting to fewer or same as home */}
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

    </div>
  );
}
