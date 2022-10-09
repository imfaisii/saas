@php
$dashboardLayout = str_contains(config('dashboard.redirect_links.main_url'), request()->host());
$layoutFile = $dashboardLayout ? 'errors.layouts.dashboard' : 'errors.layouts.landing';
@endphp

@extends($layoutFile, [
    'title' => __('Unauthorized'),
    'heading' => 'Oops, you are not allowed to access this resource.',
    'code' => 401,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
