<?php

namespace App\Http\Controllers;

use App\Http\Requests\PortRequest;
use App\Models\Port;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Port::query();

        if ($search = $request->input('search')) {
            $query->where('name', 'like', "%{$search}%")
                ->orWhere('country', 'like', "%{$search}%")
                ->orWhere('code', 'like', "%{$search}%");
        }

        $ports = $query->get();
        return Inertia::render('port/index', compact('ports'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function store(PortRequest $request)
    {
        Port::create($request->validated());

        return redirect()->back()->with('success', 'Data berhasil disimpan');
    }



    /**
     * Display the specified resource.
     */
    public function show(Port $port)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Port $port)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Port $port)
    {
        $port->update($request->all());
        return redirect()->back()->with('success', 'Data berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Port $port)
    {
        try {
            $port->delete();
            return redirect()->back()->with('success', 'Data berhasil dihapus');
        } catch (\Throwable $th) {
            return redirect()->back()->with('success', 'Gagal menghapus: Pelabuhan sedang digunakan.');
        }
    }
}
