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

Route::group(['domain' => config('dashboard.redirect_links.main_url')], function () {
    require __DIR__ . '/auth.php';
    require __DIR__ . '/dashboard.php';
});


Route::group(['as' => 'landing.'], function () {
    Route::view('/', 'pages.landing.home')->name('home');
    Route::view('/privacy-policy', 'pages.landing.home')->name('policy');
    Route::view('/terms-and-conditions', 'pages.landing.home')->name('terms-and-conditions');

    Route::view('/convert-now', 'pages.landing.convert-now')->name('convert-now');

    Route::view('/blogs', 'pages.landing.blogs.index')->name('blogs');
    Route::prefix('blogs')->name('blogs.')->group(function () {
        Route::view('/blog-dynamic-name-later', 'pages.landing.blogs.blog-detail')->name('blog-detail');
    });

    Route::view('/about-us', 'pages.landing.about.index')->name('about-us');
    Route::view('/pricing-plans', 'pages.landing.pricing.index')->name('pricing-plans');
    Route::view('/apis', 'pages.landing.apis.index')->name('apis');
    Route::prefix('apis')->name('apis.')->group(function () {
        Route::view('api-dynamic-name', 'pages.landing.apis.api-detail')->name('api-detail');
    });
});
