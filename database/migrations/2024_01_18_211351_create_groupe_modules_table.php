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
            $table->foreignId('groupe_id')->constrained('groupes');
            $table->foreignId('module_id')->constrained('modules');
            $table->primary(['groupe_id','module_id']);
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
