<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-grid align-items-center">
    <div class="signUp-admin-right p-md-40 p-10" style="padding-top: 1px !important;">
        <div class="row justify-content-center">
            <div class="col-xl-12 col-lg-12 col-md-12">
                <div class="edit-profile mt-md-25 mt-0">
                    <div class="card border-0">
                        <div class="card-header border-0 pb-md-15 pb-10 pt-md-20 pt-10">
                            <div class="edit-profile__title">
                                <h6>
                                    Sign up to
                                    <span class="color-primary">Admin</span>
                                </h6>
                            </div>
                        </div>
                        <form>
                            <div class="card-body">
                                <div class="row edit-profile__body">
                                    <div class="col-md-6 mb-1">
                                        <div class="form-group mb-20">
                                            <label for="name">name</label>
                                            <x-input property='user.name' type="text" placeholder="John Doe" />
                                            <x-input-error :messages="$errors->get('user.name')" class="mt-2" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-1">
                                        <div class="form-group mb-20">
                                            <label for="email">Email Adress</label>
                                            <x-input property='user.email' type="email"
                                                placeholder="name@example.com" />
                                            <x-input-error :messages="$errors->get('user.email')" class="mt-2" />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-1">
                                        <div class="form-group mb-15">
                                            <label for="password-field">password</label>
                                            <div class="position-relative">
                                                <x-input property='user.password' type="password"
                                                    placeholder="******" />
                                                <x-input-error :messages="$errors->get('user.password')" class="mt-2" />
                                                <!-- <span
                                                class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2">
                                            </span> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-1">
                                        <div class="form-group mb-15">
                                            <label for="password-field">
                                                confirm password</label>
                                            <div class="position-relative">
                                                <x-input property='user.password_confirmation' type="password"
                                                    placeholder="******" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-1 ml-1">
                                        <div class="signUp-condition signIn-condition mb-0">
                                            <div class="checkbox-theme-default custom-checkbox ">
                                                <input wire:model.lazy='user.terms' class="checkbox" type="checkbox"
                                                    id="check-1">
                                                <label for="check-1">
                                                    <span class="checkbox-text">I agree the with the
                                                        <a href="#">terms and
                                                            conditions</a>
                                                        and
                                                        <a href="#">privacy policy</a>
                                                    </span>
                                                </label>
                                                <x-input-error :messages="$errors->get('user.terms')" class="mt-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mb-1 ml-1">
                                        <div
                                            class="button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                            <x-lv-button class="w-100" functionName="storeUser"
                                                text="Create Account" />
                                        </div>
                                        <div
                                            class="signUp-topbar d-flex align-items-center justify-content-center mt-20 mb-1">
                                            <p class="mb-0">
                                                Already have an account?
                                                <a href="{{ route('login') }}">Sign In</a>
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>