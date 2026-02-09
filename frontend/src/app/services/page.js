import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';
import Link from 'next/link';
import { ClipboardList, LayoutDashboard, Microscope, Wind, ShieldCheck, FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Services | DNATRIX',
  description: 'Our professional services including Turnkey Laboratory Solutions, Laboratory Setup Consultation, and Biomedical Services.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="/images/services.jpg" 
            fallbackSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/60"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Our Services</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Turnkey Laboratory Solutions Service */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100 flex items-center justify-center h-full min-h-[300px]">
                 <ImageWithFallback 
            src="/images/turnkey.jpeg" 
            fallbackSrc="https://images.unsplash.com/photo-1581093588401-fbb62a02f138?auto=format&fit=crop&w=2000&q=80"
            alt="Turnkey Laboratory Solutions" 
            className="w-full h-full object-cover"
          />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Turnkey Laboratory Solutions</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Dnatrix delivers end-to-end turnkey laboratory solutions for medical and food testing facilities across the UAE, GCC, and international markets. We manage the complete project lifecycle — from concept development and detailed design to execution, validation, and final handover — ensuring laboratories are fully operational, compliant, and ready for immediate use.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 mb-20"></div>

        {/* Laboratory Setup Consultation Service */}
        <div className="mb-20">
          <div className="flex flex-col gap-12">
            <div className="w-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Laboratory Setup Consultation</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed text-center max-w-4xl mx-auto">
                Dnatrix provides expert laboratory setup consultation services for medical and food testing facilities. We support clients at every stage of planning, ensuring laboratories are designed for efficiency, safety, and regulatory compliance.
              </p>
              
              <h3 className="text-xl font-bold text-teal-700 mb-8 text-center">Our consultation services include:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-teal-100 p-4 rounded-lg flex items-start gap-3 hover:bg-teal-100 transition-colors">
                  <ClipboardList className="w-6 h-6 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 font-medium">Feasibility studies & project advisory</span>
                </div>
                <div className="bg-teal-100 p-4 rounded-lg flex items-start gap-3 hover:bg-teal-100 transition-colors">
                  <LayoutDashboard className="w-6 h-6 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 font-medium">Laboratory layout planning & workflow optimization</span>
                </div>
                <div className="bg-teal-100 p-4 rounded-lg flex items-start gap-3 hover:bg-teal-100 transition-colors">
                  <Microscope className="w-6 h-6 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 font-medium">Equipment selection & technical specifications</span>
                </div>
                <div className="bg-teal-100 p-4 rounded-lg flex items-start gap-3 hover:bg-teal-100 transition-colors">
                  <Wind className="w-6 h-6 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 font-medium">HVAC, MEP & cleanroom advisory</span>
                </div>
                <div className="bg-teal-100 p-4 rounded-lg flex items-start gap-3 hover:bg-teal-100 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 font-medium">Biosafety, contamination control & risk assessment</span>
                </div>
                <div className="bg-teal-100 p-4 rounded-lg flex items-start gap-3 hover:bg-teal-100 transition-colors">
                  <FileCheck className="w-6 h-6 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700 font-medium">Compliance guidance with international and local standards (ISO, GMP, GLP)</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-4 leading-relaxed text-center max-w-4xl mx-auto">
                With deep regional expertise across the UAE and GCC, combined with international best practices, we help clients make informed decisions and avoid costly redesigns or delays.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gray-200 mb-20"></div>

        {/* Biomedical Services */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Biomedical Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Supporting Team */}
            <div className="bg-linear-to-br from-teal-500 to-teal-700 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6 text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supporting Team</h3>
              <p className="text-gray-700">
                Our dedicated team of biomedical engineers and specialists provides comprehensive support to ensure your laboratory operations run smoothly and efficiently.
              </p>
            </div>

            {/* Installation */}
            <div className="bg-linear-to-br from-teal-500 to-teal-700 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Installation</h3>
              <p className="text-gray-700">
                Professional installation services for all laboratory equipment. We ensure proper setup, calibration, and validation according to manufacturer standards and safety protocols.
              </p>
            </div>

            {/* Training */}
            <div className="bg-linear-to-br from-teal-500 to-teal-700 rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Training</h3>
              <p className="text-white-700">
                Comprehensive operational and maintenance training for your staff. We empower your team to utilize equipment effectively and maintain peak performance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
