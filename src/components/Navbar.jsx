import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = ['Home siyas', 'Gallery', 'Services', 'Videos', 'Contact'];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Siyasro Logo"
            className="h-10 w-20 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className={`text-gray-800 font-medium hover:text-blue-600 transition ${
                activeSection === item.toLowerCase() ? 'text-blue-600' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col items-start px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setMenuOpen(false); // Close menu on click
                }}
                className={`text-gray-800 text-left w-full py-2 font-medium hover:text-blue-600 transition ${
                  activeSection === item.toLowerCase() ? 'text-blue-600' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
