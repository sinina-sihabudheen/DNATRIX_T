import React from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/app/data/products';
import { productDetails } from '@/app/data/product-details';
import ImageWithFallback from '@/components/ImageWithFallback';
import Link from 'next/link';

// Helper to create slug from title
const toSlug = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) {
    notFound();
  }

  const content = productDetails[slug];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={content?.heroImg || '/images/hero-bg.jpg'} 
            fallbackSrc="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=2000&q=80"
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-500 drop-shadow-lg">{product.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {content?.intro ? (
          <p className="text-gray-700 mb-10 leading-relaxed">
            {content.intro}
          </p>
        ) : (
          <p className="text-gray-700 mb-10 leading-relaxed">
            Detailed content for {product.name} is coming soon. Explore our categories below.
          </p>
        )}

        {/* Display Subcategories as Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {(content?.sections || []).map((section, idx) => (
            <Link 
              key={idx} 
              href={`/products/${slug}/${toSlug(section.title)}`}
              className="group block"
            >
              <div className="border-2 border-transparent hover:border-orange-300 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-100 relative">
                  <ImageWithFallback 
                    src={section.img}
                    fallbackSrc={"https://placehold.co/400x300?text=" + encodeURIComponent(section.title)}
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors">{section.title}</h3>
                  <p className="text-sm text-gray-500">
                    {section.items.length} {
                      section.items.length > 0 && typeof section.items[0] === 'string'
                        ? (section.items.length === 1 ? 'Product' : 'Products')
                        : (section.items.length === 1 ? 'Brand' : 'Brands')
                    } available
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {content?.brands && content.brands.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl text-teal-600 font-bold mb-4">Brands</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center opacity-80 grayscale hover:grayscale-0 transition">
              {content.brands.map((src, i) => (
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
        )}
      </div>
    </div>
  );
}
