<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class VesselStatusRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'consignee'     => 'required',
            'vessel'        => 'required',
            'etd'           => 'required',
            'eta'           => 'required',
            'description'   => 'required',
            'status'        => 'required',
        ];
    }


    public function messages()
    {
        return [
            'consignee.required'    => 'Consignee wajib di isi.',
            'vessel.required'       => 'Vessel wajib di isi.',
            'etd.required'          => 'ETD wajib di isi.',
            'eta.required'          => 'ETA wajib di isi.',
            'description.required'  => 'Description wajib di isi.',
            'status.required'       => 'Status wajib di isi.',
        ];
    }
}
