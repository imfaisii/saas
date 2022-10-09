@extends('errors::minimal', [
    'title' => __('Page Expired'),
    'heading' => "Oops, probably expired session, please submit the form again.",
    'code' => 419,
    'message' => filled($exception->getMessage()) ? $exception->getMessage() : null,
])
