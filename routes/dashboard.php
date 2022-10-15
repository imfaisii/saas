<?php

/* This is the file of dashboard routes */

use App\Models\User;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\SocialiteController;
use App\Http\Controllers\Dashboard\ProfileController;

Route::group([
    'middleware' => ['auth', 'verified'],
    'as' => 'dashboard.'
], function () {
    Route::get('/', fn () => redirect()->route('dashboard.home'))->name('welcome');
    Route::get('/dashboard', fn () => view('pages.dashboard.home.index'))->name('home');

    // User Profile
    Route::resource('/profile', ProfileController::class);
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
