@extends('layouts.app')
@section('content')
    @role('user')
        <livewire:dashboard.home.user />
        @elserole('super-admin')
        <livewire:dashboard.home.admin />
    @endrole
@endsection
