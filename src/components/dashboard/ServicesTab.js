import React, { memo } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaChartLine,
  FaVideo,
  FaMobileAlt,
  FaCamera,
  FaSearchengin,
  FaChartBar
} from 'react-icons/fa';

const ServicesTab = memo(({ stats }) => {
  return (
    <motion.div
      key="services"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Service-Specific Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Web Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaCode className="text-blue-500 text-2xl" />
            <h3 className="text-xl font-bold text-gray-900">Web Development</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Active Projects</span>
              <span className="font-semibold">{stats.webDevelopment.activeProjects}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Completed</span>
              <span className="font-semibold">{stats.webDevelopment.completedProjects}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Revenue</span>
              <span className="font-semibold text-green-600">${stats.webDevelopment.totalRevenue.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Satisfaction</span>
              <span className="font-semibold">{stats.webDevelopment.clientSatisfaction}/5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">On-Time Delivery</span>
              <span className="font-semibold text-green-600">{stats.webDevelopment.onTimeDelivery}%</span>
            </div>
          </div>
        </motion.div>

        {/* Digital Marketing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaChartLine className="text-green-500 text-2xl" />
            <h3 className="text-xl font-bold text-gray-900">Digital Marketing</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Active Campaigns</span>
              <span className="font-semibold">{stats.digitalMarketing.activeCampaigns}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Reach</span>
              <span className="font-semibold">{(stats.digitalMarketing.totalReach / 1000000).toFixed(1)}M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Conversion Rate</span>
              <span className="font-semibold text-green-600">{stats.digitalMarketing.conversionRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">ROI</span>
              <span className="font-semibold text-green-600">{stats.digitalMarketing.roi}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Budget Utilized</span>
              <span className="font-semibold">{stats.digitalMarketing.budgetUtilized}%</span>
            </div>
          </div>
        </motion.div>

        {/* Video Editing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaVideo className="text-purple-500 text-2xl" />
            <h3 className="text-xl font-bold text-gray-900">Video Editing</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Videos Delivered</span>
              <span className="font-semibold">{stats.videoEditing.videosDelivered}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg Processing Time</span>
              <span className="font-semibold">{stats.videoEditing.avgProcessingTime} days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Client Rating</span>
              <span className="font-semibold">{stats.videoEditing.clientRating}/5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Views</span>
              <span className="font-semibold">{(stats.videoEditing.totalViews / 1000000).toFixed(1)}M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Repeat Clients</span>
              <span className="font-semibold text-green-600">{stats.videoEditing.repeatClients}%</span>
            </div>
          </div>
        </motion.div>

        {/* App Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaMobileAlt className="text-orange-500 text-2xl" />
            <h3 className="text-xl font-bold text-gray-900">App Development</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Active Projects</span>
              <span className="font-semibold">{stats.appDevelopment.activeProjects}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Completed Apps</span>
              <span className="font-semibold">{stats.appDevelopment.completedApps}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg Dev Time</span>
              <span className="font-semibold">{stats.appDevelopment.avgDevelopmentTime} days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Downloads Generated</span>
              <span className="font-semibold text-green-600">{(stats.appDevelopment.downloadsGenerated / 1000).toFixed(0)}K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Revenue Generated</span>
              <span className="font-semibold text-green-600">${stats.appDevelopment.revenueGenerated.toLocaleString()}</span>
            </div>
          </div>
        </motion.div>

        {/* Photo Editing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaCamera className="text-pink-500 text-2xl" />
            <h3 className="text-xl font-bold text-gray-900">Photo Editing</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Images Processed</span>
              <span className="font-semibold">{stats.photoEditing.imagesProcessed.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg Turnaround</span>
              <span className="font-semibold">{stats.photoEditing.avgTurnaroundTime} days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Quality Rating</span>
              <span className="font-semibold">{stats.photoEditing.qualityRating}/5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Client Retention</span>
              <span className="font-semibold text-green-600">{stats.photoEditing.clientRetention}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Volume</span>
              <span className="font-semibold">{stats.photoEditing.monthlyVolume}</span>
            </div>
          </div>
        </motion.div>

        {/* SEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-indigo-500"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaSearchengin className="text-indigo-500 text-2xl" />
            <h3 className="text-xl font-bold text-gray-900">SEO Services</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Active Clients</span>
              <span className="font-semibold">{stats.seo.activeClients}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg Keyword Rank</span>
              <span className="font-semibold">{stats.seo.avgKeywordRank}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Traffic Growth</span>
              <span className="font-semibold text-green-600">+{stats.seo.organicTrafficGrowth}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Conversion Increase</span>
              <span className="font-semibold text-green-600">+{stats.seo.conversionIncrease}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Client Satisfaction</span>
              <span className="font-semibold">{stats.seo.clientSatisfaction}/5</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Performance Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <FaChartBar className="text-blue-500" />
          Service Performance Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Most Profitable Service</h4>
            <p className="text-2xl font-bold text-blue-600">Web Development</p>
            <p className="text-sm text-gray-600">$45,600 total revenue</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Highest Client Satisfaction</h4>
            <p className="text-2xl font-bold text-green-600">4.9/5</p>
            <p className="text-sm text-gray-600">Web Development & Photo Editing</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Fastest Growing</h4>
            <p className="text-2xl font-bold text-purple-600">Digital Marketing</p>
            <p className="text-sm text-gray-600">+22.3% monthly growth</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ServicesTab.displayName = 'ServicesTab';

export default ServicesTab;
