<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-grid align-items-center">
    <div class="signUp-admin-right p-md-40 p-10" style="padding-top: 20px !important;">
        <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="edit-profile mt-md-25 mt-0">
                    <div class="card border-0">
                        <div class="card-header border-0  pb-md-15 pb-10 pt-md-20 pt-10 ">
                            <div class="edit-profile__title">
                                <h6>Sign In to <span class="color-primary">Admin</span></h6>
                            </div>
                        </div>
                        @if (session('status'))
                            <x-session-status />
                        @endif

                        @error('credentials')
                            <div class="col-12 ml-2">
                                <li class="text-danger">{{ $errors->get('credentials')[0] }}</li>
                            </div>
                        @enderror
                        <form>
                            <div class="card-body">
                                <div class="edit-profile__body">
                                    <div class="form-group mb-20">
                                        <label for="username">Email Address</label>
                                        <x-input property='user.email' type="email"
                                            placeholder="johndoe@example.com" />
                                        <x-input-error :messages="$errors->get('user.email')" class="mt-2" />
                                    </div>
                                    <div class="form-group mb-15">
                                        <label for="password-field">password</label>
                                        <div class="position-relative">
                                            <x-input property='user.password' type="password" placeholder="******" />
                                            <x-input-error :messages="$errors->get('user.password')" class="mt-2" />
                                            <!-- <div
                                                class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2">
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="signUp-condition signIn-condition">
                                        <div class="checkbox-theme-default custom-checkbox ">
                                            <input class="checkbox" type="checkbox" id="check-1">
                                            <label for="check-1">
                                                <span class="checkbox-text">Keep me logged in</span>
                                            </label>
                                        </div>
                                        <a href="{{ route('password.request') }}">forgot password</a>
                                    </div>
                                    <div class="button-group d-flex pt-1 justify-content-center">
                                        <x-lv-button class="w-100" functionName="loginUser" text="Sign In" />
                                    </div>
                                    <div
                                        class="signUp-topbar d-flex align-items-center justify-content-center mt-20 mb-1">
                                        <p class="mb-0">
                                            Don't have an account?
                                            <a href="{{ route('register') }}">Sign Up</a>
                                        </p>
                                    </div>
                                    <p class="social-connector text-center mb-sm-25 mb-15  mt-sm-30 mt-20">
                                        <span>Or</span>
                                    </p>
                                    <div class="button-group d-flex align-items-center justify-content-center">
                                        <ul class="signUp-socialBtn">
                                            <li>
                                                <a href="{{ route('socialite.redirect', ['to' => 'google']) }}"
                                                    class=" radius-md wh-48 content-center">
                                                    <img class="svg" src="{{ asset('img/svg/google.svg') }}"
                                                        alt="img" /></a>
                                            </li>
                                            <li>
                                                <a href="{{ route('socialite.redirect', ['to' => 'facebook']) }}"
                                                    class=" radius-md wh-48 content-center">
                                                    <img class="svg" src="{{ asset('img/svg/facebook.svg') }}"
                                                        alt="img" /></a>
                                            </li>
                                            <li>
                                                <a href="{{ route('socialite.redirect', ['to' => 'github']) }}"
                                                    class="radius-md wh-48 content-center">
                                                    <img class="svg" src="{{ asset('img/svg/github.svg') }}"
                                                        alt="img" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
