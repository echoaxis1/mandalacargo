<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PortRequest extends FormRequest
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
            'name'      => 'required|min:3|max:50',
            'country'   => 'required|min:4|max:30',
            'code'      => 'required|min:4|max:30',
        ];
    }

    public function messages()
    {
        return [
            'name.required'     => 'Nama wajib di isi.',
            'country.required'  => 'Country wajib di isi.',
            'code.required'     => 'Code wajib di isi.',
            'name.min'          => 'Nama minimal 3 karakter.',
            'country.min'       => 'Country minimal 4 karakter.',
            'code.min'          => 'Code minimal 4 karakter.',
        ];
    }
}
