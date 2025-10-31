import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FaChartLine,
  FaDollarSign,
  FaBullseye,
  FaPercentage,
  FaChartArea,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaPaperPlane,
  FaTrophy,
  FaRocket,
  FaHandshake,
  FaChartBar,
  FaArrowRight,
  FaFilePdf,
  FaBell
} from 'react-icons/fa';

const AnalyticsTab = memo(({ stats }) => {
  // Simple chart component
  const SimpleChart = ({ data, color }) => (
    <svg width="100%" height="60" viewBox="0 0 100 60" className="w-full h-16">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={data.map((point, index) => `${index * (100 / (data.length - 1))},${60 - point}`).join(' ')}
      />
    </svg>
  );

  return (
    <motion.div
      key="analytics"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Analytics Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Advanced Analytics Dashboard</h1>
        <p className="text-gray-600">Comprehensive insights into your business performance and growth metrics</p>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-semibold">Total Revenue</p>
              <p className="text-3xl font-bold mt-2">${stats.totalSpending.toLocaleString()}</p>
              <div className="flex items-center mt-2">
                <FaArrowRight className="text-green-300 text-sm mr-1" />
                <span className="text-green-300 text-sm font-medium">+18.5% vs last month</span>
              </div>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <FaDollarSign className="text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-semibold">Overall ROI</p>
              <p className="text-3xl font-bold mt-2">{stats.roi.toFixed(1)}%</p>
              <div className="flex items-center mt-2">
                <FaTrophy className="text-yellow-300 text-sm mr-1" />
                <span className="text-yellow-300 text-sm font-medium">Top performer</span>
              </div>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <FaBullseye className="text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-semibold">Conversion Rate</p>
              <p className="text-3xl font-bold mt-2">{stats.conversionRate}%</p>
              <div className="flex items-center mt-2">
                <FaRocket className="text-pink-300 text-sm mr-1" />
                <span className="text-pink-300 text-sm font-medium">+5.2% improvement</span>
              </div>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <FaPercentage className="text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-semibold">Monthly Growth</p>
              <p className="text-3xl font-bold mt-2">{stats.monthlyGrowth}%</p>
              <div className="flex items-center mt-2">
                <FaChartLine className="text-green-300 text-sm mr-1" />
                <span className="text-green-300 text-sm font-medium">Trending upward</span>
              </div>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <FaChartArea className="text-2xl" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Revenue Trends Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaChartLine className="text-blue-500" />
            Revenue Trends
          </h2>
          <div className="space-y-4">
            <div className="h-48 flex items-end justify-between">
              <SimpleChart data={[20, 35, 25, 45, 30, 55, 40, 65, 50, 75, 60, 85]} color="#3B82F6" />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">12-month revenue growth: <span className="font-semibold text-green-600">+85%</span></p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaUsers className="text-green-500" />
            Customer Acquisition
          </h2>
          <div className="space-y-4">
            <div className="h-48 flex items-end justify-between">
              <SimpleChart data={[15, 25, 20, 35, 28, 45, 38, 55, 48, 65, 58, 75]} color="#10B981" />
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">New customers this month: <span className="font-semibold text-green-600">127</span></p>
          </div>
        </motion.div>
      </div>

      {/* Service Performance Analytics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-8 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FaChartBar className="text-purple-500" />
          Service Performance Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Web Development Analytics */}
          <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <FaChartLine className="text-blue-600 text-2xl" />
              <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Revenue</span>
                <span className="font-bold text-green-600">${stats.webDevelopment.totalRevenue.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Projects</span>
                <span className="font-bold">{stats.webDevelopment.completedProjects}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Value</span>
                <span className="font-bold">${stats.webDevelopment.avgProjectValue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Satisfaction</span>
                <span className="font-bold">{stats.webDevelopment.clientSatisfaction}/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">95% On-time delivery rate</p>
            </div>
          </div>

          {/* Digital Marketing Analytics */}
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <FaChartLine className="text-green-600 text-2xl" />
              <h3 className="text-xl font-bold text-gray-900">Digital Marketing</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Reach</span>
                <span className="font-bold text-blue-600">{(stats.digitalMarketing.totalReach / 1000000).toFixed(1)}M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ROI</span>
                <span className="font-bold text-green-600">{stats.digitalMarketing.roi}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Growth</span>
                <span className="font-bold text-purple-600">+{stats.digitalMarketing.monthlyGrowth}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Conversion</span>
                <span className="font-bold">{stats.digitalMarketing.conversionRate}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">85% Budget utilization</p>
            </div>
          </div>

          {/* Video Editing Analytics */}
          <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <FaChartLine className="text-purple-600 text-2xl" />
              <h3 className="text-xl font-bold text-gray-900">Video Editing</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Videos</span>
                <span className="font-bold">{stats.videoEditing.videosDelivered}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Views</span>
                <span className="font-bold text-blue-600">{(stats.videoEditing.totalViews / 1000000).toFixed(1)}M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Engagement</span>
                <span className="font-bold text-green-600">{stats.videoEditing.engagementRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Rating</span>
                <span className="font-bold">{stats.videoEditing.clientRating}/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">68% Repeat clients</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Growth Metrics & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaLightbulb className="text-yellow-500" />
            Growth Insights
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-l-4 border-yellow-400">
              <div className="flex items-center gap-3">
                <FaRocket className="text-yellow-600" />
                <div>
                  <p className="font-semibold text-gray-900">Revenue Growth</p>
                  <p className="text-sm text-gray-600">18.5% increase compared to last month</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-400">
              <div className="flex items-center gap-3">
                <FaUsers className="text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900">Customer Retention</p>
                  <p className="text-sm text-gray-600">92% of clients return for additional services</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-400">
              <div className="flex items-center gap-3">
                <FaHandshake className="text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Partnership Opportunities</p>
                  <p className="text-sm text-gray-600">3 new enterprise partnerships in progress</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-400">
              <div className="flex items-center gap-3">
                <FaTrophy className="text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Market Leadership</p>
                  <p className="text-sm text-gray-600">Top 5% performer in digital services industry</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <FaComments className="text-indigo-500" />
            Performance Metrics
          </h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FaClock className="text-blue-500" />
                <div>
                  <p className="font-semibold text-gray-900">Average Response Time</p>
                  <p className="text-sm text-gray-600">Client inquiries</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-blue-600">2.3h</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500" />
                <div>
                  <p className="font-semibold text-gray-900">Project Completion Rate</p>
                  <p className="text-sm text-gray-600">On-time delivery</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">94%</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FaStar className="text-yellow-500" />
                <div>
                  <p className="font-semibold text-gray-900">Client Satisfaction</p>
                  <p className="text-sm text-gray-600">Average rating</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-yellow-600">{stats.customerSatisfaction}/5</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FaPaperPlane className="text-purple-500" />
                <div>
                  <p className="font-semibold text-gray-900">Content Delivery</p>
                  <p className="text-sm text-gray-600">Monthly output</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-purple-600">{stats.totalContent}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Advanced Analytics Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold mb-6">Advanced Analytics Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-200 text-left">
            <FaFilePdf className="text-3xl mb-3" />
            <h3 className="font-semibold mb-2">Generate Report</h3>
            <p className="text-sm text-indigo-100">Download comprehensive analytics report</p>
          </button>
          <button className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-200 text-left">
            <FaChartArea className="text-3xl mb-3" />
            <h3 className="font-semibold mb-2">Custom Dashboard</h3>
            <p className="text-sm text-indigo-100">Create personalized analytics views</p>
          </button>
          <button className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all duration-200 text-left">
            <FaBell className="text-3xl mb-3" />
            <h3 className="font-semibold mb-2">Set Alerts</h3>
            <p className="text-sm text-indigo-100">Get notified on key metrics changes</p>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
});

AnalyticsTab.displayName = 'AnalyticsTab';

export default AnalyticsTab;
