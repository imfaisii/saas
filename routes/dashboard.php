<?php

/* This is the file of dashboard routes */

use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'auth',
    'domain' => env('APP_DASHBOARD_URL'),
    'as' => 'dashboard.'
], function () {

    Route::get('/', fn () => redirect()->route('dashboard.home'));
    Route::get('/dashboard', fn () => 'Logged in')->name('home');
});
