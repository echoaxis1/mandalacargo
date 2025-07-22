import ClockDisplay from '@/components/clock-display';
import { VesselStatus } from '@/types/vessel';
import { Ship } from 'lucide-react';
import TableFade from './table-fade';

const TableLive = ({ data }: { data: Paginate<VesselStatus> }) => {
    return (
        <div className="text-white">
            <div className="flex justify-center bg-gradient-to-r from-[#1e8fd0] to-[#56c4f9] px-0">
                <div className="flex items-center gap-3 py-2">
                    <img src="/logo.png?v=3" alt="" className="w-[150px]" />
                    <div className="flex flex-col items-center gap-2 text-white">
                        <h1 className="text-4xl font-bold">Mandala Cargo Indonesia</h1>
                        <h3 className="text-lg font-semibold">Vessel Status</h3>
                    </div>
                </div>
            </div>

            <div className="px-12">
                <div className="mt-8 flex items-end justify-between">
                    <h1 className="mb-3 flex gap-2 text-2xl font-bold">
                        <Ship />
                        Live Vessel
                    </h1>

                    <ClockDisplay className="text-4xl" />
                </div>

                {/* <TableCarousel data={data} /> */}
                <TableFade data={data} />
            </div>
        </div>
    );
};

export default TableLive;
