import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Background from './components/3d/Background';
import Hero from './components/home/Hero';
import ServicesSection from './components/services/ServicesSection';
import ServicesShowcase from './components/services/ServicesShowcase';
import TeamSection from './components/about/TeamSection';
import BlogSection from './components/blog/BlogSection';
import FAQSection from './components/faq/FAQSection';
import ContactSection from './components/contact/ContactSection';
import Chatbot from './components/chat/Chatbot';
import ScrollProgress from './components/home/ScrollProgress';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/blog/BlogPostPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import TechnologiesPage from './pages/TechnologiesPage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CookiePolicy from './pages/legal/CookiePolicy';
import Security from './pages/legal/Security';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative">
        <Background />
        <ScrollProgress />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <ServicesShowcase />
                <TeamSection />
                <BlogSection />
                <FAQSection />
                <ContactSection />
              </main>
            } />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/technologies" element={<TechnologiesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="/security" element={<Security />} />
          </Routes>
        </AnimatePresence>
        <Chatbot />
        <Footer />
      </div>
    </Router>
  );
}

export default App;