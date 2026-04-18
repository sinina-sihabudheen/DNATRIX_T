'use client';

import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "971507300463";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-4 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#0dc143] p-6 text-white relative">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 rounded-full">
                <svg 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.597 6.011L0 24l6.135-1.61a11.782 11.782 0 005.912 1.569h.005c6.634 0 12.05-5.414 12.05-12.051a11.84 11.84 0 00-3.489-8.522z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Start a Conversation</h3>
                <p className="text-sm text-white/90 leading-tight mt-1">
                  Hi! Click one of our member below to chat on WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 bg-gray-50/50">
            <p className="text-[11px] text-gray-500 mb-4 px-2">The team typically replies in a few minutes.</p>
            
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-4 rounded-xl border-l-[3px] border-[#0dc143] shadow-sm hover:shadow-md transition-all duration-200 group no-underline"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-[#25D366]">
                  <svg 
                    viewBox="0 0 24 24" 
                    width="28" 
                    height="28" 
                    fill="currentColor" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.597 6.011L0 24l6.135-1.61a11.782 11.782 0 005.912 1.569h.005c6.634 0 12.05-5.414 12.05-12.051a11.84 11.84 0 00-3.489-8.522z"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">DNATRIX Support</p>
              </div>
              <div className="text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.597 6.011L0 24l6.135-1.61a11.782 11.782 0 005.912 1.569h.005c6.634 0 12.05-5.414 12.05-12.051a11.84 11.84 0 00-3.489-8.522z"/>
                </svg>
              </div>
            </a>

            <div className="flex justify-center items-center gap-1 mt-6 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
              <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase">Powered by</span>
              <span className="text-[10px] font-extrabold text-red-600 tracking-tighter">DNATRIXTEAM</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={toggleChat}
        className={`z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative group ${
          isOpen ? 'bg-[#0dc143] text-white' : 'bg-[#25D366] text-white hover:bg-[#128C7E]'
        }`}
        aria-label={isOpen ? "Close chat" : "Contact us on WhatsApp"}
      >
        {isOpen ? (
          <X size={32} strokeWidth={2.5} />
        ) : (
          <>
            <svg 
              viewBox="0 0 24 24" 
              width="32" 
              height="32" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.552 4.197 1.597 6.011L0 24l6.135-1.61a11.782 11.782 0 005.912 1.569h.005c6.634 0 12.05-5.414 12.05-12.051a11.84 11.84 0 00-3.489-8.522z"/>
            </svg>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
            {/* Tooltip */}
            <span className="absolute right-16 bg-white text-green-800 text-sm font-bold py-2 px-4 rounded-full shadow-lg opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap border border-green-100 italic">
              Chat with us!
            </span>
          </>
        )}
      </button>
    </div>
  );
}
