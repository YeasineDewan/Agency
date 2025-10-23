import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      name: 'Video Editing',
      icon: '🎥',
      description: 'Professional video editing services including cutting, color grading, sound design, and special effects.',
      features: ['4K Editing', 'Color Correction', 'Sound Design', 'Motion Graphics']
    },
    {
      name: 'Digital Marketing',
      icon: '📈',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
      features: ['Social Media Marketing', 'Content Creation', 'PPC Advertising', 'Email Marketing']
    },
    {
      name: 'Web Development',
      icon: '💻',
      description: 'Custom website development using modern technologies and best practices.',
      features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'SEO Optimization']
    },
    {
      name: 'App Development',
      icon: '📱',
      description: 'Native and cross-platform mobile app development for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'UI/UX Design']
    },
    {
      name: 'Photo Editing',
      icon: '📸',
      description: 'High-quality photo retouching and manipulation services for professional results.',
      features: ['Retouching', 'Color Correction', 'Background Removal', 'Product Photography']
    },
    {
      name: 'SEO',
      icon: '🔍',
      description: 'Search engine optimization to improve your website\'s visibility and ranking.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Local SEO']
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
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of digital services to help your business succeed in the modern world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your project and get a custom quote.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
