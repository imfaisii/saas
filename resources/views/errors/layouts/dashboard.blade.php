<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('partials.dashboard.auth-styles', ['title' => $title ?? null])
    @include('partials.toastr')
    @livewireStyles
    @livewireScripts
    @stack('extended-css')
</head>

<body>
    <main id="root" class="main-content">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12">
                    <!-- Start: error page -->
                    <div class="min-vh-100 content-center">
                        <div class="error-page text-center">
                            <img src="{{ $imageUrl ?? asset('img/svg/404.svg') }}" alt="404" class="svg">
                            <div class="error-page__title">{{ $code ?? '404' }}</div>
                            <h5 class="fw-500">
                                {{ $message ?? "Sorry! the page you are looking for doesn't exist." }}
                            </h5>
                            <div class="content-center mt-30">
                                <a href="{{ route('dashboard.home') }}"
                                    class="btn btn-primary btn-default btn-squared px-30">
                                    Return Home
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- End: error page -->
                </div>
            </div>
        </div>
    </main>

    <div id="overlayer">
        <span class="loader-overlay">
            <div class="atbd-spin-dots spin-lg">
                <span class="spin-dot badge-dot dot-primary"></span>
                <span class="spin-dot badge-dot dot-primary"></span>
                <span class="spin-dot badge-dot dot-primary"></span>
                <span class="spin-dot badge-dot dot-primary"></span>
            </div>
        </span>
    </div>

    @include('partials.dashboard.auth-scripts')
    @stack('extended-js')
</body>

</html>
