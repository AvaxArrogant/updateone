import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Network, Bot, LineChart, Shield } from 'lucide-react';
import ParallaxSection from '../../components/ParallaxSection';

const features = [
  {
    icon: Brain,
    title: 'AI Strategy',
    description: 'Custom AI implementation strategies aligned with your goals.'
  },
  {
    icon: Cpu,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation.'
  },
  {
    icon: Network,
    title: 'Integration',
    description: 'Seamless AI integration with existing systems.'
  },
  {
    icon: Bot,
    title: 'Chatbots & AI Agents',
    description: 'Intelligent conversational AI solutions.'
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Data-driven insights and forecasting.'
  },
  {
    icon: Shield,
    title: 'AI Security',
    description: 'Secure and ethical AI implementation.'
  }
];

const AIConsulting = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
        height="h-[600px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              AI Consulting Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Transform your business with cutting-edge AI solutions
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
            <h2 className="text-4xl font-bold mb-4">AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence for your business
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our AI Consulting Process</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to AI implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate your current systems and AI readiness'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop a customized AI implementation plan'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deploy AI solutions with minimal disruption'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous monitoring and improvement'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Schedule a consultation to discuss your AI implementation needs
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
              Book Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIConsulting;