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
            $table->id();
            $table->string('Code_Groupe');
            $table->string('Mode_de_Formation');
            $table->string('Nombre_Inscrits');
            $table->string('Stagiaire_Responsable');
            $table->string('Telephone_responsable');
            $table->string('Adjoint_Responsable');
            $table->string('Telephone_Adjoint');
            $table->foreignId('filiere_id')->constrained('filieres');
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
