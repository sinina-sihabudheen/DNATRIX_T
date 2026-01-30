'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { events } from '@/app/data/events';
import { User } from 'lucide-react';

export default function EventSidebar({ event }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
        router.push(`/events?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="space-y-10">
      
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
  );
}