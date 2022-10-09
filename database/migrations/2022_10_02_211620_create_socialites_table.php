<?php

use App\Models\User;
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
        Schema::create('socialites', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->string('driver');
            $table->string('driver_id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('username')->nullable();
            $table->string('avatar')->nullable();
            $table->string('token');
            $table->string('refresh_token')->nullable();
            $table->timestamp('expires_in')->nullable();
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
        Schema::dropIfExists('socialites');
    }
};
