import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/contact/ContactSection';

const ContactPage = () => {
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
   
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default ContactPage;