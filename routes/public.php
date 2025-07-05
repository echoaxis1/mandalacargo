<?php

use App\Http\Controllers\VesselStatusController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {

    Route::resource('/vessel-status', VesselStatusController::class);
});
