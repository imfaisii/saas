<?php

/* This is the file of dashboard routes */

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group([
    'middleware' => 'auth',
    'domain' => env('APP_DASHBOARD_URL'),
    'as' => 'dashboard.'
], function () {

    Route::get('/', fn () => Inertia::render('Dashboard/Home'));
    Route::get('/dashboard', fn () => Inertia::render('Dashboard/Home'));
    Route::get('test', fn () => Inertia::render('Test'));
});
