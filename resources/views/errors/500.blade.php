@php
$dashboardLayout = str_contains(config('dashboard.redirect_links.main_url'), request()->host());
$layoutFile = $dashboardLayout ? 'errors.layouts.dashboard' : 'errors.layouts.landing';
@endphp

@extends($layoutFile, [
    'title' => __('Server Error'),
    'heading' => 'Internal Server Error.',
    'code' => 500,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
