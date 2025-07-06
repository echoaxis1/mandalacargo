import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ButtonDelete from './button-delete';
import ButtonEdit from './button-edit';

const ActionsButton = () => {
    return (
        <div className="flex gap-1">
            <Button>
                <Plus />
            </Button>
            <ButtonEdit />
            <ButtonDelete />
        </div>
    );
};

export default ActionsButton;
