import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Blogs = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Marketing in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the digital marketing landscape.',
      category: 'marketing',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '📈',
      tags: ['Digital Marketing', 'Trends', 'Technology'],
    },
    {
      id: 2,
      title: 'Mastering Video Production: Tips from Industry Experts',
      excerpt: 'Learn professional techniques and best practices for creating compelling video content.',
      category: 'production',
      author: 'Ahmed Rahman',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '🎥',
      tags: ['Video Production', 'Tips', 'Best Practices'],
    },
    {
      id: 3,
      title: 'Building a Strong Brand Identity: A Complete Guide',
      excerpt: 'Discover how to create a memorable brand that resonates with your target audience.',
      category: 'branding',
      author: 'Priya Das',
      date: '2024-01-10',
      readTime: '6 min read',
      image: '🎨',
      tags: ['Branding', 'Identity', 'Design'],
    },
    {
      id: 4,
      title: 'SEO Strategies That Actually Work in 2024',
      excerpt: 'Proven SEO techniques to improve your website ranking and organic traffic.',
      category: 'marketing',
      author: 'Rahul Kumar',
      date: '2024-01-08',
      readTime: '8 min read',
      image: '🔍',
      tags: ['SEO', 'Search Engine', 'Optimization'],
    },
    {
      id: 5,
      title: 'The Art of Professional Photography: Lighting Techniques',
      excerpt: 'Master the fundamentals of lighting to take your photography to the next level.',
      category: 'photography',
      author: 'Nadia Islam',
      date: '2024-01-05',
      readTime: '4 min read',
      image: '📸',
      tags: ['Photography', 'Lighting', 'Techniques'],
    },
    {
      id: 6,
      title: 'Social Media Marketing: From Strategy to Execution',
      excerpt: 'A comprehensive guide to creating and implementing effective social media strategies.',
      category: 'marketing',
      author: 'Kamal Hossain',
      date: '2024-01-03',
      readTime: '6 min read',
      image: '📱',
      tags: ['Social Media', 'Strategy', 'Marketing'],
    },
  ];

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'production', label: 'Production' },
    { value: 'photography', label: 'Photography' },
    { value: 'branding', label: 'Branding' },
  ];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

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
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
              Insights, tips, and industry trends from our creative team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
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
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              >
                <div className="p-8">
                  <div className="text-6xl mb-4 text-center">{post.image}</div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-primary text-white text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-primary transition duration-300">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>By {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-primary font-medium hover:text-secondary transition duration-300">
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-light transition duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
