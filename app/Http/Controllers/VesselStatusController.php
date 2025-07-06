<?php

namespace App\Http\Controllers;

use App\Http\Requests\VesselStatusRequest;
use App\Http\Resources\VesselStatusResource;
use App\Models\VesselStatus;
use App\Services\VesselStatusService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VesselStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vesselStatuses = VesselStatus::paginate(10);
        $resource = VesselStatusResource::collection(VesselStatus::orderBy('id', 'desc')->paginate(10));
        return Inertia::render('vessel-status/index', compact('resource'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('vessel-status/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(VesselStatusRequest $request, VesselStatusService $service)
    {
        $service->createVesselStatus($request);
        return redirect()->route('vessel-status.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(VesselStatus $vesselStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VesselStatus $vesselStatus)
    {
        return Inertia::render('vessel-status/edit/index', compact('vesselStatus'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(VesselStatusRequest $request, VesselStatus $vesselStatus)
    {
        $vesselStatus->update($request->validated());
        return redirect()->back()->with('success', 'Data berhasil diubah :)');
    }


    /**
     * Hapus data
     */
    public function destroy(VesselStatus $vesselStatus)
    {
        try {
            $vesselStatus->delete();

            return redirect()->back()->with('success', 'Data berhasil dihapus');
        } catch (\Throwable $e) {
            return redirect()->back()->with('success', 'Data berhasil dihapus');
        }
    }


    public function live()
    {
        $vesselStatuses = VesselStatus::paginate(10);
        $resource = VesselStatusResource::collection(VesselStatus::orderBy('id', 'desc')->paginate(10));
        return Inertia::render('vessel-status/live/index', compact('resource'));
    }
}
