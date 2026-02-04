'use client';

import React from 'react';
import Link from 'next/link';
import { products } from '@/app/data/products';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/hero-bg.jpg" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80";
            }}
            alt="Products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-500 drop-shadow-lg">Products</h1>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
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
    </div>
  );
}
