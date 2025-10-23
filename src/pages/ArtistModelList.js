import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ArtistModelList = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const artists = [
    {
      id: 1,
      name: 'Sarah Johnson',
      category: 'photographer',
      specialty: 'Portrait Photography',
      experience: '5 years',
      location: 'Dhaka, Bangladesh',
      rating: 4.8,
      image: '👩‍🎨',
      portfolio: ['/images/portfolio1.jpg', '/images/portfolio2.jpg'],
      description: 'Specializing in professional portraits and fashion photography.',
    },
    {
      id: 2,
      name: 'Ahmed Rahman',
      category: 'videographer',
      specialty: 'Commercial Videos',
      experience: '7 years',
      location: 'Chittagong, Bangladesh',
      rating: 4.9,
      image: '👨‍🎥',
      portfolio: ['/images/video1.jpg', '/images/video2.jpg'],
      description: 'Creating compelling commercial and promotional videos.',
    },
    {
      id: 3,
      name: 'Priya Das',
      category: 'model',
      specialty: 'Fashion Model',
      experience: '3 years',
      location: 'Dhaka, Bangladesh',
      rating: 4.7,
      image: '👩',
      portfolio: ['/images/model1.jpg', '/images/model2.jpg'],
      description: 'Versatile fashion model with experience in runway and print.',
    },
    {
      id: 4,
      name: 'Rahul Kumar',
      category: 'editor',
      specialty: 'Video Editing',
      experience: '6 years',
      location: 'Sylhet, Bangladesh',
      rating: 4.6,
      image: '👨‍💻',
      portfolio: ['/images/edit1.jpg', '/images/edit2.jpg'],
      description: 'Expert in post-production and video editing with Adobe Suite.',
    },
    {
      id: 5,
      name: 'Nadia Islam',
      category: 'photographer',
      specialty: 'Event Photography',
      experience: '4 years',
      location: 'Khulna, Bangladesh',
      rating: 4.5,
      image: '👩‍📸',
      portfolio: ['/images/event1.jpg', '/images/event2.jpg'],
      description: 'Capturing memorable moments at weddings and corporate events.',
    },
    {
      id: 6,
      name: 'Kamal Hossain',
      category: 'model',
      specialty: 'Commercial Model',
      experience: '2 years',
      location: 'Rajshahi, Bangladesh',
      rating: 4.4,
      image: '👨',
      portfolio: ['/images/commercial1.jpg', '/images/commercial2.jpg'],
      description: 'Commercial model specializing in advertising and brand campaigns.',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'photographer', label: 'Photographers' },
    { value: 'videographer', label: 'Videographers' },
    { value: 'editor', label: 'Editors' },
    { value: 'model', label: 'Models' },
  ];

  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artist.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || artist.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Artist & Model Directory
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
              Discover talented photographers, videographers, editors, and models in Bangladesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by name, specialty, or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full font-medium transition duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtists.map((artist, index) => (
              <motion.div
                key={artist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-6xl mr-4">{artist.image}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{artist.name}</h3>
                      <p className="text-primary font-medium">{artist.specialty}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📍</span>
                      {artist.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">⭐</span>
                      {artist.rating} ({artist.experience})
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{artist.description}</p>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-secondary transition duration-300">
                      View Portfolio
                    </button>
                    <button className="flex-1 border border-primary text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-white transition duration-300">
                      Contact
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArtists.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No artists found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Talent Network
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Are you a talented photographer, videographer, editor, or model? Join our directory and connect with clients.
            </p>
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-light transition duration-300 shadow-lg">
              Register as Artist/Model
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ArtistModelList;
