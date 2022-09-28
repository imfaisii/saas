@extends('layouts.landing')
@section('content')
@include('partials.landing.hero')

<x-landing.partials.statistics-section />

<!-- DIVIDER LINE -->
<hr class="divider">

<x-landing.partials.why-better-section />

@include('partials.landing.media-section')

<x-landing.partials.testimonials-section />

<hr class="divider">

@include('partials.landing.brands')

<!-- DIVIDER LINE -->
<hr class="divider">

<x-landing.partials.f-a-q-section />
<x-landing.partials.pricing-section />
@endsection