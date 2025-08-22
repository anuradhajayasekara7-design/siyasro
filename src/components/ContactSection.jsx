import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-800 text-white" id="contact">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">
            Have a project in mind? We’d love to hear from you!
          </p>
        </div>

        {/* Contact Info Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-700 rounded-lg p-6 text-center shadow hover:shadow-xl transition">
            <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-300">+94 77 788 1715</p>
          </div>

          <div className="bg-gray-700 rounded-lg p-6 text-center shadow hover:shadow-xl transition">
            <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-300">siyasroads@gmail.com</p>
          </div>

          <div className="bg-gray-700 rounded-lg p-6 text-center shadow hover:shadow-xl transition">
            <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-300">
             117/B <br />
              Metikotuwa,dankotuwa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
