<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VesselStatusResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'consignee'     => $this->consignee,
            'vessel'        => $this->vessel,
            'etd'           => $this->etd,
            'eta'           => $this->eta,
            'pod'           => $this->pod,
            'pol'           => $this->pol,
            'status'        => $this->status,
            'description'   => $this->description,
            'updated_at'    => $this->updated_at,
            'created_at'    => $this->created_at
        ];
    }
}
