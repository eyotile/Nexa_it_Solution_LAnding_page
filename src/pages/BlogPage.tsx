import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogSection from '../components/blog/BlogSection';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >

      
        <BlogSection />
      </motion.div>
    </div>
  );
};

export default BlogPage;