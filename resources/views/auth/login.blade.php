@extends('layouts.guest')

@section('content')
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-grid align-items-center">
        <div class="signUp-admin-right p-md-40 p-10">
            <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="edit-profile mt-md-25 mt-0">
                        <div class="card border-0">
                            <div class="card-header border-0  pb-md-15 pb-10 pt-md-20 pt-10 ">
                                <div class="edit-profile__title">
                                    <h6>Sign In to <span class="color-primary">Admin</span></h6>
                                </div>
                            </div>
                            <form>
                                <div class="card-body">
                                    <div class="edit-profile__body">
                                        <div class="form-group mb-20">
                                            <label for="email">Email Address</label>
                                            <input v-model="form.email" type="email" class="form-control" placeholder="Email Address">
                                            {{-- <IError class="invalid-feedback mt-2" :message="form.errors.email">
                                            </IError> --}}
                                        </div>
                                        <div class="form-group mb-15">
                                            <label for="password-field">password</label>
                                            <div class="position-relative">
                                                <input v-model="form.password" type="password" class="form-control" placeholder="******">
                                                <!-- <div
                                                            class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2">
                                                        </div> -->
                                            </div>
                                        </div>
                                        <div class="signUp-condition signIn-condition">
                                            <div class="checkbox-theme-default custom-checkbox ">
                                                <input v-model="form.terms" class="checkbox" type="checkbox" id="check-1">
                                                <label for="check-1">
                                                    <span class="checkbox-text">Keep me logged in</span>
                                                </label>
                                            </div>
                                            <Link href="{{ route('password.request') }}">forget password</Link>
                                        </div>
                                        <div class="button-group d-flex pt-1 justify-content-center">
                                            <button
                                                class="btn btn-primary btn-default btn-squared w-100 mr-15 text-capitalize lh-normal px-50 py-15 signIn-createBtn ">
                                                <div>
                                                    <span class="spinner-border spinner-border-sm"></span>
                                                </div>
                                                Text
                                            </button>
                                        </div>
                                        <div
                                            class="signUp-topbar d-flex align-items-center justify-content-center mt-20 mb-1">
                                            <p class="mb-0">
                                                Don't have an account?
                                                <Link href="{{ route('register') }}">Sign Up</Link>
                                            </p>
                                        </div>
                                        <!-- <p class="social-connector text-center mb-sm-25 mb-15  mt-sm-30 mt-20">
                                                <span>Or</span>
                                            </p>
                                            <div
                                                class="button-group d-flex align-items-center justify-content-md-start justify-content-center">
                                                <ul class="signUp-socialBtn">
                                                    <li>
                                                        <button class="btn text-dark px-30"><img class="svg"
                                                                src="img/svg/google.svg" alt="img" /> Sign up with
                                                            Google</button>
                                                    </li>
                                                    <li>
                                                        <button class=" radius-md wh-48 content-center"><img class="svg"
                                                                src="img/svg/facebook.svg" alt="img" /></button>
                                                    </li>
                                                    <li>
                                                        <button class="radius-md wh-48 content-center"><img class="svg"
                                                                src="img/svg/twitter.svg" alt="img" /></button>
                                                    </li>
                                                </ul>
                                            </div> -->
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
