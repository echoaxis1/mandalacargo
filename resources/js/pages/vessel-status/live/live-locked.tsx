import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock } from 'lucide-react';
import { useState } from 'react';
import { useLocalStorage } from 'react-use-storage';

const LiveLocked = () => {
    const [vessel_key, setVesselKey] = useState('');
    const [value, setValue, removeValue] = useLocalStorage<null | string>('vessel_key', null);

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValue(vessel_key);
    };

    return (
        <div className="relative flex h-screen w-full items-center justify-center bg-[url('/bgship.jpeg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <div className="relative z-10 flex flex-col items-center gap-2 rounded bg-black/20 p-6">
                <form className="flex items-center gap-3 bg-white px-3 py-2" onSubmit={handleSubmit}>
                    <Lock />
                    <Input
                        type="password"
                        name="vessel_key"
                        placeholder="Masukkan Kode Vessel"
                        className="border-0 ring-0"
                        onChange={(e) => setVesselKey(e.target.value)}
                        autoFocus
                    />
                    <Button>Masuk</Button>
                </form>
                <p className="w-full bg-slate-900/50 px-3 py-2 text-center text-white">Masukan kode vessel</p>
            </div>
        </div>
    );
};

export default LiveLocked;
