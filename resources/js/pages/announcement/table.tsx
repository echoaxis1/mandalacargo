import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { useAnnouncementStore } from '@/stores/announcement-store';
import { Announcement } from '@/types/announcement';
import { formatDate } from 'date-fns';

const TableAnnouncement = ({ data }: { data: Announcement[] }) => {
    const { announcement, setAnnouncement } = useAnnouncementStore();

    return (
        <div>
            <Table>
                <TableCaption>Tidak ada informasi yang ditampilkan.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Judul</TableHead>
                        <TableHead>Kontent</TableHead>
                        <TableHead>Aktif</TableHead>
                        <TableHead className="text-right">Mulai</TableHead>
                        <TableHead className="text-right">Selesai</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow
                            onClick={() => setAnnouncement(item)}
                            key={item.id}
                            className={cn(announcement?.id === item.id && 'bg-slate-300 text-black')}
                        >
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.content}</TableCell>
                            <TableCell>{item.is_active ? 'Aktif' : 'Tidak Aktif'}</TableCell>
                            <TableCell className="text-right">{formatDate(item.start_time, 'dd MMMM yyyy')}</TableCell>
                            <TableCell className="text-right">{formatDate(item.end_time, 'dd MMMM yyyy')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableAnnouncement;
