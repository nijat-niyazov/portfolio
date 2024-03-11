import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ActiveSectionState {
  activeSection: number | null;
  positions: number[];
  setActiveSection: (activeSection: number | 0) => void;
  setPositions: (positions: number[]) => void;
}

const useActiveSectionStore = create<ActiveSectionState>()(
  persist(
    (set) => ({
      activeSection: null,
      positions: [],
      setActiveSection: (activeSection) => set({ activeSection }),
      setPositions: (positions) => set({ positions }),
    }),
    { name: "active-section" }
  )
);

export const setActiveSection = useActiveSectionStore.getState().setActiveSection;
export const setPositions = useActiveSectionStore.getState().setPositions;

export default useActiveSectionStore;
