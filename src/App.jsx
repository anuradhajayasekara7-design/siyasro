import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import GallerySection from './components/GallerySection';
import VideosSection from './components/VideosSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';
import ServicesSection from './components/ServicesSection';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton'; // ✅ Import WhatsApp icon

// ✅ Home Page Layout
const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  useEffect(() => {
    const section = document.getElementById(activeSection);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div id="home">
          <HeroSection setActiveSection={setActiveSection} />
          <FeaturesSection />
        </div>
        <div id="gallery"><GallerySection /></div>
        <ServicesSection />
        <div id="videos"><VideosSection /></div>
        <div id="contact"><ContactSection /></div>
        <Footer />
      </div>

      {/* ✅ Floating WhatsApp icon */}
      <WhatsAppButton />
    </div>
  );
};

// ✅ App Routes
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
      </Routes>
    </Router>
  );
};

export default App;
