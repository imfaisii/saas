<div>
    <main class=" main-content">
        <div class="signUP-admin">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-6 col-md-6 p-0">
                        <div class="signUP-admin-left position-relative">
                            <div class="signUP-overlay">
                                <img class="svg signupTop" src="img/svg/signuptop.svg" alt="img" />
                                <img class="svg signupBottom" src="img/svg/signupbottom.svg" alt="img" />
                            </div>
                            <div class="signUP-admin-left__img">
                                <img class="img-fluid svg" src="img/svg/signupIllustration.svg" alt="img" />
                            </div>
                        </div>
                    </div>
                    @yield('content')
                </div>
            </div>
        </div>
    </main>
    <div id="overlayer">
        <span class="loader-overlay">
            <div class="atbd-spin-dots spin-lg">
                <span class="spin-dot badge-dot dot-primary"></span>
                <span class="spin-dot badge-dot dot-primary"></span>
                <span class="spin-dot badge-dot dot-primary"></span>
                <span class="spin-dot badge-dot dot-primary"></span>
            </div>
        </span>
    </div>
</div>
