import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaStar, FaChartLine, FaUsers, FaTrophy } from 'react-icons/fa';

const Clients = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "John Smith",
      company: "Tech Solutions Inc.",
      role: "CEO",
      image: "👨‍💼",
      content: "AgencyPro transformed our online presence. Their digital marketing strategies increased our revenue by 300% in just 6 months!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Fashion Forward",
      role: "Marketing Director",
      image: "👩‍💼",
      content: "Outstanding video production and social media management. Our brand awareness has skyrocketed thanks to their creative content.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Pro",
      role: "Founder",
      image: "👨‍💼",
      content: "Best investment we made this year! The SEO and web development services exceeded our expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Davis",
      company: "Creative Agency",
      role: "Co-Founder",
      image: "👩‍💼",
      content: "Professional, creative, and results-driven. AgencyPro helped us reach our target audience effectively with their strategic campaigns.",
      rating: 5
    }
  ];

  const stats = [
    { icon: FaUsers, number: "150+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
    { icon: FaChartLine, number: "500+", label: "Projects Completed", color: "from-green-500 to-emerald-500" },
    { icon: FaTrophy, number: "95%", label: "Client Satisfaction", color: "from-yellow-500 to-orange-500" },
    { icon: FaChartLine, number: "300%", label: "Average ROI", color: "from-purple-500 to-pink-500" }
  ];

  const clients = [
    "TechCorp", "DigitalPlus", "InnovationHub", "FutureTech", "SmartBiz",
    "CloudScale", "WebMaster", "DataDriven", "TechVision", "CodeCraft",
    "DesignStudio", "MarketingPro", "BusinessPlus", "GlobalNet", "TechStars"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              {t('clients.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
              {t('clients.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br text-white p-8 rounded-2xl shadow-xl"
              >
                <div className={`bg-gradient-to-br ${stat.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                  <stat.icon className="text-white text-2xl" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client List Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Valued Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders and growing businesses worldwide
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-gray-100 hover:border-blue-500"
              >
                <div className="text-gray-800 font-bold text-lg">{client}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('clients.testimonial')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What our clients are saying about us
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-start mb-6">
                  <div className="text-5xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600 font-semibold">{testimonial.company}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
                  <p className="text-gray-700 text-lg italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
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
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Join hundreds of satisfied clients and transform your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                Get Started
              </Link>
              <Link
                to="/client-portal"
                className="bg-white/10 backdrop-blur-lg text-white border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition duration-300"
              >
                Client Portal
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;

