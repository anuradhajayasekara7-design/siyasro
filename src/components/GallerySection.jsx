import React, { useEffect, useMemo, useRef, useState } from 'react';
import { galleryImages } from '../data/galleryData';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const MAX_IMAGES = 6;

function shuffle(arr) {
  // Fisher–Yates (non-mutating)
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const GallerySection = () => {
  // pick once per mount
  const displayedImages = useMemo(() => {
    return shuffle(galleryImages).slice(0, Math.min(MAX_IMAGES, galleryImages.length));
  }, []);

  const [visible, setVisible] = useState([]);
  const itemsRef = useRef([]);
  const [openIndex, setOpenIndex] = useState(-1); // -1 = closed

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisible(prev => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    // observe only the displayed ones
    itemsRef.current.forEach(el => el && observer.observe(el));

    return () => {
      itemsRef.current.forEach(el => el && observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work Gallery</h2>
          <p className="text-xl text-gray-600">A showcase of our laser cutting and signage projects</p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              data-index={index}
              ref={el => (itemsRef.current[index] = el)}
              onClick={() => setOpenIndex(index)}
              className={`relative cursor-pointer overflow-hidden rounded-lg shadow-md transform transition-all duration-700 ease-out
                ${visible.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Lightbox View (only for the 6 displayed) */}
        {openIndex >= 0 && (
          <Lightbox
            open={openIndex >= 0}
            close={() => setOpenIndex(-1)}
            index={openIndex}
            slides={displayedImages.map(img => ({ src: img.src, alt: img.title }))}
          />
        )}

        {/* View Full Gallery Button */}
        <div className="text-center mt-12">
          <Link to="/image-gallery">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              View Full Image Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
