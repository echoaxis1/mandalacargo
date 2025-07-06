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
import { useVesselStore } from '@/stores/vessel';
import { router, useForm } from '@inertiajs/react';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';

/** aksi untuk menghapus data */
const ButtonDelete = () => {
    const { delete: deleteVesselStatus, processing } = useForm();
    const { vessel } = useVesselStore();

    if (!vessel.id) return null;

    const handleDelete = () => {
        deleteVesselStatus(route('vessel-status.destroy', vessel.id), {
            onSuccess: (ress) => {
                toast.success(ress.props.flash?.success);
                router.reload({ only: ['resource'] });
            },
            onError: (err) => {
                console.log(err);
                toast.error('Data gagal dihapus');
            },
        });
    };

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button>
                        <Trash />
                        Hapus
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Hapus data vessel?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Anda akan menghapus data {vessel.consignee} {vessel.vessel}. dengan status {vessel.status}.
                            Tindakan ini tidak dapat dikembalikan.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} disabled={processing}>
                            Ya, Hapus
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default ButtonDelete;
