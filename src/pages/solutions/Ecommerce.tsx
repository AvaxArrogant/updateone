import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, TrendingUp, CreditCard, Truck, BarChart2, Users } from 'lucide-react';
import ParallaxSection from '../../components/ParallaxSection';

const features = [
  {
    icon: ShoppingBag,
    title: 'Conversion Optimization',
    description: 'Maximize your e-commerce conversion rates with data-driven strategies.'
  },
  {
    icon: TrendingUp,
    title: 'Sales Growth',
    description: 'Implement proven strategies to increase online sales revenue.'
  },
  {
    icon: CreditCard,
    title: 'Payment Solutions',
    description: 'Create seamless checkout experiences that boost conversions.'
  },
  {
    icon: Truck,
    title: 'Fulfillment Integration',
    description: 'Streamline your order fulfillment process for efficiency.'
  },
  {
    icon: BarChart2,
    title: 'Analytics & Insights',
    description: 'Make data-driven decisions with comprehensive analytics.'
  },
  {
    icon: Users,
    title: 'Customer Retention',
    description: 'Build lasting customer relationships and increase loyalty.'
  }
];

const Ecommerce = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80"
        height="h-[600px]"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              E-commerce Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              Transform your online store with powerful digital marketing strategies
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
            <h2 className="text-4xl font-bold mb-4">Complete E-commerce Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in online retail
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

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Proven Results</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our e-commerce clients see an average of:
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { stat: '250%', label: 'Revenue Growth' },
                  { stat: '180%', label: 'Conversion Rate' },
                  { stat: '300%', label: 'Traffic Increase' },
                  { stat: '45%', label: 'Cart Recovery' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {item.stat}
                    </div>
                    <div className="text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80"
                alt="E-commerce Analytics Dashboard"
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
              Ready to Boost Your Online Sales?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Get a free e-commerce analysis and growth plan
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
              Get Your Analysis
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;