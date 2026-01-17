<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            //rename the column featured_image_orginal_name to featured_image_original_name
            $table->renameColumn('featured_image_orginal_name', 'featured_image_original_name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            //
            $table->renameColumn('featured_image_original_name', 'featured_image_orginal_name');
        });
    }
};
