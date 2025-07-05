import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import Form from './form';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Buat Data Vessel',
        href: '/vessel-status',
    },
];

const VesselCreate = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Form />
        </AppLayout>
    );
};

export default VesselCreate;
