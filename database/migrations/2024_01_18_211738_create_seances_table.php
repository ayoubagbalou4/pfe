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
            $table->foreignId('salle_id')->constrained('salles');
            $table->foreignId('groupe_id')->constrained('groupes');
            $table->foreignId('formateur_id')->constrained('formateurs');
            $table->foreignId('module_id')->constrained('modules');
            $table->string('code_seance');
            $table->date('Date');
            $table->string('Jour_de_semaine');
            $table->integer('No_Semaine_Calendrier');
            $table->integer('No_Semaine_DRIF');
            $table->integer('MH');
            $table->time('Horaire_debut');
            $table->time('Horaire_fin');
            $table->enum('Type_seance',['A distance','Presentiel']);
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
