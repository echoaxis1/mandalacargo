import { ChevronDownIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { id } from 'date-fns/locale';

type DateSelectProps = {
    text?: string;
    value: string;
    required?: boolean;
    onChange: (value: string) => void;
};

export function DateSelect({ text, value, onChange, required = false }: DateSelectProps) {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(value ? new Date(value) : undefined);

    return (
        <div className="flex flex-col gap-3">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" className="w-48 justify-between font-normal">
                        {date ? date.toLocaleDateString() : (text ?? 'Pilih Tanggal')}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                        required={required}
                        locale={id}
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date: Date | undefined) => {
                            onChange(date?.toLocaleDateString('sv-SE') ?? '');
                            setDate(date);
                            setOpen(false);
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
