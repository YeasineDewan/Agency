import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: t('Sadiya Rahman'),
      role: t('Digital Marketer'),
      image: 'https://via.placeholder.com/150',
      bio: t('about.team.johnDoe.bio')
    },
    {
      name: t('about.team.janeSmith.name'),
      role: t('about.team.janeSmith.role'),
      image: 'https://via.placeholder.com/150',
      bio: t('about.team.janeSmith.bio')
    },
    {
      name: t('Yeasine Dewan Shawon'),
      role: t('Web Developer and Pentester'),
      image: 'https://via.placeholder.com/150',
      bio: t('about.team.mikeJohnson.bio')
    },
  ];

  const stats = [
    { number: t('about.stats.projectsCompleted.number'), label: t('about.stats.projectsCompleted.label') },
    { number: t('about.stats.happyClients.number'), label: t('about.stats.happyClients.label') },
    { number: t('about.stats.yearsExperience.number'), label: t('about.stats.yearsExperience.label') },
    { number: t('about.stats.support.number'), label: t('about.stats.support.label') },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.hero.subtitle')}
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.story.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('about.story.paragraph1')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('about.story.paragraph2')}
              </p>
              <p className="text-gray-600">
                {t('about.story.paragraph3')}
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-96 rounded-lg flex items-center justify-center">
              <span className="text-white text-6xl">🚀</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('about.team.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.mission.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('about.mission.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">{t('about.mission.values.innovation.title')}</h3>
              <p className="text-gray-600">{t('about.mission.values.innovation.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">{t('about.mission.values.collaboration.title')}</h3>
              <p className="text-gray-600">{t('about.mission.values.collaboration.description')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">{t('about.mission.values.excellence.title')}</h3>
              <p className="text-gray-600">{t('about.mission.values.excellence.description')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
