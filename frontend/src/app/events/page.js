'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { events } from '@/app/data/events';

function EventsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearch = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  // Sync state with URL params
  useEffect(() => {
    setSearchTerm(searchParams.get('search') || '');
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/events?search=${encodeURIComponent(searchTerm)}`);
    } else {
      router.push('/events');
    }
  };

  const filteredEvents = events.filter((item) => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <div className="mb-12 max-w-xl mx-auto">
        <form onSubmit={handleSearch} className="flex shadow-sm rounded-md relative">
          <input 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search events by headline..."
            className="flex-grow border border-gray-300 border-r-0 rounded-l-md px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-shadow"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <button 
            type="submit"
            className="bg-teal-600 text-white px-6 py-3 rounded-r-md hover:bg-teal-700 transition-colors font-medium"
          >
            Search
          </button>
        </form>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((item) => (
            <Link 
              href={`/events/${item.slug}`} 
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/600x400?text=News"
                  }}
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider shadow-sm">
                  {item.category}
                </div>
                {/* Date Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12 text-white">
                  <div className="flex items-center gap-2 text-sm font-medium">
                     <span>{item.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto">
                   <User size={14} />
                   <span>By <span className="text-gray-700 font-medium">{item.author}</span></span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 text-gray-400">
                <Search size={32} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any events matching "{searchTerm}"</p>
            <button 
                onClick={() => { setSearchTerm(''); router.push('/events'); }}
                className="text-teal-600 hover:text-teal-700 font-medium hover:underline"
            >
                Clear Search
            </button>
        </div>
      )}
    </div>
  );
}

export default function Events() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/blog.jpg" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
            }}
            alt="Events and News" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">Events And News</h1>
        </div>
      </div>

      <Suspense fallback={<div className="py-20 text-center">Loading events...</div>}>
        <EventsContent />
      </Suspense>
    </div>
  );
}
