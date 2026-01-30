'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import { applications } from '@/app/data/applications';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();

  const filteredApps = searchQuery 
    ? applications.filter(app => app.name.toLowerCase().includes(searchQuery.toLowerCase()))
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
              <img src="/images/dnalogo.png" alt="DNA TRIX" className="h-20 w-40" />
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
              <Link href="/applications" className={`flex items-center gap-1 ${getLinkClass('/applications')}`}>
                Applications
                <ChevronDown size={16} className="transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 top-full pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden py-2 max-h-[70vh] overflow-y-auto">
                  {applications.map((app) => (
                    <Link
                      key={app.slug}
                      href={`/applications/${app.slug}`}
                      className={`block px-4 py-3 text-sm border-b border-gray-50 last:border-0 hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                        pathname === `/applications/${app.slug}` ? 'text-orange-500 font-medium bg-orange-50' : 'text-gray-700'
                      }`}
                    >
                      {app.name}
                    </Link>
                  ))}
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
                  placeholder="Search applications..."
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
                  <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                    {filteredApps.length > 0 ? (
                      <div className="max-h-64 overflow-y-auto">
                        {filteredApps.map((app) => (
                          <Link 
                            key={app.slug} 
                            href={`/applications/${app.slug}`} 
                            onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 last:border-0 transition-colors text-left"
                          >
                            {app.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-4 text-sm text-gray-500 text-center">
                        No applications found matching "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)} 
                className="text-gray-500 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Open search"
              >
                <Search size={20} />
              </button>
            )}
            
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={`block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-50 ${isActive('/') ? 'text-orange-500' : 'text-gray-700'}`}>Home</Link>
            <Link href="/about" className={`block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-50 ${isActive('/about') ? 'text-orange-500' : 'text-gray-700'}`}>About</Link>
            <button
              className={`w-full text-left px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between ${isActive('/applications') ? 'text-orange-500' : 'text-gray-700'}`}
              onClick={() => setAppsOpen(!appsOpen)}
            >
              <span>Applications</span>
              <ChevronDown size={16} className={`transition-transform ${appsOpen ? 'rotate-180' : ''}`} />
            </button>
            {appsOpen && (
              <div className="ml-3">
                {applications.map((app) => (
                  <Link
                    key={app.slug}
                    href={`/applications/${app.slug}`}
                    className={`block px-3 py-1.5 text-sm hover:bg-gray-100 rounded ${pathname === `/applications/${app.slug}` ? 'text-orange-500 font-medium' : 'text-gray-700'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {app.name}
                  </Link>
                ))}
                <Link
                  href="/applications"
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All
                </Link>
              </div>
            )}
            <Link href="/events" className={`block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-50 ${isActive('/events') ? 'text-orange-500' : 'text-gray-700'}`}>Events</Link>
            <Link href="/careers" className={`block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-50 ${isActive('/careers') ? 'text-orange-500' : 'text-gray-700'}`}>Careers</Link>
            <Link href="/contact" className={`block px-3 py-2 text-base font-medium hover:text-blue-600 hover:bg-gray-50 ${isActive('/contact') ? 'text-orange-500' : 'text-gray-700'}`}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
