import { Button } from '@/components/ui/button';
import { Link, useForm } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import ButtonDelete from './button-delete';
import ButtonEdit from './button-edit';

const ActionButton = () => {
    const { delete: deleteVesselStatus } = useForm();

    return (
        <div className="flex gap-2">
            {/* <ButtonAdd /> */}
            <Link href={route('vessel-status.create')}>
                <Button>
                    <Plus />
                    Tambah
                </Button>
            </Link>

            <ButtonEdit />

            <ButtonDelete />
        </div>
    );
};

export default ActionButton;
