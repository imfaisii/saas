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
                    <a href="#hero-5" class="logo-black">
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
                        <li aria-haspopup="true"><a href="#">Dropdown <span class="wsarrow"></span></a>
                            <ul class="sub-menu">
                                <li aria-haspopup="true"><a href="#content-3">DDI 1</a></li>
                                <li aria-haspopup="true"><a href="#features-8">DDI 2</a></li>
                            </ul>
                        </li>

                        <li class="nl-simple" aria-haspopup="true"><a href="#faqs-2">Link</a></li>
                        <li class="nl-simple" aria-haspopup="true"><a href="#faqs-2">Link</a></li>
                        <li class="nl-simple" aria-haspopup="true"><a href="#faqs-2">Link</a></li>
                        <li class="nl-simple" aria-haspopup="true"><a href="#faqs-2">Link</a></li>

                        <!-- HEADER BUTTON -->
                        <li class="nl-simple" aria-haspopup="true">
                            <a href="#cta-11" class="btn btn-tra-grey skyblue-hover last-link">
                                Get Started
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