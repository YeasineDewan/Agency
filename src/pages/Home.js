import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaEye, FaStar, FaArrowRight } from 'react-icons/fa';
import SEO from '../components/SEO';
import { logEvent } from '../utils/analytics';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    { name: t('home.services.videoEditing.name'), icon: '🎥', description: t('home.services.videoEditing.description') },
    { name: t('home.services.digitalMarketing.name'), icon: '📈', description: t('home.services.digitalMarketing.description') },
    { name: t('home.services.webDevelopment.name'), icon: '💻', description: t('home.services.webDevelopment.description') },
    { name: t('home.services.appDevelopment.name'), icon: '📱', description: t('home.services.appDevelopment.description') },
    { name: t('home.services.photoEditing.name'), icon: '📸', description: t('home.services.photoEditing.description') },
    { name: t('home.services.seo.name'), icon: '🔍', description: t('home.services.seo.description') },
  ];

  const stats = [
    { number: t('about.stats.projectsCompleted.number'), label: t('about.stats.projectsCompleted.label') },
    { number: t('about.stats.happyClients.number'), label: t('about.stats.happyClients.label') },
    { number: t('about.stats.yearsExperience.number'), label: t('about.stats.yearsExperience.label') },
    { number: t('about.stats.support.number'), label: t('about.stats.support.label') },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, TechCorp',
      message: 'AgencyPro transformed our online presence. Their expertise in digital marketing and web development is unmatched.',
      avatar: '👤',
    },
    {
      name: 'Jane Smith',
      role: 'Founder, StartupXYZ',
      message: 'The video editing and photo services helped us create stunning content that boosted our brand image.',
      avatar: '👩',
    },
    {
      name: 'Mike Johnson',
      role: 'Marketing Director, BigBrand',
      message: 'Their SEO strategies increased our organic traffic by 300%. Highly recommend their services.',
      avatar: '👨',
    },
  ];

  const features = [
    {
      title: 'Innovative Solutions',
      description: 'We leverage cutting-edge technologies to deliver innovative digital solutions tailored to your needs.',
      icon: '🚀',
    },
    {
      title: 'Expert Team',
      description: 'Our team of experienced professionals ensures high-quality results and exceptional customer service.',
      icon: '👥',
    },
    {
      title: 'Proven Results',
      description: 'With hundreds of successful projects, we have a track record of delivering measurable business growth.',
      icon: '📊',
    },
    {
      title: '24/7 Support',
      description: 'We provide round-the-clock support to ensure your projects run smoothly and efficiently.',
      icon: '🕒',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO title="AgencyPro – Home" description="Professional digital services: web development, marketing, video editing, SEO and more." />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-secondary opacity-30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary opacity-25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-10 w-20 h-20 bg-accent opacity-20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-snug md:leading-tight bg-gradient-to-r from-accent via-light to-white bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('home.hero.title')}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed text-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {t('home.hero.subtitle')}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-light hover:text-secondary transition-all duration-300 shadow-2xl hover:shadow-primary/25 transform hover:scale-105 hover:-translate-y-1"
                onClick={() => logEvent('cta_click', { cta: 'hero_contact' })}
              >
                {t('home.hero.cta')}
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:shadow-white/25 transform hover:scale-105 hover:-translate-y-1"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="#FEF3E2" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-light via-white to-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('home.services.subtitle')}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{service.name}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                <div className="mt-6 text-center">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300"
                  >
                    Learn More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('home.services.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what sets AgencyPro apart from the competition.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-gradient-to-br from-white via-light/20 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise and creativity.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                category: 'Web Development',
                image: '🛒',
                description: 'Modern e-commerce solution with advanced features'
              },
              {
                title: 'Brand Identity Design',
                category: 'Branding',
                image: '🎨',
                description: 'Complete brand identity overhaul for tech startup'
              },
              {
                title: 'Mobile App Development',
                category: 'App Development',
                image: '📱',
                description: 'Cross-platform mobile application with seamless UX'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center text-secondary font-semibold hover:text-primary transition-colors duration-300"
                  >
                    View Project <FaArrowRight className="ml-2" />
                  </Link>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <FaEye className="text-white text-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-light/30 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their digital presence with our services.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-primary"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-accent" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.message}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-br from-light via-white to-accent/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent rounded-full"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Get the latest insights, trends, and exclusive offers delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        {/* Advanced Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)"/>
            </svg>
          </div>
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 border-2 border-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rotate-12 animate-spin" style={{animationDuration: '15s'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-light to-accent bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-light">
              Join hundreds of successful businesses that have elevated their digital presence with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="bg-white text-primary px-12 py-4 rounded-full font-bold text-lg hover:bg-light hover:text-secondary transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:shadow-white/25 transform hover:scale-105 hover:-translate-y-1"
              >
                View Our Work
              </Link>
              <Link
                to="/services"
                className="bg-accent text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all duration-300 shadow-xl hover:shadow-accent/25 transform hover:scale-105 hover:-translate-y-1"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-12 flex justify-center items-center gap-8 text-light">
              <div className="flex items-center gap-2">
                <FaStar className="text-accent" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span>500+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
