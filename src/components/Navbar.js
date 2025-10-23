import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              AgencyPro
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
              About
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Portfolio
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
              Home
            </Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
              Services
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
              About
            </Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
              Portfolio
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
