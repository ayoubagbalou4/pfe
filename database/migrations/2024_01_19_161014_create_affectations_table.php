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
        Schema::create('affectations', function (Blueprint $table) {
            $table->id();
            $table->string('Code_Groupe');
            $table->foreign('Code_Groupe')->references('Code_Groupe')->on('groupes');
            $table->string('Id_module');
            $table->foreign('Id_module')->references('Id_module')->on('modules');
            $table->string('formateur_Matricule')->nullable();
            $table->foreign('formateur_Matricule')->references('Matricule')->on('formateurs');
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
        Schema::dropIfExists('affectations');
    }
};
