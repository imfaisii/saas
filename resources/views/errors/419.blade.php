@php
$dashboardLayout = str_contains(config('dashboard.redirect_links.main_url'), request()->host());
$layoutFile = $dashboardLayout ? 'errors.layouts.dashboard' : 'errors.layouts.landing';
@endphp

@extends($layoutFile, [
    'title' => __('Page Expired'),
    'heading' => "Oops, probably expired session, please submit the form again.",
    'code' => 419,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
