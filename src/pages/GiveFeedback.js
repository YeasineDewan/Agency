import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const GiveFeedback = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    feedbackType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Feedback submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({
      name: '',
      email: '',
      rating: '',
      feedbackType: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              Give Feedback
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
              Your feedback helps us improve our services and better serve our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Share Your Thoughts
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                    Overall Rating *
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Rating</option>
                    <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                    <option value="4">⭐⭐⭐⭐ Very Good</option>
                    <option value="3">⭐⭐⭐ Good</option>
                    <option value="2">⭐⭐ Fair</option>
                    <option value="1">⭐ Poor</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="feedbackType" className="block text-sm font-medium text-gray-700 mb-2">
                    Feedback Type *
                  </label>
                  <select
                    id="feedbackType"
                    name="feedbackType"
                    value={formData.feedbackType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Type</option>
                    <option value="service">Service Quality</option>
                    <option value="product">Product Quality</option>
                    <option value="support">Customer Support</option>
                    <option value="website">Website Experience</option>
                    <option value="suggestion">Suggestion</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Feedback *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please share your detailed feedback..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition duration-300 shadow-lg"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Your Feedback Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We value your opinion and use feedback to continuously improve our services and products.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Targeted Improvements</h3>
                <p className="text-gray-600">Your feedback helps us identify areas for improvement.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">Suggestions drive our product development and innovation.</p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Better Service</h3>
                <p className="text-gray-600">We use your input to enhance customer satisfaction.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GiveFeedback;
