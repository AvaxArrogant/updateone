import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useModalStore } from '../store/modalStore';

declare global {
  interface Window {
    tf: any;
  }
}

const TypeFormModal = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const { activeModal, setActiveModal } = useModalStore();
  const isVisible = activeModal === 'typeform';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasBeenDismissed = localStorage.getItem('typeformDismissed');
      if (!hasBeenDismissed && !activeModal) {
        setActiveModal('typeform');
      }
    }, 60000);

    return () => clearTimeout(timer);
  }, [activeModal, setActiveModal]);

  const handleDismiss = () => {
    setActiveModal(null);
    setIsDismissed(true);
    localStorage.setItem('typeformDismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleDismiss}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl z-50"
            style={{
              margin: '0 auto',
              minHeight: 'min-content'
            }}
          >
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="h-[600px] max-h-[80vh]">
              <div
                data-tf-live="01HV53EW6ZWY25PRRDW6BR716X"
                className="h-full w-full"
              ></div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TypeFormModal;