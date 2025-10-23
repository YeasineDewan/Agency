import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'info@agencypro.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm.'
    },
    {
      icon: '📍',
      title: 'Office',
      details: '123 Business St, City, State 12345',
      description: 'Come visit our office.'
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">{t('contact.form.title')}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Project Subject"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="text-4xl">{info.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                  <p className="text-blue-600 font-medium">{info.details}</p>
                  <p className="text-gray-600">{info.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Find Us</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Interactive Map Placeholder</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">How long does a project take?</h3>
              <p className="text-gray-600">Project timelines vary depending on complexity. We'll provide a detailed timeline during our initial consultation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Do you offer revisions?</h3>
              <p className="text-gray-600">Yes, we include a certain number of revisions in our packages. Additional revisions can be discussed separately.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">What's your payment process?</h3>
              <p className="text-gray-600">We typically require a deposit to start work, with the remaining balance due upon project completion.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Do you sign NDAs?</h3>
              <p className="text-gray-600">Yes, we sign non-disclosure agreements for all client projects to protect your confidential information.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
