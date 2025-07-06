<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Port;

class PortSeeder extends Seeder
{
    public function run()
    {
        $ports = [
            // Indonesia
            ['name' => 'Tanjung Priok', 'code' => 'IDTPP', 'country' => 'Indonesia'],
            ['name' => 'Tanjung Perak', 'code' => 'IDTJK', 'country' => 'Indonesia'],
            ['name' => 'Belawan', 'code' => 'IDBLW', 'country' => 'Indonesia'],
            ['name' => 'Makassar', 'code' => 'IDMAK', 'country' => 'Indonesia'],
            ['name' => 'Bitung', 'code' => 'IDBIT', 'country' => 'Indonesia'],

            // China
            ['name' => 'Port of Shanghai', 'code' => 'CNSHA', 'country' => 'China'],
            ['name' => 'Port of Ningbo-Zhoushan', 'code' => 'CNNGB', 'country' => 'China'],
            ['name' => 'Port of Shenzhen', 'code' => 'CNSNZ', 'country' => 'China'],

            // South Korea
            ['name' => 'Port of Busan', 'code' => 'KRPUS', 'country' => 'South Korea'],

            // Africa
            ['name' => 'Port of Durban', 'code' => 'ZADUR', 'country' => 'South Africa'],
            ['name' => 'Port of Mombasa', 'code' => 'KEMBA', 'country' => 'Kenya'],
            ['name' => 'Port of Lagos', 'code' => 'NGLOS', 'country' => 'Nigeria'],

            // Others
            ['name' => 'Port of Singapore', 'code' => 'SGSIN', 'country' => 'Singapore'],
            ['name' => 'Port of Rotterdam', 'code' => 'NLRTM', 'country' => 'Netherlands'],
            ['name' => 'Port of Hamburg', 'code' => 'DEHAM', 'country' => 'Germany'],
        ];

        foreach ($ports as $port) {
            Port::create($port);
        }
    }
}
