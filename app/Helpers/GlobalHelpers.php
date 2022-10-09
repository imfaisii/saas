<?php

use Illuminate\Support\Facades\Route;
use Symfony\Component\Routing\Exception\RouteNotFoundException;

if (!function_exists('func_name')) {
    function func_name($property)
    {
        //
    }

    function activeRoute($routeName)
    {
        return Route::has($routeName)
            ? (Route::is($routeName) ? 'active' : '')
            : throw new RouteNotFoundException("[$routeName] route name doesn't exists.");;
    }
}
