import React from 'react';
import { X } from 'lucide-react';

const VideoPlayer = ({ url, title, onClose }) => {
  // Convert YouTube watch URL to embed format
  const getEmbedUrl = (url) => {
    return url.includes('watch?v=')
      ? url.replace('watch?v=', 'embed/')
      : url;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 z-60"
        >
          <X size={32} />
        </button>

        {/* Embedded Video */}
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            src={getEmbedUrl(url)}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
