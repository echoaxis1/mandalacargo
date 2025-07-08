import AppLayout from '@/layouts/app-layout';
import { Port } from '@/types/port';
import ActionsButton from './actions-button';
import SearchPort from './search';
import TablePort from './table';

const breadcrumbs = [
    {
        title: 'Port',
        href: '/port',
    },
];

const index = ({ ports }: { ports: Port[] }) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="px-5">
                <div className="mt-5 flex items-center justify-between">
                    <h1 className="text-xl">Daftar Pelabuhan</h1>

                    <ActionsButton />
                </div>

                <SearchPort />
            </div>

            <TablePort data={ports} />
        </AppLayout>
    );
};

export default index;
