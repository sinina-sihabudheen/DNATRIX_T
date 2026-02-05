import React from 'react';
import ImageWithFallback from '@/components/ImageWithFallback';
import Link from 'next/link';

export const metadata = {
  title: 'Services | DNATRIX',
  description: 'Our professional services including BGI Genomics and Biomedical Services.',
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
        
        {/* BGI Service */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-gray-100 flex items-center justify-center h-full min-h-[300px]">
                 {/* Placeholder for BGI Logo */}
                 <ImageWithFallback 
            src="/images/service_bgi.jpg" 
            fallbackSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            alt="Services" 
            className="w-full h-full object-cover"
          />
                 {/* <h2 className="text-4xl font-bold text-teal-600">BGI</h2> */}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">BGI Genomics</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                BGI Genomics is a leading global provider of life science research services, with more than two decades of experience in genomics and related omics technologies.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                We deliver end-to-end multi-omics workflows, covering the complete process from sample preparation and sequencing to data analysis and reporting.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our services are designed to ensure high accuracy, reproducibility, and scalability across research and clinical applications. Our technical capabilities include genomics, spatial transcriptomics, single-cell omics, proteomics, metabolomics, and integrated multi-omics analysis, complemented by expertise in synthetic biology, bioinformatics pipelines, large-scale biological databases, and AI-enabled cloud computing platforms. These integrated solutions support complex data interpretation and enable comprehensive biological insights.
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
