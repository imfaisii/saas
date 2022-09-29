<?php

/* This is the file of dashboard routes */

use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => ['auth', 'splade'],
    'domain' => env('APP_DASHBOARD_URL'),
    'as' => 'dashboard.'
], function () {
    Route::get('/', fn () => redirect()->route('home'));
    Route::get('/dashboard', fn () => view('dashboard'))->name('test');
});
