import { Announcement } from '@/types/announcement';
import { create } from 'zustand';

type AnnouncementStore = {
    announcement: Announcement | undefined;
    setAnnouncement: (port: Announcement) => void;
};

export const useAnnouncementStore = create<AnnouncementStore>((set) => ({
    announcement: undefined,
    setAnnouncement: (announcement) => set({ announcement }),
}));
