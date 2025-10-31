import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaChartLine, FaUsers, FaDollarSign, FaLaptop, FaCheckCircle } from 'react-icons/fa';

const ClientLanding = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <FaLaptop className="text-4xl" />,
      title: t('clientPortal.landing.features.dashboard'),
      description: "Access your comprehensive dashboard with real-time project updates"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: t('clientPortal.landing.features.reports'),
      description: "View detailed reports and analytics for all your projects"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: t('clientPortal.landing.features.content'),
      description: "Track content creation progress and delivery schedules"
    },
    {
      icon: <FaDollarSign className="text-4xl" />,
      title: t('clientPortal.landing.features.analytics'),
      description: "Monitor Facebook ad spending and campaign performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              {t('clientPortal.landing.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto">
              {t('clientPortal.landing.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/client-login"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                {t('clientPortal.landing.signIn')}
              </Link>
              <Link
                to="/client-register"
                className="bg-white/10 backdrop-blur-lg text-white border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition duration-300"
              >
                {t('clientPortal.landing.register')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools to manage and track your projects
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="text-5xl font-bold text-blue-600 mb-4">150+</div>
                <div className="text-xl text-gray-600">Active Clients</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-5xl font-bold text-green-600 mb-4">95%</div>
                <div className="text-xl text-gray-600">Client Satisfaction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-5xl font-bold text-purple-600 mb-4">500+</div>
                <div className="text-xl text-gray-600">Projects Delivered</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Use Our Client Portal?
            </h2>
          </motion.div>
          <div className="space-y-8">
            {[
              "Real-time project tracking and updates",
              "Detailed analytics and performance reports",
              "Content delivery management",
              "Facebook ad spending tracking",
              "Secure 24/7 access from anywhere",
              "Dedicated support and communication"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-center bg-gray-50 p-6 rounded-xl"
              >
                <FaCheckCircle className="text-green-500 text-3xl mr-6" />
                <span className="text-xl text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
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
              Sign in to access your dashboard or create a new account to begin
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/client-login"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                Sign In Now
              </Link>
              <Link
                to="/client-register"
                className="bg-white/10 backdrop-blur-lg text-white border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition duration-300"
              >
                Register
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClientLanding;

