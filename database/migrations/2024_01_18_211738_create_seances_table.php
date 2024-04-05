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
        Schema::create('seances', function (Blueprint $table) {
            $table->id();
            $table->string('Id_Salle')->nullable();
            $table->foreign('Id_Salle')->references('Id_Salle')->on('salles');
            $table->string('Code_Groupe');
            $table->foreign('Code_Groupe')->references('Code_Groupe')->on('groupes');
            $table->string('formateur_Matricule');
            $table->foreign('formateur_Matricule')->references('Matricule')->on('formateurs');
            $table->string('Id_module');
            $table->foreign('Id_module')->references('Id_module')->on('modules');
            $table->string('code_seance');
            $table->date('Date');
            $table->string('Jour_de_semaine');
            $table->integer('No_Semaine_Calendrier');
            $table->integer('No_Semaine_DRIF');
            $table->integer('MH');
            $table->time('Horaire_debut');
            $table->time('Horaire_fin');
            $table->enum('Type_seance',['A DISTANCE','PRESENTIEL']);
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
        Schema::dropIfExists('seances');
    }
};
