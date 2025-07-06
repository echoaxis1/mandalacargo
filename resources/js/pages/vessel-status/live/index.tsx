import { Head } from '@inertiajs/react';
import Marquee from 'react-fast-marquee';
import TableLive from './table';

const VesselStatusLive = ({ resource }: { resource: Paginate<VesselStatus> }) => {
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

                <div className="fixed bottom-0 z-50 w-full bg-yellow-100 shadow-inner">
                    <Marquee className="py-5 text-xl font-medium text-gray-800">
                        🚢 KM Leuser - ETA: 7 Juli • 📦 PT. Kargo Sukses - FCL/1x40 - JICT • 🚢 KM Gunung Dempo - Delay
                        cuaca • 📦 CV. Indah Logistik - LCL - NPCT •
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default VesselStatusLive;
