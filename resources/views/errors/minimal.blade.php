<!DOCTYPE html>
<html lang="en">

<head>
    @include('partials.landing.styles')
</head>

<body>

    @include('partials.landing.pre-loader', ['show' => true])

    <!-- PAGE CONTENT -->
    <div id="page" class="page">

        @include('partials.landing.header')

        @yield('content')

        <section id="hero-24" class="bg-tra-blue hero-section division">
            <div class="container">
                <div class="row d-flex align-items-center">


                    <!-- 404 PAGE TEXT -->
                    <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                        <div class="hero-24-txt text-center">

                            <!-- Image -->
                            <div class="rel hero-24-img">

                                <!-- Image -->
                                <img class="img-fluid" src="{{ $imageUrl ?? '/landing/images/error-404.png' }}"
                                    alt="error-404-img">

                                <!-- Transparent Header -->
                                <h2 class="tra-header">{{ $code ?? 404 }}</h2>

                            </div>

                            <!-- Text -->
                            <h2 class="h3-md">{{ $heading ?? 'Page Not Found' }}</h2>
                            <h5 class="h6-md">
                                {{ $message ?? 'The page you are looking for might have been moved , renamed or might never existed' }}
                            </h5>

                            <!-- Button -->
                            <a href="{{ route('landing.home') }}" class="btn btn-skyblue tra-grey-hover">
                                Back To Home
                            </a>


                        </div>
                    </div> <!-- END PAGE TEXT -->


                </div> <!-- End row -->
            </div> <!-- End container -->
        </section> <!-- END HERO-19 -->

        @include('partials.landing.cta-modal')

        @include('partials.landing.footer')

    </div>
    <!-- END PAGE CONTENT -->

    @include('partials.landing.scripts')
</body>

</html>
