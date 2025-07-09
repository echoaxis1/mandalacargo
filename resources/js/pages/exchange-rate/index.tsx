import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { ExchangeRate } from '@/types/exchange';
import { useState } from 'react';
import TableExchange from './table';

const index = ({ exchangeRate }: { exchangeRate: ExchangeRate[] }) => {
    const [filter, setFilter] = useState('');

    const data = exchangeRate.filter((item) => item.curency.includes(filter.toUpperCase()));

    return (
        <AppLayout>
            <div className="p-5">
                <div className="">
                    <h1 className="text-2xl">Exchange Rate</h1>

                    <Input
                        value={filter}
                        placeholder="Ex: IDRUSD"
                        className="w-sm"
                        onChange={(e) => setFilter(e.target.value.toUpperCase())}
                    />
                </div>

                <TableExchange data={data} />
            </div>
        </AppLayout>
    );
};

export default index;
