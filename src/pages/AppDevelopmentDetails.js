import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaMobile, FaCode, FaRocket, FaGem, FaArrowLeft } from 'react-icons/fa';

const AppDevelopmentDetails = () => {
  const [selectedTier, setSelectedTier] = useState('bronze-i');

  const pricingTiers = {
    'bronze-i': { name: 'Bronze I', price: 2999, color: 'from-amber-600 to-amber-800' },
    'bronze-ii': { name: 'Bronze II', price: 3999, color: 'from-amber-600 to-amber-800' },
    'bronze-iii': { name: 'Bronze III', price: 4999, color: 'from-amber-600 to-amber-800' },
    'gold-i': { name: 'Gold I', price: 7999, color: 'from-yellow-500 to-yellow-700' },
    'gold-ii': { name: 'Gold II', price: 9999, color: 'from-yellow-500 to-yellow-700' },
    'gold-iii': { name: 'Gold III', price: 12999, color: 'from-yellow-500 to-yellow-700' },
    'platinum-i': { name: 'Platinum I', price: 15999, color: 'from-slate-400 to-slate-600' },
    'platinum-ii': { name: 'Platinum II', price: 19999, color: 'from-slate-400 to-slate-600' },
    'platinum-iii': { name: 'Platinum III', price: 24999, color: 'from-slate-400 to-slate-600' },
    'diamond-i': { name: 'Diamond I', price: 29999, color: 'from-blue-400 to-blue-600' },
    'diamond-ii': { name: 'Diamond II', price: 39999, color: 'from-blue-400 to-blue-600' },
    'diamond-iii': { name: 'Diamond III', price: 49999, color: 'from-blue-400 to-blue-600' }
  };

  const tierFeatures = {
    'bronze-i': [
      'Basic mobile app (iOS or Android)',
      'Simple UI/UX design',
      'Core functionality implementation',
      'Basic testing & debugging',
      'App store submission support',
      '3 months post-launch support'
    ],
    'bronze-ii': [
      'Cross-platform mobile app',
      'Enhanced UI/UX design',
      'Advanced functionality',
      'Comprehensive testing',
      'App store optimization',
      '6 months post-launch support'
    ],
    'bronze-iii': [
      'Premium cross-platform app',
      'Custom UI/UX design',
      'Complex feature integration',
      'Automated testing suite',
      'Advanced app store optimization',
      '12 months post-launch support'
    ],
    'gold-i': [
      'Native iOS & Android apps',
      'Professional UI/UX design',
      'Backend API integration',
      'Real-time features',
      'Push notifications',
      'Analytics integration',
      'Dedicated project manager'
    ],
    'gold-ii': [
      'Enterprise mobile applications',
      'Custom UI/UX design system',
      'Advanced backend services',
      'Real-time collaboration features',
      'Advanced push notifications',
      'Custom analytics dashboard',
      'Dedicated development team'
    ],
    'gold-iii': [
      'Premium enterprise apps',
      'Brand-specific design system',
      'Microservices architecture',
      'Advanced real-time features',
      'AI/ML integration',
      'Business intelligence dashboard',
      'Senior development team'
    ],
    'platinum-i': [
      'Complex enterprise solutions',
      'Multi-platform deployment',
      'Cloud-native architecture',
      'Advanced security features',
      'Machine learning integration',
      'Custom business logic',
      'Technical architecture consultation'
    ],
    'platinum-ii': [
      'Scalable enterprise platforms',
      'Multi-tenant architecture',
      'Advanced cloud integration',
      'Enterprise security suite',
      'AI-powered features',
      'Custom workflow automation',
      'DevOps & CI/CD setup'
    ],
    'platinum-iii': [
      'Mission-critical applications',
      'High-availability architecture',
      'Advanced cloud orchestration',
      'Enterprise-grade security',
      'Advanced AI/ML capabilities',
      'Custom enterprise integrations',
      '24/7 technical support'
    ],
    'diamond-i': [
      'Next-generation applications',
      'Microservices & serverless',
      'Advanced cloud-native features',
      'Zero-trust security model',
      'Advanced AI integration',
      'Custom enterprise solutions',
      'Chief technology officer consultation'
    ],
    'diamond-ii': [
      'Revolutionary digital platforms',
      'Edge computing integration',
      'Advanced cloud orchestration',
      'Quantum-ready security',
      'Advanced AI/ML platform',
      'Custom digital transformation',
      'Executive technology advisory'
    ],
    'diamond-iii': [
      'Pioneering digital ecosystems',
      'Next-gen architecture patterns',
      'Advanced cloud-native platform',
      'Future-proof security framework',
      'Cutting-edge AI capabilities',
      'Custom innovation solutions',
      'Strategic technology partnership'
    ]
  };

  const getTierIcon = (tier) => {
    if (tier.includes('bronze')) return <FaMobile className="text-amber-500" />;
    if (tier.includes('gold')) return <FaCode className="text-yellow-500" />;
    if (tier.includes('platinum')) return <FaRocket className="text-slate-400" />;
    return <FaGem className="text-blue-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      {/* Header */}
      <div className="w-full bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/services" className="text-gray-600 hover:text-gray-800 transition-colors">
                <FaArrowLeft className="text-xl" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">App Development Services</h1>
                <p className="text-gray-600">Professional Mobile & Desktop Application Development</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">${pricingTiers[selectedTier].price.toLocaleString()}</div>
              <div className="text-sm text-gray-500">starting price</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pricing Tiers */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-6">Choose Your Development Plan</h2>

              {/* Tier Categories */}
              {['bronze', 'gold', 'platinum', 'diamond'].map((category) => (
                <div key={category} className="mb-8">
                  <h3 className={`text-xl font-semibold mb-4 capitalize flex items-center gap-2 ${
                    category === 'bronze' ? 'text-amber-600' :
                    category === 'gold' ? 'text-yellow-600' :
                    category === 'platinum' ? 'text-slate-600' : 'text-blue-600'
                  }`}>
                    {category === 'bronze' && <FaMobile />}
                    {category === 'gold' && <FaCode />}
                    {category === 'platinum' && <FaRocket />}
                    {category === 'diamond' && <FaGem />}
                    {category.charAt(0).toUpperCase() + category.slice(1)} Plans
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3].map((level) => {
                      const tierKey = `${category}-${['i', 'ii', 'iii'][level - 1]}`;
                      const tier = pricingTiers[tierKey];
                      return (
                        <motion.div
                          key={tierKey}
                          whileHover={{ scale: 1.02 }}
                          className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedTier === tierKey
                              ? `border-blue-500 bg-gradient-to-br ${tier.color} text-white`
                              : 'border-gray-200 bg-white hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedTier(tierKey)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{tier.name}</h4>
                            {getTierIcon(tierKey)}
                          </div>
                          <div className="text-2xl font-bold mb-1">${tier.price.toLocaleString()}</div>
                          <div className="text-sm opacity-75">starting price</div>
                          {selectedTier === tierKey && (
                            <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1">
                              <FaCheck className="text-xs" />
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Selected Plan Details */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-6 sticky top-24 transition-all duration-300 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-4">Plan Details</h3>
              <div className={`p-4 rounded-lg bg-gradient-to-br ${pricingTiers[selectedTier].color} text-white mb-4`}>
                <h4 className="font-semibold text-lg">{pricingTiers[selectedTier].name}</h4>
                <div className="text-3xl font-bold">${pricingTiers[selectedTier].price.toLocaleString()}</div>
                <div className="text-sm opacity-90">starting price</div>
              </div>

              <div className="space-y-3 mb-6">
                <h5 className="font-semibold text-gray-900">What's Included:</h5>
                {tierFeatures[selectedTier].map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Start Your Project
                </button>
                <Link to="/quotation-request">
                  <button className="w-full bg-gray-100 text-gray-800 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
                    Request Custom Quote
                  </button>
                </Link>
              </div>

              <div className="mt-6 text-xs text-gray-500 text-center">
                * Prices are in USD and exclude applicable taxes
              </div>
            </motion.div>
          </div>
        </div>

        {/* Service Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our App Development Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Cross-Platform Excellence</h3>
              <p className="text-gray-600">Native performance across iOS, Android, and web platforms with shared codebase efficiency</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Rapid Development</h3>
              <p className="text-gray-600">Agile methodology with continuous delivery and fast time-to-market</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-grade security with encryption, authentication, and compliance standards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppDevelopmentDetails;
