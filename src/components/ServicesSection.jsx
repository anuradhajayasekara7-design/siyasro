import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CheckCircle } from 'lucide-react';

const services = [
  'Dealer Boards',
  'Direction Boards',
  'Display Racks',
  'Event Branding',
  'Hoardings',
  'Interior and Exterior Branding',
  'Light Boards',
  'Modern 3D Signs',
  'Pylon',
  'Shop Branding',
  'Vehicle Branding',
  'Trophy',
  'Bage'
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100" id="services">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Services & Overview</h2>
          <p className="text-lg text-gray-600">
            We provide a wide range of high-quality branding and signage solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="flex items-start gap-4 bg-white shadow-md p-5 rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <CheckCircle className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
              <p className="text-gray-800 font-medium text-base">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
