import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaTrophy, FaUsers, FaCalendarAlt, FaCertificate } from 'react-icons/fa';

const CompanyProfile = () => {
  const { t } = useTranslation();

  const values = t('company.values.items', { returnObjects: true });
  const team = t('company.team.members', { returnObjects: true });
  const achievements = t('company.achievements.items', { returnObjects: true });

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
            {t('company.hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('company.hero.subtitle')}
          </p>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('company.overview.title')}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('company.overview.content')}
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-96 rounded-lg flex items-center justify-center">
              <span className="text-white text-6xl">🏢</span>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('company.mission.title')}</h3>
              <p className="text-gray-600 text-lg">{t('company.mission.content')}</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('company.vision.title')}</h3>
              <p className="text-gray-600 text-lg">{t('company.vision.content')}</p>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('company.values.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">
                  {index === 0 && '🚀'}
                  {index === 1 && '⭐'}
                  {index === 2 && '🤝'}
                  {index === 3 && '🛡️'}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('company.team.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={`https://via.placeholder.com/150?text=${member.name.split(' ').join('+')}`}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{t('company.achievements.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">
                  {index === 0 && <FaTrophy className="text-yellow-500 mx-auto" />}
                  {index === 1 && <FaUsers className="text-blue-500 mx-auto" />}
                  {index === 2 && <FaCalendarAlt className="text-green-500 mx-auto" />}
                  {index === 3 && <FaCertificate className="text-purple-500 mx-auto" />}
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{achievement}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyProfile;
