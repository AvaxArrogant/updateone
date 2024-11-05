import { create } from 'zustand';

type ModalType = 'onboarding' | null;

interface ModalState {
  activeModal: ModalType;
  setActiveModal: (modal: ModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  activeModal: null,
  setActiveModal: (modal) => set({ activeModal: modal }),
  closeModal: () => set({ activeModal: null })
}));