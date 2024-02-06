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
            $table->string("Id_module")->primary();
            $table->string('code_module');
            $table->integer('annee');
            $table->string('Intitule_module');
            $table->decimal('MHP_S1');
            $table->decimal('MHSYN_S1');
            $table->decimal('MHP_S2');
            $table->decimal('MHSYN_S2');
            $table->decimal('MHT');
            $table->integer('Coef');
            $table->boolean('EFM_Regional');
            $table->string('Nature_Evaluation')->nullable();
            $table->string('Metier_Formateur')->nullable();
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
