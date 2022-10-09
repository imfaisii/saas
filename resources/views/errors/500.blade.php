@extends('errors::minimal', [
    'title' => __('Server Error'),
    'heading' => 'Internal Server Error.',
    'code' => 500,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
