<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Http;

class ExchangeRate extends Model
{

    protected $guarded = [];


    // mendapatkan data currency
    public  static function getCurrency()
    {
        $currency = Self::all();

        self::createAnnouncement();

        if ($currency->last()?->fetched_at < now()->subDays(1)) {
            return self::fetchCurrency();
        }

        return $currency;
    }

    /*
    !contoh response
    "success" => true
    "terms" => "https://currencylayer.com/terms"
    "privacy" => "https://currencylayer.com/privacy"
    "timestamp" => 1752044224
    "source" => "IDR"
    "quotes" => [
        "IDRAED" => 0.000226
        "IDRAFN" => 0.004304
        "IDRALL" => 0.005144]
    */
    protected static function fetchCurrency()
    {
        $apiKey = "c14c198c25a5ad9adb1cd8b1aee144ef";
        $data = Http::get("https://api.exchangerate.host/live?access_key={$apiKey}&source=IDR")->json();

        foreach ($data['quotes'] as $curency => $rate) {
            ExchangeRate::updateOrCreate(
                ['curency' => $curency],
                [
                    'rate'     => $rate,
                    'fetched_at' => now()
                ]
            );
        }

        return self::all();
    }


    static function createAnnouncement()
    {
        $filter_currency = Self::whereIn('curency', ['IDRUSD', 'IDRSGD', 'IDRGBP', 'IDREUR'])->get();

        // membuat data baru ke announcement jika sebelumnya ada
        foreach ($filter_currency as $currency) {
            Announcement::updateOrInsert(
                ['title' => $currency->curency],
                [
                    'title'         => $currency->curency,
                    'content'       => "Rp " . number_format((1 / $currency->rate), 2, ',', '.'),
                    'start_time'    => now(),
                    'end_time'      => now()->addDays(1),
                    'is_active'     => true
                ]
            );
        }
    }
}
