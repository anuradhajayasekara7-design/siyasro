import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
          Services & Overview
        </h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          We provide a wide range of high-quality branding and signage solutions to elevate your business presence.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Dealer Boards",
            "Direction Boards",
            "Display Racks",
            "Event Branding",
            "Hoardings",
            "Interior and Exterior Branding",
            "Light Boards",
            "Modern 3D Signs",
            "Pylon",
            "Shop Branding",
            "Vehicle Branding",
            "Trophy",
            "Bage",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition"
            >
              <p className="text-md font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
