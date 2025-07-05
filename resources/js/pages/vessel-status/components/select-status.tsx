import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const options = [
    { value: 'send', label: 'Dikirim' },
    { value: 'shiping', label: 'Dalam Pengiriman' },
    { value: 'completed', label: 'Selesai' },
];

const SelectStatus = ({ value, onChange }: Props) => {
    return (
        <div>
            <Select value={value} onValueChange={onChange} name="status">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem value={option.value} key={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default SelectStatus;
