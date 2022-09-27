<?php

/* This is the file of dashboard routes */

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'auth', 'domain' => env('APP_DASHBOARD_URL')], function () {
    Route::get('/', fn () => 'This is dashboard');
});

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');