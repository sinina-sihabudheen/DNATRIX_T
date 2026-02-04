'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { products } from '@/app/data/products';
import { productDetails } from '@/app/data/product-details';
import ImageWithFallback from './ImageWithFallback';

// Helper to create slug from title
const toSlug = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const filteredProducts = searchQuery 
    ? products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const getLinkClass = (path) => {
    const baseClass = "text-sm font-semibold uppercase tracking-wide transition-colors";
    return isActive(path) 
      ? `${baseClass} text-orange-500` 
      : `${baseClass} text-gray-600 hover:text-blue-600`;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex flex-col">
              <ImageWithFallback src="/images/dnalogo.png" alt="DNA TRIX" className="h-20 w-40" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClass('/')}>
              Home
            </Link>
            <Link href="/about" className={getLinkClass('/about')}>
              About
            </Link>

            <div className="relative group">
              <Link href="/products" className={`flex items-center gap-1 ${getLinkClass('/products')}`}>
                Products
                <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-2">
                  {products.map((product) => {
                    const hasSubcategories = productDetails[product.slug]?.sections?.length > 0;
                    
                    return (
                      <div key={product.slug} className="relative group/item">
                        <Link
                          href={`/products/${product.slug}`}
                          className={`flex items-center justify-between px-4 py-3 text-sm border-b border-gray-50 last:border-0 hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                            pathname === `/products/${product.slug}` ? 'text-orange-500 font-medium bg-orange-50' : 'text-gray-700'
                          }`}
                        >
                          {product.name}
                          {hasSubcategories && <ChevronDown size={14} className="-rotate-90 text-gray-400" />}
                        </Link>

                        {/* Subcategory Dropdown */}
                        {hasSubcategories && (
                          <div className="absolute left-full top-0 w-72 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 pl-1 z-50">
                            <div className="bg-white shadow-xl border border-gray-100 rounded-lg py-2">
                              {productDetails[product.slug].sections.map((section) => (
                                <Link
                                  key={section.title}
                                  href={`/products/${product.slug}/${toSlug(section.title)}`}
                                  className="block px-4 py-3 text-sm border-b border-gray-50 last:border-0 hover:bg-orange-50 hover:text-orange-600 transition-colors text-gray-700"
                                >
                                  {section.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link href="/events" className={getLinkClass('/events')}>
              Events
            </Link>
            <Link href="/careers" className={getLinkClass('/careers')}>
              Careers
            </Link>
            <Link href="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4 relative">
            {isSearchOpen ? (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-white border border-gray-300 rounded-full px-3 py-1.5 shadow-lg w-72 transition-all z-50">
                <Search size={16} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-grow outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                  autoFocus
                />
                <button 
                  onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} 
                  className="text-gray-400 hover:text-red-500 ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X size={16} />
                </button>

                {/* Search Results Dropdown */}
                {searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 max-h-64 overflow-y-auto">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map(product => (
                        <Link 
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                          onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                        >
                          {product.name}
                        </Link>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-sm text-gray-500">No products found</div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-600 hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <Search size={20} />
              </button>
            )}

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 h-[calc(100vh-5rem)] overflow-y-auto z-40">
          <div className="flex flex-col p-4 space-y-2">
            <Link 
              href="/" 
              className={`px-4 py-3 rounded-lg ${isActive('/') ? 'bg-orange-50 text-orange-500 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-3 rounded-lg ${isActive('/about') ? 'bg-orange-50 text-orange-500 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Products Dropdown */}
            <div>
              <button 
                onClick={() => setProductsOpen(!productsOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg ${isActive('/products') ? 'bg-orange-50 text-orange-500 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span>Products</span>
                <ChevronDown size={16} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {productsOpen && (
                <div className="ml-4 border-l-2 border-gray-100 pl-2 space-y-1 mt-1">
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className={`block px-4 py-2 text-sm rounded-lg ${
                        pathname === `/products/${product.slug}` ? 'text-orange-500 font-medium' : 'text-gray-600 hover:text-orange-500'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/events" 
              className={`px-4 py-3 rounded-lg ${isActive('/events') ? 'bg-orange-50 text-orange-500 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/careers" 
              className={`px-4 py-3 rounded-lg ${isActive('/careers') ? 'bg-orange-50 text-orange-500 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-3 rounded-lg ${isActive('/contact') ? 'bg-orange-50 text-orange-500 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
