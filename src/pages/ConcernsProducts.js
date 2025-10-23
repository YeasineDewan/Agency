import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ConcernsProducts = () => {
  const { t } = useTranslation();

  const concerns = [
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing solutions to boost your online presence.',
      icon: '📈',
    },
    {
      title: 'Video Production',
      description: 'Professional video content creation for brands and businesses.',
      icon: '🎥',
    },
    {
      title: 'Web Development',
      description: 'Custom website development and maintenance services.',
      icon: '💻',
    },
    {
      title: 'Photo Editing',
      description: 'High-quality photo editing and retouching services.',
      icon: '📸',
    },
  ];

  const products = [
    {
      name: 'Marketing Automation Tool',
      description: 'Streamline your marketing efforts with our automated tools.',
      features: ['Lead Generation', 'Email Campaigns', 'Analytics Dashboard'],
    },
    {
      name: 'Video Editing Suite',
      description: 'Professional video editing software for content creators.',
      features: ['4K Support', 'AI Enhancement', 'Multi-platform Export'],
    },
    {
      name: 'Website Builder',
      description: 'Drag-and-drop website builder for quick deployments.',
      features: ['Responsive Design', 'SEO Optimized', 'E-commerce Ready'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Our Concerns & Products
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
              Discover our expertise areas and innovative products designed to elevate your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Concerns Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Areas of Concern
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in delivering exceptional services across multiple domains.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {concerns.map((concern, index) => (
              <motion.div
                key={concern.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="text-6xl mb-6 text-center">{concern.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{concern.title}</h3>
                <p className="text-gray-600 text-center">{concern.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative tools and solutions to enhance your business operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Contact us today to learn more about our services and products.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-light transition duration-300 shadow-lg"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ConcernsProducts;
