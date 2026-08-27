import { create } from 'zustand';

interface InteractionState {
  mousePosition: { x: number; y: number };
  scrollPosition: number;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMousePosition: (x: number, y: number) => void;
  setScrollPosition: (y: number) => void;
  setActiveSection: (sectionId: string) => void;
  setMobileMenuOpen: (isOpen: boolean) => void;
  toggleMobileMenu: () => void;
}

export const useInteractionStore = create<InteractionState>((set) => ({
  mousePosition: { x: 0, y: 0 },
  scrollPosition: 0,
  activeSection: 'home',
  mobileMenuOpen: false,
  
  
  setMousePosition: (x, y) => set({ mousePosition: { x, y } }),
  setScrollPosition: (scrollPosition) => set({ scrollPosition }),
  setActiveSection: (activeSection) => set({ activeSection }),
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
}));
