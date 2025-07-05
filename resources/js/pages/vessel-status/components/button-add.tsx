import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';

const ButtonAdd = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>
                        <Plus /> Tambah
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Tambah Data Vessel</DialogTitle>
                        <DialogDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</DialogDescription>

                        <div className=""></div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ButtonAdd;
