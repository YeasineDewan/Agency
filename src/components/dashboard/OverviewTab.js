import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  FaFileAlt,
  FaChartLine,
  FaBullseye,
  FaStar,
  FaArrowRight,
  FaImage,
  FaEdit,
  FaVideo,
  FaFacebook,
  FaEye,
  FaShareAlt,
  FaPercentage,
  FaClock,
  FaCalendarAlt
} from 'react-icons/fa';

const OverviewTab = memo(({ stats, recentActivities, t }) => {
  // Memoize filtered activities if needed (currently no filtering in overview)
  const activities = useMemo(() => recentActivities, [recentActivities]);

  return (
    <motion.div
      key="overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">{t('clientPortal.dashboard.totalContent')}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalContent}</p>
              <div className="flex items-center mt-2">
                <FaArrowRight className="text-green-500 text-sm mr-1" />
                <span className="text-green-500 text-sm font-medium">+12% this month</span>
              </div>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FaFileAlt className="text-blue-600 text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Total ROI</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">${stats.roi.toFixed(1)}%</p>
              <div className="flex items-center mt-2">
                <FaBullseye className="text-green-500 text-sm mr-1" />
                <span className="text-green-500 text-sm font-medium">Excellent performance</span>
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FaBullseye className="text-green-600 text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">{t('clientPortal.dashboard.activeProjects')}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeProjects}</p>
              <div className="flex items-center mt-2">
                <FaChartLine className="text-purple-500 text-sm mr-1" />
                <span className="text-purple-500 text-sm font-medium">On track</span>
              </div>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <FaChartLine className="text-purple-600 text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Customer Satisfaction</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">{stats.customerSatisfaction}/5</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-500 text-sm mr-1" />
                <span className="text-yellow-500 text-sm font-medium">Highly satisfied</span>
              </div>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <FaStar className="text-orange-600 text-2xl" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detailed Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Content Statistics */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaFileAlt className="text-blue-500" />
            Content Overview
          </h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FaImage className="text-blue-500 text-2xl" />
                <div>
                  <p className="font-semibold text-gray-900">Images Delivered</p>
                  <p className="text-sm text-gray-600">Social media graphics, posts</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-blue-600">120</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FaEdit className="text-green-500 text-2xl" />
                <div>
                  <p className="font-semibold text-gray-900">Blog Posts</p>
                  <p className="text-sm text-gray-600">Articles and content</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">85</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FaVideo className="text-purple-500 text-2xl" />
                <div>
                  <p className="font-semibold text-gray-900">Videos Created</p>
                  <p className="text-sm text-gray-600">Marketing and promotional</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-purple-600">40</span>
            </div>
          </div>
        </motion.div>

        {/* Facebook Ad Statistics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaFacebook className="text-blue-600" />
            Facebook Marketing Stats
          </h2>
          <div className="space-y-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
              <p className="text-sm mb-2">Total Ad Spending</p>
              <p className="text-3xl font-bold">${stats.facebookSpending.toFixed(2)}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <FaEye className="text-blue-500 text-2xl mb-2" />
                <p className="text-sm text-gray-600">Reach</p>
                <p className="text-xl font-bold text-gray-900">{(stats.reach / 1000).toFixed(0)}K</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <FaShareAlt className="text-green-500 text-2xl mb-2" />
                <p className="text-sm text-gray-600">Engagement</p>
                <p className="text-xl font-bold text-gray-900">{(stats.engagement / 1000).toFixed(0)}K</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <FaPercentage className="text-purple-500 text-2xl mb-2" />
                <p className="text-sm text-gray-600">Conversion</p>
                <p className="text-xl font-bold text-gray-900">{stats.conversionRate}%</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <FaClock className="text-orange-500 text-2xl mb-2" />
                <p className="text-sm text-gray-600">Clicks</p>
                <p className="text-xl font-bold text-gray-900">4.2K</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Activities */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FaCalendarAlt className="text-blue-500" />
          Recent Activities
        </h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  activity.status === 'completed' ? 'bg-green-100 text-green-600' :
                  activity.status === 'active' ? 'bg-blue-100 text-blue-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  {activity.type === 'content' ? <FaFileAlt /> :
                   activity.type === 'ad' ? <FaFacebook /> :
                   activity.type === 'video' ? <FaVideo /> :
                   <FaImage />}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{activity.title}</p>
                  <p className="text-sm text-gray-600">{activity.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  activity.status === 'completed' ? 'bg-green-100 text-green-700' :
                  activity.status === 'active' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {activity.status}
                </span>
                <FaArrowRight className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold mb-6">{t('clientPortal.dashboard.quickLinks')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="#" className="bg-white/10 backdrop-blur-lg rounded-lg p-4 hover:bg-white/20 transition">
            <FaFileAlt className="text-3xl mb-2" />
            <p className="font-semibold">View All Content</p>
          </Link>
          <Link to="#" className="bg-white/10 backdrop-blur-lg rounded-lg p-4 hover:bg-white/20 transition">
            <FaChartLine className="text-3xl mb-2" />
            <p className="font-semibold">Campaign Reports</p>
          </Link>
          <Link to="/contact" className="bg-white/10 backdrop-blur-lg rounded-lg p-4 hover:bg-white/20 transition">
            <FaEdit className="text-3xl mb-2" />
            <p className="font-semibold">Request New Content</p>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
});

OverviewTab.displayName = 'OverviewTab';

export default OverviewTab;
