import AppLayout from '@/layouts/app-layout';
import { Announcement } from '@/types/announcement';
import { Megaphone } from 'lucide-react';
import ActionButton from './action-button';
import TableAnnouncement from './table';

const breadcrumbs = [
    {
        title: 'Pengumuman',
        href: '/announcement',
    },
];

const index = ({ announcement }: { announcement: Announcement[] }) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="p-5">
                <div className="my-3 flex justify-between">
                    <h1 className="flex gap-2 text-xl font-semibold tracking-tight">
                        <Megaphone />
                        Pengumuman
                    </h1>

                    <ActionButton />
                </div>

                <TableAnnouncement data={announcement} />
            </div>
        </AppLayout>
    );
};

export default index;
