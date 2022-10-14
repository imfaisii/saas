<template>
    <GuestLayout>
        <template v-slot:body>
            <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form"
                    data-kt-redirect-url="../../demo1/dist/index.html" action="#">
                    <div class="text-center mb-10">
                        <h1 class="text-dark mb-3">Sign In to Metronic</h1>
                        <div class="text-gray-400 fw-bold fs-4">New Here?
                            <Link href="/register" class="link-primary fw-bolder">Create an Account</Link>
                        </div>
                    </div>
                    <div class="fv-row mb-10">
                        <label class="form-label fs-6 fw-bolder text-dark">Email</label>
                        <input class="form-control form-control-lg form-control-solid" type="text" name="email"
                            autocomplete="off" />
                    </div>
                    <div class="fv-row mb-10">
                        <div class="d-flex flex-stack mb-2">
                            <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                            <a href="../../demo1/dist/authentication/layouts/basic/password-reset.html"
                                class="link-primary fs-6 fw-bolder">Forgot Password ?</a>
                        </div>
                        <input class="form-control form-control-lg form-control-solid" type="password" name="password"
                            autocomplete="off" />
                    </div>
                    <div class="text-center">
                        <button type="submit" id="kt_sign_in_submit" class="btn btn-lg btn-primary w-100 mb-5">
                            <span class="indicator-label">Continue</span>
                            <span class="indicator-progress">Please wait...
                                <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                        <div class="text-center text-muted text-uppercase fw-bolder mb-5">or</div>
                        <a href="#" class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                            <img alt="Logo" src="backend/assets/media/svg/brand-logos/google-icon.svg"
                                class="h-20px me-3" />Continue with Google</a>
                        <a href="#" class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                            <img alt="Logo" src="backend/assets/media/svg/brand-logos/facebook-4.svg"
                                class="h-20px me-3" />Continue with Facebook</a>
                        <a href="#" class="btn btn-flex flex-center btn-light btn-lg w-100">
                            <img alt="Logo" src="backend/assets/media/svg/brand-logos/apple-black.svg"
                                class="h-20px me-3" />Continue with Apple</a>
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
// const { toastr } = inject('toastr')
// const { btnToggle } = useButtonHelper()
var btn = reactive({ text: 'Sign In', ajax: false })
const form = useForm({
    email: "",
    password: "",
});
const submit = () => {
    form.post(route("login"), {
        onBefore: () => btnToggle(btn, 'Please wait..'),
        onSuccess: () => {
            // toastr.success("Please wait...");
            Inertia.visit("/");
        },
        onFinish: () => btnToggle(btn, 'Sign In'),
    })
}
</script>