import AppLayout from '@/layouts/app-layout';
import { Port } from '@/types/port';
import ActionsButton from './actions-button';
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
            <div className="mt-5 flex items-center justify-between px-5">
                <h1 className="text-xl">Daftar Pelabuhan</h1>

                <ActionsButton />
            </div>

            <TablePort data={ports} />
        </AppLayout>
    );
};

export default index;
