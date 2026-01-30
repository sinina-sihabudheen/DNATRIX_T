import React from 'react';
import { notFound } from 'next/navigation';
import { applications } from '@/app/data/applications';
import ImageWithFallback from '@/components/ImageWithFallback';

const details = {
  'molecular-biology': {
    heroImg: '/images/molecular_hero.jpg',
    intro: `Research laboratories worldwide use various aspects of molecular biology to understand living beings and develop treatments, covering various applications and solving the gap in any process in the life science and diagnostics industry.`,
    sections: [
      { title: 'Sample Processing', items: ['Extraction Kits', 'Lab Automation'], img: '/images/app_sections/sample-processing.jpg' },
      { title: 'PCR/qPCR', items: ['Mastermixes', 'Dyes', 'Thermal Cyclers', 'Real Time PCR Machines'], img: '/images/app_sections/pcr.jpg' },
      { title: 'Imaging and Quantification', items: ['UV/ Microvolume', 'Spectrophotometers', 'Plate Readers'], img: '/images/app_sections/imaging.jpg' },
      { title: 'Consumables', items: ['PCR Tubes', 'PCR Plates', 'Sealings Films', 'Tips'], img: '/images/app_sections/consumables.jpg' },
    ],
    brands: ['/images/partners/1.png','/images/partners/2.png','/images/partners/3.png','/images/partners/4.png','/images/partners/5.png'],
  },
};

export async function generateStaticParams() {
  return applications.map((app) => ({
    slug: app.slug,
  }));
}

export default async function ApplicationDetail({ params }) {
  const { slug } = await params;
  const app = applications.find(a => a.slug === slug);
  if (!app) {
    notFound();
  }

  const content = details[slug];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={content?.heroImg || '/images/hero-bg.jpg'} 
            fallbackSrc="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=2000&q=80"
            alt={app.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-500 drop-shadow-lg">{app.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {content?.intro ? (
          <p className="text-gray-700 mb-10 leading-relaxed">
            {content.intro}
          </p>
        ) : (
          <p className="text-gray-700 mb-10 leading-relaxed">
            Detailed content for {app.name} is coming soon. Explore our categories and brands below.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {(content?.sections || []).map((section, idx) => (
            <div key={idx} className="border-2 border-orange-300 rounded-xl p-6 bg-white shadow-sm">
              <div className="flex items-center gap-6">
                <div className="w-28 h-28 bg-white border rounded-lg overflow-hidden flex-shrink-0">
                  <ImageWithFallback 
                    src={section.img}
                    fallbackSrc={"https://placehold.co/200x200?text=" + encodeURIComponent(section.title)}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{section.title}</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    {section.items.map((it, i) => <li key={i}>{it}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center opacity-80 grayscale hover:grayscale-0 transition">
            {(content?.brands || ['/images/partners/1.png','/images/partners/2.png']).map((src, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm h-20 flex items-center justify-center">
                <ImageWithFallback 
                  src={src}
                  fallback={<span className="text-xs text-gray-400">Image not found</span>}
                  alt={`Brand ${i+1}`}
                  className="max-h-full max-w-full"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}