import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { VesselStatus } from '@/types/vessel';
import { router } from '@inertiajs/react';
import clsx from 'clsx';
import { formatDate } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import Status from './status';

const TableFade = ({ data }: { data: Paginate<VesselStatus> }) => {
    const [fade, setFade] = useState(true);
    const pageRef = useRef(data.meta.current_page);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // mulai transisi keluar
            setTimeout(() => {
                const nextPage = pageRef.current < data.meta.last_page ? pageRef.current + 1 : 1;
                pageRef.current = nextPage;
                router.get(
                    route('vessel-status.live', { page: nextPage }),
                    {},
                    {
                        preserveState: true,
                        only: ['resource'], // tergantung props inertia
                    },
                );
                setFade(true); // transisi masuk
            }, 400); // timing pas dengan durasi fade
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={clsx('transition-opacity duration-500', fade ? 'opacity-100' : 'opacity-0')}>
            <Table className="w-full bg-gray-800/50">
                <TableCaption className="text-white">
                    Halaman {data.meta.current_page}/{data.meta.last_page}
                </TableCaption>
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
    );
};

export default TableFade;
