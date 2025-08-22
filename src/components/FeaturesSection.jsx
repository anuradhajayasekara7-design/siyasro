import React, { useEffect, useRef, useState } from 'react';
import {
  Zap,
  Award,
  Users,
  Palette,
  Layers,
  MonitorSmartphone
} from 'lucide-react';

const FeaturesSection = () => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const itemsRef = useRef([]);

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Precision Signage",
      description: "CNC and laser-cut signage crafted with pinpoint accuracy to boost visibility."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Unmatched Quality",
      description: "From materials to finish, we ensure top-tier quality in every advertising solution."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Client-Centric Approach",
      description: "Customized branding solutions tailored to your unique business goals."
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: "Creative Design",
      description: "Our talented design team transforms ideas into stunning visual assets."
    },
    {
      icon: <Layers className="w-12 h-12 text-blue-600" />,
      title: "End-to-End Services",
      description: "From concept to installation—we handle every step seamlessly."
    },
    {
      icon: <MonitorSmartphone className="w-12 h-12 text-blue-600" />,
      title: "Digital Integration",
      description: "Smart branding solutions across print and digital media platforms."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleIndexes(prev => [...new Set([...prev, index])]);
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
    <section className="py-20 bg-gray-50" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Siyasro</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We blend technology, creativity, and experience to deliver impactful signage and advertising solutions across Sri Lanka.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`text-center p-8 bg-white rounded-lg shadow-md transition-all duration-700 ease-out transform 
                ${visibleIndexes.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
