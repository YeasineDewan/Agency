import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.ecommerceWebsite.title'),
      category: 'web',
      image: 'https://via.placeholder.com/400x300',
      description: t('portfolio.projects.ecommerceWebsite.description'),
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: t('portfolio.projects.mobileAppUI.title'),
      category: 'app',
      image: 'https://via.placeholder.com/400x300',
      description: t('portfolio.projects.mobileAppUI.description'),
      technologies: ['Figma', 'Adobe XD', 'Sketch']
    },
    {
      id: 3,
      title: t('portfolio.projects.brandVideo.title'),
      category: 'video',
      image: 'https://via.placeholder.com/400x300',
      description: t('portfolio.projects.brandVideo.description'),
      technologies: ['Adobe Premiere', 'After Effects', 'Cinema 4D']
    },
    {
      id: 4,
      title: t('portfolio.projects.socialMediaCampaign.title'),
      category: 'marketing',
      image: 'https://via.placeholder.com/400x300',
      description: t('portfolio.projects.socialMediaCampaign.description'),
      technologies: ['Canva', 'Hootsuite', 'Analytics']
    },
    {
      id: 5,
      title: t('portfolio.projects.productPhotography.title'),
      category: 'photo',
      image: 'https://via.placeholder.com/400x300',
      description: t('portfolio.projects.productPhotography.description'),
      technologies: ['Photoshop', 'Lightroom', 'Studio Lighting']
    },
    {
      id: 6,
      title: t('portfolio.projects.seoOptimization.title'),
      category: 'seo',
      image: 'https://via.placeholder.com/400x300',
      description: t('portfolio.projects.seoOptimization.description'),
      technologies: ['Google Analytics', 'SEMrush', 'Schema Markup']
    },
  ];

  const categories = [
    { id: 'all', name: t('portfolio.categories.all') },
    { id: 'web', name: t('portfolio.categories.web') },
    { id: 'app', name: t('portfolio.categories.app') },
    { id: 'video', name: t('portfolio.categories.video') },
    { id: 'marketing', name: t('portfolio.categories.marketing') },
    { id: 'photo', name: t('portfolio.categories.photo') },
    { id: 'seo', name: t('portfolio.categories.seo') },
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

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
            {t('portfolio.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 m-2 rounded-full font-semibold transition duration-300 ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('portfolio.cta.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('portfolio.cta.subtitle')}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            {t('portfolio.cta.button')}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
