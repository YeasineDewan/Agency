import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaCode, FaLaptop, FaRocket, FaGem, FaArrowLeft } from 'react-icons/fa';

const WebDevelopmentDetails = () => {
  const [selectedTier, setSelectedTier] = useState('bronze-i');

  const pricingTiers = {
    'bronze-i': { name: 'Bronze I', price: 499, color: 'from-amber-600 to-amber-800' },
    'bronze-ii': { name: 'Bronze II', price: 699, color: 'from-amber-600 to-amber-800' },
    'bronze-iii': { name: 'Bronze III', price: 899, color: 'from-amber-600 to-amber-800' },
    'gold-i': { name: 'Gold I', price: 1299, color: 'from-yellow-500 to-yellow-700' },
    'gold-ii': { name: 'Gold II', price: 1699, color: 'from-yellow-500 to-yellow-700' },
    'gold-iii': { name: 'Gold III', price: 2099, color: 'from-yellow-500 to-yellow-700' },
    'platinum-i': { name: 'Platinum I', price: 2799, color: 'from-slate-400 to-slate-600' },
    'platinum-ii': { name: 'Platinum II', price: 3499, color: 'from-slate-400 to-slate-600' },
    'platinum-iii': { name: 'Platinum III', price: 4199, color: 'from-slate-400 to-slate-600' },
    'diamond-i': { name: 'Diamond I', price: 5499, color: 'from-blue-400 to-blue-600' },
    'diamond-ii': { name: 'Diamond II', price: 6999, color: 'from-blue-400 to-blue-600' },
    'diamond-iii': { name: 'Diamond III', price: 8499, color: 'from-blue-400 to-blue-600' }
  };

  const tierFeatures = {
    'bronze-i': [
      'Basic website (up to 5 pages)',
      'Responsive design',
      'Contact form',
      'Basic SEO setup',
      '1 month support',
      'Email support'
    ],
    'bronze-ii': [
      'Standard website (up to 10 pages)',
      'Responsive design with animations',
      'Advanced contact forms',
      'Basic SEO & analytics',
      '2 months support',
      'Email support'
    ],
    'bronze-iii': [
      'Professional website (up to 15 pages)',
      'Advanced responsive design',
      'Multiple contact forms & integrations',
      'SEO optimization & analytics',
      '3 months support',
      'Priority email support'
    ],
    'gold-i': [
      'Business website (up to 20 pages)',
      'Custom design & branding',
      'E-commerce integration',
      'Advanced SEO & marketing tools',
      'CMS integration',
      '6 months support',
      'Phone support'
    ],
    'gold-ii': [
      'Enterprise website (up to 30 pages)',
      'Premium design & UX',
      'Full e-commerce platform',
      'Advanced analytics & tracking',
      'Multi-language support',
      'Real-time collaboration',
      'Dedicated account manager'
    ],
    'gold-iii': [
      'Corporate website (up to 50 pages)',
      'Elite design & user experience',
      'Enterprise e-commerce',
      'AI-powered analytics',
      'Global scalability',
      'Real-time collaboration',
      'Dedicated account manager'
    ],
    'platinum-i': [
      'Elite business platform (unlimited pages)',
      'Bespoke design & architecture',
      'Enterprise-grade e-commerce',
      'Advanced AI integrations',
      'Cloud infrastructure',
      'Custom API development',
      'Bi-weekly strategy calls',
      'Senior developer assignment'
    ],
    'platinum-ii': [
      'Ultimate digital platform',
      'Revolutionary design systems',
      'Next-gen e-commerce solutions',
      'Machine learning integrations',
      'Global CDN & scaling',
      'Microservices architecture',
      'Weekly strategy calls',
      'Lead developer assignment'
    ],
    'platinum-iii': [
      'Pinnacle enterprise solution',
      'Visionary design & innovation',
      'Quantum e-commerce platform',
      'AI-driven personalization',
      'Quantum computing ready',
      'Event-driven architecture',
      'Daily strategy calls',
      'Chief technology officer access'
    ],
    'diamond-i': [
      'Legendary digital empire',
      'Next-gen design & UX',
      'Omnichannel commerce platform',
      'Predictive AI & automation',
      'Global infrastructure',
      'Blockchain integrations',
      'Custom reporting dashboard',
      '24/7 CTO access'
    ],
    'diamond-ii': [
      'Ultimate innovation platform',
      'Revolutionary design thinking',
      'Metaverse commerce solutions',
      'Neural network integrations',
      'Interplanetary scaling',
      'Quantum security',
      'Executive dashboard',
      'Chief innovation officer access'
    ],
    'diamond-iii': [
      'Pinnacle innovation empire',
      'Quantum design principles',
      'Multiverse commerce platform',
      'Conscious AI systems',
      'Interdimensional infrastructure',
      'Quantum cryptography',
      'C-suite executive access',
      'Visionary technology leadership'
    ]
  };

  const getTierIcon = (tier) => {
    if (tier.includes('bronze')) return <FaCode className="text-amber-500" />;
    if (tier.includes('gold')) return <FaLaptop className="text-yellow-500" />;
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
                <h1 className="text-3xl font-bold text-gray-900">Web Development Services</h1>
                <p className="text-gray-600">Custom Website Development & Digital Solutions</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">${pricingTiers[selectedTier].price}</div>
              <div className="text-sm text-gray-500">one-time</div>
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
                    {category === 'bronze' && <FaCode />}
                    {category === 'gold' && <FaLaptop />}
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
                          <div className="text-sm opacity-75">one-time</div>
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
                <div className="text-sm opacity-90">one-time</div>
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
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Web Development Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
              <p className="text-gray-600">Built with cutting-edge technologies and frameworks for optimal performance</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile First</h3>
              <p className="text-gray-600">Responsive design that works perfectly on all devices and screen sizes</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Future-proof architecture that grows with your business needs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopmentDetails;
