import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const [imageIndex, setImageIndex] = useState(currentIndex);

  useEffect(() => {
    setImageIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (currentIndex !== -1) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [imageIndex, currentIndex]);

  const handleNext = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
    onNext(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
    setImageIndex(prevIndex);
    onPrev(prevIndex);
  };

  if (currentIndex === -1 || !images[imageIndex]) return null;

  const currentImage = images[imageIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-60"
      >
        <X size={32} />
      </button>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 text-white hover:text-gray-300 z-60"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 text-white hover:text-gray-300 z-60"
      >
        <ChevronRight size={48} />
      </button>

      {/* Image and Info */}
      <div className="max-w-5xl max-h-full flex flex-col items-center">
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="max-w-full max-h-[80vh] object-contain"
        />
        <div className="text-white text-center mt-4">
          <h3 className="text-xl font-semibold">{currentImage.title}</h3>
          <p className="text-gray-300">{currentImage.category}</p>
          <p className="text-sm text-gray-400 mt-2">
            {imageIndex + 1} of {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
