import ClockDisplay from '@/components/clock-display';
import AnnouncementMarquee from '@/pages/announcement/marquee';
import { Announcement } from '@/types/announcement';
import { VesselStatus } from '@/types/vessel';
import { Head } from '@inertiajs/react';
import { useLocalStorage } from 'react-use-storage';
import LiveLocked from './live-locked';
import TableLive from './table';

type VesselStatusLiveProps = {
    resource: Paginate<VesselStatus>;
    announcements: Announcement[];
};

const VesselStatusLive = ({ resource, announcements }: VesselStatusLiveProps) => {
    const [value, setValue, removeValue] = useLocalStorage('vessel_key');

    if (value != 31082020) return <LiveLocked />;

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Background transparan */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
                style={{ backgroundImage: "url('/bgship.jpeg')" }}
            ></div>

            {/* Konten utama */}
            <div className="relative z-10 flex h-screen flex-col">
                <div>
                    <Head title="Vessel Report">
                        <link rel="preconnect" href="https://fonts.bunny.net" />
                        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
                    </Head>

                    <TableLive data={resource} />
                </div>

                <div className="fixed right-10 bottom-20">
                    <ClockDisplay />
                </div>

                <div className="fixed bottom-0 z-50 w-full bg-yellow-100 shadow-inner">
                    <AnnouncementMarquee data={announcements} />
                </div>
            </div>
        </div>
    );
};

export default VesselStatusLive;
