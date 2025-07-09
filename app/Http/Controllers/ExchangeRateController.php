<?php

namespace App\Http\Controllers;

use App\Models\ExchangeRate;
use Inertia\Inertia;

class ExchangeRateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function __invoke()
    {
        $exchangeRate = ExchangeRate::getCurrency();

        return Inertia::render('exchange-rate/index', compact('exchangeRate'));
    }
}
