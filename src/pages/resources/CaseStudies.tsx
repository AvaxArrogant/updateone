import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, Users, Target } from 'lucide-react';
import ParallaxSection from '../../components/ParallaxSection';

const caseStudies = [
  {
    title: 'E-commerce Revenue Growth',
    client: 'Fashion Retailer',
    industry: 'E-commerce',
    results: [
      { label: 'Revenue Growth', value: '+245%' },
      { label: 'ROAS', value: '350%' },
      { label: 'Conversion Rate', value: '+180%' }
    ],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80'
  },
  {
    title: 'B2B Lead Generation',
    client: 'SaaS Company',
    industry: 'Technology',
    results: [
      { label: 'Lead Growth', value: '+180%' },
      { label: 'Cost per Lead', value: '-45%' },
      { label: 'Close Rate', value: '+75%' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Healthcare Practice Growth',
    client: 'Medical Center',
    industry: 'Healthcare',
    results: [
      { label: 'Patient Growth', value: '+200%' },
      { label: 'Appointment Rate', value: '+150%' },
      { label: 'Patient Value', value: '+85%' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80"
        height="h-[600px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Client Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Real results from real businesses
            </motion.p>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: BarChart2, label: 'Average ROI', value: '300%' },
              { icon: TrendingUp, label: 'Revenue Growth', value: '150%' },
              { icon: Users, label: 'Client Retention', value: '95%' },
              { icon: Target, label: 'Goals Achieved', value: '100%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-sm font-medium mb-1">{study.industry}</div>
                      <h3 className="text-xl font-bold">{study.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-600 mb-4">Client: {study.client}</div>
                  <div className="space-y-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-gray-600">{result.label}</span>
                        <span className="font-bold text-primary-600">{result.value}</span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-6 w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    View Case Study
                  </button>
                </div>
              </motion.div>
            ))}
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Schedule a consultation to discuss your business goals
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;