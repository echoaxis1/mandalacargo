import { Anchor, Container, Ship } from 'lucide-react';

const options = [
    { value: 'pending', label: 'Pending', icon: Anchor },
    { value: 'shiping', label: 'Dalam Pengiriman', icon: Ship },
    { value: 'arived', label: 'Tiba', icon: Container },
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
