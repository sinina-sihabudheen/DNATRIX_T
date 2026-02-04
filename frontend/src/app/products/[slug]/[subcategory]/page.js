import React from 'react';
import { notFound } from 'next/navigation';
import { productDetails } from '@/app/data/product-details';
import { products } from '@/app/data/products';
import ImageWithFallback from '@/components/ImageWithFallback';
import Link from 'next/link';

// Helper to create slug from title
const toSlug = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

export async function generateStaticParams() {
  const params = [];
  
  // Iterate through all products that have details
  Object.keys(productDetails).forEach(slug => {
    const details = productDetails[slug];
    if (details.sections) {
      details.sections.forEach(section => {
        params.push({
          slug: slug,
          subcategory: toSlug(section.title)
        });
      });
    }
  });
  
  return params;
}

export default async function SubCategoryPage({ params }) {
  const { slug, subcategory } = await params;
  
  const product = products.find(p => p.slug === slug);
  const details = productDetails[slug];
  
  if (!product || !details) {
    notFound();
  }
  
  // Find the specific section/subcategory
  const section = details.sections.find(s => toSlug(s.title) === subcategory);
  
  if (!section) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={section.img || details.heroImg} 
            fallbackSrc="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=2000&q=80"
            alt={section.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/60"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-2">{section.title}</h1>
          <div className="flex items-center gap-2 text-teal-100 text-sm md:text-base">
            <Link href={`/products/${slug}`} className="hover:text-white transition-colors underline decoration-teal-400/50 underline-offset-4">
              {product.name}
            </Link>
            <span>/</span>
            <span>{section.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link 
            href={`/products/${slug}`}
            className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium mb-6 transition-colors"
          >
            ← Back to {product.name}
          </Link>
          
          <p className="text-gray-600 text-lg max-w-3xl">
            Explore our collection of {section.title.toLowerCase()} for {product.name.toLowerCase()}.
          </p>
        </div>

        {section.items.length > 0 && typeof section.items[0] === 'string' ? (
          // List view for string items (Molecular Biology case)
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 bg-gray-50 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">Available Products</h3>
            </div>
            <ul className="divide-y divide-gray-100">
              {section.items.map((item, i) => (
                <li key={i} className="p-4 hover:bg-teal-50 transition-colors flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          // Grid view for object items (Food Microbiology case)
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section.items.map((item, i) => (
              <a 
                key={i} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group block h-full"
              >
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-teal-500 transition-all duration-300 h-full flex flex-col">
                  <div className="h-40 p-6 flex items-center justify-center bg-gray-50 group-hover:bg-white transition-colors relative">
                    <ImageWithFallback 
                      src={item.img || "https://placehold.co/200x100?text=" + encodeURIComponent(item.name)} 
                      fallbackSrc={"https://placehold.co/200x100?text=" + encodeURIComponent(item.name)}
                      alt={item.name} 
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-4 border-t border-gray-100 bg-white flex-grow flex flex-col justify-between">
                    <h3 className="font-bold text-gray-800 text-center mb-1 group-hover:text-teal-600 transition-colors line-clamp-2">{item.name}</h3>
                    {item.description && (
                      <p className="text-xs text-gray-500 text-center mb-3 line-clamp-2">{item.description}</p>
                    )}
                    <div className="text-center">
                      <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider border border-teal-100 bg-teal-50 px-2 py-1 rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        Visit Site
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
