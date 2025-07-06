<?php

namespace App\Services;

use App\Http\Requests\VesselStatusRequest;
use App\Http\Resources\VesselStatusResource;
use App\Models\Port;
use App\Models\VesselStatus;

class VesselStatusService
{

    public function paginate()
    {
        $vesselStatuses = VesselStatus::orderBy('eta', 'asc')->paginate(10);

        return VesselStatusResource::collection($vesselStatuses);
    }


    public function createVesselStatus(VesselStatusRequest $request)
    {
        $validated                = $request->validated();
        $validated['user_id']     = auth()->user()->id;

        return VesselStatus::create($validated);
    }


    public function getPorts()
    {
        return Port::all();
    }
}
