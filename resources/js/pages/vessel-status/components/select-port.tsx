import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Port } from '@/types/port';

type SelectPortProps = {
    placeholder: string;
    value: number | undefined;
    onChange: (port_id: number | undefined) => void;
    ports: Port[];
};

export function SelectPort({ placeholder, value, onChange, ports }: SelectPortProps) {
    const [open, setOpen] = React.useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                    {value ? ports.find((port) => port.id === +value)?.name : placeholder}
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
                                    key={port.id}
                                    value={port.id.toString() + '|' + port.name + '|' + port.country}
                                    onSelect={(currentValue) => {
                                        const [id] = currentValue.split('|');
                                        if (id) {
                                            onChange(+id);
                                        }
                                        setOpen(false);
                                    }}
                                >
                                    {port.name} - {port.country}
                                    <Check className={cn('ml-auto', value === port.id ? 'opacity-100' : 'opacity-0')} />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
