import { Button } from '@/components/ui/button';
import { useVesselStore } from '@/stores/vessel';
import { Link } from '@inertiajs/react';
import { Pencil } from 'lucide-react';

const ButtonEdit = () => {
    const { vessel } = useVesselStore();

    if (!vessel.id) return null;

    return (
        <Link href={route('vessel-status.edit', vessel.id)}>
            <Button>
                <Pencil />
                Edit
            </Button>
        </Link>
    );
};

export default ButtonEdit;
