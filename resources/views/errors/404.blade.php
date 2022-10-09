@php
$dashboardLayout = str_contains(config('dashboard.redirect_links.main_url'), request()->host());
$layoutFile = $dashboardLayout ? 'errors.layouts.dashboard' : 'errors.layouts.landing';
@endphp

@extends($layoutFile, [
    'title' => __('Not Found'),
    'heading' => "Oops, We couldn't find that page.",
    'code' => 404,
    'imageUrl' => $dashboardLayout ? asset('img/svg/404.svg') : asset('landing/images/error-404.png'),
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
