<!DOCTYPE html>
<html lang="en">

<head>
    @include('partials.landing.styles', ['title' => $title ?? null])
</head>

<body>

    @include('partials.landing.pre-loader', ['show' => true])

    <!-- PAGE CONTENT -->
    <div id="page" class="page">

        @include('partials.landing.header')

        @yield('content')

        @include('partials.landing.cta-modal')
        @include('partials.landing.footer')

    </div>
    <!-- END PAGE CONTENT -->

    @include('partials.landing.scripts')
</body>

</html>
