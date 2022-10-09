@extends('layouts.landing')
@section('content')
    <!-- CONTACTS-2
                                               ============================================= -->
    <section id="contacts-2" class="bg-snow wide-50 inner-page-hero contacts-section division">
        <div class="container">

            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8">
                    <div class="section-title title-02 mb-30">

                        <!-- Title -->
                        <h3 class="h3-xl">
                            Want to convert currency? <br>
                            Need help?
                        </h3>

                        <!-- Text -->
                        <p class="p-xl">Convert the currency tellus pellentesque eu tincidunt tortor aliquam nulla facilisi
                            cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus
                        </p>

                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8">
                    <div class="form-holder">
                        <form name="convertform" id="convertform" class="row contact-form">

                            <div class="col-md-12 input-subject">
                                <p class="p-lg">Amount</p>
                                <span>Enter the amount: </span>
                                <input type="text" name="amount" class="form-control name" placeholder="">

                            </div>

                            <div class="col-md-6 input-subject">
                                <p class="p-lg">From</p>
                                <span>Choose the currency to confirm from: </span>
                                <select class="form-select subject" aria-label="Default select example">
                                    <option selected disabled value="">Chose Currency</option>
                                    <option>USD</option>

                                </select>
                            </div>

                            <div class="col-md-6">
                                <p class="p-lg">To</p>
                                <span>Choose the currency to confirm from: </span>
                                <select class="form-select subject" aria-label="Default select example">
                                    <option selected disabled value="">Chose Currency</option>
                                    <option>PKR</option>

                                </select>
                            </div>

                            <div class="col-md-12 mt-15 form-btn text-right">
                                <button type="submit" class="btn btn-skyblue tra-grey-hover submit">Convert Now!</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div> <!-- END CONTACT FORM -->
           

            <div class="cta-8-wrapper pc-25 mt-30">

                <div class="row row-cols-1 row-cols-md-12">


                    <!-- BOX #1 -->
                    <div class="col">
                    
                        <a href="pricing.html">
                            <div class="cta-box cta-top-box bg-white wow fadeInUp">

                                <!-- Icon -->
                                <div class="cta-ico">
                                    <div class="ico-60"><span class="flaticon-wallet"></span></div>
                                </div>

                                <!-- Text -->
                                <div class="cta-txt">

                                    <!-- Title -->
                                    <h5 class="h5-md">Result:</h5>

                                    <!-- Text -->
                                    <p class="p-lg">USD to PKR
                                    </p>

                                </div>

                            </div>
                        </a>
                    </div> <!-- END BOX #1 -->

                </div> <!-- End cta-8-wrapper -->
            </div> <!-- End row -->

        </div> <!-- End container -->
    </section> <!-- END CONTACTS-2 -->

    <!-- DIVIDER LINE -->
    <hr class="divider">

    <!-- CALL TO ACTION-8
                                           ============================================= -->
    <section id="cta-8" class="bg-snow wide-100 cta-section division">
        <div class="container">
            <div class="cta-8-wrapper pc-25">
                <div class="row row-cols-1 row-cols-md-2">


                    <!-- BOX #1 -->
                    <div class="col">
                        <a href="pricing.html">
                            <div class="cta-box cta-top-box bg-white wow fadeInUp">

                                <!-- Icon -->
                                <div class="cta-ico">
                                    <div class="ico-60"><span class="flaticon-wallet"></span></div>
                                </div>

                                <!-- Text -->
                                <div class="cta-txt">

                                    <!-- Title -->
                                    <h5 class="h5-md">View Pricing</h5>

                                    <!-- Text -->
                                    <p class="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus at
                                        auctor
                                        tempus
                                    </p>

                                </div>

                            </div>
                        </a>
                    </div> <!-- END BOX #1 -->


                    <!-- BOX #2 -->
                    <div class="col">
                        <a href="faqs.html">
                            <div class="cta-box bg-white wow fadeInUp">

                                <!-- Icon -->
                                <div class="cta-ico">
                                    <div class="ico-60"><span class="flaticon-help"></span></div>
                                </div>

                                <!-- Text -->
                                <div class="cta-txt">

                                    <!-- Title -->
                                    <h5 class="h5-md">Read the FAQs</h5>

                                    <!-- Text -->
                                    <p class="p-lg">Porta semper lacus cursus feugiat primis ultrice ligula risus at
                                        auctor
                                        tempus
                                    </p>

                                </div>

                            </div>
                        </a>
                    </div> <!-- END BOX #2 -->


                </div> <!-- End cta-8-wrapper -->
            </div> <!-- End row -->
        </div> <!-- End container -->
    </section> <!-- END CALL TO ACTION-8 -->
@endsection
