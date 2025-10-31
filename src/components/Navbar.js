import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    // Guard against missing i18n
    if (i18n && typeof i18n.changeLanguage === 'function') {
      const newLang = (i18n.language === 'en' ? 'bn' : 'en');
      i18n.changeLanguage(newLang);
    } else {
      console.warn('i18n not ready yet');
    }
  };

  return (
    <nav className="bg-primary border-b border-secondary overflow-hidden fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              {t('navbar.brand')}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
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
              {t('navbar.contact')}
            </Link>
            <Link to="/client-portal" className="text-white hover:text-light transition duration-300">
              {t('navbar.clientPortal')}
            </Link>
            <button
              onClick={toggleLanguage}
              className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-accent transition duration-300 font-semibold"
            >
              {t('navbar.language')}
            </button>
            
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="bg-secondary text-white px-3 py-1 rounded-full hover:bg-accent transition duration-300 text-sm font-semibold"
            >
              {t ? t('navbar.language') : 'EN/BN'}
            </button>
            
            <button
              onClick={toggleMenu}
              className="text-white hover:text-light focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link to="/" className="block px-3 py-2 text-white hover:text-light transition duration-300 rounded-md hover:bg-white/10">
                  {t ? t('navbar.home') : 'Home'}
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <Link to="/client-portal" className="block px-3 py-2 text-white hover:text-light transition duration-300 rounded-md hover:bg-white/10">
                  {t ? t('navbar.clientPortal') : 'Client Portal'}
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <Link to="/services" className="block px-3 py-2 text-white hover:text-light transition duration-300 rounded-md hover:bg-white/10">
                  {t ? t('navbar.services') : 'Services'}
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/about" className="block px-3 py-2 text-white hover:text-light transition duration-300 rounded-md hover:bg-white/10">
                  {t ? t('navbar.about') : 'About'}
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <Link to="/portfolio" className="block px-3 py-2 text-white hover:text-light transition duration-300 rounded-md hover:bg-white/10">
                  {t ? t('navbar.portfolio') : 'Portfolio'}
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/contact" className="block px-3 py-2 text-white hover:text-light transition duration-300 rounded-md hover:bg-white/10">
                  {t ? t('navbar.contact') : 'Contact'}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
