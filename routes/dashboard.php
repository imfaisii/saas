<?php

/* This is the file of dashboard routes */

use App\Http\Controllers\Auth\SocialiteController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['auth', 'verified'],
    'as' => 'dashboard.'
], function () {
    Route::get('/', fn () => redirect()->route('dashboard.home'));
    Route::get('/dashboard', fn () => 'Logged in')->name('home');
});

// SocialiteController
Route::group([
    'middleware' => 'guest',
    'controller' => SocialiteController::class,
    'as' => 'socialite.'
], function () {
    Route::get('/auth/redirect/{to}', 'redirect')->name('redirect');
    Route::get('/auth/callback', 'callback')->name('callback');

    // 

    Route::get('test', fn () => User::whereId(1)->driver('google')->first());
});
