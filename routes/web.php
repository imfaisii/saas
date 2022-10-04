<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['domain' => env('APP_DASHBOARD_DOMAIN')], function () {
    require __DIR__ . '/auth.php';
    require __DIR__ . '/dashboard.php';
});


Route::group(['as' => 'landing.'], function () {
    Route::view('/', 'pages.landing.home')->name('home');
    Route::view('/privacy-policy', 'pages.landing.home')->name('policy');
    Route::view('/terms-and-conditions', 'pages.landing.home')->name('terms-and-conditions');
});
