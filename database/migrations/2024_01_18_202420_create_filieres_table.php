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
        Schema::create('filieres', function (Blueprint $table) {
            $table->string('Code_Filiere')->primary();
            $table->string('Libelle_Filiere');
            $table->string('Lib_Filiere_Arabe');
            $table->string('Creneau');
            $table->string('Code_Secteur');
            $table->string('Secteur');
            $table->string('Niveau_de_formation');
            $table->string('Type_de_formation');
            $table->string('Code_Filiere_Tronc_Commun')->nullable();
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
        Schema::dropIfExists('filieres');
    }
};
