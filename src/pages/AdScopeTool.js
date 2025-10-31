import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaChartLine, FaBullseye, FaUsers, FaCalculator, FaSearch, FaRocket, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const AdScopeTool = () => {
  const { t } = useTranslation();
  const adScope = t('adScopeTool', { returnObjects: true });

  const [activeTab, setActiveTab] = useState('campaignAnalysis');
  const [connectedAccounts, setConnectedAccounts] = useState({
    google: false,
    facebook: false,
    other: false
  });

  const [analysisData, setAnalysisData] = useState({
    impressions: 0,
    clicks: 0,
    conversions: 0,
    budget: 0
  });

  const handleAccountConnect = (platform) => {
    setConnectedAccounts(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const handleAnalysisInput = (field, value) => {
    setAnalysisData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  const calculateMetrics = () => {
    const ctr = analysisData.impressions > 0 ? (analysisData.clicks / analysisData.impressions) * 100 : 0;
    const cpc = analysisData.clicks > 0 ? analysisData.budget / analysisData.clicks : 0;
    const cpa = analysisData.conversions > 0 ? analysisData.budget / analysisData.conversions : 0;
    const roi = analysisData.budget > 0 ? ((analysisData.conversions * 50 - analysisData.budget) / analysisData.budget) * 100 : 0; // Assuming $50 avg conversion value

    return { ctr, cpc, cpa, roi };
  };

  const metrics = calculateMetrics();

  const tabs = [
    { id: 'campaignAnalysis', label: 'Campaign Analysis', icon: FaChartLine },
    { id: 'audienceInsights', label: 'Audience Insights', icon: FaUsers },
    { id: 'budgetOptimization', label: 'Budget Optimization', icon: FaCalculator },
    { id: 'performanceMetrics', label: 'Performance Metrics', icon: FaBullseye },
    { id: 'competitorAnalysis', label: 'Competitor Analysis', icon: FaSearch },
    { id: 'roiCalculator', label: 'ROI Calculator', icon: FaRocket }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full">
              <FaChartLine className="text-white text-4xl" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {adScope.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {adScope.subtitle}
          </p>
        </motion.div>

        {/* Features Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {Object.entries(adScope.features).map(([key, feature], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{adScope.howItWorks.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {adScope.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < adScope.howItWorks.steps.length - 1 && (
                  <FaArrowRight className="text-blue-500 mx-auto mt-4 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tool Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-500 text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'campaignAnalysis' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">Campaign Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect Your Accounts</h4>
                    <div className="space-y-4">
                      {Object.entries(connectedAccounts).map(([platform, connected]) => (
                        <button
                          key={platform}
                          onClick={() => handleAccountConnect(platform)}
                          className={`w-full p-4 rounded-lg border-2 transition-all duration-200 ${
                            connected
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : 'border-gray-300 hover:border-blue-500'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="capitalize font-medium">{platform} Ads</span>
                            {connected ? (
                              <FaCheckCircle className="text-green-500" />
                            ) : (
                              <FaArrowRight className="text-gray-400" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Analysis Results</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Status</div>
                        <div className="text-lg font-semibold text-green-600">
                          {Object.values(connectedAccounts).some(Boolean) ? 'Connected' : 'Not Connected'}
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-sm text-gray-600">Campaigns Analyzed</div>
                        <div className="text-lg font-semibold text-blue-600">
                          {Object.values(connectedAccounts).filter(Boolean).length * 5} campaigns
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'performanceMetrics' && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">Performance Metrics Calculator</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Impressions</label>
                      <input
                        type="number"
                        value={analysisData.impressions}
                        onChange={(e) => handleAnalysisInput('impressions', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter impressions"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Clicks</label>
                      <input
                        type="number"
                        value={analysisData.clicks}
                        onChange={(e) => handleAnalysisInput('clicks', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter clicks"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Conversions</label>
                      <input
                        type="number"
                        value={analysisData.conversions}
                        onChange={(e) => handleAnalysisInput('conversions', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter conversions"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget ($)</label>
                      <input
                        type="number"
                        value={analysisData.budget}
                        onChange={(e) => handleAnalysisInput('budget', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter budget"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Calculated Metrics</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">CTR:</span>
                          <span className="font-semibold text-blue-600">{metrics.ctr.toFixed(2)}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">CPC:</span>
                          <span className="font-semibold text-green-600">${metrics.cpc.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">CPA:</span>
                          <span className="font-semibold text-purple-600">${metrics.cpa.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">ROI:</span>
                          <span className={`font-semibold ${metrics.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {metrics.roi.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder for other tabs */}
            {activeTab !== 'campaignAnalysis' && activeTab !== 'performanceMetrics' && (
              <div className="text-center py-16">
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(tabs.find(tab => tab.id === activeTab).icon, { className: "text-4xl text-blue-600" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tabs.find(tab => tab.id === activeTab).label}
                </h3>
                <p className="text-gray-600 mb-8">
                  This feature is coming soon. Connect your accounts to unlock advanced analytics and insights.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Get Early Access
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">{adScope.cta.title}</h2>
            <p className="text-xl mb-8 opacity-90">{adScope.cta.subtitle}</p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              {adScope.cta.button}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdScopeTool;
