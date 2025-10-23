import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AgencyPro</h3>
            <p className="text-gray-300">
              Your trusted partner for digital solutions. We create amazing experiences.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">Video Editing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">App Development</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-300">About</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition duration-300">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-300 mb-2">Email: info@agencypro.com</p>
            <p className="text-gray-300 mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-300">Address: 123 Business St, City, State 12345</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2023 AgencyPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
