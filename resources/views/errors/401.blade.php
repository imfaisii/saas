@extends('errors::minimal', [
    'title' => __('Unauthorized'),
    'heading' => "Oops, you are not allowed to access this resource.",
    'code' => 401,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
