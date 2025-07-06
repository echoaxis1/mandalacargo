import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
        }, 3000); // 3 detik

        return () => clearInterval(interval); // bersihkan saat komponen unmount
    }, []);

    return (
        <div className="mt-9 px-12 text-white">
            <div className="flex justify-center">
                <div className="flex gap-3">
                    <img src="/logo.png" alt="" className="w-[100px]" />
                    <div className="flex flex-col items-center gap-2 text-white">
                        <h1 className="text-3xl">Mandala Cargo Indonesia</h1>
                        <h3 className="text-lg font-semibold">Vessel Status</h3>
                        <p>{formatDate(new Date(), 'dd MMMM yyyy')}</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-between">
                <h1 className="mb-3 flex gap-2 text-2xl font-bold">
                    <Ship />
                    Vessel Status
                </h1>
            </div>
            <Table className="bg-gray-800/50">
                <TableCaption className="text-white">Data di terakhir update</TableCaption>
                <TableHeader className="bg-blue-200">
                    <TableRow className="text-2xl">
                        <TableHead className="w-[100px] text-center">No</TableHead>
                        <TableHead>Consignee</TableHead>
                        <TableHead>Vessel</TableHead>
                        <TableHead className="text-center">ETD</TableHead>
                        <TableHead className="text-center">ETA</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Keterangan</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.data.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell className="w-[100px] text-center">{index + 1}</TableCell>
                            <TableCell>{item.consignee}</TableCell>
                            <TableCell>{item.vessel}</TableCell>
                            <TableCell className="text-center">{formatDate(item.etd, 'dd MMMM yyyy')}</TableCell>
                            <TableCell className="text-center">{formatDate(item.eta, 'dd MMMM yyyy')}</TableCell>
                            <TableCell>
                                <Status status={item.status} />
                            </TableCell>
                            <TableCell>{item.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableLive;
