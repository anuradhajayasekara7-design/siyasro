import React, { useState, useEffect } from 'react';
import heroDesktop from '../assets/siyasro_page.jpg';
import heroMobile from '../assets/siyasro_page.jpg';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-full mt-12">
      {/* Responsive Image with natural height */}
      <picture>
        <source media="(max-width: 768px)" srcSet={heroMobile} />
        <img
          src={heroDesktop}
          alt="Siyasro Advertising"
          className={`w-full h-auto object-contain transition-all duration-1000 ease-out 
            ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
      </picture>
    </section>
  );
};

export default HeroSection;
