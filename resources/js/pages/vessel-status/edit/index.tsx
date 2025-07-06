import AppLayout from '@/layouts/app-layout';
import FormEdit from './form';

const breadcrumbs = [
    {
        title: 'Edit Vessel Status',
        href: '/vessel-status',
    },
];

const index = ({ vesselStatus }: { vesselStatus: VesselStatus }) => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <div className="">
                <FormEdit vesselStatus={vesselStatus} />
            </div>
        </AppLayout>
    );
};

export default index;
