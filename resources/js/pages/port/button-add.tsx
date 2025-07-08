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

//https://service.unece.org/trade/locode/id.htm
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
                <AlertDialogTrigger asChild>
                    <Button>
                        <Plus />
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
                                    placeholder="Negara Ex: Indonesia"
                                    value={data.country}
                                    onChange={(e) => setData('country', e.target.value)}
                                    required
                                />
                                {errors.country && <p className="text-xs text-red-500"> * {errors.country}</p>}
                            </div>

                            <div className="space-y-2">
                                <Input
                                    placeholder="Kode Ex: ID TPP TANJUNG PRIOK"
                                    value={data.code}
                                    onChange={(e) => setData('code', e.target.value)}
                                    required
                                />
                                {errors.code && <p className="text-xs text-red-500"> * {errors.code}</p>}
                                <div className="flex gap-2 text-xs">
                                    Refrensi klik{' '}
                                    <div
                                        onClick={() => {
                                            window.open('https://service.unece.org/trade/locode/id.htm', '_blank');
                                        }}
                                        className="cursor-pointer text-blue-500"
                                    >
                                        Disini
                                    </div>
                                </div>
                            </div>

                            <div className="ml-auto flex w-fit gap-2">
                                <Button type="button" variant={'outline'} onClick={() => setOpen(false)}>
                                    Tutup
                                </Button>
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
