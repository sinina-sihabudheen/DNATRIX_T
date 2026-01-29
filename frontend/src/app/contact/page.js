'use client';

import React, { useState } from 'react';
import { MapPin, Smartphone, Phone, Mail, MessageSquare, Loader2, CheckCircle2, XCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/contact-bg.jpg" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=2000&q=80"
            }}
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-teal-500 drop-shadow-lg">Contact</h1>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <span className="uppercase tracking-wider text-sm font-bold border-b-2 border-orange-500 pb-1">Get in touch with us</span>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-teal-500 transition-colors" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-teal-500 transition-colors" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone number <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-teal-500 transition-colors" 
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-1">Subject <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-teal-500 transition-colors" 
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-teal-500 transition-colors"
                ></textarea>
              </div>

              <div className="flex items-center gap-4">
                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className={`
                    flex items-center gap-2 font-bold py-2 px-6 rounded transition-all
                    ${status === 'success' ? 'bg-green-500 text-white cursor-default' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                    ${status === 'loading' ? 'opacity-75 cursor-wait' : ''}
                  `}
                >
                  {status === 'loading' && <Loader2 size={18} className="animate-spin" />}
                  {status === 'success' ? 'Sent Successfully' : 'Submit'}
                  {status === 'success' && <CheckCircle2 size={18} />}
                </button>

                {status === 'error' && (
                  <div className="text-red-500 text-sm flex items-center gap-1">
                    <XCircle size={16} />
                    {errorMessage || 'Failed to send message.'}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <div className="mb-8">
              <span className="uppercase tracking-wider text-sm font-bold border-b-2 border-orange-500 pb-1">Contact Us</span>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-gray-400 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-gray-700">Address:</p>
                  <p className="text-gray-600">FL 07, Abu Hail Centre Building,<br />Hor Al Anz - East, Dubai P.O Box.: 96658</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gray-400 mt-1">
                  <Smartphone size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700 w-20">Phone</span>
                    <span className="text-gray-600">: +9715 0730 0463</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-700 w-20">Landline</span>
                    <span className="text-gray-600">: +9714 336 4622</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gray-400 mt-1">
                  <MessageSquare size={24} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-700 w-20">Email</span>
                  <span className="text-gray-600 font-bold">: info@dnatrixme.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
