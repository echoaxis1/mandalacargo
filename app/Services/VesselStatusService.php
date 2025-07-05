<?php

namespace App\Services;

use App\Http\Requests\VesselStatusRequest;
use App\Models\VesselStatus;

class VesselStatusService
{

    public function createVesselStatus(VesselStatusRequest $request)
    {
        $validated                = $request->validated();
        $validated['user_id']     = auth()->user()->id;

        return VesselStatus::create($validated);
    }
}
