import {
    BadgeDollarSign,
    Ban,
    Boxes,
    CheckCircle,
    Landmark,
    PackagePlus,
    ShieldAlert,
    ShieldCheck,
    Ship,
} from 'lucide-react';

const options = [
    { value: 'loading', label: 'LOADING', icon: PackagePlus },
    { value: 'onvessel', label: 'ON VESSEL', icon: Ship },
    { value: 'sppb', label: 'SPPB', icon: CheckCircle },
    { value: 'spjm', label: 'SPJM', icon: ShieldAlert },
    { value: 'karantina', label: 'KARANTINA', icon: ShieldCheck },
    { value: 'moreed', label: 'MOREED', icon: Boxes },
    { value: 'sp2mp', label: 'SP2MP', icon: Landmark },
    { value: 'npd', label: 'NPD', icon: BadgeDollarSign },
    { value: 'sptnp', label: 'SPTNP', icon: Ban },
];

const Status = ({ status }: { status: string }) => {
    const selected = options.find((option) => option.value === status);

    if (!selected) return <span className="text-gray-400">Status tidak dikenal</span>;

    const Icon = selected.icon;

    return (
        <div className="flex items-center gap-2">
            <Icon className="h-4 w-4" />
            <span>{selected.label}</span>
        </div>
    );
};

export default Status;
