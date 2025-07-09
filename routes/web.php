<?php

use App\Http\Controllers\VesselStatusController;
use App\Models\ExchangeRate;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::get('/', [VesselStatusController::class, 'live'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


Route::get('/playground', function () {

    $exchange = ExchangeRate::getCurrency();


    dd($exchange->first()->curency);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
