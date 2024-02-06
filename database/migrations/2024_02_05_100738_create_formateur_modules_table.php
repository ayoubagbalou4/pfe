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
            $table->string('Id_module');
            $table->foreign('Id_module')->references('Id_module')->on('modules');
            $table->primary(['formateur_Matricule', 'Id_module']);
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
