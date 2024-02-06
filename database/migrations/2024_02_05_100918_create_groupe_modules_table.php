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
        Schema::create('groupe_modules', function (Blueprint $table) {
            $table->string('Code_Groupe');
            $table->foreign('Code_Groupe')->references('Code_Groupe')->on('groupes');
            $table->string('Id_module');
            $table->foreign('Id_module')->references('Id_module')->on('modules');
            $table->primary(['Code_Groupe','Id_module']);
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
        Schema::dropIfExists('groupe_modules');
    }
};
