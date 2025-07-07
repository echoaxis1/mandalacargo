export type Announcement = FormAnnouncement & {
    id: number;
    created_at: string;
    updated_at: string;
};

export type FormAnnouncement = {
    title: string;
    content: string;
    is_active: boolean;
    start_time: string;
    end_time: string;
};
