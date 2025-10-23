import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/150',
      bio: 'Experienced leader with 10+ years in digital marketing and web development.'
    },
    {
      name: 'Jane Smith',
      role: 'Creative Director',
      image: 'https://via.placeholder.com/150',
      bio: 'Award-winning designer specializing in branding and user experience.'
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: 'https://via.placeholder.com/150',
      bio: 'Full-stack developer with expertise in modern web technologies.'
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About AgencyPro
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a passionate team of digital experts dedicated to helping businesses thrive in the digital age.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2013, AgencyPro started as a small team of creative professionals with a vision to revolutionize digital services. Over the years, we've grown into a full-service agency, helping hundreds of businesses achieve their digital goals.
              </p>
              <p className="text-gray-600 mb-4">
                Our commitment to innovation, quality, and client satisfaction has been the driving force behind our success. We believe in building long-term partnerships and delivering exceptional results that exceed expectations.
              </p>
              <p className="text-gray-600">
                Today, we're proud to be leaders in video editing, digital marketing, web development, app development, photo editing, and SEO services.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-96 rounded-lg flex items-center justify-center">
              <span className="text-white text-6xl">🚀</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We stay ahead of the curve with cutting-edge technologies and creative solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">We work closely with our clients to understand their needs and deliver tailored solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every project, ensuring the highest quality results.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
