import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useModalStore } from '../store/modalStore';
import { Widget } from '@typeform/embed-react';

const OnboardingModal = () => {
  const { activeModal, closeModal } = useModalStore();
  const isVisible = activeModal === 'onboarding';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center px-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: {
                type: "spring",
                damping: 15,
                stiffness: 300,
                mass: 0.8
              }
            }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl"
            onClick={e => e.stopPropagation()}
            style={{
              height: '80vh',
              minHeight: '700px'
            }}
          >
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 origin-left"
            />
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="h-full w-full">
              <Widget
                id="RByqvvcG"
                style={{ width: '100%', height: '100%' }}
                className="my-form"
                hidden={{
                  footer: true,
                  typeform: {
                    button: true,
                    toolbar: true
                  }
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnboardingModal;