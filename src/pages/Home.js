import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    { name: t('home.services.videoEditing.name'), icon: '🎥', description: t('home.services.videoEditing.description') },
    { name: t('home.services.digitalMarketing.name'), icon: '📈', description: t('home.services.digitalMarketing.description') },
    { name: t('home.services.webDevelopment.name'), icon: '💻', description: t('home.services.webDevelopment.description') },
    { name: t('home.services.appDevelopment.name'), icon: '📱', description: t('home.services.appDevelopment.description') },
    { name: t('home.services.photoEditing.name'), icon: '📸', description: t('home.services.photoEditing.description') },
    { name: t('home.services.seo.name'), icon: '🔍', description: t('home.services.seo.description') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              {t('home.hero.cta')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              {t('home.services.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              {t('home.cta.cta')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
