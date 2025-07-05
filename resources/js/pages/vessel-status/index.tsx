import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import CardStatus from './components/card-status';
import TableVesselStatus from './components/table';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Vessel Status',
        href: '/vessel-status',
    },
];

export default function Index({ resource }: { resource: Paginate<VesselStatus> }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Vessel Status" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <CardStatus />
                    <CardStatus />
                    <CardStatus />
                </div>

                <TableVesselStatus data={resource} />
            </div>
        </AppLayout>
    );
}
