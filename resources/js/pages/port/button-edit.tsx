import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { usePortStore } from '@/stores/port-store';
import { FormPort } from '@/types/port';
import { router, useForm } from '@inertiajs/react';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const ButtonEdit = () => {
    const [open, setOpen] = useState(false);
    const { port } = usePortStore();
    const { patch, data, setData } = useForm<FormPort>();

    if (!!!port) return null;

    const handleDelete = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('port.update', port.id), {
            onSuccess: ({ props }) => {
                toast.success(props.flash?.success);
                router.reload({ only: ['ports'] });
                setOpen(false);
            },
        });
    };

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button>
                        <Pencil />
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Edit {port.name} ({port.country})
                        </DialogTitle>
                        <DialogDescription>
                            Perubahan ini akan berlaku untuk semua data vessel yang terkait
                        </DialogDescription>
                    </DialogHeader>

                    <form className="space-y-2" onSubmit={handleDelete}>
                        <Input
                            placeholder="Nama"
                            value={data.name ?? port.name}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <Input
                            placeholder="Negara"
                            value={data.country ?? port.country}
                            onChange={(e) => setData('country', e.target.value)}
                            required
                        />
                        <Input
                            placeholder="Kode"
                            value={data.code ?? port.code}
                            onChange={(e) => setData('code', e.target.value)}
                            required
                        />

                        <div className="ml-auto w-fit">
                            <Button>Simpan</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ButtonEdit;
