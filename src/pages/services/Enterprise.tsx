import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, Users2, BarChart2, Shield, Zap } from 'lucide-react';
import ParallaxSection from '../../components/ParallaxSection';

const features = [
  {
    icon: Target,
    title: 'Strategic Planning',
    description: 'Comprehensive digital strategies aligned with enterprise goals.'
  },
  {
    icon: Users2,
    title: 'Team Integration',
    description: 'Seamless collaboration with your existing marketing teams.'
  },
  {
    icon: BarChart2,
    title: 'Enterprise Analytics',
    description: 'Advanced reporting and business intelligence solutions.'
  },
  {
    icon: Shield,
    title: 'Brand Protection',
    description: 'Maintain and enhance your enterprise brand reputation.'
  },
  {
    icon: Building2,
    title: 'Global Reach',
    description: 'Multi-market strategies for international presence.'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Continuous improvement of marketing effectiveness.'
  }
];

const Enterprise = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
        height="h-[600px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Enterprise Marketing Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Scalable digital strategies for large organizations
            </motion.p>
          </div>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Enterprise-Grade Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed for enterprise-scale operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Success Story</h2>
              <p className="text-xl text-gray-600 mb-8">
                See how we helped a Fortune 500 company increase their digital ROI by 300%
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="w-4 h-4 bg-primary-600 rounded-full mr-3"></span>
                  Increased organic traffic by 200%
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-4 h-4 bg-primary-600 rounded-full mr-3"></span>
                  Improved conversion rates by 150%
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-4 h-4 bg-primary-600 rounded-full mr-3"></span>
                  Enhanced brand visibility across 20 markets
                </li>
              </ul>
              <button className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                Read Case Study
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="Enterprise Success Story"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Schedule a consultation with our enterprise solutions team
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
              Book Your Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;