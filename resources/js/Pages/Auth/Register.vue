<template>
    <GuestLayout>
        <template v-slot:body>
            <div class="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                <form class="form w-100" novalidate="novalidate">
                    <div class="mb-10 text-center">
                        <h1 class="text-dark mb-3">Create an Account</h1>
                        <div class="text-gray-400 fw-bold fs-4">Already have an account?
                            <Link href="/login" class="link-primary fw-bolder">Sign in here</Link>
                            <Link href="/dashboard" class="link-primary fw-bolder">Dashboard</Link>
                        </div>
                    </div>
                    <button type="button" class="btn btn-light-primary fw-bolder w-100 mb-10">
                        <img alt="Logo" src="backend/assets/media/svg/brand-logos/google-icon.svg"
                            class="h-20px me-3" />Sign in with
                        Google</button>
                    <div class="d-flex align-items-center mb-10">
                        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
                        <span class="fw-bold text-gray-400 fs-7 mx-2">OR</span>
                        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
                    </div>
                    <div class="row fv-row mb-7">
                        <div class="col-xl-6">
                            <label class="form-label fw-bolder text-dark fs-6">First Name</label>
                            <input class="form-control form-control-lg form-control-solid" type="text" placeholder=""
                                name="first-name" autocomplete="off" />
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label fw-bolder text-dark fs-6">Last Name</label>
                            <input class="form-control form-control-lg form-control-solid" type="text" placeholder=""
                                name="last-name" autocomplete="off" />
                        </div>
                    </div>
                    <div class="fv-row mb-7">
                        <label class="form-label fw-bolder text-dark fs-6">Email</label>
                        <input class="form-control form-control-lg form-control-solid" type="email" placeholder=""
                            name="email" autocomplete="off" />
                    </div>
                    <div class="mb-10 fv-row" data-kt-password-meter="true">
                        <div class="mb-1">
                            <label class="form-label fw-bolder text-dark fs-6">Password</label>
                            <div class="position-relative mb-3">
                                <input class="form-control form-control-lg form-control-solid" type="password"
                                    placeholder="" name="password" autocomplete="off" />
                                <span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                                    data-kt-password-meter-control="visibility">
                                    <i class="bi bi-eye-slash fs-2"></i>
                                    <i class="bi bi-eye fs-2 d-none"></i>
                                </span>
                            </div>
                            <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                            </div>
                        </div>
                        <div class="text-muted">Use 8 or more characters with a mix of letters, numbers &amp; symbols.
                        </div>
                    </div>
                    <div class="fv-row mb-5">
                        <label class="form-label fw-bolder text-dark fs-6">Confirm Password</label>
                        <input class="form-control form-control-lg form-control-solid" type="password" placeholder=""
                            name="confirm-password" autocomplete="off" />
                    </div>
                    <div class="fv-row mb-10">
                        <label class="form-check form-check-custom form-check-solid form-check-inline">
                            <input class="form-check-input" type="checkbox" name="toc" value="1" />
                            <span class="form-check-label fw-bold text-gray-700 fs-6">I Agree
                                <a href="#" class="ms-1 link-primary">Terms and conditions</a>.</span>
                        </label>
                    </div>
                    <div class="text-center">
                        <button type="button" id="kt_sign_up_submit" class="btn btn-lg btn-primary">
                            <span class="indicator-label">Submit</span>
                            <span class="indicator-progress">Please wait...
                                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                    </div>
                </form>
            </div>
        </template>
    </GuestLayout>
</template>


<script setup>
import GuestLayout from "@/Layouts/GuestLayout.vue"
import { reactive, inject } from "vue"
import { Inertia } from "@inertiajs/inertia"
import { useForm } from "@inertiajs/inertia-vue3"
// import useButtonHelper from "@/Mixins/ButtonHelpers"
// get global variables and functions
// const toastr = inject('toastr')
// const { btnToggle } = useButtonHelper()
var btn = reactive({ text: 'Create Account', ajax: false })
const form = useForm({
    name: null,
    username: null,
    email: null,
    password: null,
    password_confirmation: null,
    terms: null,
});
const submit = () => {
    form.post(route("register"), {
        onBefore: () => btnToggle(btn, 'Please wait..'),
        // onError: () => toastr.error("Please remove errors."),
        onSuccess: function () {
            // toastr.success("User Created Successfully.");
            Inertia.visit("/dashboard");
        },
        onFinish: () => btnToggle(btn, 'Create Account')
    });
};
</script>