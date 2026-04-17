import { products } from './data/products';
import { events } from './data/events';

export default function sitemap() {
  const baseUrl = 'https://www.dnatrixme.com';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/careers',
    '/contact',
    '/events',
    '/products',
    '/services',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic event routes
  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: event.date ? new Date(event.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...eventRoutes];
}
