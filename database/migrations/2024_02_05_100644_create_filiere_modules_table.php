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
        Schema::create('filiere_modules', function (Blueprint $table) {
            $table->string('Code_Filiere');
            $table->foreign('Code_Filiere')->references('Code_Filiere')->on('filieres');
            $table->string('Id_module');
            $table->foreign('Id_module')->references('Id_module')->on('modules');
            $table->primary(['Code_Filiere','Id_module']);
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
        Schema::dropIfExists('filiere_modules');
    }
};
