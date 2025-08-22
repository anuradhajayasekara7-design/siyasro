import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-20 px-4 text-center">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 rounded-lg shadow">
        <h1 className="text-4xl font-bold mb-4">🔲 Welcome to LaserWorks</h1>
        <p className="text-gray-700 max-w-xl mx-auto mb-6">
          We specialize in high-quality laser cutting and advertisement board designs. Explore our work and see what we can create for your business!
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/gallery" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">🖼 View Gallery</Link>
          <Link to="/videos" className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-800 transition">🎥 Watch Videos</Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="mt-12 grid md:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📐 Precision Cutting</h3>
          <p className="text-sm text-gray-600">We deliver precise and clean cuts for acrylic, wood, metal, and more.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🧩 Custom Designs</h3>
          <p className="text-sm text-gray-600">Bring your imagination to life with custom laser-cut business signs and logos.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🚚 Fast Delivery</h3>
          <p className="text-sm text-gray-600">We ensure quick turnaround time and delivery of your advertising materials.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
