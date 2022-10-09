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
        @if (in_array(Route::currentRouteName(), ['register', 'login']))
            <div class="signUP-admin">
                <div class="container-fluid">
                    <div class="row justify-content-center auth-content">
                        <div class="col-xl-6 col-lg-6 col-md-6 p-0">
                            <div class="signUP-admin-left position-relative h-100">
                                <div class="signUP-overlay">
                                    <img class="svg signupTop" src="img/svg/signuptop.svg" alt="img" />
                                    <img class="svg signupBottom" src="img/svg/signupbottom.svg" alt="img" />
                                </div>
                                <div class="signUP-admin-left__img">
                                    <img class="img-fluid svg animate-bounce" src="img/svg/signupIllustration.svg"
                                        alt="img" />
                                </div>
                            </div>
                        </div>
                        @yield('content')
                    </div>
                </div>
            </div>
        @else
            @yield('content')
        @endif
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
