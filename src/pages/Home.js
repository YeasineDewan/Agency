import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaPlay, FaPause, FaExpand, FaEye, FaStar, FaArrowRight } from 'react-icons/fa';

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

<<<<<<< HEAD
  // Sample data for service showcases
  const photoEditingSamples = [
    {
      id: 1,
      title: 'Portrait Retouching',
      before: 'https://via.placeholder.com/400x300/cccccc/666666?text=Before',
      after: 'https://via.placeholder.com/400x300/ffffff/000000?text=After',
      category: 'Portrait',
      rating: 5
    },
    {
      id: 2,
      title: 'Product Enhancement',
      before: 'https://via.placeholder.com/400x300/cccccc/666666?text=Before',
      after: 'https://via.placeholder.com/400x300/ffffff/000000?text=After',
      category: 'Product',
      rating: 5
    },
    {
      id: 3,
      title: 'Background Removal',
      before: 'https://via.placeholder.com/400x300/cccccc/666666?text=Before',
      after: 'https://via.placeholder.com/400x300/ffffff/000000?text=After',
      category: 'Background',
      rating: 5
    }
  ];

  const videoEditingSamples = [
    {
      id: 1,
      title: 'Corporate Video',
      thumbnail: 'https://via.placeholder.com/400x225/ff6b6b/ffffff?text=Corporate+Video',
      duration: '2:30',
      views: '1.2K',
      category: 'Corporate'
    },
    {
      id: 2,
      title: 'Product Demo',
      thumbnail: 'https://via.placeholder.com/400x225/4ecdc4/ffffff?text=Product+Demo',
      duration: '1:45',
      views: '856',
      category: 'Product'
    },
    {
      id: 3,
      title: 'Social Media Ad',
      thumbnail: 'https://via.placeholder.com/400x225/45b7d1/ffffff?text=Social+Ad',
      duration: '0:30',
      views: '2.1K',
      category: 'Advertising'
    }
  ];

  const contentCreationSamples = [
    {
      id: 1,
      title: 'Brand Story Video',
      thumbnail: 'https://via.placeholder.com/400x225/96ceb4/ffffff?text=Brand+Story',
      type: 'Video Content',
      engagement: '95%'
    },
    {
      id: 2,
      title: 'Infographic Design',
      thumbnail: 'https://via.placeholder.com/400x225/ffeaa7/000000?text=Infographic',
      type: 'Graphic Design',
      engagement: '87%'
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      thumbnail: 'https://via.placeholder.com/400x225/dda0dd/ffffff?text=Campaign',
      type: 'Social Media',
      engagement: '92%'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-secondary to-accent text-white py-32 overflow-hidden">
=======
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white py-32 overflow-hidden">
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-light transition duration-300 shadow-lg"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                {t('home.hero.cta')}
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition duration-300"
                className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="#ffffff" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
<<<<<<< HEAD
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
=======
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
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
<<<<<<< HEAD
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{service.name}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
                <div className="mt-6 text-center">
                  <Link
                    to={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-300"
                  >
                    Learn More <FaArrowRight className="ml-2" />
                  </Link>
                </div>
=======
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-6 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{service.name}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.description}</p>
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
<<<<<<< HEAD
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
=======
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300 shadow-lg"
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
            >
              {t('home.services.viewAll')}
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Photo Editing Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Photo Editing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your images with our expert photo editing services. See the difference quality makes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photoEditingSamples.map((sample, index) => (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={sample.after}
                      alt={sample.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <FaEye className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {sample.category}
                    </div>
                    <div className="absolute top-4 right-4 flex">
                      {[...Array(sample.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{sample.title}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Before/After</span>
                      <button className="text-primary hover:text-secondary font-semibold transition-colors duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services/photo-editing"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Photo Editing Work
            </Link>
          </div>
        </div>
      </section>

      {/* Video Editing Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cinematic Video Editing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bring your stories to life with our professional video editing expertise. Watch our work come alive.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoEditingSamples.map((sample, index) => (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={sample.thumbnail}
                    alt={sample.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaPlay className="text-blue-600 text-2xl ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {sample.duration}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center">
                    <FaEye className="mr-1" /> {sample.views}
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {sample.category}
                  </div>
                </div>
                <div className="p-6 bg-white rounded-b-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sample.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Professional Edit</span>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                      Watch Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services/video-editing"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Video Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Content Creation Showcase */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Creative Content Creation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to creation, we craft compelling content that engages audiences and drives results.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentCreationSamples.map((sample, index) => (
              <motion.div
                key={sample.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white">
                  <img
                    src={sample.thumbnail}
                    alt={sample.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaExpand className="text-green-600 text-xl" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {sample.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {sample.engagement} Engagement
                  </div>
                </div>
                <div className="p-6 bg-white rounded-b-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sample.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{sample.type}</span>
                    <button className="text-green-600 hover:text-green-800 font-semibold transition-colors duration-300">
                      View Project
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-700 hover:to-teal-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

=======
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.message}"</p>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Advanced Call to Action */}
      <section className="relative py-24 bg-gradient-to-r from-primary via-secondary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white opacity-5 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white opacity-5 rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed opacity-90">
              Join hundreds of satisfied clients who have elevated their brands with our professional services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
          >
            <Link
              to="/contact"
              className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
            >
              Start Your Project Today
            </Link>
            <Link
              to="/portfolio"
              className="border-3 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-primary transition duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1"
            >
              View Our Success Stories
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="opacity-90">Quick turnaround without compromising quality</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">💯</div>
              <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
              <p className="opacity-90">Unlimited revisions until you're completely happy</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Results Driven</h3>
              <p className="opacity-90">Strategies that deliver measurable business growth</p>
            </div>
=======
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              {t('home.cta.subtitle')}
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              {t('home.cta.cta')}
            </Link>
>>>>>>> d76fd9ed09ef001cbd65f20e029ce05b1fc00b6f
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
