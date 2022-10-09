@extends('errors::minimal', [
    'title' => __('Service Unavailable'),
    'heading' => 'Oops, this service is not available, come back later.',
    'code' => 503,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
