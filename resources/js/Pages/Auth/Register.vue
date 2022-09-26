<template>

    <!-- <Head title="Register"></Head> -->

    <AuthLayout>
        <template v-slot:body>
            <div class="col-xl-7 col-lg-7 col-md-7 col-sm-8">
                <div class="signUp-admin-right p-md-40 p-10">
                    <div
                        class="signUp-topbar d-flex align-items-center justify-content-md-end justify-content-center mt-md-0 mb-md-0 mt-20 mb-1">
                        <p class="mb-0">
                            Already have an account?
                            <Link :href="route('login')">Sign In</Link>
                        </p>
                    </div>
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
                                    <div class="card-body">
                                        <div class="row edit-profile__body">
                                            <div class="col-md-6 mb-1">
                                                <div class="form-group mb-20">
                                                    <label for="name">name</label>
                                                    <input type="text" class="form-control" id="name"
                                                        placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-1">
                                                <div class="form-group mb-20">
                                                    <label for="username">username</label>
                                                    <input type="text" class="form-control" id="username"
                                                        placeholder="Username" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-1">
                                                <div class="form-group mb-20">
                                                    <label for="email">Email Adress</label>
                                                    <input type="text" class="form-control" id="email"
                                                        placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-1">

                                                <div class="form-group mb-15">
                                                    <label for="password-field">password</label>
                                                    <div class="position-relative">
                                                        <input id="password-field" type="password" class="form-control"
                                                            name="password" value="secret" />
                                                        <span
                                                            class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-1 ml-1">
                                                <div class="signUp-condition">
                                                    <div class="checkbox-theme-default custom-checkbox">
                                                        <input class="checkbox" type="checkbox" id="check-1" />
                                                        <label for="check-1">
                                                            <span class="checkbox-text">Creating an account
                                                                means you’re okay with
                                                                our
                                                                <a href="#" class="color-secondary">Terms of Service</a>
                                                                and
                                                                <a href="#" class="color-secondary">Privacy Policy</a>
                                                                my preference</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-1 ml-1">
                                                <div
                                                    class="button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                                    <button
                                                        class="btn btn-primary btn-default btn-squared mr-15 text-capitalize lh-normal px-50 py-15 signUp-createBtn signIn-createBtn">
                                                        Create Account
                                                    </button>
                                                </div>
                                            </div>
                                            <!-- <p class="social-connector text-center mb-md-25 mb-15 mt-md-30 mt-20">
                                            <span>Or</span>
                                        </p>
                                        <div
                                            class="button-group d-flex align-items-center justify-content-md-start justify-content-center">
                                            <ul class="signUp-socialBtn">
                                                <li>
                                                    <button class="btn text-dark px-30">
                                                        <img class="svg" src="img/svg/google.svg" alt="img" />
                                                        Sign up with Google
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="radius-md wh-48 content-center">
                                                        <img class="svg" src="img/svg/facebook.svg" alt="img" />
                                                    </button>
                                                </li>
                                                <li>
                                                    <button class="radius-md wh-48 content-center">
                                                        <img class="svg" src="img/svg/twitter.svg" alt="img" />
                                                    </button>
                                                </li>
                                            </ul>
                                        </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </AuthLayout>
</template>

<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import AuthLayout from "../../Layouts/Auth/AuthLayout.vue";
</script>
