@extends('layouts.guest')

@push('extended-css')
    <script src="{{ asset('vendor/js/vue2.6.0.min.js') }}"></script>
    <script src="{{ asset('vendor/js/vee-validate.min.js') }}"></script>
@endpush

@section('content')
    <div id="root" class="w-lg-550px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
        <form class="form w-100" ref="updatePasswordForm" @submit.prevent="updatePassword" method="POST"
            action="{{ route('password.update') }}">
            @csrf
            <input type="hidden" name="token" value="{{ $request->route('token') }}">
            <input type="hidden" class="form-control @error('email') is-invalid @enderror" name="email"
                placeholder="johndoe@example.com" value="{{ old('email', $request->email) }}" readonly required>

            <div class="text-center mb-10">
                <h1 class="text-dark mb-3">Setup New Password</h1>
                <div class="text-gray-400 fw-bold fs-4">Already have reset your password ?
                    <a href="{{ route('login') }}" class="link-primary fw-bolder">
                        Sign in here
                    </a>
                </div>
            </div>

            <x-app.auth-validation-errors class="mb-10" />

            @if (session('status'))
                <x-app.session-status type="success" />
            @endif

            <div class="mb-10 fv-row" data-kt-password-meter="true">
                <div class="mb-1">
                    <label class="form-label fw-bolder text-dark fs-6">Password</label>
                    <div class="position-relative mb-3">
                        <input v-validate="'required|min:8'" ref="password"
                            class="form-control form-control-lg form-control-solid  @error('password') is-invalid @enderror"
                            type="password" placeholder="********" name="password" autocomplete="off" />
                    </div>
                    <span class="fv-plugins-message-container invalid-feedback d-none mb-2">@{{ errors.first('password') }}</span>
                    <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                        <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                        <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                    </div>
                </div>
                <div class="text-muted">Use 8 or more characters.</div>
            </div>
            <div class="fv-row mb-10">
                <label class="form-label fw-bolder text-dark fs-6">Confirm Password</label>
                <input v-validate="'required|confirmed:password|min:8'"
                    :class="{ 'is-invalid': errors.has('password_confirmation') }" data-vv-as="password"
                    class="form-control form-control-lg form-control-solid @error('password_confirmation') is-invalid @enderror"
                    type="password" placeholder="********" name="password_confirmation" autocomplete="off" />
                <span class="fv-plugins-message-container invalid-feedback d-none">@{{ errors.first('password_confirmation') }}</span>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-lg btn-primary fw-bolder me-4" :disabled="loading">
                    <span class="indicator-label" v-show="!loading">Reset Password</span>
                    <span class="indicator-label d-none" v-show="loading">Please wait...
                        <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                </button>
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
                    updatePassword() {
                        this.$validator.validateAll().then((result) => {
                            if (result) {
                                this.loading = true
                                this.$refs.updatePasswordForm.submit()
                            }
                        })
                    }
                },
            });
        });
    </script>
@endpush
