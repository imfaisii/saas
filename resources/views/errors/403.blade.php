@extends('errors::minimal', [
    'title' => __('Forbidden'),
    'heading' => "Oops, you cannot proceed with this request.",
    'code' => 403,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
