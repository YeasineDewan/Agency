import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'bn' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
<<<<<<< HEAD
    <nav className="bg-primary shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
=======
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
              {t('navbar.brand')}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
<<<<<<< HEAD
            <Link to="/" className="text-white hover:text-light transition duration-300">
              {t('navbar.home')}
            </Link>
            <Link to="/services" className="text-white hover:text-light transition duration-300">
              {t('navbar.services')}
            </Link>
            <Link to="/about" className="text-white hover:text-light transition duration-300">
              {t('navbar.about')}
            </Link>
            <Link to="/portfolio" className="text-white hover:text-light transition duration-300">
              {t('navbar.portfolio')}
            </Link>
            <Link to="/contact" className="text-white hover:text-light transition duration-300">
=======
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition duration-300">
              {t('navbar.home')}
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition duration-300">
              {t('navbar.services')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">
              {t('navbar.about')}
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition duration-300">
              {t('navbar.portfolio')}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
              {t('navbar.contact')}
            </Link>
            <button
              onClick={toggleLanguage}
<<<<<<< HEAD
              className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-accent transition duration-300 font-semibold"
=======
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 font-semibold"
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
            >
              {t('navbar.language')}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
<<<<<<< HEAD
              className="bg-secondary text-white px-3 py-1 rounded-full hover:bg-accent transition duration-300 text-sm font-semibold"
=======
              className="bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition duration-300 text-sm font-semibold"
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
            >
              {t('navbar.language')}
            </button>
            <button
              onClick={toggleMenu}
<<<<<<< HEAD
              className="text-white hover:text-light focus:outline-none"
=======
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
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
<<<<<<< HEAD
          className="md:hidden bg-primary shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-white hover:text-light transition duration-300">
              {t('navbar.home')}
            </Link>
            <Link to="/services" className="block px-3 py-2 text-white hover:text-light transition duration-300">
              {t('navbar.services')}
            </Link>
            <Link to="/about" className="block px-3 py-2 text-white hover:text-light transition duration-300">
              {t('navbar.about')}
            </Link>
            <Link to="/portfolio" className="block px-3 py-2 text-white hover:text-light transition duration-300">
              {t('navbar.portfolio')}
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-white hover:text-light transition duration-300">
=======
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
              {t('navbar.home')}
            </Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
              {t('navbar.services')}
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
              {t('navbar.about')}
            </Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
              {t('navbar.portfolio')}
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition duration-300">
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
              {t('navbar.contact')}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
