import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#404040] text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-600 pb-8">
          <h2 className="text-2xl md:text-3xl font-medium">Focused on Working with Advancement</h2>
          <button className="mt-4 md:mt-0 bg-gradient-to-r from-teal-600 to-gray-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all uppercase text-sm tracking-wide">
            CONTACT US
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16 text-sm text-gray-300">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors font-bold text-white">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Applications</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-white transition-colors">Molecular Biology</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Genomics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Proteomics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Clinical Diagnostics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Microbiology</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Veterinary Diagnostics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Haematology</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Immunohistochemistry</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Hospital Supplies & Consumables</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">General Lab Equipment & Consumables</Link></li>
            </ul>
          </div>

          {/* Corporate Headquarters */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Corporate Headquarters</h4>
            <div className="space-y-6">
              <p className="font-bold text-white text-lg">DNATRIX</p>
              
              <div className="space-y-1">
                <p className="text-gray-400">Address :</p>
                <p className="leading-relaxed">
                  FL 07, Abu Hail Centre Building,<br/>
                  Hor Al Anz - East, Dubai<br/>
                  P.O Box.: 99558
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-400">Email:</p>
                <p className="text-white">Info@dnatrixme.com</p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-400">Phone :</p>
                <p className="text-white">+9715 0730 0463</p>
              </div>

              <div className="space-y-1">
                <p className="text-gray-400">Landline :</p>
                <p className="text-white">+9714 336 4622</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#2d8b85] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
          <p>© 2026 DNATRIX. All rights reserved</p>
          <p>Designed By <span className="text-white">Sinina</span></p>
        </div>
      </div>
    </footer>
  );
}
