@extends('layouts.app')
@push('extended-css')
    @include('partials.select2')
@endpush
@section('content')
    <livewire:dashboard.profile.main-component />
@endsection
