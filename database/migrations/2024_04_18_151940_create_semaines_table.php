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
        Schema::create('semaines', function (Blueprint $table) {
            $table->id();
            $table->integer('semaine');
            $table->date('firstDayOfWeek');
            $table->date('lastDayOfWeek');
            $table->integer('Semaine_DRIF');
            $table->integer('annee');
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
        Schema::dropIfExists('semaines');
    }
};
