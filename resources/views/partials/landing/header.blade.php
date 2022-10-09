<header id="header" class="header tra-menu navbar-dark">
    <div class="header-wrapper">

        <!-- MOBILE HEADER -->
        <div class="wsmobileheader clearfix">
            <span class="smllogo"><img src="{{ asset('landing/images/logo-01.png') }}" alt="mobile-logo" /></span>
            <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
        </div>

        <!-- NAVIGATION MENU -->
        <div class="wsmainfull menu clearfix">
            <div class="wsmainwp clearfix">

                <!-- HEADER LOGO -->
                <div class="desktoplogo">
                    <a href="{{ route('landing.home') }}" class="logo-black">
                        <img src="{{ asset('landing/images/logo-01.png') }}" alt="header-logo">
                    </a>
                </div>
                <div class="desktoplogo">
                    <a href="#hero-5" class="logo-white">
                        <img src="{{ asset('landing/images/logo-white.png') }}" alt="header-logo">
                    </a>
                </div>

                <!-- MAIN MENU -->
                <nav class="wsmenu clearfix">
                    <ul class="wsmenu-list nav-skyblue-hover">

                        <!-- DROPDOWN MENU -->
                        {{-- <li aria-haspopup="true"><a href="#">APIs <span class="wsarrow"></span></a>
                            <ul class="sub-menu">
                                <li aria-haspopup="true"><a href="#content-3">Currency</a></li>
                                <li aria-haspopup="true"><a href="#features-8">Fuel</a></li>
                                <li aria-haspopup="true"><a href="#features-8">Gold</a></li>
                            </ul>
                        </li> --}}

                        <li class="nl-simple" aria-haspopup="true">
                            <a href="{{ route('landing.apis') }}">APIs</a>
                        </li>
                        <li class="nl-simple" aria-haspopup="true">
                            <a href="{{ route('landing.convert-now') }}">
                                Convert Now
                            </a>
                        </li>
                        <li class="nl-simple" aria-haspopup="true">
                            <a href="{{ route('landing.about-us') }}">
                                About Us</a>
                        </li>
                        <li class="nl-simple" aria-haspopup="true">
                            <a href="{{ route('landing.pricing-plans') }}">Pricing</a>
                        </li>
                        <li class="nl-simple" aria-haspopup="true">
                            <a href="{{ route('landing.blogs') }}">Blogs</a>
                        </li>

                        <!-- HEADER BUTTON -->
                        <li class="nl-simple" aria-haspopup="true">
                            <a href="{{ route('login') }}" class="btn btn-tra-grey skyblue-hover last-link">
                                <span><i class="fa-solid fa-play"></i></span>Get Started
                            </a>
                        </li>

                        <!-- HEADER SOCIAL LINKS -->
                        {{-- <li class="nl-simple header-socials ico-20 clearfix" aria-haspopup="true">
                            <span><a href="#" class="ico-facebook"><span class="flaticon-facebook"></span></a></span>
                            <span><a href="#" class="ico-twitter"><span class="flaticon-twitter"></span></a></span>
                            <span><a href="#" class="ico-instagram"><span class="flaticon-instagram"></span></a></span>
                            <span><a href="#" class="ico-dribbble"><span class="flaticon-dribbble"></span></a></span>
                        </li> --}}

                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
