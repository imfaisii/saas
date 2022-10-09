@php
$dashboardLayout = str_contains(config('dashboard.redirect_links.main_url'), request()->host());
$layoutFile = $dashboardLayout ? 'errors.layouts.dashboard' : 'errors.layouts.landing';
@endphp

@extends($layoutFile, [
    'title' => __('Service Unavailable'),
    'heading' => 'Oops, this service is not available, come back later.',
    'code' => 503,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
