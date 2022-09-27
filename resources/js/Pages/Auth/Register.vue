<template>
    <AuthLayout>
        <template v-slot:body>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-8">
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
                                    <form @submit.prevent="submit">
                                        <div class="card-body">
                                            <div class="row edit-profile__body">
                                                <div class="col-md-6 mb-1">
                                                    <div class="form-group mb-20">
                                                        <label for="name">name</label>
                                                        <input v-model="form.name" type="text" class="form-control"
                                                            v-bind:class="form.errors.name ? 'is-invalid' : ''"
                                                            placeholder="Full Name" />
                                                        <IError class="invalid-feedback mt-2"
                                                            :message="form.errors.name">
                                                        </IError>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-1">
                                                    <div class="form-group mb-20">
                                                        <label for="email">Email Adress</label>
                                                        <input v-model="form.email" type="email" class="form-control"
                                                            v-bind:class="form.errors.email ? 'is-invalid' : '' "
                                                            placeholder="name@example.com" />
                                                        <IError class="invalid-feedback mt-2"
                                                            :message="form.errors.email ">
                                                        </IError>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-1">
                                                    <div class="form-group mb-15">
                                                        <label for="password-field">password</label>
                                                        <div class="position-relative">
                                                            <input v-model="form.password" type="password"
                                                                v-bind:class="form.errors.password ? 'is-invalid' : '' "
                                                                class="form-control" placeholder="*****" />
                                                            <IError class="invalid-feedback mt-2"
                                                                :message="form.errors.password">
                                                            </IError>
                                                            <!-- <span
                                                            class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2">
                                                        </span> -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 mb-1">
                                                    <div class="form-group mb-15">
                                                        <label for="password-field">confirm
                                                            password</label>
                                                        <div class="position-relative">
                                                            <input v-model="form.password_confirmation" type="password"
                                                                v-bind:class="form.errors.password_confirmation ? 'is-invalid': ''"
                                                                class="form-control" placeholder="*****" />
                                                            <IError class="invalid-feedback mt-2"
                                                                :message="form.errors.password_confirmation">
                                                            </IError>
                                                            <!-- <span
                                                            class="fa fa-fw fa-eye-slash text-light fs-16 field-icon toggle-password2">
                                                        </span> -->
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 mb-1 ml-1">
                                                    <div class="signUp-condition">
                                                        <div class="checkbox-theme-default custom-checkbox">
                                                            <input class="checkbox" type="checkbox" id="check-1" />
                                                            <label for="check-1">
                                                                <span class="checkbox-text">Creating an
                                                                    account
                                                                    means you’re
                                                                    okay with
                                                                    our
                                                                    <a href="#" class="color-secondary">Terms
                                                                        of
                                                                        Service</a>
                                                                    and
                                                                    <a href="#" class="color-secondary">Privacy
                                                                        Policy</a>
                                                                    my
                                                                    preference</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 mb-1 ml-1">
                                                    <div
                                                        class="button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                                        <button type="submit" :disabled="btn.ajax"
                                                            class="btn btn-primary btn-default btn-squared mr-15 text-capitalize lh-normal px-50 py-15 signUp-createBtn signIn-createBtn">
                                                            <div v-if="btn.ajax">
                                                                <span class="spinner-border spinner-border-sm"></span>
                                                            </div>
                                                            {{ btn.text }}
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
                                    </form>
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
import AuthLayout from "../../Layouts/Auth/AuthLayout.vue";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-vue3";
import { reactive } from "vue";

var btn = reactive({ text: 'Create Account', ajax: false })

const form = useForm({
    name: null,
    username: null,
    email: null,
    password: null,
    password_confirmation: null,
});

const submit = () => {
    form.post(route("register"), {
        onBefore: () => {
            btn.ajax = true
            btn.text = 'Please wait...'
            window.toastr.info("Registering User")
        },
        onError: () => window.toastr.error("Please remove errors."),
        onSuccess: function () {
            window.toastr.success("User Created Successfully.");
            Inertia.visit("/");
        },
        onFinish: () => {
            btn.ajax = false
            btn.text = 'Create Account'
        }
    });
};
</script>
