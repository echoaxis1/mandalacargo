import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormPort } from '@/types/port';
import { useForm } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const ButtonAdd = () => {
    const [open, setOpen] = useState(false);
    const { post, data, setData, processing, errors, reset } = useForm<FormPort>();

    const handleStore = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('port.store'), {
            onSuccess: () => {
                toast.success('Data berhasil disimpan');
                setOpen(false);
                reset();
            },
            onError: (err) => {
                toast.error(JSON.stringify(err));
            },
        });
    };

    return (
        <div>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger>
                    <Button>
                        <Plus />
                        Tambah
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Tambah Data Pelabuhan</AlertDialogTitle>
                        <AlertDialogDescription></AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="">
                        <form className="space-y-2" onSubmit={handleStore}>
                            <div className="space-y-2">
                                <Input
                                    placeholder="Contoh : Pelabuhan Tanjung Priok"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                {errors.name && <p className="text-xs text-red-500"> * {errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <Input
                                    placeholder="Negara "
                                    value={data.country}
                                    onChange={(e) => setData('country', e.target.value)}
                                    required
                                />
                                {errors.country && <p className="text-xs text-red-500"> * {errors.country}</p>}
                            </div>

                            <div className="space-y-2">
                                <Input
                                    placeholder="Kode"
                                    value={data.code}
                                    onChange={(e) => setData('code', e.target.value)}
                                    required
                                />
                                {errors.code && <p className="text-xs text-red-500"> * {errors.code}</p>}
                            </div>

                            <div className="ml-auto w-fit">
                                <Button disabled={processing}>{processing ? 'Loading...' : 'Simpan'}</Button>
                            </div>
                        </form>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default ButtonAdd;
