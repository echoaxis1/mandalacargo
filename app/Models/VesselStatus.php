<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VesselStatus extends Model
{
    protected $guarded = [];

    public function pod()
    {
        return $this->belongsTo(Port::class);
    }


    public function pol()
    {
        return $this->belongsTo(Port::class);
    }
}
