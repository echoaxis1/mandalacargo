import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAnnouncementStore } from '@/stores/announcement-store';
import { FormAnnouncement } from '@/types/announcement';
import { useForm } from '@inertiajs/react';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { DateSelect } from '../vessel-status/components/date-select';

const ButtonEdit = () => {
    const [open, setOpen] = useState(false);

    const { announcement } = useAnnouncementStore();

    const { data, setData, patch, reset } = useForm<FormAnnouncement>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(name as keyof FormAnnouncement, value);
    };

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        patch(route('announcement.update', announcement?.id), {
            onSuccess: () => {
                toast.success('Data berhasil dipebaharui');
                reset();
                setOpen(false);
            },
            onError: (err) => {
                toast.error(JSON.stringify(err));
            },
        });
    };

    return (
        <div>
            <Dialog modal={false} open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button>
                        <Pencil />
                        Ubah
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Ubah informasi</DialogTitle>
                        <DialogDescription>
                            Anda dapat menambahakan informasi runing text pada layar informasi utama disini.
                        </DialogDescription>

                        <div className="">
                            <form onSubmit={handleSubmit} className="space-y-2">
                                <Input
                                    value={data.title ?? announcement?.title}
                                    placeholder="Judul"
                                    name="title"
                                    onChange={handleChange}
                                />
                                <Input
                                    value={data.content ?? announcement?.content}
                                    placeholder="Informasi"
                                    name="content"
                                    onChange={handleChange}
                                />
                                <div className="flex justify-between gap-2">
                                    <DateSelect
                                        value={data.start_time ?? announcement?.start_time}
                                        onChange={(value) => setData('start_time', value)}
                                        text="Waktu Mulai"
                                    />
                                    <DateSelect
                                        value={data.end_time ?? announcement?.end_time}
                                        onChange={(value) => setData('end_time', value)}
                                        text="Waktu Selesai"
                                    />
                                </div>

                                <div className="mt-5 flex items-center gap-2">
                                    <Checkbox
                                        id="status"
                                        checked={data.is_active ?? !!announcement?.is_active}
                                        onCheckedChange={(checked: boolean) => {
                                            setData('is_active', checked);
                                        }}
                                    />
                                    <Label htmlFor="status">
                                        Status :
                                        {(data.is_active ?? !!announcement?.is_active) ? 'Aktif' : 'Tidak Aktif'}
                                    </Label>
                                </div>

                                <Button className="mt-5">Simpan</Button>
                            </form>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ButtonEdit;
