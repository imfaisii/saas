@extends('layouts.landing')
@section('content')
    <section id="blog-page" class="bg-snow wide-50 inner-page-hero blog-page-section division">
        <div class="container">


            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8">
                    <div class="section-title title-02 mb-85">
                        <h3 class="h3-xl">Relevant news and more for you. Welcome to our blog</h3>
                    </div>
                </div>
            </div>


            <!-- FEATURED POST -->
            <div class="rel blog-post-wide featured-post">
                <div class="row d-flex align-items-center">

                    {{-- <!-- Featured Badge -->
                    <div class="featured-badge ico-25 bg-whitesmoke yellow-color">
                        <span class="flaticon-star-1"></span>
                    </div> --}}

                    <!-- BLOG POST IMAGE -->
                    <div class="col-lg-7 blog-post-img">
                        <img class="img-fluid" src="{{ asset('landing/images/blog/post-1-img.jpg') }}"
                            alt="blog-post-image" />
                    </div>

                    <!-- BLOG POST TEXT -->
                    <div class="col-lg-5 blog-post-txt">

                        <!-- Post Link -->
                        <h5 class="h5-xl">
                            <a href="{{ route('landing.blogs.blog-detail') }}">Tempor sapien donec gravida a suscipit and porta justo
                                vitae</a>
                        </h5>

                        <!-- Text -->
                        <p class="p-lg">Aliqum mullam blandit vitae tempor sapien and donec lipsum gravida and porta
                            undo velna dolor in cubilia...
                        </p>

                        <!-- Post Meta -->
                        <div class="post-meta">
                            <p>OLMO News &ensp;|&ensp; 38 Comments</p>
                        </div>

                    </div> <!-- END BLOG POST TEXT -->

                </div> <!-- End row -->
            </div> <!-- END FEATURED POST -->


            <!-- POSTS WRAPPER -->
            <div class="posts-wrapper">


                <!-- BLOG POSTS CATEGORY -->
                <div class="row">
                    <div class="col-md-12">
                        <h5 class="h5-lg posts-category">Latest Articles</h5>
                    </div>
                </div>


                <!-- BLOG POSTS -->
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">


                    <!-- BLOG POST #1 -->
                    <div class="col">
                        <div class="blog-1-post mb-50 wow fadeInUp">

                            <!-- BLOG POST IMAGE -->
                            <div class="blog-post-img">
                                <img class="img-fluid" src="{{ asset('landing/images/blog/post-4-img.jpg') }}"
                                    alt="blog-post-image" />
                            </div>

                            <!-- BLOG POST TEXT -->
                            <div class="blog-post-txt">

                                <!-- Post Tag -->
                                <p class="post-tag">Posted on June 12, 2021</p>

                                <!-- Post Link -->
                                <h5 class="h5-sm">
                                    <a href="{{ route('landing.blogs.blog-detail') }}">A ligula risus auctor tempus</a>
                                </h5>

                                <!-- Text -->
                                <p class="p-lg">Donec sapien augue integer turpis urna cursus porta, mauris augue...</p>

                                <!-- Post Meta -->
                                <div class="post-meta">
                                    <p>OLMO News &ensp;|&ensp; 9 Comments</p>
                                </div>

                            </div> <!-- END BLOG POST TEXT -->

                        </div>
                    </div> <!-- END  BLOG POST #1 -->


                    <!-- BLOG POST #2 -->
                    <div class="col">
                        <div class="blog-1-post mb-50 wow fadeInUp">

                            <!-- BLOG POST IMAGE -->
                            <div class="blog-post-img">
                                <img class="img-fluid" src="{{ asset('landing/images/blog/post-2-img.jpg') }}"
                                    alt="blog-post-image" />
                            </div>

                            <!-- BLOG POST TEXT -->
                            <div class="blog-post-txt">

                                <!-- Post Tag -->
                                <p class="post-tag">Posted on June 3, 2021</p>

                                <!-- Post Link -->
                                <h5 class="h5-sm">
                                    <a href="{{ route('landing.blogs.blog-detail') }}">Integer urna turpis donec ipsum a porta justo risus
                                        auctor</a>
                                </h5>

                                <!-- Text -->
                                <p class="p-lg">Donec sapien augue integer turpis urna cursus porta, mauris augue...</p>

                                <!-- Post Meta -->
                                <div class="post-meta">
                                    <p>Tutorials &ensp;|&ensp; 12 Comments</p>
                                </div>

                            </div> <!-- END BLOG POST TEXT -->

                        </div>
                    </div> <!-- END  BLOG POST #2 -->


                    <!-- BLOG POST #3 -->
                    <div class="col">
                        <div class="blog-1-post mb-50 wow fadeInUp">

                            <!-- BLOG POST IMAGE -->
                            <div class="blog-post-img">
                                <img class="img-fluid" src="{{ asset('landing/images/blog/post-5-img.jpg') }}"
                                    alt="blog-post-image" />
                            </div>

                            <!-- BLOG POST TEXT -->
                            <div class="blog-post-txt">

                                <!-- Post Tag -->
                                <p class="post-tag">Posted on May 18, 2021</p>

                                <!-- Post Link -->
                                <h5 class="h5-sm">
                                    <a href="{{ route('landing.blogs.blog-detail') }}">Semper lacus a cursus feugiat</a>
                                </h5>

                                <!-- Text -->
                                <p class="p-lg">Donec sapien augue integer turpis urna cursus porta, mauris augue...</p>

                                <!-- Post Meta -->
                                <div class="post-meta">
                                    <p>Extensions &ensp;|&ensp; 3 Comments</p>
                                </div>

                            </div> <!-- END BLOG POST TEXT -->

                        </div>
                    </div> <!-- END  BLOG POST #3 -->


                    <!-- BLOG POST #4 -->
                    <div class="col">
                        <div class="blog-1-post mb-50 wow fadeInUp">

                            <!-- BLOG POST IMAGE -->
                            <div class="blog-post-img">
                                <img class="img-fluid" src="{{ asset('landing/images/blog/post-6-img.jpg') }}"
                                    alt="blog-post-image" />
                            </div>

                            <!-- BLOG POST TEXT -->
                            <div class="blog-post-txt">

                                <!-- Post Tag -->
                                <p class="post-tag">Posted on May 4, 2021</p>

                                <!-- Post Link -->
                                <h5 class="h5-sm">
                                    <a href="{{ route('landing.blogs.blog-detail') }}">Neque lectus porta MacOs</a>
                                </h5>

                                <!-- Text -->
                                <p class="p-lg">Donec sapien augue integer turpis urna cursus porta, mauris augue...</p>

                                <!-- Post Meta -->
                                <div class="post-meta">
                                    <p>OLMO News &ensp;|&ensp; 24 Comments</p>
                                </div>

                            </div> <!-- END BLOG POST TEXT -->

                        </div>
                    </div> <!-- END  BLOG POST #4 -->


                    <!-- BLOG POST #5 -->
                    <div class="col">
                        <div class="blog-1-post mb-50 wow fadeInUp">

                            <!-- BLOG POST IMAGE -->
                            <div class="blog-post-img">
                                <img class="img-fluid" src="{{ asset('landing/images/blog/post-3-img.jpg') }}"
                                    alt="blog-post-image" />
                            </div>

                            <!-- BLOG POST TEXT -->
                            <div class="blog-post-txt">

                                <!-- Post Tag -->
                                <p class="post-tag">Posted on April 19, 2021</p>

                                <!-- Post Link -->
                                <h5 class="h5-sm">
                                    <a href="{{ route('landing.blogs.blog-detail') }}">An aliquam justo suscipit congue augue egestas
                                        volutpat
                                        egestas magna sem congue
                                    </a>
                                </h5>

                                <!-- Text -->
                                <p class="p-lg">Donec sapien augue integer turpis urna cursus porta, mauris augue...</p>

                                <!-- Post Meta -->
                                <div class="post-meta">
                                    <p>Community &ensp;|&ensp; 21 Comments</p>
                                </div>

                            </div> <!-- END BLOG POST TEXT -->

                        </div>
                    </div> <!-- END  BLOG POST #5 -->


                    <!-- BLOG POST #6 -->
                    <div class="col">
                        <div class="blog-1-post mb-50 wow fadeInUp">

                            <!-- BLOG POST IMAGE -->
                            <div class="blog-post-img">
                                <img class="img-fluid" src="{{ asset('landing/images/blog/post-7-img.jpg') }}"
                                    alt="blog-post-image" />
                            </div>

                            <!-- BLOG POST TEXT -->
                            <div class="blog-post-txt">

                                <!-- Post Tag -->
                                <p class="post-tag">Posted on April 2, 2021</p>

                                <!-- Post Link -->
                                <h5 class="h5-sm">
                                    <a href="{{ route('landing.blogs.blog-detail') }}">Purus ipsum primis and 90's and ligula egestas
                                        suscipit</a>
                                </h5>

                                <!-- Text -->
                                <p class="p-lg">Donec sapien augue integer turpis urna cursus porta, mauris augue...</p>

                                <!-- Post Meta -->
                                <div class="post-meta">
                                    <p>OLMO News &ensp;|&ensp; 32 Comments</p>
                                </div>

                            </div> <!-- END BLOG POST TEXT -->

                        </div>
                    </div> <!-- END  BLOG POST #6 -->


                </div> <!-- END BLOG POSTS -->


            </div> <!-- END POSTS WRAPPER -->


        </div> <!-- End container -->
    </section> <!-- END BLOG POSTS LISTING -->
@endsection
