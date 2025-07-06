<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VesselStatus extends Model
{
    protected $guarded = [];

    const STATUS_LOADING    = "loading";
    const STATUS_ON_VESSEL  = "onvessel";
    const STATUS_SPPB       = "sppb";
    const STATUS_SPJM       = "spjm";

    public function pod()
    {
        return $this->belongsTo(Port::class);
    }


    public function pol()
    {
        return $this->belongsTo(Port::class);
    }
}
