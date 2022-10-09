@extends('layouts.landing')
@section('content')
    <section id="projects-1" class="wide-50 inner-page-hero projects-section division">
        <div class="container">


            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8">
                    <div class="section-title title-01 mb-80">

                        <!-- Title -->
                        <h2 class="h2-md">We Care About The Details</h2>

                        <!-- Text -->
                        <p class="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero
                            tempus, blandit and cursus varius and magnis sapien
                        </p>

                    </div>
                </div>
            </div>


            <!-- PROJECTS-1 WRAPPER -->
            <div class="row">
                <div class="col gallery-items-list">
                    <div class="masonry-wrap grid-loaded" style="position: relative; height: 1571.03px;">


                        <!-- PROJECT #1 -->
                        <div class="project-details masonry-image" style="position: absolute; left: 0%; top: 0px;">

                            <!-- Image -->
                            <div class="project-preview rel">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="{{asset('landing/images/projects/project-05.jpg')}}" alt="project-preview">
                                    <div class="item-overlay"></div>
                                </div>
                            </div>

                            <!-- Text -->
                            <div class="project-txt">

                                <!-- Text -->
                                <p class="p-md grey-color">Graphic Design</p>

                                <!-- Link -->
                                <h5 class="h5-lg">
                                    <a href="{{ route('landing.apis.api-detail') }}">Currency API</a>
                                </h5>

                                <!-- Project Rating -->
                                <div class="project-rating clearfix ico-20">
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-half-empty mr-5"></span>
                                    4.69 (173)
                                </div>

                            </div>

                        </div> <!-- END PROJECT #1 -->


                        <!-- PROJECT #2 -->
                        <div class="project-details masonry-image" style="position: absolute; left: 50%; top: 0px;">

                            <!-- Image -->
                            <div class="project-preview rel">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="{{asset('landing/images/projects/project-02.jpg')}}" alt="project-preview">
                                    <div class="item-overlay"></div>
                                </div>
                            </div>

                            <!-- Text -->
                            <div class="project-txt">

                                <!-- Text -->
                                <p class="p-md grey-color">UI, Interaction Design</p>

                                <!-- Link -->
                                <h5 class="h5-lg">
                                    <a href="{{ route('landing.apis.api-detail') }}">Fuel API</a>
                                </h5>

                                <!-- Project Rating -->
                                <div class="project-rating clearfix ico-20">
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1 mr-5"></span>
                                    5.0 (48)
                                </div>

                            </div>

                        </div> <!-- END PROJECT #2 -->


                        <!-- PROJECT #3 -->
                        <div class="project-details masonry-image" style="position: absolute; left: 50%; top: 486.375px;">

                            <!-- Image -->
                            <div class="project-preview rel">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="{{asset('landing/images/projects/project-04.jpg')}}" alt="project-preview">
                                    <div class="item-overlay"></div>
                                </div>
                            </div>

                            <!-- Text -->
                            <div class="project-txt">

                                <!-- Text -->
                                <p class="p-md grey-color">UX, Illustration</p>

                                <!-- Link -->
                                <h5 class="h5-lg">
                                    <a href="{{ route('landing.apis.api-detail') }}">Donec sapien augue integer turpis urna cursus porta</a>
                                </h5>

                                <!-- Project Rating -->
                                <div class="project-rating clearfix ico-20">
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-half-empty mr-5"></span>
                                    4.39 (87)
                                </div>

                            </div>

                        </div> <!-- END PROJECT #3 -->


                        <!-- PROJECT #4 -->
                        <div class="project-details masonry-image" style="position: absolute; left: 0%; top: 565.875px;">

                            <!-- Image -->
                            <div class="project-preview rel">
                                <div class="hover-overlay">
                                    <img class="img-fluid" src="{{asset('landing/images/projects/project-03.jpg')}}" alt="project-preview">
                                    <div class="item-overlay"></div>
                                </div>
                            </div>

                            <!-- Text -->
                            <div class="project-txt">

                                <!-- Text -->
                                <p class="p-md grey-color">Web Design</p>

                                <!-- Link -->
                                <h5 class="h5-lg">
                                    <a href="{{ route('landing.apis.api-detail') }}">Donec sapien an augue integer turpis cursus</a>
                                </h5>

                                <!-- Project Rating -->
                                <div class="project-rating clearfix ico-20">
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-1"></span>
                                    <span class="flaticon-star-half-empty mr-5"></span>
                                    4.87 (284)
                                </div>

                            </div>

                        </div> <!-- END PROJECT #4 -->

                    </div>
                </div>
            </div> <!-- END PROJECTS-1 WRAPPER -->


        </div> <!-- End container -->
    </section>
@endsection
