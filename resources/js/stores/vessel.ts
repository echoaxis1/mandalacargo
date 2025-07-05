import { create } from 'zustand';

type State = {
    vessel: VesselStatus;
    setVessel: (vessel: VesselStatus) => void;
};

export const useVesselStore = create<State>((set) => ({
    vessel: {} as VesselStatus,
    setVessel: (vessel: VesselStatus) => set({ vessel }),
}));
