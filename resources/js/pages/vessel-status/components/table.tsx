import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useVesselStore } from '@/stores/vessel';
import { VesselStatus } from '@/types/vessel';
import { router } from '@inertiajs/react';
import { formatDate } from 'date-fns';
import { Ship } from 'lucide-react';
import ActionButton from './action-button';

const TableVesselStatus = ({ data }: { data: Paginate<VesselStatus> }) => {
    const { vessel, setVessel } = useVesselStore();

    return (
        <div className="mt-4">
            <div className="flex justify-between">
                <h1 className="mb-3 flex gap-2 text-xl font-bold">
                    <Ship />
                    Vessel Status
                </h1>

                <ActionButton />
            </div>
            <Table>
                <TableCaption>Menampilkan daftar shipment</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Consignee</TableHead>
                        <TableHead>Vessel</TableHead>
                        <TableHead className="text-left">ETD</TableHead>
                        <TableHead className="text-left">ETA</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Keterangan</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.data.map((item, index) => (
                        <TableRow
                            key={item.id}
                            onClick={() => {
                                setVessel(item);
                            }}
                            className={`${vessel.id === item.id ? 'bg-slate-200' : ''}`}
                        >
                            <TableCell>{item.consignee}</TableCell>
                            <TableCell>{item.vessel}</TableCell>
                            <TableCell className="text-left">{formatDate(item.etd, 'dd MMMM yyyy')}</TableCell>
                            <TableCell className="text-left">{formatDate(item.eta, 'dd MMMM yyyy')}</TableCell>
                            <TableCell>{item.status}</TableCell>
                            <TableCell>{item.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Paginate */}
            <Pagination>
                <PaginationContent>
                    {data.meta.current_page > 1 && (
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() =>
                                    router.get(route('vessel-status.index', { page: data.meta.current_page - 1 }))
                                }
                            />
                        </PaginationItem>
                    )}

                    {Array.from({ length: data.meta.last_page }, (_, i) => i + 1).map((page) => (
                        <PaginationItem key={page}>
                            <PaginationLink
                                onClick={() => router.get(route('vessel-status.index', { page }))}
                                isActive={data.meta.current_page === page}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    {data.meta.current_page < data.meta.last_page && (
                        <PaginationItem>
                            <PaginationNext
                                onClick={() =>
                                    router.get(route('vessel-status.index', { page: data.meta.current_page + 1 }))
                                }
                            />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default TableVesselStatus;
