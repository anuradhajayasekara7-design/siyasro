import React, { useState, useEffect } from 'react';
import heroDesktop from '../assets/siyasro-hero-desktop.png';
import heroMobile from '../assets/siyasro-hero-mobile.png';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100); // Delay to trigger animation
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden ">
      {/* Responsive Full Image with animation */}
      <picture>
        <source media="(max-width: 768px)" srcSet={heroMobile} />
        <img
          src={heroDesktop}
          alt="Siyasro Advertising"
          className={`w-full h-full object-contain transition-all duration-1000 ease-out 
            ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
      </picture>
    </section>
  );
};

export default HeroSection;
