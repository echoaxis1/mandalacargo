import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Port } from '@/types/port';
import { Link, useForm } from '@inertiajs/react';
import { Save, Undo } from 'lucide-react';
import React from 'react';
import { toast } from 'sonner';
import { DateSelect } from '../components/date-select';
import { SelectPort } from '../components/select-port';
import SelectStatus from '../components/select-status';

const Form = ({ ports }: { ports: Port[] }) => {
    const { data, setData, post, reset, errors, processing } = useForm<FormVessel>({
        vessel: '',
        etd: '',
        eta: '',
        pod_id: undefined,
        pol_id: undefined,
        status: '',
        description: '',
        consignee: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('vessel-status.store'), {
            onSuccess: () => {
                reset();
                toast.success('Data berhasil disimpan');
            },
            onError: (err) => {
                toast.error(JSON.stringify(err));
            },
        });
    };

    // menangani perubahan form
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData(name as keyof FormVessel, value);
    };

    return (
        <div className="mt-3 px-42 pt-10">
            <h1 className="mb-3 text-xl font-bold">Buat Data Vessel</h1>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-1">
                    <p className="font-bold">Consignee</p>
                    <Input
                        required
                        placeholder="Masukan Consignee"
                        name="consignee"
                        value={data.consignee}
                        onChange={handleChange}
                    />
                    {errors.consignee && <p className="mt-2 text-xs text-red-500">{errors.consignee}</p>}
                </div>

                {/* VESSEL */}
                <div className="space-y-1">
                    <p className="font-bold">Vessel</p>
                    <Input
                        required
                        placeholder="Masukan Vessel"
                        name="vessel"
                        value={data.vessel}
                        onChange={handleChange}
                    />
                    {errors.vessel && <p className="mt-2 text-xs text-red-500">{errors.vessel}</p>}
                </div>

                <div className="flex gap-3">
                    <div className="">
                        {/* ETD */}
                        <DateSelect
                            required
                            text="Pilih Keberangkatan"
                            value={data.etd ?? ''}
                            onChange={(value) => setData('etd', value)}
                        />
                        {errors.eta && <p className="mt-2 text-xs text-red-500">{errors.eta}</p>}
                    </div>

                    {/* POD */}
                    <SelectPort
                        ports={ports}
                        placeholder="Pilih POD"
                        value={data.pod_id}
                        onChange={(value) => setData('pod_id', value)}
                    />
                </div>

                <div className="flex justify-between gap-3">
                    <div className="">
                        {/* ETA */}
                        <DateSelect
                            required
                            text="Pilih Kedatangan"
                            value={data.eta ?? ''}
                            onChange={(value) => setData('eta', value)}
                        />
                        {errors.etd && <p className="mt-2 text-xs text-red-500">{errors.etd}</p>}
                    </div>

                    {/* POD */}
                    <SelectPort
                        ports={ports}
                        placeholder="Pilih POL"
                        value={data.pol_id}
                        onChange={(value) => setData('pol_id', value)}
                    />
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-1">
                    <p className="font-bold">Keterangan</p>
                    <Input
                        required
                        placeholder="Keterangan"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                    />
                    {errors.description && <p className="mt-2 text-xs text-red-500">{errors.description}</p>}
                </div>

                {/* STATUS */}
                <div className="space-y-1">
                    <p className="font-bold">Status</p>
                    <SelectStatus value={data.status ?? ''} onChange={(value) => setData('status', value)} />
                    {errors.status && <p className="mt-2 text-xs text-red-500">{errors.status}</p>}
                </div>

                <div className="mt-10 flex justify-between">
                    <Link href={route('vessel-status.index')}>
                        <Button type="button">
                            <Undo />
                            Kembali
                        </Button>
                    </Link>
                    <Button disabled={processing}>
                        <Save />
                        {processing ? 'Menyimpan...' : 'Simpan'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Form;
