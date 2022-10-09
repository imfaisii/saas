@extends('errors::minimal', [
    'title' => __('Too Many Requests'),
    'heading' => "Oops, you have made enough requests for the time span.",
    'code' => 429,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
