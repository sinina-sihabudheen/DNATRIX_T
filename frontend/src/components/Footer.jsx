import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/app/data/products';
import { productDetails } from '@/app/data/product-details';
import ImageWithFallback from './ImageWithFallback';

const toSlug = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

export default function Footer() {
  return (
    <footer className="bg-[#404040] text-white pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-600 pb-6">
          <h2 className="text-xl md:text-2xl font-medium">Focused on Working with Advancement</h2>
          <button className="mt-4 md:mt-0 bg-linear-to-r from-teal-600 to-gray-500 hover:from-teal-500 hover:to-gray-400 text-white px-5 py-3 rounded-full font-bold shadow-lg uppercase text-xs tracking-wide">
            CONTACT US
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-x-2 gap-y-8 mb-10 text-sm text-gray-300">
          {/* Logo Section */}
          {/* <div className="lg:col-span-3 flex items-start">
             <ImageWithFallback 
               src="/images/dnalogo1.png" 
              //  src="/images/profile/logoring.png" 
               alt="DNA TRIX" 
               className="w-40 h-auto rounded-xl"
             />
          </div> */}
          <div className="lg:col-span-3 flex flex-col items-start">
            {/* DNATRIX Logo */}
            <ImageWithFallback
              src="/images/dnalogo1.png"
              alt="DNA TRIX"
              className="w-40 h-auto rounded-3xl"
            />  

            {/* OMARK Supplier Logo */}
            <div className="pt-4 mt-4 border-t border-gray-700 w-full">
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">
                Official Supplier of
              </p>
              <a
                href="https://www.omarklabware.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white p-2 hover:opacity-90 transition-opacity"
              >
                <ImageWithFallback
                  src="/images/products_img/brands/foodmicrobiology/laboratoryconsumables/omark.png"
                  alt="OMARK"
                  width={100}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="md:col-span-2 lg:col-span-4">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Products</h4>
            <div className="flex flex-col space-y-2 text-left">
              {products.map((product) => (
                <div key={product.slug}>
                  <h5 className="font-normal text-white text-xs uppercase tracking-wide">
                    <Link href={`/products/${product.slug}`} className="hover:text-teal-400 transition-colors">
                      {product.name}
                    </Link>
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Headquarters */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Corporate Headquarters</h4>
            <div className="space-y-4">
              <p className="font-bold text-white text-base">DNATRIX</p>
              
              <div className="space-y-0.5">
                <p className="leading-snug">
                  <span className="text-gray-400 text-xs uppercase tracking-wide mr-2">Address:</span>
                  FL 07, Abu Hail Centre Building,<br/>
                  Hor Al Anz - East, Dubai<br/>
                  P.O Box.: 99558
                </p>
              </div>

              <div className="space-y-0.5">
                <p className="leading-snug">
                  <span className="text-gray-400 text-xs uppercase tracking-wide mr-2">Email:</span>
                  Info@dnatrixme.com
                </p>
              </div>

              <div className="space-y-0.5">
                <p className="leading-snug">
                  <span className="text-gray-400 text-xs uppercase tracking-wide mr-2">Phone:</span>
                  +9715 0730 0463
                </p>
              </div>

              <div className="space-y-0.5">
                <p className="leading-snug">
                  <span className="text-gray-400 text-xs uppercase tracking-wide mr-2">Landline:</span>
                  +9714 336 4622
                </p>
              </div>
            </div> 
          </div>
        </div>       
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#2d8b85] py-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
          <p>© 2026 DNATRIX. All rights reserved</p>
          <p className="text-white font-medium text-xs">Designed By <span className="font-normal italic" style={{ fontFamily: 'Arial, sans-serif' }}>Sinina Sihabudheen</span></p>
        </div>
      </div>
    </footer>
  );
}
