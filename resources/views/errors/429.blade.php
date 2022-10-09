@php
$dashboardLayout = str_contains(config('dashboard.redirect_links.main_url'), request()->host());
$layoutFile = $dashboardLayout ? 'errors.layouts.dashboard' : 'errors.layouts.landing';
@endphp

@extends($layoutFile, [
    'title' => __('Too Many Requests'),
    'heading' => "Oops, you have made enough requests for the time span.",
    'code' => 429,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
