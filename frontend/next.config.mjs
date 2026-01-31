/** @type {import('next').NextConfig} */
const isGhPages = process.env.GH_PAGES === 'true';
const repoName = 'DNATRIX_T';

const nextConfig = {
  // Only use 'export' for GitHub Pages. Vercel can handle standard build or export.
  // Using 'export' everywhere is safer for consistency if you want static files.
  output: isGhPages ? 'export' : undefined, 
  
  trailingSlash: true,
  
  // Only apply basePath for GitHub Pages
  basePath: isGhPages ? `/${repoName}` : '',
  assetPrefix: isGhPages ? `/${repoName}/` : '',
  
  images: {
    // Vercel supports image optimization, GitHub Pages does not
    unoptimized: isGhPages,
  },
  
  env: {
    NEXT_PUBLIC_BASE_PATH: isGhPages ? `/${repoName}` : '',
  },
};

export default nextConfig;
