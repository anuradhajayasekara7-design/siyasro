import React, { useEffect, useRef, useState } from 'react';
import { galleryImages } from '../data/galleryData';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const ImageGallery = () => {
  const [visible, setVisible] = useState([]);
  const itemsRef = useRef([]);
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisible((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      itemsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Image Gallery</h1>
          <p className="text-lg text-gray-600">Browse all our laser cutting projects in detail</p>
        </div>

        {/* Back Button */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-full transition">
            ← Back to Home
          </Link>
        </div>

        {/* Full Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              data-index={index}
              ref={(el) => (itemsRef.current[index] = el)}
              onClick={() => setOpenIndex(index)}
              className={`overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-700 ease-out group
                ${visible.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {openIndex >= 0 && (
          <Lightbox
            open={openIndex >= 0}
            close={() => setOpenIndex(-1)}
            index={openIndex}
            slides={galleryImages.map((img) => ({
              src: img.src,
              alt: img.title,
            }))}
          />
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
