'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { events } from '@/app/data/events';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Search, User, Calendar, Tag, ChevronRight } from 'lucide-react';

export default function EventDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;
  
  const event = events.find((e) => e.slug === slug);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
        router.push(`/events?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <Link href="/events" className="text-teal-600 hover:underline">Back to Events</Link>
        </div>
      </div>
    );
  }

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
            alt="My blog page" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40"></div>
          {/* Overlay Grid Pattern (Decorative) */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">My blog page</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white">
              <div className="mb-6 text-center">
                <span className="bg-teal-700 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider mb-4 inline-block">
                  {event.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  {event.title}
                </h1>
              </div>

              {/* Featured Image with Date Badge */}
              <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/800x500?text=Article+Image"
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-center px-3 py-2 rounded shadow-md min-w-[60px]">
                  <span className="block text-2xl font-bold text-gray-900 leading-none">{event.day}</span>
                  <span className="block text-xs font-bold text-gray-500 uppercase">{event.month}</span>
                </div>
              </div>

              {/* Content Body */}
              <div 
                className="prose prose-lg max-w-none text-gray-600 prose-headings:text-gray-900 prose-a:text-teal-600 hover:prose-a:text-teal-700"
                dangerouslySetInnerHTML={{ __html: event.content }}
              />

              {/* Social Share */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4">
                <span className="font-bold text-gray-700">Share:</span>
                <div className="flex gap-2">
                  <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"><Facebook size={18} /></button>
                  <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"><Twitter size={18} /></button>
                  <button className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"><Tag size={18} /></button>
                  <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"><Linkedin size={18} /></button>
                  <button className="p-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition-colors"><LinkIcon size={18} /></button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-10">
            
            {/* Search */}
            <div className="bg-white">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Search</h3>
              <form onSubmit={handleSearch} className="flex">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-300 border-r-0 rounded-l px-4 py-2 focus:outline-none focus:border-teal-500"
                />
                <button type="submit" className="bg-blue-700 text-white px-4 rounded-r hover:bg-blue-800 transition-colors">
                  SEARCH
                </button>
              </form>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b pb-2">Recent Posts</h3>
              <ul className="space-y-4">
                {events.map(item => (
                   <li key={item.id}>
                     <Link href={`/events/${item.slug}`} className="group block">
                        <span className="block text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors line-clamp-2">
                          {item.title}
                        </span>
                     </Link>
                   </li>
                ))}
                <li>
                  <a href="#" className="group block">
                    <span className="block text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                      The Tale of Histopathology Webinar
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="group block">
                    <span className="block text-sm font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">
                      Reducing Human Intervention in Pipetting with epMotion
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Recent Comments */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b pb-2">Recent Comments</h3>
              <p className="text-sm text-gray-500 italic">No comments to show.</p>
            </div>

            {/* Archives */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b pb-2">Archives</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 flex items-center justify-between">
                    <span>October 2026</span>
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">1</span>
                  </a>
                </li>
                 <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-teal-600 flex items-center justify-between">
                    <span>January 2026</span>
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">2</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Posted By */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b pb-2">Posted By</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  <User size={20} />
                </div>
                <div>
                   <p className="text-sm font-bold text-gray-800">{event.author}</p>
                   <p className="text-xs text-gray-500">on {event.date}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
