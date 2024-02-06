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
            $table->string('formateur_Matricule');
            $table->foreign('formateur_Matricule')->references('Matricule')->on('formateurs');
            $table->string('Id_Salle');
            $table->foreign('Id_Salle')->references('Id_Salle')->on('salles');
            $table->primary(['formateur_Matricule','Id_Salle']);
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
