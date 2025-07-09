import ClockDisplay from '@/components/clock-display';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { VesselStatus } from '@/types/vessel';
import { router } from '@inertiajs/react';
import { formatDate } from 'date-fns';
import { Ship } from 'lucide-react';
import { useEffect } from 'react';
import Status from './status';

const TableLive = ({ data }: { data: Paginate<VesselStatus> }) => {
    // set interval
    useEffect(() => {
        const interval = setInterval(() => {
            router.reload({
                only: ['resource'], // ini sesuai dengan prop yang kamu kirim dari controller
            });
        }, 60000); // 5 detik

        return () => clearInterval(interval); // bersihkan saat komponen unmount
    }, []);

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

                <Table className="bg-gray-800/50">
                    <TableCaption className="text-white">Data di terakhir update</TableCaption>
                    <TableHeader className="bg-blue-200">
                        <TableRow className="text-2xl text-black">
                            <TableHead>Consignee</TableHead>
                            <TableHead>Vessel</TableHead>
                            <TableHead className="text-center">ETD</TableHead>
                            <TableHead className="text-center">ETA</TableHead>
                            <TableHead className="text-center">POL</TableHead>
                            <TableHead className="text-center">POD</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Keterangan</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.data.map((item, index) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.consignee}</TableCell>
                                <TableCell>{item.vessel}</TableCell>
                                <TableCell className="text-center">{formatDate(item.etd, 'dd MMMM yyyy')}</TableCell>
                                <TableCell className="text-center">{formatDate(item.eta, 'dd MMMM yyyy')}</TableCell>
                                <TableCell className="text-center">{item.pod.name}</TableCell>
                                <TableCell className="text-center">{item.pol.name}</TableCell>
                                <TableCell>
                                    <Status status={item.status} />
                                </TableCell>
                                <TableCell>{item.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default TableLive;
