import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { usePortStore } from '@/stores/port-store';
import { Port } from '@/types/port';

const TablePort = ({ data }: { data: Port[] }) => {
    const { port, setPort } = usePortStore();

    return (
        <div className="px-5">
            <Table>
                <TableCaption>
                    {data.length > 0 ? 'Menampilkan daftar port' : 'Tidak ada informasi yang ditampilkan'}
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>No</TableHead>
                        <TableHead>Kode</TableHead>
                        <TableHead>Nama</TableHead>
                        <TableHead>Negara</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow
                            key={item.id}
                            onClick={() => setPort(item)}
                            className={cn(port?.id === item.id && 'bg-slate-300 text-black')}
                        >
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>{item.code}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.country}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TablePort;
