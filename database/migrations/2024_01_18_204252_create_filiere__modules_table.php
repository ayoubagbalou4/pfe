<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('filiere__modules', function (Blueprint $table) {
            $table->foreignId('filiere_id')->constrained('filieres');
            $table->foreignId('module_id')->constrained('modules');
            $table->primary(['filiere_id','module_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('filiere__modules');
    }
};
