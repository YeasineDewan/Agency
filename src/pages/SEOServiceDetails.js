import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaStar, FaRocket, FaGem, FaArrowLeft } from 'react-icons/fa';

const SEOServiceDetails = () => {
  const [selectedTier, setSelectedTier] = useState('bronze-i');

  const pricingTiers = {
    'bronze-i': { name: 'Bronze I', price: 299, color: 'from-amber-600 to-amber-800' },
    'bronze-ii': { name: 'Bronze II', price: 399, color: 'from-amber-600 to-amber-800' },
    'bronze-iii': { name: 'Bronze III', price: 499, color: 'from-amber-600 to-amber-800' },
    'gold-i': { name: 'Gold I', price: 699, color: 'from-yellow-500 to-yellow-700' },
    'gold-ii': { name: 'Gold II', price: 899, color: 'from-yellow-500 to-yellow-700' },
    'gold-iii': { name: 'Gold III', price: 1099, color: 'from-yellow-500 to-yellow-700' },
    'platinum-i': { name: 'Platinum I', price: 1399, color: 'from-slate-400 to-slate-600' },
    'platinum-ii': { name: 'Platinum II', price: 1699, color: 'from-slate-400 to-slate-600' },
    'platinum-iii': { name: 'Platinum III', price: 1999, color: 'from-slate-400 to-slate-600' },
    'diamond-i': { name: 'Diamond I', price: 2499, color: 'from-blue-400 to-blue-600' },
    'diamond-ii': { name: 'Diamond II', price: 2999, color: 'from-blue-400 to-blue-600' },
    'diamond-iii': { name: 'Diamond III', price: 3499, color: 'from-blue-400 to-blue-600' }
  };

  const tierFeatures = {
    'bronze-i': [
      'Keyword Research (5 keywords)',
      'On-page SEO optimization',
      'Basic technical SEO audit',
      'Monthly performance report',
      'Email support'
    ],
    'bronze-ii': [
      'Keyword Research (10 keywords)',
      'On-page SEO optimization',
      'Basic technical SEO audit',
      'Content optimization (2 pages)',
      'Monthly performance report',
      'Email support'
    ],
    'bronze-iii': [
      'Keyword Research (15 keywords)',
      'On-page SEO optimization',
      'Basic technical SEO audit',
      'Content optimization (5 pages)',
      'Monthly performance report',
      'Priority email support'
    ],
    'gold-i': [
      'Advanced Keyword Research (20 keywords)',
      'Comprehensive on-page SEO',
      'Technical SEO audit & fixes',
      'Content optimization (10 pages)',
      'Local SEO setup',
      'Monthly performance report',
      'Phone support'
    ],
    'gold-ii': [
      'Advanced Keyword Research (30 keywords)',
      'Comprehensive on-page SEO',
      'Technical SEO audit & fixes',
      'Content optimization (15 pages)',
      'Local SEO setup & management',
      'Monthly performance report',
      'Phone & chat support'
    ],
    'gold-iii': [
      'Advanced Keyword Research (40 keywords)',
      'Comprehensive on-page SEO',
      'Technical SEO audit & fixes',
      'Content optimization (20 pages)',
      'Local SEO setup & management',
      'Schema markup implementation',
      'Monthly performance report',
      'Dedicated account manager'
    ],
    'platinum-i': [
      'Premium Keyword Research (50 keywords)',
      'Enterprise on-page SEO',
      'Advanced technical SEO',
      'Content optimization (30 pages)',
      'Complete local SEO',
      'Schema markup implementation',
      'Link building (10 links)',
      'Weekly performance report',
      'Dedicated account manager'
    ],
    'platinum-ii': [
      'Premium Keyword Research (70 keywords)',
      'Enterprise on-page SEO',
      'Advanced technical SEO',
      'Content optimization (40 pages)',
      'Complete local SEO',
      'Schema markup implementation',
      'Link building (20 links)',
      'Competitor analysis',
      'Weekly performance report',
      'Dedicated account manager'
    ],
    'platinum-iii': [
      'Premium Keyword Research (100 keywords)',
      'Enterprise on-page SEO',
      'Advanced technical SEO',
      'Content optimization (50 pages)',
      'Complete local SEO',
      'Schema markup implementation',
      'Link building (30 links)',
      'Competitor analysis',
      'Conversion tracking setup',
      'Weekly performance report',
      'Dedicated account manager'
    ],
    'diamond-i': [
      'Elite Keyword Research (150 keywords)',
      'Premium enterprise SEO',
      'Advanced technical SEO suite',
      'Content optimization (75 pages)',
      'Multi-location local SEO',
      'Advanced schema implementation',
      'Premium link building (50 links)',
      'Competitor intelligence',
      'Conversion optimization',
      'Custom reporting dashboard',
      'Bi-weekly strategy calls',
      'Dedicated SEO specialist'
    ],
    'diamond-ii': [
      'Elite Keyword Research (200 keywords)',
      'Premium enterprise SEO',
      'Advanced technical SEO suite',
      'Content optimization (100 pages)',
      'Multi-location local SEO',
      'Advanced schema implementation',
      'Premium link building (75 links)',
      'Competitor intelligence',
      'Conversion optimization',
      'Custom reporting dashboard',
      'Weekly strategy calls',
      'Dedicated SEO team'
    ],
    'diamond-iii': [
      'Elite Keyword Research (300 keywords)',
      'Premium enterprise SEO',
      'Advanced technical SEO suite',
      'Content optimization (150 pages)',
      'Multi-location local SEO',
      'Advanced schema implementation',
      'Premium link building (100 links)',
      'Competitor intelligence',
      'Conversion optimization',
      'Custom reporting dashboard',
      'Weekly strategy calls',
      'Dedicated SEO team',
      'Priority feature requests'
    ]
  };

  const getTierIcon = (tier) => {
    if (tier.includes('bronze')) return <FaStar className="text-amber-500" />;
    if (tier.includes('gold')) return <FaStar className="text-yellow-500" />;
    if (tier.includes('platinum')) return <FaRocket className="text-slate-400" />;
    return <FaGem className="text-blue-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/services" className="text-gray-600 hover:text-gray-800 transition-colors">
                <FaArrowLeft className="text-xl" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">SEO Services</h1>
                <p className="text-gray-600">Professional Search Engine Optimization Solutions</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">${pricingTiers[selectedTier].price}</div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                    {category === 'bronze' && <FaStar />}
                    {category === 'gold' && <FaStar />}
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
              className="bg-white rounded-xl shadow-lg p-6 sticky top-6"
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
                  Get Started Now
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
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our SEO Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Average 300% increase in organic traffic within 6 months</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Targeted Approach</h3>
              <p className="text-gray-600">Industry-specific strategies tailored to your business goals</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Implementation</h3>
              <p className="text-gray-600">Quick deployment with immediate impact on your search rankings</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SEOServiceDetails;
