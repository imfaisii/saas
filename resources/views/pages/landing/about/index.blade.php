@extends('layouts.landing')
@section('content')
    <!-- ABOUT-2
                               ============================================= -->
    <section id="about-2" class="about-section">
        <div class="bg-inner bg-lightgrey inner-page-hero division">
            <div class="container">


                <!-- ABOUT-2 TITLE -->
                <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-8">
                        <div class="about-2-title">

                            <!-- Section ID -->
                            <span class="section-id txt-upcase">About Us</span>

                            <!-- Title -->
                            <h2 class="h2-title-xs">Creativity and quality is our destination</h2>

                            <!-- Text -->
                            <p class="p-xl">Quaerat sodales sapien and euismod blandit vitae ipsum primis cubilia
                                undo laoreet augue luctus magna and dolor luctus egestas sapien
                            </p>

                        </div>
                    </div>
                </div> <!-- END ABOUT-2 TITLE -->


                <!-- ABOUT-2 IMAGES -->
                <div class="about-2-images">
                    <div class="row row-cols-1 row-cols-md-2">


                        <!-- IMAGES-1 -->
                        <div class="col col-md-5">
                            <img class="img-fluid" src="{{ asset('landing/images/about-1-img.jpg') }}" alt="about-image">
                        </div>


                        <!-- IMAGES-2 -->
                        <div class="col col-md-7">
                            <img class="img-fluid" src="{{ asset('landing/images/about-2-img.jpg') }}" alt="about-image">
                        </div>


                    </div> <!-- End row -->
                </div> <!-- END ABOUT-2 IMAGES -->


            </div> <!-- End container -->
        </div> <!-- End bg-inner -->
    </section> <!-- END ABOUT-2 -->

    <!-- FEATURES-4
                       ============================================= -->
    <section id="features-4" class="wide-60 features-section division">
        <div class="container">


            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8">
                    <div class="section-title title-01 mb-70">

                        <!-- Title -->
                        <h2 class="h2-md">We’re Better. Here’s Why…</h2>

                        <!-- Text -->
                        <p class="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero
                            tempus, blandit and cursus varius and magnis sapien
                        </p>

                    </div>
                </div>
            </div>


            <!-- FEATURES-4 WRAPPER -->
            <div class="fbox-4-wrapper fbox-4-wide">
                <div class="row row-cols-1 row-cols-md-2">


                    <!-- FEATURE BOX #1 -->
                    <div class="col">
                        <div class="fbox-4 pr-25 mb-40 wow fadeInUp">

                            <!-- Icon -->
                            <div class="fbox-ico">
                                <div class="ico-65">
                                    <span class="flaticon-line-graph-1"></span>
                                </div>
                            </div>

                            <!-- Text -->
                            <div class="fbox-txt">

                                <!-- Title -->
                                <h5 class="h5-md">Market Research</h5>

                                <!-- Text -->
                                <p class="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor
                                    tempus feugiat impedit undo auctor felis augue mauris aoreet tempor
                                </p>

                            </div>

                        </div>
                    </div>


                    <!-- FEATURE BOX #2 -->
                    <div class="col">
                        <div class="fbox-4 pl-25 mb-40 wow fadeInUp">

                            <!-- Icon -->
                            <div class="fbox-ico">
                                <div class="ico-65">
                                    <span class="flaticon-idea"></span>
                                </div>
                            </div>

                            <!-- Text -->
                            <div class="fbox-txt">

                                <!-- Title -->
                                <h5 class="h5-md">User Experience</h5>

                                <!-- Text -->
                                <p class="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor
                                    tempus feugiat impedit undo auctor felis augue mauris aoreet tempor
                                </p>

                            </div>

                        </div>
                    </div>


                    <!-- FEATURE BOX #3 -->
                    <div class="col">
                        <div class="fbox-4 pr-25 mb-40 wow fadeInUp">

                            <!-- Icon -->
                            <div class="fbox-ico">
                                <div class="ico-65">
                                    <span class="flaticon-algorithm"></span>
                                </div>
                            </div>

                            <!-- Text -->
                            <div class="fbox-txt">

                                <!-- Title -->
                                <h5 class="h5-md">Web Development</h5>

                                <!-- Text -->
                                <p class="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor
                                    tempus feugiat impedit undo auctor felis augue mauris aoreet tempor
                                </p>

                            </div>

                        </div>
                    </div>


                    <!-- FEATURE BOX #4 -->
                    <div class="col">
                        <div class="fbox-4 pl-25 mb-40 wow fadeInUp">

                            <!-- Icon -->
                            <div class="fbox-ico">
                                <div class="ico-65">
                                    <span class="flaticon-increase-1"></span>
                                </div>
                            </div>

                            <!-- Text -->
                            <div class="fbox-txt">

                                <!-- Title -->
                                <h5 class="h5-md">Digital Marketing</h5>

                                <!-- Text -->
                                <p class="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor
                                    tempus feugiat impedit undo auctor felis augue mauris aoreet tempor
                                </p>

                            </div>

                        </div>
                    </div>


                    <!-- FEATURE BOX #5 -->
                    <div class="col">
                        <div class="fbox-4 pr-25 mb-40 wow fadeInUp">

                            <!-- Icon -->
                            <div class="fbox-ico">
                                <div class="ico-65">
                                    <span class="flaticon-reward"></span>
                                </div>
                            </div>

                            <!-- Text -->
                            <div class="fbox-txt">

                                <!-- Title -->
                                <h5 class="h5-md">Brand Design Identity</h5>

                                <!-- Text -->
                                <p class="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor
                                    tempus feugiat impedit undo auctor felis augue mauris aoreet tempor
                                </p>

                            </div>

                        </div>
                    </div>


                    <!-- FEATURE BOX #6 -->
                    <div class="col">
                        <div class="fbox-4 pl-25 mb-40 wow fadeInUp">

                            <!-- Icon -->
                            <div class="fbox-ico">
                                <div class="ico-65">
                                    <span class="flaticon-seo"></span>
                                </div>
                            </div>

                            <!-- Text -->
                            <div class="fbox-txt">

                                <!-- Title -->
                                <h5 class="h5-md">SEO & SMM Services</h5>

                                <!-- Text -->
                                <p class="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus auctor
                                    tempus feugiat impedit undo auctor felis augue mauris aoreet tempor
                                </p>

                            </div>

                        </div>
                    </div>


                </div>
            </div> <!-- END FEATURES-4 WRAPPER -->


        </div> <!-- End container -->
    </section> <!-- END FEATURES-4 -->

    <!-- STATISTIC-3
                       ============================================= -->
    <section id="statistic-3" class="bg-01 statistic-section division">
        <div class="container">
            <div class="statistic-3-wrapper white-color text-center">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">


                    <!-- STATISTIC BLOCK #1 -->
                    <div class="col">
                        <div class="statistic-block mb-40 wow fadeInUp">

                            <!-- Icon  -->
                            <div class="statistic-ico ico-65">
                                <span class="flaticon-web-programming"></span>
                            </div>

                            <!-- Text -->
                            <h3 class="h3-md statistic-number">4,<span class="count-element">497</span></h3>
                            <p class="p-lg txt-400">Finished Projects</p>

                        </div>
                    </div>


                    <!-- STATISTIC BLOCK #2 -->
                    <div class="col">
                        <div class="statistic-block mb-40 wow fadeInUp">

                            <!-- Icon  -->
                            <div class="statistic-ico ico-65">
                                <span class="flaticon-shuttle"></span>
                            </div>

                            <!-- Text -->
                            <h3 class="h3-md statistic-number">3,<span class="count-element">889</span></h3>
                            <p class="p-lg txt-400">Websites Improved</p>

                        </div>
                    </div>


                    <!-- STATISTIC BLOCK #3 -->
                    <div class="col">
                        <div class="statistic-block mb-40 wow fadeInUp">

                            <!-- Icon  -->
                            <div class="statistic-ico ico-65">
                                <span class="flaticon-speech-bubble-3"></span>
                            </div>

                            <!-- Text -->
                            <h3 class="h3-md statistic-number">5,<span class="count-element">179</span></h3>
                            <p class="p-lg txt-400">Happy Customers</p>

                        </div>
                    </div>


                    <!-- STATISTIC BLOCK #4 -->
                    <div class="col">
                        <div class="statistic-block mb-40 wow fadeInUp">

                            <!-- Icon  -->
                            <div class="statistic-ico ico-65"><span class="flaticon-help"></span></div>

                            <!-- Text -->
                            <h3 class="h3-md statistic-number">1,<span class="count-element">473</span></h3>
                            <p class="p-lg txt-400">Tickets Closed</p>

                        </div>
                    </div>


                </div> <!-- End row -->
            </div> <!-- End statistic-3-wrapper -->
        </div> <!-- End container -->
    </section> <!-- END STATISTIC-3 -->

    <!-- CONTENT-3
                   ============================================= -->
    <section id="content-3" class="content-3 wide-60 content-section division">
        <div class="container">


            <!-- TOP ROW -->
            <div class="top-row pb-50">
                <div class="row d-flex align-items-center">


                    <!-- TEXT BLOCK -->
                    <div class="col-md-7 col-lg-6 order-last order-lg-2">
                        <div class="txt-block left-column wow fadeInRight">

                            <!-- Section ID -->
                            <span class="section-id txt-upcase">Digital Strategy</span>

                            <!-- Title -->
                            <h2 class="h2-xs">Start your online business with OLMO</h2>

                            <!-- Text -->
                            <p class="p-lg">Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and cubilia
                                laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas
                            </p>

                            <!-- Text -->
                            <p class="p-lg">Quaerat sodales sapien euismod blandit purus a purus ipsum primis in cubilia
                                laoreet augue luctus magna dolor luctus and egestas sapien egestas vitae nemo volute
                            </p>


                        </div>
                    </div> <!-- END TEXT BLOCK -->


                    <!-- IMAGE BLOCK -->
                    <div class="col-md-5 col-lg-6 order-first order-md-2">
                        <div class="img-block left-column wow fadeInLeft">
                            <img class="img-fluid" src="{{asset('landing/images/img-16.png')}}" alt="content-image">
                        </div>
                    </div>


                </div>
            </div> <!-- END TOP ROW -->


            <!-- BOTTOM ROW -->
            <div class="bottom-row">
                <div class="row d-flex align-items-center">


                    <!-- IMAGE BLOCK -->
                    <div class="col-md-5 col-lg-6">
                        <div class="img-block left-column wow fadeInRight">
                            <img class="img-fluid" src="{{asset('landing/images/img-17.png')}}" alt="video-preview">
                        </div>
                    </div>


                    <!-- TEXT BLOCK -->
                    <div class="col-md-7 col-lg-6">
                        <div class="txt-block right-column wow fadeInLeft">

                            <!-- TEXT BOX -->
                            <div class="txt-box mb-25">

                                <!-- Title -->
                                <h5 class="h5-lg">Advanced Analytics Review</h5>

                                <!-- Text -->
                                <p class="p-lg">Quaerat sodales sapien euismod blandit at vitae ipsum primis undo and
                                    cubilia laoreet augue and luctus magna dolor luctus at egestas sapien vitae nemo egestas
                                    volute and turpis dolores aliquam quaerat sodales a sapien
                                </p>

                            </div>

                            <!-- TEXT BOX -->
                            <div class="txt-box">

                                <!-- Title -->
                                <h5 class="h5-lg">Search Engine Optimization (SEO)</h5>

                                <!-- List -->
                                <ul class="simple-list">

                                    <li class="list-item">
                                        <p class="p-lg">Fringilla risus, luctus mauris auctor euismod an iaculis luctus
                                            magna purus pretium ligula purus and quaerat
                                        </p>
                                    </li>

                                    <li class="list-item">
                                        <p class="p-lg">Nemo ipsam egestas volute turpis dolores undo ultrice aliquam
                                            quaerat
                                            at sodales sapien purus
                                        </p>
                                    </li>

                                </ul>

                            </div> <!-- END TEXT BOX -->


                        </div>
                    </div> <!-- END TEXT BLOCK -->


                </div>
            </div> <!-- END BOTTOM ROW -->


        </div> <!-- End container -->
    </section> <!-- END CONTENT-3 -->

    <!-- DIVIDER LINE -->
    <hr class="divider">

    <!-- BRANDS-2
       ============================================= -->
    <div id="brands-2" class="wide-70 brands-section division">
        <div class="container">


            <!-- BRANDS TITLE -->
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="brands-title text-center">
                        <p class="p-xl">Over 2000+ companies are already using OLMO every day</p>
                    </div>
                </div>
            </div>


            <!-- BRANDS-2 WRAPPER -->
            <div class="brands-2-wrapper">
                <div class="row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-5">


                    <!-- BRAND LOGO IMAGE -->
                    <div class="col">
                        <div class="brand-logo">
                            <a href="#">
                                <img class="img-fluid" src="{{asset('landing/images/brand-1.png')}}" alt="brand-logo" />
                            </a>
                        </div>
                    </div>


                    <!-- BRAND LOGO IMAGE -->
                    <div class="col">
                        <div class="brand-logo">
                            <a href="#">
                                <img class="img-fluid" src="{{asset('landing/images/brand-2.png')}}" alt="brand-logo" />
                            </a>
                        </div>
                    </div>


                    <!-- BRAND LOGO IMAGE -->
                    <div class="col">
                        <div class="brand-logo">
                            <a href="#">
                                <img class="img-fluid" src="{{asset('landing/images/brand-3.png')}}" alt="brand-logo" />
                            </a>
                        </div>
                    </div>


                    <!-- BRAND LOGO IMAGE -->
                    <div class="col">
                        <div class="brand-logo">
                            <a href="#">
                                <img class="img-fluid" src="{{asset('landing/images/brand-4.png')}}" alt="brand-logo" />
                            </a>
                        </div>
                    </div>


                    <!-- BRAND LOGO IMAGE -->
                    <div class="col">
                        <div class="brand-logo">
                            <a href="#">
                                <img class="img-fluid" src="{{asset('landing/images/brand-5.png')}}" alt="brand-logo" />
                            </a>
                        </div>
                    </div>


                    <!-- BRAND LOGO IMAGE -->
                    <div class="col">
                        <div class="brand-logo">
                            <a href="#">
                                <img class="img-fluid" src="{{asset('landing/images/brand-8.png')}}" alt="brand-logo" />
                            </a>
                        </div>
                    </div>


                    <!-- BRAND LOGO IMAGE -->
                    <div class="col">
                        <div class="brand-logo">
                            <a href="#">
                                <img class="img-fluid" src="{{asset('landing/images/brand-7.png')}}" alt="brand-logo" />
                            </a>
                        </div>
                    </div>


                    <!-- BRAND LOGO IMAGE -->
                    <div class="col">
                        <div class="brand-logo">
                            <a href="#">
                                <img class="img-fluid" src="{{asset('landing/images/brand-5.png')}}" alt="brand-logo" />
                            </a>
                        </div>
                    </div>


                    <!-- BRAND LOGO IMAGE -->
                    <div class="col">
                        <div class="brand-logo">
                            <a href="#">
                                <img class="img-fluid" src="{{asset('landing/images/brand-8.png')}}" alt="brand-logo" />
                            </a>
                        </div>
                    </div>


                    <!-- BRAND LOGO IMAGE -->
                    <div class="col">
                        <div class="brand-logo">
                            <a href="#">
                                <img class="img-fluid" src="{{asset('landing/images/brand-2.png')}}" alt="brand-logo" />
                            </a>
                        </div>
                    </div>


                </div>
            </div> <!-- END BRANDS-2 WRAPPER -->


        </div> <!-- End container -->
    </div> <!-- END BRANDS-2 -->

    <!-- CALL TO ACTION-5
       ============================================= -->
    <section id="cta-5" class="cta-section division">
        <div class="container">
            <div class="rel bg-04 cta-5-wrapper">
                <div class="row justify-content-center">


                    <!-- CALL TO ACTION TEXT -->
                    <div class="col-lg-8">
                        <div class="cta-5-txt white-color text-center">

                            <!-- Title -->
                            <h2 class="h2-xs">Get Started with OLMO Now</h2>

                            <!-- Text -->
                            <p class="p-xl">Join over 7,000 of the world's leading digital agencies and freelance
                                designers who use OLMO to present their work
                            </p>

                            <!-- Button -->
                            <a href="#pricing-2" class="btn btn-skyblue tra-white-hover">Get Started Now</a>

                        </div>
                    </div>


                </div>
            </div> <!-- End row -->
        </div> <!-- End container -->
    </section> <!-- END CALL TO ACTION-5 -->
@endsection
