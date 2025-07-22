<?php

namespace App\Http\Controllers;

use App\Services\VesselStatusService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlaygroundController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(VesselStatusService $service)
    {
        $resource = $service->paginate();

        return Inertia::render('playground', compact('resource'));
    }
}
