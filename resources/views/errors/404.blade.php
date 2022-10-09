@extends('errors::minimal', [
    'title' => __('Not Found'),
    'heading' => "Oops, We couldn't find that page.",
    'code' => 404,
    'imageUrl' => asset('landing/images/error-404.png'),
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
