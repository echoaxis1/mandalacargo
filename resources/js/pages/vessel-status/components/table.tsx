import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useVesselStore } from '@/stores/vessel';
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
                        <TableHead className="w-[100px]">No</TableHead>
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
                            onClick={() => setVessel(item)}
                            className={`${vessel.id === item.id ? 'bg-primary text-primary-foreground' : ''}`}
                        >
                            <TableCell className="w-[100px]">{index + 1}</TableCell>
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
        </div>
    );
};

export default TableVesselStatus;
