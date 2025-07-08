import { Input } from '@/components/ui/input';
import { router } from '@inertiajs/react';
import { Search, XCircle } from 'lucide-react';
import { useState } from 'react';

const SearchPort = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.get(route('port.index'), { search }, { preserveState: true });
    };

    const resetSearch = () => {
        setSearch('');
        router.get(route('port.index'));
    };

    return (
        <form className="item-center relative flex w-sm gap-2" onSubmit={handleSearch}>
            <Input placeholder="Cari Pelabuhan" onChange={(e) => setSearch(e.target.value)} />
            <button className="absolute top-1/2 right-2 -translate-y-1/2">
                {search.length > 0 ? <XCircle onClick={resetSearch} /> : <Search />}
            </button>
        </form>
    );
};

export default SearchPort;
