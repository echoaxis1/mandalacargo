import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const ports = [
    {
        value: 1,
        label: 'Port of Shanghai, China',
        country: 'China',
    },
    {
        value: 2,
        label: 'Port of Busan, South Korea',
        country: 'South Korea',
    },
    {
        value: 3,
        label: 'Port of Durban, South Africa',
        country: 'South Africa',
    },
    {
        value: 4,
        label: 'Pelabuhan Tanjung Priok, Indonesia',
        country: 'Indonesia',
    },
    {
        value: 5,
        label: 'Pelabuhan Tanjung Perak, Indonesia',
        country: 'Indonesia',
    },
];

type SelectPortProps = {
    placeholder: string;
    value: number | undefined;
    onChange: (port_id: number | undefined) => void;
};

export function SelectPort({ placeholder, value, onChange }: SelectPortProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                    {value ? ports.find((port) => +port.value === +value)?.label : placeholder}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder={'Pilih Pelabuhan'} className="h-9" />
                    <CommandList>
                        <CommandEmpty>Pelabuhan tidak ditemukan.</CommandEmpty>
                        <CommandGroup>
                            {ports.map((port) => (
                                <CommandItem
                                    key={port.value}
                                    value={String(port.value)}
                                    onSelect={(currentValue) => {
                                        onChange(currentValue === undefined ? undefined : +currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    {port.label}
                                    <Check
                                        className={cn('ml-auto', value === port.value ? 'opacity-100' : 'opacity-0')}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
