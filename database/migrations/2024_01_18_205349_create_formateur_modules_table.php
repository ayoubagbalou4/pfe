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
            $table->foreignId('formateur_id')->constrained('formateurs');
            $table->foreignId('module_id')->constrained('modules');
            $table->primary(['formateur_id','module_id']);
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
