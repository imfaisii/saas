@extends('layouts.guest')

@push('extended-css')
    <script src="{{ asset('vendor/js/vue2.6.0.min.js') }}"></script>
    <script src="{{ asset('vendor/js/vee-validate.min.js') }}"></script>
@endpush

@section('content')
    <div id="root" class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
        <form class="form w-100" ref="resendLinkForm" @submit.prevent="sendLink" method="POST"
            action="{{ route('password.email') }}" novalidate>
            @csrf
            <div class="text-center mb-10">
                <h1 class="text-dark mb-3">Forgot Password ?</h1>
                <div class="text-gray-400 fw-bold fs-4">Enter your email to reset your password.</div>
            </div>

            <x-app.auth-validation-errors class="mb-10" />

            @if (session('status'))
                <x-app.session-status />
            @endif
            
            <div class="fv-row mb-10">
                <label class="form-label fw-bolder text-gray-900 fs-6">Email</label>
                <input v-validate="'required|email'"
                    class="form-control form-control-solid @error('email') is-invalid @enderror" type="email"
                    placeholder="johndoe@example.com" name="email" autocomplete="off" />
                <span class="fv-plugins-message-container invalid-feedback d-none">@{{ errors.first('email') }}</span>
            </div>
            <div class="d-flex flex-wrap justify-content-center pb-lg-0">
                <button type="submit" class="btn btn-lg btn-primary fw-bolder me-4" :disabled="loading">
                    <span class="indicator-label" v-show="!loading">Send Reset Link</span>
                    <span class="indicator-label d-none" v-show="loading">Please wait...
                        <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                </button>
                <a href="{{ route('login') }}" class="btn btn-lg btn-light-primary fw-bolder">Cancel</a>
            </div>
        </form>
    </div>
@endsection

@push('extended-js')
    <script>
        $(function() {
            // Removing display none class to fix a glitch
            $(".fv-plugins-message-container").removeClass('d-none')
            $(".indicator-label").removeClass('d-none')

            // Adding VeeValidate Plugin
            Vue.use(VeeValidate);
            new Vue({
                el: "#root",
                data() {
                    return {
                        loading: false,
                    }
                },
                methods: {
                    sendLink() {
                        this.$validator.validateAll().then((result) => {
                            if (result) {
                                this.loading = true
                                this.$refs.resendLinkForm.submit()
                            }
                        })
                    }
                },
            });
        });
    </script>
@endpush
