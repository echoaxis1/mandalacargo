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
import { useAnnouncementStore } from '@/stores/announcement-store';
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';

const ButtonDelete = () => {
    const { announcement } = useAnnouncementStore();

    const { delete: deleteAnnouncement } = useForm();

    if (announcement === undefined) return null;

    const onDelete = () => {
        deleteAnnouncement(route('announcement.destroy', announcement.id), {
            onSuccess: ({ props }) => {
                toast.success(props.flash?.success);
            },
        });
    };

    return (
        <div>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button>Hapus</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Anda akan menghapus informasi ini ?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Tindakan ini tidak dapat di batalakan, data yang telah dihapus tidak dapat dikembalikan.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction onClick={onDelete}>Ya, Hapus</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default ButtonDelete;
