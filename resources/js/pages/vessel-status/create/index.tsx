import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Port } from '@/types/port';
import Form from './form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Buat Data Vessel',
        href: '/vessel-status',
    },
];

const VesselCreate = ({ ports }: { ports: Port[] }) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Form ports={ports} />
        </AppLayout>
    );
};

export default VesselCreate;
