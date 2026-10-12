'use client';

import React from 'react';
import { Mail, Briefcase, Users, Star, MapPin, Clock, Building2 } from 'lucide-react';
import ImageWithFallback from '@/components/ImageWithFallback';
import { jobs } from '@/app/data/jobs';

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="/images/bg1.jpg" 
            fallbackSrc="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
            alt="Careers at DNATRIX" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Join Our Team</h1>
          <p className="text-xl text-teal-50 max-w-2xl">Be part of a company that values innovation, diversity, and growth.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Intro Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 transform -mt-32 relative z-10 border-t-4 border-teal-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Work With Us?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At DNATRIX, we are always looking for talented and motivated individuals to join our growing team. We believe in fostering a collaborative environment where every voice is heard and every contribution matters.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                    <Users size={20} />
                  </div>
                  <span className="font-medium text-gray-700">Collaborative Team Environment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                    <Star size={20} />
                  </div>
                  <span className="font-medium text-gray-700">Commitment to Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-2 rounded-lg text-teal-600">
                    <Briefcase size={20} />
                  </div>
                  <span className="font-medium text-gray-700">Growth Opportunities</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Mail className="text-teal-500" />
                How to Apply
              </h3>
              <p className="text-gray-600 mb-6">
                If you’re interested in working with us, please send your resume to our HR team. We review every application carefully.
              </p>
              <div 
                className="flex items-center w-full p-4 bg-white border-2 border-teal-100 rounded-xl"
              >
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 mb-1">Send your resume to</span>
                  <span className="text-lg font-bold text-teal-600">admin@dnatrixme.com</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 italic">
                Our team will review your application and contact you if there is a suitable opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current openings and take the next step in your career with DNATRIX.
            </p>
          </div>

          <div className="space-y-8">
            {jobs.map((job) => (
              <article
                key={job.id}
                id={job.slug}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 px-3 py-1 rounded-lg">
                          <Building2 size={14} />
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-3 py-1 rounded-lg">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-3 py-1 rounded-lg">
                          <Clock size={14} />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    {/* <a
                      href={`mailto:admin@dnatrixme.com?subject=${encodeURIComponent(`Application for ${job.title}`)}`}
                      className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                    >
                      <Mail size={18} />
                      Apply Now
                    </a> */}


                                        
                    {/* <div className="flex flex-wrap gap-3"> */}
                      {/* Option 1: Default email application */}
                      {/* <a
                        href={`mailto:admin@dnatrixme.com?subject=${encodeURIComponent(
                          `Application for ${job.title}`
                        )}`}
                        className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                      >
                        <Mail size={18} />
                        Apply Now
                      </a> */}

                      {/* Option 2: Open Gmail directly */}
                      {/* <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                          'admin@dnatrixme.com'
                        )}&su=${encodeURIComponent(`Application for ${job.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-teal-700 border border-teal-600 font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                      >
                        <Mail size={18} />
                        Open in Gmail
                      </a> */}
                    {/* </div> */}


                      {/*Direct gmail open */}
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                          'admin@dnatrixme.com'
                        )}&su=${encodeURIComponent(`Application for ${job.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
                      >
                        <Mail size={18} />
                        Apply Now
                      </a>


                  </div>

                  <p className="text-gray-600 leading-relaxed mb-8">{job.excerpt}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Responsibilities</h4>
                      <ul className="space-y-2.5">
                        {job.responsibilities.map((item) => (
                          <li key={item} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-4">Requirements</h4>
                      <ul className="space-y-2.5">
                        {job.requirements.map((item) => (
                          <li key={item} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Equal Opportunity Employer</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Dnatrix is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees. All applications will be treated confidentially and used solely for recruitment purposes.
          </p>
        </div>

      </div>
    </div>
  );
}
