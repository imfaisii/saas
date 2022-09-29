<!doctype html>
<html lang="en" dir="ltr">

<head>
    @include('partials.dashboard.styles')
</head>

<body class="layout-light side-menu overlayScroll">

    <!-- Preloader -->
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

    <div class="overlay-dark-sidebar"></div>
    @include('partials.dashboard.scripts')
</body>

</html>
