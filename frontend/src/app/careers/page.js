'use client';

import React from 'react';
import { Mail, Briefcase, Users, Star, ArrowRight } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="/images/bg1.jpg" 
            fallbackSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
            alt="Careers at DNATRIX" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Join Our Team</h1>
          <p className="text-xl text-teal-50 max-w-2xl">Be part of a company that values innovation, diversity, and growth.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 transform -mt-32 relative z-10 border-t-4 border-teal-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Work With Us?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At DNATRIX, we are always looking for talented and motivated individuals to join our growing team. We believe in fostering a collaborative environment where every voice is heard and every contribution matters.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                    <Users size={20} />
                  </div>
                  <span className="font-medium text-gray-700">Collaborative Team Environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                    <Star size={20} />
                  </div>
                  <span className="font-medium text-gray-700">Commitment to Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                    <Briefcase size={20} />
                  </div>
                  <span className="font-medium text-gray-700">Growth Opportunities</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Mail className="text-teal-500" />
                How to Apply
              </h3>
              <p className="text-gray-600 mb-6">
                If you’re interested in working with us, please send your resume to our HR team. We review every application carefully.
              </p>
              <div 
                className="flex items-center w-full p-4 bg-white border-2 border-teal-100 rounded-xl"
              >
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 mb-1">Send your resume to</span>
                  <span className="text-lg font-bold text-teal-600">admin@dnatrixme.com</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Our team will review your application and contact you if there is a suitable opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Equal Opportunity Employer</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Dnatrix is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. All applications will be treated confidentially and used solely for recruitment purposes.
          </p>
        </div>

      </div>
    </div>
  );
}
