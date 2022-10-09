@php
$dashboardLayout = str_contains(config('dashboard.redirect_links.main_url'), request()->host());
$layoutFile = $dashboardLayout ? 'errors.layouts.dashboard' : 'errors.layouts.landing';
@endphp

@extends($layoutFile, [
    'title' => __('Forbidden'),
    'heading' => "Oops, you cannot proceed with this request.",
    'code' => 403,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
