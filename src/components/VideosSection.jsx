import React, { useState } from 'react';
import { videos } from '../data/videoData';
import VideoPlayer from './VideoPlayer';
import { Play } from 'lucide-react';

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Process Videos</h2>
          <p className="text-xl text-gray-600">
            Watch our laser cutting technology in action
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-semibold">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Player */}
        {selectedVideo && (
          <VideoPlayer
            url={selectedVideo.url}
            title={selectedVideo.title}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </div>
    </section>
  );
};

export default VideosSection;
