<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    @include('partials.dashboard.styles', ['title' => $title ?? null])
    @include('partials.toastr')
    @livewireStyles
    @livewireScripts
    @stack('extended-css')
</head>

<body class="layout-light side-menu overlayScroll">
    <div class="mobile-search">
        <form class="search-form">
            <span data-feather="search"></span>
            <input class="form-control mr-sm-2 box-shadow-none" type="text" placeholder="Search...">
        </form>
    </div>

    <div class="mobile-author-actions"></div>

    @include('partials.dashboard.header')

    <main class="main-content">
        @include('partials.dashboard.sidebar')

        <div class="contents">
            <div class="main-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            @yield('content')
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @include('partials.dashboard.footer')
    </main>

    <!-- Change to false to hide preloader -->
    @if (true)
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
    @endif

    <div class="overlay-dark-sidebar"></div>

    @include('partials.dashboard.scripts')
    @stack('extended-js')
</body>

</html>
