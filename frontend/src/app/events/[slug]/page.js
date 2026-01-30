import React from 'react';
import Link from 'next/link';
import { events } from '@/app/data/events';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Tag } from 'lucide-react';
import EventSidebar from '@/components/EventSidebar';
import ImageWithFallback from '@/components/ImageWithFallback';

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetail({ params }) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);

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
          <ImageWithFallback 
            src="/images/blog.jpg" 
            fallbackSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000&q=80"
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
                <ImageWithFallback 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-auto object-cover"
                  fallbackSrc="https://placehold.co/800x500?text=Article+Image"
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
          <div className="lg:col-span-1">
            <EventSidebar event={event} />
          </div>
        </div>
      </div>
    </div>
  );
}