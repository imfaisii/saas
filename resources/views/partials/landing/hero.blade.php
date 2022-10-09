<!-- HERO  -->
<section id="hero-5" class="bg-snow hero-section division">
    <div class="container">
        <div class="row justify-content-md-center d-flex align-items-center">

            <!-- HERO IMAGE -->
            <div class="col-md-4 col-lg-6 animate-bounce">
                <div class="hero-5-img">
                    <img class="img-fluid" src="{{ asset('landing/images/hero-5-img.png') }}" alt="hero-image">
                </div>
            </div>

            <!-- HERO TEXT -->
            <div class="col-md-8 col-lg-6">
                <div id="hero-4-form">

                    <!-- Title -->
                    <h4 class="h4-xs">Conversion at a single click</h4>

                    <!-- Text -->
                    <p class="p-lg">Feugiat primis ligula risus auctor purus laoreet augue mauris viverra tortor</p>

                    <!-- Form -->
                    <form name="requestForm" class="row request-form" novalidate="novalidate">

                        <!-- Form Input -->
                        <div class="col-md-12">
                            <input type="number" name="name" class="form-control name" placeholder="Amount"
                                autocomplete="off" required="">
                        </div>

                        <!-- Form Input -->
                        <div class="col-md-6">
                            <select class="form-control">
                                <option value="">Select a currency</option>
                                <option value="USD">USD</option>
                                <option value="PKR">PKR</option>
                            </select>
                        </div>

                        <!-- Form Input -->
                        <div class="col-md-6">
                            <select class="form-control">
                                <option value="">Select a currency</option>
                                <option value="USD">USD</option>
                                <option value="PKR">PKR</option>
                            </select>
                        </div>

                        <!-- Form Button -->
                        <div class="col-md-12 form-btn mt-10">
                            <button type="submit" class="btn btn-md btn-blue green-hover submit">
                                Convert
                            </button>
                        </div>

                        <h4 class="text-success text-center mt-4">
                            Result: 12.111 $
                        </h4>

                        <!-- Form Message -->
                        <div class="col-md-12 request-form-msg text-center">
                            <span class="loading"></span>
                        </div>

                       

                    </form>

                </div>
            </div>
        </div>
    </div>
</section> <!-- END HERO -->
