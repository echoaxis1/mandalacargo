import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {
    value: string;
    onChange: (value: string) => void;
};

const options = [
    { value: 'loading', label: 'LOADING' },
    { value: 'onvessel', label: 'ON VESSEL' },
    { value: 'sppb', label: 'SPPB' },
    { value: 'spjm', label: 'SPJM' },
    { value: 'karantina', label: 'KARANTINA' },
    { value: 'moreed', label: 'MOREED' },
    { value: 'sp2mp', label: 'SP2MP' },
    { value: 'npd', label: 'NPD' },
    { value: 'sptnp', label: 'SPTNP' },
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
