import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TermsCondition = () => {
  const { t } = useTranslation();

  const sections = [
    'acceptance',
    'services',
    'userResponsibilities',
    'intellectualProperty',
    'limitation',
    'termination',
    'governingLaw',
    'contact'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('terms.title')}
          </h1>
          <p className="text-lg text-gray-600">{t('terms.lastUpdated')}</p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t(`terms.${section}.title`)}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t(`terms.${section}.content`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            These Terms & Conditions are subject to change. Please check back regularly for updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsCondition;
