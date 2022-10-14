<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <!-- Master Styles -->
    @include('partials.dashboard.auth-styles', ['title' => $title ?? null])

    <!-- Livewire Essentials -->
    @livewireStyles
    @livewireScripts

    <!-- Extended Styles -->
    @stack('extended-css')
</head>

<body class="dark-mode bg-body">

    <div class="d-flex flex-column flex-root">
        <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
            style="background-image: url('{{ asset('backend/assets/media/illustrations/sketchy-1/14.png') }}'">
            <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                
                <a href="{{ route('dashboard.welcome') }}" class="mb-12">
                    <img alt="Logo" src="{{ asset('backend/assets/media/logos/logo-1.svg') }}" class="h-40px" />
                </a>

                <!-- Main Content -->

                @yield('content')

                <!-- /Main Content -->
            </div>
        </div>
    </div>

    <!-- Master Scripts -->
    @include('partials.dashboard.auth-scripts')

    <!-- Extended Scripts -->
    @stack('extended-js')
</body>

</html>
