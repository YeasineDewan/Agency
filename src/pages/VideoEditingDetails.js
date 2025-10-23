import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaVideo, FaFilm, FaMagic, FaGem, FaArrowLeft } from 'react-icons/fa';

const VideoEditingDetails = () => {
  const [selectedTier, setSelectedTier] = useState('bronze-i');

  const pricingTiers = {
    'bronze-i': { name: 'Bronze I', price: 199, color: 'from-amber-600 to-amber-800' },
    'bronze-ii': { name: 'Bronze II', price: 299, color: 'from-amber-600 to-amber-800' },
    'bronze-iii': { name: 'Bronze III', price: 399, color: 'from-amber-600 to-amber-800' },
    'gold-i': { name: 'Gold I', price: 599, color: 'from-yellow-500 to-yellow-700' },
    'gold-ii': { name: 'Gold II', price: 799, color: 'from-yellow-500 to-yellow-700' },
    'gold-iii': { name: 'Gold III', price: 999, color: 'from-yellow-500 to-yellow-700' },
    'platinum-i': { name: 'Platinum I', price: 1299, color: 'from-slate-400 to-slate-600' },
    'platinum-ii': { name: 'Platinum II', price: 1599, color: 'from-slate-400 to-slate-600' },
    'platinum-iii': { name: 'Platinum III', price: 1899, color: 'from-slate-400 to-slate-600' },
    'diamond-i': { name: 'Diamond I', price: 2299, color: 'from-blue-400 to-blue-600' },
    'diamond-ii': { name: 'Diamond II', price: 2799, color: 'from-blue-400 to-blue-600' },
    'diamond-iii': { name: 'Diamond III', price: 3299, color: 'from-blue-400 to-blue-600' }
  };

  const tierFeatures = {
    'bronze-i': [
      'Basic video editing (cuts, transitions)',
      'Color correction',
      'Background music addition',
      'Standard export formats',
      '1 round of revisions',
      'Email support'
    ],
    'bronze-ii': [
      'Advanced video editing (cuts, transitions, effects)',
      'Professional color grading',
      'Custom background music',
      'Multiple export formats',
      '2 rounds of revisions',
      'Email support'
    ],
    'bronze-iii': [
      'Premium video editing suite',
      'Advanced color grading & correction',
      'Licensed music library access',
      'HD/4K export options',
      '3 rounds of revisions',
      'Priority email support'
    ],
    'gold-i': [
      'Professional video editing',
      'Advanced visual effects',
      'Motion graphics integration',
      'Sound design & mixing',
      'Brand integration',
      'Weekly progress updates',
      'Phone support'
    ],
    'gold-ii': [
      'Enterprise video editing',
      'Complex visual effects',
      'Custom motion graphics',
      'Professional audio mixing',
      'Multi-brand integration',
      'Real-time collaboration',
      'Dedicated account manager'
    ],
    'gold-iii': [
      'Premium enterprise editing',
      'High-end visual effects',
      'Advanced motion graphics',
      'Surround sound mixing',
      'Unlimited brand assets',
      'Real-time collaboration',
      'Dedicated account manager'
    ],
    'platinum-i': [
      'Elite video production suite',
      'Cinematic visual effects',
      '3D motion graphics',
      'Dolby Atmos mixing',
      'Custom brand guidelines',
      'Advanced analytics integration',
      'Bi-weekly strategy calls',
      'Senior editor assignment'
    ],
    'platinum-ii': [
      'Ultimate production suite',
      'Hollywood-grade VFX',
      'Advanced 3D graphics',
      'Immersive audio design',
      'Enterprise brand systems',
      'Real-time performance tracking',
      'Weekly strategy calls',
      'Lead editor assignment'
    ],
    'platinum-iii': [
      'Master production suite',
      'Blockbuster VFX capabilities',
      'Premium 3D animation',
      'Spatial audio engineering',
      'Global brand management',
      'AI-powered optimization',
      'Daily strategy calls',
      'Executive producer oversight'
    ],
    'diamond-i': [
      'Legendary production studio',
      'Next-gen visual effects',
      'AI-enhanced graphics',
      'Binaural audio production',
      'Omnichannel brand integration',
      'Predictive analytics',
      'Custom dashboard access',
      '24/7 creative director'
    ],
    'diamond-ii': [
      'Ultimate creative studio',
      'Revolutionary VFX technology',
      'Neural graphics rendering',
      '3D spatial audio',
      'Metaverse-ready content',
      'AI content optimization',
      'Executive dashboard',
      'Chief creative officer access'
    ],
    'diamond-iii': [
      'Pinnacle production empire',
      'Quantum VFX processing',
      'Holographic graphics',
      'Quantum audio synthesis',
      'Multiverse brand presence',
      'Predictive AI storytelling',
      'C-suite executive access',
      'Visionary creative leadership'
    ]
  };

  const getTierIcon = (tier) => {
    if (tier.includes('bronze')) return <FaVideo className="text-amber-500" />;
    if (tier.includes('gold')) return <FaFilm className="text-yellow-500" />;
    if (tier.includes('platinum')) return <FaMagic className="text-slate-400" />;
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
                <h1 className="text-3xl font-bold text-gray-900">Video Editing Services</h1>
                <p className="text-gray-600">Professional Video Production & Post-Production</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">${pricingTiers[selectedTier].price}</div>
              <div className="text-sm text-gray-500">per project</div>
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
                    {category === 'bronze' && <FaVideo />}
                    {category === 'gold' && <FaFilm />}
                    {category === 'platinum' && <FaMagic />}
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
                          <div className="text-sm opacity-75">per project</div>
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
                <div className="text-sm opacity-90">per project</div>
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
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Video Editing Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold mb-2">Cinematic Quality</h3>
              <p className="text-gray-600">Hollywood-grade editing with professional color grading and sound design</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Quick delivery without compromising on quality or creative vision</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Brand Focused</h3>
              <p className="text-gray-600">Tailored to your brand identity with consistent messaging and style</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoEditingDetails;
