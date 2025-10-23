import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      name: t('services.videoEditing.name'),
      icon: '🎥',
      description: t('services.videoEditing.description'),
      features: [
        t('services.videoEditing.features.4kEditing'),
        t('services.videoEditing.features.colorCorrection'),
        t('services.videoEditing.features.soundDesign'),
        t('services.videoEditing.features.motionGraphics')
      ]
    },
    {
      name: t('services.digitalMarketing.name'),
      icon: '📈',
      description: t('services.digitalMarketing.description'),
      features: [
        t('services.digitalMarketing.features.socialMedia'),
        t('services.digitalMarketing.features.contentCreation'),
        t('services.digitalMarketing.features.ppcAdvertising'),
        t('services.digitalMarketing.features.emailMarketing')
      ]
    },
    {
      name: t('services.webDevelopment.name'),
      icon: '💻',
      description: t('services.webDevelopment.description'),
      features: [
        t('services.webDevelopment.features.responsiveDesign'),
        t('services.webDevelopment.features.ecommerce'),
        t('services.webDevelopment.features.cmsIntegration'),
        t('services.webDevelopment.features.seoOptimization')
      ]
    },
    {
      name: t('services.appDevelopment.name'),
      icon: '📱',
      description: t('services.appDevelopment.description'),
      features: [
        t('services.appDevelopment.features.iosDevelopment'),
        t('services.appDevelopment.features.androidDevelopment'),
        t('services.appDevelopment.features.crossPlatform'),
        t('services.appDevelopment.features.uiuxDesign')
      ]
    },
    {
      name: t('services.photoEditing.name'),
      icon: '📸',
      description: t('services.photoEditing.description'),
      features: [
        t('services.photoEditing.features.retouching'),
        t('services.photoEditing.features.colorCorrection'),
        t('services.photoEditing.features.backgroundRemoval'),
        t('services.photoEditing.features.productPhotography')
      ]
    },
    {
      name: t('services.seo.name'),
      icon: '🔍',
      description: t('services.seo.description'),
      features: [
        t('services.seo.features.keywordResearch'),
        t('services.seo.features.onPageSeo'),
        t('services.seo.features.technicalSeo'),
        t('services.seo.features.localSeo')
      ]
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 group overflow-hidden"
            >
              <div className="relative">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  More Details
                </button>
              </Link>
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('services.cta.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('services.cta.subtitle')}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            {t('services.cta.button')}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
