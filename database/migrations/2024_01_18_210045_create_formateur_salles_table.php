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
        Schema::create('formateur_salles', function (Blueprint $table) {
            $table->foreignId('formateur_id')->constrained('formateurs');
            $table->foreignId('salle_id')->constrained('salles');
            $table->primary(['formateur_id','salle_id']);
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
        Schema::dropIfExists('formateur_salles');
    }
};
