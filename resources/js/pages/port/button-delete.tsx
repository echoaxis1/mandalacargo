import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { Button } from '@/components/ui/button';
import { usePortStore } from '@/stores/port-store';
import { router, useForm } from '@inertiajs/react';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';

const ButtonDelete = () => {
    const { port } = usePortStore();

    const { delete: deletePort } = useForm();

    if (!!!port) return null;

    const handleDelete = () => {
        deletePort(route('port.destroy', port.id), {
            onSuccess: ({ props }) => {
                toast.success(props.flash?.success);
                router.reload({ only: ['ports'] });
            },
        });
    };

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button>
                        <Trash />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Hapus Pelabuhan {port.name}</AlertDialogTitle>
                        <AlertDialogDescription>
                            Anda akan menghapus pelabuhan {port.name} ({port.country}) dan semua data yang terkait.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete}>Hapus</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default ButtonDelete;
