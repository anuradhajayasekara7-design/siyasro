import React from 'react';
import { Zap, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2">

          {/* Logo + Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Siyasro</span>
            </div>
            <p className="text-gray-400">
              Trusted partner in signage, event branding, and creative advertising across Sri Lanka.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Custom Signage</li>
              <li>Event Branding</li>
              <li>3D Letter Boards</li>
              <li>Vehicle Graphics</li>
              <li>LED Light Boards</li>
              <li>Digital Print Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><Phone size={18} /> +94 77 788 1715</li>
              <li className="flex items-center gap-2"><Mail size={18} /> info@siyasro.lk</li>
              <li>No. 58, Main Street, Kiribathgoda</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Siyasro Advertising Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
