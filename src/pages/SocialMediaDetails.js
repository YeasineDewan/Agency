import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaShare, FaUsers, FaBullhorn, FaGem, FaArrowLeft } from 'react-icons/fa';

const SocialMediaDetails = () => {
  const [selectedTier, setSelectedTier] = useState('bronze-i');

  const pricingTiers = {
    'bronze-i': { name: 'Bronze I', price: 299, color: 'from-amber-600 to-amber-800' },
    'bronze-ii': { name: 'Bronze II', price: 399, color: 'from-amber-600 to-amber-800' },
    'bronze-iii': { name: 'Bronze III', price: 499, color: 'from-amber-600 to-amber-800' },
    'gold-i': { name: 'Gold I', price: 699, color: 'from-yellow-500 to-yellow-700' },
    'gold-ii': { name: 'Gold II', price: 899, color: 'from-yellow-500 to-yellow-700' },
    'gold-iii': { name: 'Gold III', price: 1099, color: 'from-yellow-500 to-yellow-700' },
    'platinum-i': { name: 'Platinum I', price: 1499, color: 'from-slate-400 to-slate-600' },
    'platinum-ii': { name: 'Platinum II', price: 1899, color: 'from-slate-400 to-slate-600' },
    'platinum-iii': { name: 'Platinum III', price: 2299, color: 'from-slate-400 to-slate-600' },
    'diamond-i': { name: 'Diamond I', price: 2999, color: 'from-blue-400 to-blue-600' },
    'diamond-ii': { name: 'Diamond II', price: 3799, color: 'from-blue-400 to-blue-600' },
    'diamond-iii': { name: 'Diamond III', price: 4599, color: 'from-blue-400 to-blue-600' }
  };

  const tierFeatures = {
    'bronze-i': [
      'Basic social media setup (2 platforms)',
      'Content calendar (4 posts/week)',
      'Basic engagement monitoring',
      'Monthly performance report',
      'Email support'
    ],
    'bronze-ii': [
      'Standard social media management (3 platforms)',
      'Content creation & scheduling (6 posts/week)',
      'Community engagement',
      'Basic analytics & reporting',
      'Priority email support'
    ],
    'bronze-iii': [
      'Professional social media management (4 platforms)',
      'Advanced content strategy (8 posts/week)',
      'Community management',
      'Detailed analytics dashboard',
      'Phone support'
    ],
    'gold-i': [
      'Business social media strategy (5 platforms)',
      'Premium content creation',
      'Influencer collaboration',
      'Advanced analytics & insights',
      'Competitor analysis',
      'Weekly strategy calls',
      'Dedicated account manager'
    ],
    'gold-ii': [
      'Enterprise social media management (all platforms)',
      'Custom content production',
      'Brand ambassador program',
      'Real-time analytics',
      'Crisis management',
      'Real-time collaboration',
      'Senior account manager'
    ],
    'gold-iii': [
      'Corporate social media empire',
      'Premium content studio',
      'Global influencer network',
      'AI-powered analytics',
      'Multi-brand management',
      'Real-time collaboration',
      'Executive account manager'
    ],
    'platinum-i': [
      'Elite social media command center',
      'Bespoke content creation studio',
      'Enterprise influencer ecosystem',
      'Predictive analytics platform',
      'Global brand monitoring',
      'Custom API integrations',
      'Bi-weekly executive calls',
      'Chief social officer access'
    ],
    'platinum-ii': [
      'Ultimate social media dominion',
      'Revolutionary content innovation',
      'Metaverse social integration',
      'Neural network analytics',
      'Omnichannel brand presence',
      'AI content optimization',
      'Weekly executive calls',
      'VP of social media access'
    ],
    'platinum-iii': [
      'Pinnacle social media sovereignty',
      'Quantum content creation',
      'Interdimensional brand presence',
      'Conscious AI storytelling',
      'Multiverse social engagement',
      'Predictive social intelligence',
      'Daily executive calls',
      'Chief innovation officer access'
    ],
    'diamond-i': [
      'Legendary social media legend',
      'Next-gen content revolution',
      'Quantum influencer networks',
      'AI-driven social orchestration',
      'Global sentiment analysis',
      'Blockchain social verification',
      'Custom executive dashboard',
      '24/7 social media czar'
    ],
    'diamond-ii': [
      'Ultimate social media visionary',
      'Revolutionary social technologies',
      'Neural social ecosystems',
      'Quantum social analytics',
      'Interplanetary brand reach',
      'AI social consciousness',
      'Executive command center',
      'Chief visionary officer access'
    ],
    'diamond-iii': [
      'Pinnacle social media transcendence',
      'Quantum social revolution',
      'Conscious social networks',
      'Interdimensional social presence',
      'Quantum social intelligence',
      'AI social enlightenment',
      'C-suite executive access',
      'Visionary social leadership'
    ]
  };

  const getTierIcon = (tier) => {
    if (tier.includes('bronze')) return <FaShare className="text-amber-500" />;
    if (tier.includes('gold')) return <FaUsers className="text-yellow-500" />;
    if (tier.includes('platinum')) return <FaBullhorn className="text-slate-400" />;
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
                <h1 className="text-3xl font-bold text-gray-900">Social Media Management</h1>
                <p className="text-gray-600">Strategic Social Media Marketing & Management</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">${pricingTiers[selectedTier].price}</div>
              <div className="text-sm text-gray-500">per month</div>
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
              <h2 className="text-2xl font-bold mb-6">Choose Your Plan</h2>

              {/* Tier Categories */}
              {['bronze', 'gold', 'platinum', 'diamond'].map((category) => (
                <div key={category} className="mb-8">
                  <h3 className={`text-xl font-semibold mb-4 capitalize flex items-center gap-2 ${
                    category === 'bronze' ? 'text-amber-600' :
                    category === 'gold' ? 'text-yellow-600' :
                    category === 'platinum' ? 'text-slate-600' : 'text-blue-600'
                  }`}>
                    {category === 'bronze' && <FaShare />}
                    {category === 'gold' && <FaUsers />}
                    {category === 'platinum' && <FaBullhorn />}
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
                          <div className="text-2xl font-bold mb-1">${tier.price}</div>
                          <div className="text-sm opacity-75">per month</div>
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
                <div className="text-3xl font-bold">${pricingTiers[selectedTier].price}</div>
                <div className="text-sm opacity-90">per month</div>
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
                  Start Your Campaign
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
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Social Media Management?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Data-Driven Growth</h3>
              <p className="text-gray-600">Analytics-powered strategies that deliver measurable results and ROI</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Targeted Engagement</h3>
              <p className="text-gray-600">Precise audience targeting and authentic engagement that builds loyalty</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Viral Potential</h3>
              <p className="text-gray-600">Creative content strategies designed to maximize reach and engagement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMediaDetails;
