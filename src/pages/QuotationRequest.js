import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const QuotationRequest = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    requirements: '',
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
    console.log('Quotation request submitted:', formData);
    alert('Thank you for your quotation request! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      serviceType: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: '',
      requirements: '',
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
              Request a Quotation
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
              Get a customized quote for your project. Tell us about your needs and we'll provide a detailed proposal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quotation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Project Details
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="+880 1XX XXX XXXX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter company name (optional)"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Service Type</option>
                    <option value="video-production">Video Production</option>
                    <option value="photography">Photography</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-development">Web Development</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="branding">Branding</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="seo">SEO Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Project Type</option>
                    <option value="commercial">Commercial</option>
                    <option value="corporate">Corporate</option>
                    <option value="personal">Personal</option>
                    <option value="non-profit">Non-Profit</option>
                    <option value="startup">Startup</option>
                    <option value="event">Event</option>
                    <option value="product">Product Launch</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-50k">$30,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="over-100k">Over $100,000</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select Timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-week">Within 1 week</option>
                    <option value="2-weeks">Within 2 weeks</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-months">Within 2 months</option>
                    <option value="3-months">Within 3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Describe your project goals, objectives, and what you hope to achieve..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                  Specific Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Any specific requirements, deliverables, or preferences..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary transition duration-300 shadow-lg"
                >
                  Request Quotation
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Quotation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a streamlined process to provide you with accurate and competitive quotations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">Submit Request</h3>
              <p className="text-gray-600">Fill out the quotation form with your project details.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">Review & Analysis</h3>
              <p className="text-gray-600">Our team analyzes your requirements and prepares a proposal.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Custom Quote</h3>
              <p className="text-gray-600">Receive a detailed quotation tailored to your project needs.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">Discussion</h3>
              <p className="text-gray-600">Discuss the quote and finalize project details together.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotationRequest;
