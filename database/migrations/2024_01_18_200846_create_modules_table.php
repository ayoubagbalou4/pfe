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
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->string('code_module');
            $table->date('annee');
            $table->string('Intitule_module');
            $table->integer('MHP_S1');
            $table->integer('MHSYN_S1');
            $table->integer('MHP_S2');
            $table->integer('MHSYN_S2');
            $table->integer('MHT');
            $table->integer('Coef');
            $table->boolean('EFM_Regional');
            $table->string('Nature_Evaluation');
            $table->string('Metier_Formateur');
            $table->boolean('Module_stage');
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
        Schema::dropIfExists('modules');
    }
};
