import { CheckCircle, PackagePlus, ShieldAlert, Ship } from 'lucide-react';

const options = [
    { value: 'loading', label: 'LOADING', icon: PackagePlus },
    { value: 'onvessel', label: 'ON VESSEL', icon: Ship },
    { value: 'sppb', label: 'SPPB', icon: CheckCircle },
    { value: 'spjm', label: 'SPJM', icon: ShieldAlert },
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
