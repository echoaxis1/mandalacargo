import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExchangeRate } from '@/types/exchange';

const TableExchange = ({ data }: { data: ExchangeRate[] }) => {
    const lastData = data[data.length - 1];

    return (
        <div>
            <Table>
                {lastData && <TableCaption>Update terakhir pada {lastData.fetched_at}</TableCaption>}
                {!lastData && <TableCaption>Tidak ada data terakhir</TableCaption>}
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Curency</TableHead>
                        <TableHead>Rate</TableHead>
                        <TableHead>Konversi</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.curency}</TableCell>
                            <TableCell>{item.rate}</TableCell>
                            <TableCell>
                                {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
                                    1 / item.rate,
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableExchange;
