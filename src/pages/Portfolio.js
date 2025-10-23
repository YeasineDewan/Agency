import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://via.placeholder.com/400x300',
      description: 'A modern e-commerce platform with advanced features.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Mobile App UI',
      category: 'app',
      image: 'https://via.placeholder.com/400x300',
      description: 'Clean and intuitive mobile app design for a fitness tracker.',
      technologies: ['Figma', 'Adobe XD', 'Sketch']
    },
    {
      id: 3,
      title: 'Brand Video',
      category: 'video',
      image: 'https://via.placeholder.com/400x300',
      description: 'Cinematic brand video showcasing company values.',
      technologies: ['Adobe Premiere', 'After Effects', 'Cinema 4D']
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'marketing',
      image: 'https://via.placeholder.com/400x300',
      description: 'Comprehensive social media strategy and content creation.',
      technologies: ['Canva', 'Hootsuite', 'Analytics']
    },
    {
      id: 5,
      title: 'Product Photography',
      category: 'photo',
      image: 'https://via.placeholder.com/400x300',
      description: 'Professional product photography with retouching.',
      technologies: ['Photoshop', 'Lightroom', 'Studio Lighting']
    },
    {
      id: 6,
      title: 'SEO Optimization',
      category: 'seo',
      image: 'https://via.placeholder.com/400x300',
      description: 'Complete website optimization for search engines.',
      technologies: ['Google Analytics', 'SEMrush', 'Schema Markup']
    },
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Development' },
    { id: 'app', name: 'App Design' },
    { id: 'video', name: 'Video Editing' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'photo', name: 'Photo Editing' },
    { id: 'seo', name: 'SEO' },
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
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their goals.
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
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's create something amazing together. Contact us to discuss your ideas.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
