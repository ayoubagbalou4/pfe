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
        Schema::create('groupes', function (Blueprint $table) {
            $table->string('Code_Groupe')->primary();
            $table->string('id');
            $table->string('Mode_de_Formation');
            $table->string('background');
            $table->string('Nombre_Inscrits');
            $table->string('formateur_Matricule');
            $table->foreign('formateur_Matricule')->references('Matricule')->on('formateurs');
            $table->string('Code_Filiere');
            $table->foreign('Code_Filiere')->references('Code_Filiere')->on('filieres');
            $table->string('Stagiaire_Responsable')->nullable();
            $table->string('Telephone_responsable')->nullable();
            $table->string('Adjoint_Responsable')->nullable();
            $table->string('Telephone_Adjoint')->nullable();
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
        Schema::dropIfExists('groupes');
    }
};
