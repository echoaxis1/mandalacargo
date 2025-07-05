<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations vessel.
     */
    public function up(): void
    {
        Schema::create('vessel_statuses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('consignee');        // Nama penerima barang
            $table->string('vessel');           // Nama kapal
            $table->timestamp('etd');   // Estimated Time of Departure
            $table->timestamp('eta');   // Estimated Time of Arrival
            $table->string('description');      // Keterangan (misalnya: FCL/1x40/NPCT)
            $table->string('status');           // Status umum, misal: Aktif, Selesai
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vessel_statuses');
    }
};
