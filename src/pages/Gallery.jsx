import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  { src: '/images/work1.jpg' },
  { src: '/images/work2.jpg' },
  { src: '/images/work3.jpg' },
];

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="pt-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">🖼 Laser Work Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Work ${i + 1}`}
            className="rounded shadow cursor-pointer hover:opacity-80"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </div>
  );
};

export default GalleryPage;
