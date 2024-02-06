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
        Schema::create('formateurs', function (Blueprint $table) {
            $table->string('Matricule')->primary();
            $table->string('Nom_Formateur');
            $table->string('Abreviation');
            $table->string('Telephone')->nullable();
            $table->decimal('MH_Statutaire');
            $table->string('Statut');
            $table->string('Affectation');
            $table->boolean('Mutualise');
            $table->string('EFP_mutualise');
            $table->string('Email');
            $table->string('Id_Salle')->nullable();
            $table->string('Color')->nullable();
            $table->string('Background_Color')->nullable();
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
        Schema::dropIfExists('formateurs');
    }
};

