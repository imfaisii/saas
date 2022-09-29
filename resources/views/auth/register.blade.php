{{-- <x-guest-layout>
    <x-auth-card>
        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" />

        <x-splade-form action="{{ route('register') }}" class="space-y-4">
            <x-splade-input id="name" type="text" name="name" :label="__('Name')" required autofocus />
            <x-splade-input id="email" type="email" name="email" :label="__('Email')" required />
            <x-splade-input id="password" type="password" name="password" :label="__('Password')" required autocomplete="new-password" />
            <x-splade-input id="password_confirmation" type="password" name="password_confirmation" :label="__('Confirm Password')" required />

            <div class="flex items-center justify-end">
                <Link class="underline text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                    {{ __('Already registered?') }}
                </Link>

                <x-splade-submit class="ml-4" :label="__('Register')" />
            </div>
        </x-splade-form>
    </x-auth-card>
</x-guest-layout> --}}

@extends('layouts.guest')

@section('content')
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-grid align-items-center">
        <div class="signUp-admin-right p-md-40 p-10">
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
                            <x-splade-form action="{{ route('register') }}">
                                <div class="card-body">
                                    <div class="row edit-profile__body">
                                        <div class="col-md-6 mb-1">
                                            <div class="form-group mb-20">
                                                <label for="name">name</label>
                                                <input v-model="form.name" type="text" class="form-control"
                                                    placeholder="John Doe" />
                                                <p class="invalid-feedback" v-text="form.errors.name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-1">
                                            <div class="form-group mb-20">
                                                <label for="email">Email Adress</label>
                                                <input v-model="form.email" type="email" class="form-control"
                                                    placeholder="name@example.com" />
                                                <p class="invalid-feedback" v-text="form.errors.email" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-1">
                                            <div class="form-group mb-20">
                                                <label for="password">Password</label>
                                                <input v-model="form.password" type="password" class="form-control"
                                                    placeholder="******" />
                                                <p class="invalid-feedback" v-text="form.errors.email" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-1">
                                            <div class="form-group mb-20">
                                                <label for="password-confirmation">Password Confirmation</label>
                                                <input v-model="form.password_confirmation" type="password"
                                                    class="form-control" placeholder="******" />
                                                <p class="invalid-feedback" v-text="form.errors.email" />
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-1 ml-1">
                                            <div class="signUp-condition signIn-condition mb-0">
                                                <div class="checkbox-theme-default custom-checkbox ">
                                                    <input v-model="form.terms" class="checkbox" type="checkbox" id="check-1">
                                                    <label for="check-1">
                                                        <span class="checkbox-text">I agree the with the
                                                            <a href="#">terms and
                                                                conditions</a>
                                                            and
                                                            <a href="#">privacy policy</a>
                                                        </span>
                                                    </label>
                                                    <p class="invalid-feedback" v-text="form.errors.terms" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-1 ml-1">
                                            <div
                                                class="button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                                <button v-if="form.processing" type="button"
                                                    class="btn btn-primary btn-default btn-squared mr-15 w-100 text-capitalize lh-normal px-50 py-15 signUp-createBtn signIn-createBtn">
                                                    <div>
                                                        <span class="spinner-border spinner-border-sm"></span>
                                                    </div>
                                                    Please Wait...
                                                </button>
                                                <button v-else type="submit"
                                                    class="btn btn-primary btn-default btn-squared mr-15 w-100 text-capitalize lh-normal px-50 py-15 signUp-createBtn signIn-createBtn">
                                                    Register Now
                                                </button>
                                            </div>
                                            <div
                                                class="signUp-topbar d-flex align-items-center justify-content-center mt-20 mb-1">
                                                <p class="mb-0">
                                                    Already have an account?
                                                    <Link href="{{ route('login') }} ">Sign In</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </x-splade-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
