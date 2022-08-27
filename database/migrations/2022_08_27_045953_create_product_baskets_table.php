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
        Schema::create('product_baskets', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->index('product_id');
            $table->foreignId('product_id')->on('products');

            $table->index('basket_id');
            $table->foreignId('basket_id')->on('baskets');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_baskets');
    }
};
