type VesselStatus = {
    id: number;
    vessel: string;
    consignee: string;
    etd: string;
    eta: string;
    status: string;
    description: string;
    created_at: string;
    updated_at: string;
};

type FormVessel = {
    vessel: string;
    consignee: string;
    etd: string;
    eta: string;
    pod_id: number | undefined;
    pol_id: number | undefined;
    status: string;
    description: string;
};
