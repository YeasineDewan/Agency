import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCalendarAlt, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';

const Community = () => {
  const { t } = useTranslation();

  const initiatives = t('community.initiatives.items', { returnObjects: true });
  const events = t('community.events.events', { returnObjects: true });

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('community.hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('community.hero.subtitle')}
          </p>
        </motion.div>

        {/* Initiatives Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('community.initiatives.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">
                  {index === 0 && <FaLightbulb className="text-yellow-500" />}
                  {index === 1 && <FaUsers className="text-blue-500" />}
                  {index === 2 && <FaHandshake className="text-green-500" />}
                  {index === 3 && <FaCalendarAlt className="text-purple-500" />}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{initiative.title}</h3>
                <p className="text-gray-600 text-lg">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('community.events.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-blue-600 mr-3 text-2xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                    <p className="text-blue-600 font-medium">{event.date}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-green-400 to-blue-500 text-white p-12 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-4">{t('community.join.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t('community.join.description')}</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            {t('community.join.button')}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
