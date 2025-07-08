import { Announcement } from '@/types/announcement';
import { router } from '@inertiajs/react';
import Marquee from 'react-fast-marquee';

/** marque  */
const AnnouncementMarquee = ({ data }: { data: Announcement[] }) => {
    if (data.length === 0) return null;

    return (
        <div>
            <Marquee
                className="py-5 text-xl font-medium text-gray-800"
                onCycleComplete={() => {
                    router.reload({
                        only: ['announcements'], // ini sesuai dengan prop yang kamu kirim dari controller
                    });
                }}
            >
                {data.map((item) => (
                    <span key={item.content} className="mx-10 flex gap-2 text-2xl">
                        <p className="font-bold">{item.title}:</p>
                        <p>{item.content}</p>
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default AnnouncementMarquee;
