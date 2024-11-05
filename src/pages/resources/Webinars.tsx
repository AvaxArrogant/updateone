import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Clock, Users, Download, BookOpen } from 'lucide-react';

const upcomingWebinars = [
  {
    title: 'Digital Marketing Trends 2024',
    date: '2024-02-01',
    time: '2:00 PM EST',
    speaker: 'Sarah Johnson',
    description: 'Discover the latest digital marketing trends and strategies for 2024.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
  },
  {
    title: 'SEO Masterclass',
    date: '2024-02-15',
    time: '1:00 PM EST',
    speaker: 'Michael Chen',
    description: 'Learn advanced SEO techniques to improve your search rankings.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Social Media Strategy',
    date: '2024-03-01',
    time: '3:00 PM EST',
    speaker: 'Emma Davis',
    description: 'Build an effective social media strategy for your business.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80'
  }
];

const recordedWebinars = [
  {
    title: 'Content Marketing Success',
    views: '2.5k',
    duration: '45 min',
    speaker: 'David Wilson',
    description: 'Create compelling content that drives engagement and conversions.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    title: 'PPC Campaign Optimization',
    views: '1.8k',
    duration: '60 min',
    speaker: 'Lisa Anderson',
    description: 'Optimize your PPC campaigns for maximum ROI.',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80'
  },
  {
    title: 'Email Marketing Strategies',
    views: '3.2k',
    duration: '50 min',
    speaker: 'James Miller',
    description: 'Build effective email marketing campaigns that convert.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80'
  }
];

const Webinars = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Marketing Webinars</h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn from industry experts and stay ahead of the curve
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors">
                Browse Webinars
              </button>
              <button className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
                Host a Webinar
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-gray-600">Register for our live sessions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm">
                    Upcoming
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(webinar.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      {webinar.time}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {webinar.speaker}
                    </div>
                  </div>
                  <button className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recorded Webinars */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Recorded Sessions</h2>
            <p className="text-xl text-gray-600">Watch our past webinars on demand</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recordedWebinars.map((webinar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={webinar.image}
                    alt={webinar.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-75 hover:opacity-100 transition-opacity cursor-pointer" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-4">{webinar.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {webinar.views} views
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {webinar.duration}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      Watch Now
                    </button>
                    <button className="px-4 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Download presentation slides and resources from our webinars
            </p>
            <button className="flex items-center mx-auto px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-primary-50 transition-colors">
              <BookOpen className="w-5 h-5 mr-2" />
              Access Resources
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;