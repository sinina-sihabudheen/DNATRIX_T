'use client';

import React, { useState, useEffect } from 'react';

/**
 * Image component that handles fallback on error.
 * Use this in Server Components where you can't use onError handlers directly on img tags.
 */
export default function ImageWithFallback({ 
  src, 
  fallbackSrc, 
  fallback, // ReactNode to render if image fails and no fallbackSrc is provided
  alt, 
  className, 
  ...props 
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  const getPath = (path) => {
    if (typeof path === 'string' && path.startsWith('/') && basePath) {
       // Avoid double prefixing
       if (path.startsWith(basePath)) return path;
       return `${basePath}${path}`;
    }
    return path;
  };

  const [imgSrc, setImgSrc] = useState(getPath(src));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImgSrc(getPath(src));
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallbackSrc) {
        setImgSrc(getPath(fallbackSrc));
      }
    }
  };

  if (hasError && !fallbackSrc) {
    if (fallback) {
      return fallback;
    }
    // Default placeholder if no fallback provided
    return (
       <img 
        src="https://placehold.co/600x400?text=Image+Not+Found" 
        alt={alt} 
        className={className} 
        {...props} 
      />
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}
