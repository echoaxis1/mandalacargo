import { Announcement } from '@/types/announcement';
import Marquee from 'react-fast-marquee';

/** marque  */
const AnnouncementMarquee = ({ data }: { data: Announcement[] }) => {
    return (
        <div>
            <Marquee className="py-5 text-xl font-medium text-gray-800">
                {data.map((item) => (
                    <span key={item.content} className="mx-10 flex gap-2">
                        <p className="font-bold">{item.title}:</p>
                        <p>{item.content}</p>
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default AnnouncementMarquee;
function useEffect(arg0: () => () => void, arg1: never[]) {
    throw new Error('Function not implemented.');
}
