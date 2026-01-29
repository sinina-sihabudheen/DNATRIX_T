'use client';

import React from 'react';

export default function Careers() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/bg1.jpg" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
            }}
            alt="Careers at DNATRIX" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Careers</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
        <p className="text-gray-600">We are currently updating our career opportunities. Please check back later.</p>
      </div>
    </div>
  );
}
