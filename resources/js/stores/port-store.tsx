import { Port } from '@/types/port';
import { create } from 'zustand';

type PortStore = {
    port: Port | undefined;
    setPort: (port: Port) => void;
};

export const usePortStore = create<PortStore>((set) => ({
    port: undefined,
    setPort: (port) => set({ port }),
}));
