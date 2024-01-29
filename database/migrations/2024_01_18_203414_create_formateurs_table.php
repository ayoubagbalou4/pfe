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
            $table->id();
            $table->string('Matricule');
            $table->string('Nom_Formateur');
            $table->string('Abreviation');
            $table->string('Telephone');
            $table->string('Specialite');
            $table->string('MH_Statutaire');
            $table->string('Statut');
            $table->string('Affectation');
            $table->string('Mutualise');
            $table->string('EFP_mutualise');
            $table->foreignId('salle_id')->constrained('salles');
            $table->string('Color');
            $table->string('Background_Color');
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
