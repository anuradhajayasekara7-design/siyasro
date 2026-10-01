'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import heroImage from '../assets/siyasro_page.jpg';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-full mt-12 bg-fixed">
      {/* Responsive Image with natural height */}
      <Image
        src={heroImage}
        alt="Siyasro Advertising"
        priority
        sizes="100vw"
        className={`w-full h-auto object-contain transition-all duration-1000 ease-out 
          ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
      />
    </section>
  );
};

export default HeroSection;
