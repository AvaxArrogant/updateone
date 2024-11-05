import React from 'react';
import { useModalStore } from '../store/modalStore';

const LeadPopup = () => {
  const { setActiveModal } = useModalStore();

  const handleGetStarted = () => {
    setActiveModal('onboarding');
  };

  return null; // Component removed to prevent any popups
};

export default LeadPopup;