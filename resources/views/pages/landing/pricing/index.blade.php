@extends('layouts.landing')
@section('content')
    <!-- PRICING-2
       ============================================= -->
    <section id="pricing-2" class="bg-snow pb-60 inner-page-hero pricing-section division">
        <div class="container">


            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8">
                    <div class="section-title title-01 mb-80">

                        <!-- Title -->
                        <h2 class="h2-md">Simple And Flexible Pricing</h2>

                        <!-- Text -->
                        <p class="p-xl">No credit card required. Change or cancel your plan anytime</p>

                    </div>
                </div>
            </div>


            <!-- PRICING TABLES -->
            <div class="pricing-2-row pc-25">
                <div class="row row-cols-1 row-cols-md-3">


                    <!-- BASIC PLAN -->
                    <div class="col">
                        <div class="pricing-2-table bg-white mb-40 wow fadeInUp">

                            <!-- Plan Price -->
                            <div class="pricing-plan">

                                <!-- Plan Title -->
                                <div class="pricing-plan-title">
                                    <h5 class="h5-xs">Basic</h5>
                                    <h6 class="h6-sm bg-lightgrey">Save 30%</h6>
                                </div>

                                <!-- Price -->
                                <sup class="dark-color">$</sup>
                                <span class="dark-color">7</span>
                                <sup class="validity dark-color"><span>.99</span> / month</sup>
                                <p class="p-md">Billed as $96 per year</p>

                            </div>

                            <!-- Plan Features  -->
                            <ul class="features">
                                <li>
                                    <p class="p-md"><span>25</span> Projects</p>
                                </li>
                                <li>
                                    <p class="p-md"><span>10</span> mySQL Database</p>
                                </li>
                                <li>
                                    <p class="p-md"><span>25 GB</span> of Storage</p>
                                </li>
                                <li>
                                    <p class="p-md"><span>Premium</span> Support</p>
                                </li>
                            </ul>

                            <!-- Pricing Plan Button -->
                            <a href="#" class="btn btn-sm btn-tra-grey tra-skyblue-hover">Select Plan</a>

                        </div>
                    </div> <!-- END BASIC PLAN -->


                    <!-- AGENCY PLAN -->
                    <div class="col">
                        <div class="pricing-2-table bg-white mb-40 wow fadeInUp">

                            <!-- Plan Price -->
                            <div class="pricing-plan">

                                <!-- Plan Title -->
                                <div class="pricing-plan-title">
                                    <h5 class="h5-xs">Agency</h5>
                                    <h6 class="h6-sm bg-lightgrey">Save 25%</h6>
                                </div>

                                <!-- Price -->
                                <sup class="dark-color">$</sup>
                                <span class="dark-color">11</span>
                                <sup class="validity dark-color"><span>.25</span> / month</sup>
                                <p class="p-md">Billed as $135 per year</p>

                            </div>

                            <!-- Plan Features  -->
                            <ul class="features">
                                <li>
                                    <p class="p-md"><span>100</span> Projects</p>
                                </li>
                                <li>
                                    <p class="p-md"><span>25</span> mySQL Database</p>
                                </li>
                                <li>
                                    <p class="p-md"><span>80 GB</span> of Storage</p>
                                </li>
                                <li>
                                    <p class="p-md"><span>Premium</span> Support</p>
                                </li>
                            </ul>

                            <!-- Pricing Plan Button -->
                            <a href="#" class="btn btn-sm btn-tra-grey tra-skyblue-hover">Select Plan</a>

                        </div>
                    </div> <!-- END AGENCY PLAN  -->


                    <!-- ADVANCED PLAN -->
                    <div class="col">
                        <div class="pricing-2-table bg-white mb-40 wow fadeInUp">

                            <!-- Plan Price  -->
                            <div class="pricing-plan highlight">

                                <!-- Plan Title -->
                                <div class="pricing-plan-title">
                                    <h5 class="h5-xs">Advanced</h5>
                                    <h6 class="h6-sm bg-skyblue white-color">Popular</h6>
                                </div>

                                <!-- Price -->
                                <sup class="dark-color">$</sup>
                                <span class="dark-color">15</span>
                                <sup class="validity dark-color"><span>.99</span> / month</sup>
                                <p class="p-md">Billed as $199 per year</p>
                            </div>

                            <!-- Plan Features  -->
                            <ul class="features">
                                <li>
                                    <p class="p-md"><span>Unlimited</span> Projects</p>
                                </li>
                                <li>
                                    <p class="p-md"><span>50</span> mySQL Database</p>
                                </li>
                                <li>
                                    <p class="p-md"><span>500 GB</span> of Storage</p>
                                </li>
                                <li>
                                    <p class="p-md"><span>VIP</span> Support</p>
                                </li>
                            </ul>

                            <!-- Pricing Plan Button -->
                            <a href="#" class="btn btn-sm btn-skyblue tra-grey-hover">Select Plan</a>

                        </div>
                    </div> <!-- END ADVANCED PLAN -->


                </div>
            </div> <!-- END PRICING TABLES -->


            <!-- PRICING COMPARE -->
            <div class="pricing-compare pc-40">
                <div class="row">
                    <div class="col">

                        <!-- Title -->
                        <h3 class="h3-sm text-center">Compare Pricing Packages</h3>

                        <!-- Table -->
                        <div class="table-responsive">
                            <table class="table text-center">

                                <thead>
                                    <tr>
                                        <th style="width: 34%;"></th>
                                        <th style="width: 22%;">Basic</th>
                                        <th style="width: 22%;">Agency</th>
                                        <th style="width: 22%;">Advanced</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <th scope="row" class="text-start">25 Projects</th>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="text-start">100 Projects</th>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="text-start">Unlimited</th>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="text-start">10 mySQL Database</th>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="text-start">25 mySQL Database</th>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="text-start">50 mySQL Database</th>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="text-start">25 GB of Storage</th>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="text-start">80 GB of Storage</th>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="text-start">500 mySQL Database</th>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="text-start">Premium Support</th>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="text-start">VIP Support</th>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-10 disabled-option"><span class="flaticon-cancel"></span></td>
                                        <td class="ico-15 green-color"><span class="flaticon-check"></span></td>
                                    </tr>

                                </tbody>

                            </table>
                        </div> <!-- End Table -->

                    </div>
                </div>
            </div> <!-- END PRICING COMPARE -->


            <!-- PRICING NOTICE TEXT -->
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="pricing-notice text-center mb-40">
                        <p class="p-md">The above prices do not include applicable taxes based on your billing address.
                            The final price will be displayed on the checkout page, before the payment is completed
                        </p>
                    </div>
                </div>
            </div>


            <!-- PAYMENT METHODS -->
            <div class="payment-methods pc-30">
                <div class="row row-cols-1 row-cols-md-3">

                    <!-- Payment Methods -->
                    <div class="col col-lg-5">
                        <div class="pbox mb-40">

                            <!-- Title -->
                            <h6 class="h6-md">Accepted Payment Methods</h6>

                            <!-- Payment Icons -->
                            <ul class="payment-icons ico-50">
                                <li><img src="{{asset('landing/images/png-icons/visa.png')}}" alt="payment-icon" /></li>
                                <li><img src="{{asset('landing/images/png-icons/am.png')}}" alt="payment-icon" /></li>
                                <li><img src="{{asset('landing/images/png-icons/discover.png')}}" alt="payment-icon" /></li>
                                <li><img src="{{asset('landing/images/png-icons/paypal.png')}}" alt="payment-icon" /></li>
                                <li><img src="{{asset('landing/images/png-icons/jcb.png')}}" alt="payment-icon" /></li>
                                <li><img src="{{asset('landing/images/png-icons/shopify.png')}}" alt="payment-icon" /></li>
                            </ul>

                        </div>
                    </div>


                    <!-- Payment Guarantee -->
                    <div class="col col-lg-4">
                        <div class="pbox mb-40">

                            <!-- Title -->
                            <h6 class="h6-md">Money Back Guarantee</h6>

                            <!-- Text -->
                            <p>Explore OLMO Premium for 14 days. If it’s not a perfect fit, receive a full refund.</p>

                        </div>
                    </div>


                    <!-- Payment Encrypted -->
                    <div class="col col-lg-3">
                        <div class="pbox mb-40">

                            <!-- Title -->
                            <h6 class="h6-md">SSL Encrypted Payment</h6>

                            <!-- Text -->
                            <p>Your information is protected by 256-bit SSL encryption.</p>

                        </div>
                    </div>

                </div>
            </div> <!-- END PAYMENT METHODS -->


        </div> <!-- End container -->
    </section> <!-- END PRICING-2 -->




    <!-- CALL TO ACTION-4
       ============================================= -->
    <section id="cta-4" class="cta-section division">
        <div class="cta-4-holder bg-snow">
            <div class="container">
                <div class="bg-white cta-4-wrapper">
                    <div class="row d-flex align-items-center">


                        <!-- CALL TO ACTION TEXT -->
                        <div class="col-lg-7 col-lg-8">
                            <div class="cta-4-txt">
                                <h4 class="h4-xl">Try OLMO free for 14 days. Start your trial now and pick a plan later
                                </h4>
                            </div>
                        </div>


                        <!-- CALL TO ACTION BUTTON -->
                        <div class="col-lg-4">
                            <div class="text-end">
                                <div class="cta-4-btn text-center">
                                    <a href="pricing.html" class="btn btn-skyblue tra-grey-hover">Get Started Now</a>
                                    <p><a href="faqs.html">Read The FAQs</a></p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div> <!-- End row -->
            </div> <!-- End container -->
        </div>
    </section> <!-- END CALL TO ACTION-4 -->




    <!-- FAQs-2
       ============================================= -->
    <section id="faqs-2" class="wide-60 faqs-section division">
        <div class="container">


            <!-- SECTION TITLE -->
            <div class="row justify-content-center">
                <div class="col-lg-10 col-xl-8">
                    <div class="section-title title-01 mb-80">

                        <!-- Title -->
                        <h2 class="h2-md">Got Questions? Look Here</h2>

                        <!-- Text -->
                        <p class="p-xl">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero
                            tempus, blandit and cursus varius and magnis sapien
                        </p>

                    </div>
                </div>
            </div>


            <!-- FAQs-2 QUESTIONS -->
            <div class="faqs-2-questions">
                <div class="row row-cols-1 row-cols-lg-2">


                    <!-- QUESTIONS HOLDER -->
                    <div class="col">
                        <div class="questions-holder pr-15">


                            <!-- QUESTION #1 -->
                            <div class="question wow fadeInUp">

                                <!-- Question -->
                                <h5 class="h5-sm">Can I see OLMO in action before purchasing?</h5>

                                <!-- Answer -->
                                <p class="p-lg">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis
                                    blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit
                                    vitae
                                </p>

                            </div>


                            <!-- QUESTION #2 -->
                            <div class="question wow fadeInUp">

                                <!-- Question -->
                                <h5 class="h5-sm">What are the requirements for using OLMO?</h5>

                                <!-- Answer -->
                                <p class="p-lg">An enim nullam tempor sapien gravida a donec ipsum enim an porta justo
                                    integer at velna vitae auctor integer congue undo magna at pretium purus pretium
                                </p>

                            </div>


                            <!-- QUESTION #3 -->
                            <div class="question wow fadeInUp">

                                <!-- Question -->
                                <h5 class="h5-sm">Can I use OLMO on different devices?</h5>

                                <!-- Answer -->
                                <ul class="simple-list">

                                    <li class="list-item">
                                        <p class="p-lg">Fringilla risus, luctus mauris orci auctor purus ligula euismod
                                            pretium purus pretium rutrum tempor sapien
                                        </p>
                                    </li>

                                    <li class="list-item">
                                        <p class="p-lg">Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                                            sodales
                                            sapien undo pretium a purus
                                        </p>
                                    </li>

                                </ul>

                            </div>


                        </div>
                    </div> <!-- END QUESTIONS HOLDER -->


                    <!-- QUESTIONS HOLDER -->
                    <div class="col">
                        <div class="questions-holder pl-15">


                            <!-- QUESTION #4 -->
                            <div class="question wow fadeInUp">

                                <!-- Question -->
                                <h5 class="h5-sm">Do you have a free trial?</h5>

                                <!-- Answer -->
                                <p class="p-lg">Cubilia laoreet augue egestas and luctus donec curabite diam vitae
                                    dapibus
                                    libero and quisque gravida donec and neque. Blandit justo aliquam molestie nunc sapien
                                </p>

                            </div>


                            <!-- QUESTION #5 -->
                            <div class="question wow fadeInUp">

                                <!-- Question -->
                                <h5 class="h5-sm">How does OLMO handle my privacy?</h5>

                                <!-- Answer -->
                                <p class="p-lg">Etiam amet mauris suscipit sit amet in odio. Integer congue leo metus.
                                    Vitae arcu mollis blandit ultrice ligula
                                </p>

                                <!-- Answer -->
                                <p class="p-lg">An enim nullam tempor sapien gravida donec congue leo metus. Vitae arcu
                                    mollis blandit integer at velna
                                </p>

                            </div>


                            <!-- QUESTION #6 -->
                            <div class="question wow fadeInUp">

                                <!-- Question -->
                                <h5 class="h5-sm">I have an issue with my account</h5>

                                <!-- Answer -->
                                <ul class="simple-list">

                                    <li class="list-item">
                                        <p class="p-lg">Fringilla risus, luctus mauris orci auctor purus</p>
                                    </li>

                                    <li class="list-item">
                                        <p class="p-lg">Quaerat sodales sapien euismod blandit purus and ipsum primis in
                                            cubilia laoreet augue luctus
                                        </p>
                                    </li>

                                </ul>

                            </div>


                        </div>
                    </div> <!-- END QUESTIONS HOLDER -->


                </div> <!-- End row -->
            </div> <!-- END FAQs-2 QUESTIONS -->


            <!-- MORE QUESTIONS BUTTON -->
            <div class="row">
                <div class="col">
                    <div class="more-questions">
                        <h5 class="h5-sm">Have more questions? <a href="contacts.html">Ask your question here</a></h5>
                    </div>
                </div>
            </div>


        </div> <!-- End container -->
    </section> <!-- END FAQs-2 -->
@endsection
