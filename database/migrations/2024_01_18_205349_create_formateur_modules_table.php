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
        Schema::create('formateur_modules', function (Blueprint $table) {
            $table->string('formateur_Matricule');
            $table->foreign('formateur_Matricule')->references('Matricule')->on('formateurs');
            $table->foreignId('module_id')->constrained('modules');
            $table->primary(['formateur_Matricule', 'module_id']);
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
        Schema::dropIfExists('formateur_modules');
    }
};
