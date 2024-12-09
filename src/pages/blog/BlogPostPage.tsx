import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative backdrop-blur-lg bg-white/5 rounded-2xl overflow-hidden border border-white/10"
        >
          <div className="relative h-[400px] overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block bg-blue-500/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/10 mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center text-sm text-gray-300 space-x-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  {post.author}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="prose prose-invert max-w-none">
              {post.id === '1' && (
                <BlogContent1 />
              )}
              {post.id === '2' && (
                <BlogContent2 />
              )}
              {post.id === '3' && (
                <BlogContent3 />
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

const BlogContent1 = () => (
  <>
    <p className="text-xl text-gray-300 mb-8">
      Artificial Intelligence is revolutionizing the digital marketing landscape, offering unprecedented opportunities for personalization, automation, and data-driven decision-making.
    </p>
    
    <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Impact of AI on Digital Marketing</h2>
    <p className="text-gray-300 mb-6">
      AI is transforming how businesses approach digital marketing, from automated content creation to predictive analytics and personalized customer experiences.
    </p>

    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Key Applications of AI in Marketing</h3>
    <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-6">
      <li>Predictive Analytics and Customer Behavior</li>
      <li>Automated Content Generation</li>
      <li>Personalized Customer Experiences</li>
      <li>Chatbots and Customer Service</li>
      <li>Advanced Market Segmentation</li>
    </ul>

    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Future Trends</h3>
    <p className="text-gray-300 mb-6">
      The future of AI in digital marketing holds even more promise, with emerging technologies like:
    </p>
    <ul className="list-disc pl-6 text-gray-300 space-y-2">
      <li>Voice Search Optimization</li>
      <li>Advanced Image and Video Recognition</li>
      <li>Predictive Lead Scoring</li>
      <li>Real-time Personalization</li>
    </ul>
  </>
);

const BlogContent2 = () => (
  <>
    <p className="text-xl text-gray-300 mb-8">
      As we progress through 2024, several key trends are shaping the future of web development, from new technologies to evolving best practices.
    </p>

    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Trends Defining Web Development</h2>
    
    <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. Progressive Web Apps (PWAs)</h3>
    <p className="text-gray-300 mb-6">
      PWAs continue to gain traction, offering app-like experiences through web browsers with features like offline functionality and push notifications.
    </p>

    <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. AI-Powered Development</h3>
    <p className="text-gray-300 mb-6">
      Integration of AI tools in development workflows, from code completion to automated testing and optimization.
    </p>

    <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. WebAssembly</h3>
    <p className="text-gray-300 mb-6">
      Growing adoption of WebAssembly for high-performance web applications and games.
    </p>

    <h3 className="text-xl font-semibold text-white mt-6 mb-3">4. Serverless Architecture</h3>
    <p className="text-gray-300 mb-6">
      Continued shift towards serverless computing for scalable and cost-effective applications.
    </p>
  </>
);

const BlogContent3 = () => (
  <>
    <p className="text-xl text-gray-300 mb-8">
      Content marketing remains a crucial component of digital strategy, but maximizing ROI requires a strategic approach and careful measurement.
    </p>

    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Strategies for Maximum ROI</h2>
    
    <h3 className="text-xl font-semibold text-white mt-6 mb-3">1. Content Audit and Strategy</h3>
    <p className="text-gray-300 mb-6">
      Begin with a comprehensive content audit to identify what's working and what isn't. Develop a strategy aligned with business goals.
    </p>

    <h3 className="text-xl font-semibold text-white mt-6 mb-3">2. Audience Research</h3>
    <p className="text-gray-300 mb-6">
      Understanding your audience is crucial for creating content that resonates and drives engagement.
    </p>

    <h3 className="text-xl font-semibold text-white mt-6 mb-3">3. Measurement and Analytics</h3>
    <p className="text-gray-300 mb-6">
      Implement robust tracking and analytics to measure content performance and ROI accurately.
    </p>

    <h3 className="text-xl font-semibold text-white mt-6 mb-3">4. Content Distribution</h3>
    <p className="text-gray-300 mb-6">
      Develop a multi-channel distribution strategy to maximize content reach and engagement.
    </p>
  </>
);

export default BlogPostPage;