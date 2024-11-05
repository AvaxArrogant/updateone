import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { ArrowRight, BarChart2, Target, Users, Globe2 } from 'lucide-react';
import { useModalStore } from '../store/modalStore';

const ParallaxShowcase = () => {
  const { setActiveModal } = useModalStore();

  const handleGetStarted = () => {
    setActiveModal('onboarding');
  };

  return (
    <section className="relative">
      {/* First Parallax Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Parallax 
          translateY={[-40, 40]} 
          scale={[1.3, 0.8]}
          className="absolute inset-0"
          style={{ zIndex: -1 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-110"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1920)`,
              transformOrigin: 'center'
            }}
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-white"
          >
            <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
              Data-Driven Marketing Solutions
            </h2>
            <p className="text-xl text-gray-100 mb-6 drop-shadow-md">
              Transform your business with actionable insights and proven strategies.
            </p>
            <div className="flex space-x-4">
              <StatsCard icon={BarChart2} value="250%" label="Average ROI" />
              <StatsCard icon={Users} value="10k+" label="Clients" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Second Parallax Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Parallax 
          translateY={[-40, 40]}
          scale={[1.3, 0.8]}
          className="absolute inset-0"
          style={{ zIndex: -1 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-110"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920)`,
              transformOrigin: 'center'
            }}
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-l from-black/95 via-black/80 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-white"
          >
            <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
              Strategic Growth Partners
            </h2>
            <p className="text-xl text-gray-100 mb-6 drop-shadow-md">
              We work alongside your team to develop and implement winning strategies.
            </p>
            <button 
              onClick={handleGetStarted}
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Third Parallax Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Parallax 
          translateY={[-40, 40]}
          scale={[1.3, 0.8]}
          className="absolute inset-0"
          style={{ zIndex: -1 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transform scale-110"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1920)`,
              transformOrigin: 'center'
            }}
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-white"
          >
            <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
              Global Reach, Local Impact
            </h2>
            <p className="text-xl text-gray-100 mb-6 drop-shadow-md">
              Connect with audiences worldwide while maintaining a strong local presence.
            </p>
            <div className="flex space-x-4">
              <StatsCard icon={Globe2} value="150+" label="Countries" />
              <StatsCard icon={Target} value="98%" label="Retention" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsCard = ({ icon: Icon, value, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg">
    <div className="flex items-center space-x-3">
      <Icon className="text-primary-400" size={24} />
      <div>
        <div className="text-2xl font-bold text-white drop-shadow-md">{value}</div>
        <div className="text-sm text-gray-200 drop-shadow-sm">{label}</div>
      </div>
    </div>
  </div>
);

export default ParallaxShowcase;