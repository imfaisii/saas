@extends('layouts.guest')

@push('extended-css')
    <script src="{{ asset('vendor/js/vue2.6.0.min.js') }}"></script>
    <script src="{{ asset('vendor/js/vee-validate.min.js') }}"></script>
@endpush

@section('content')
    <div id="root" class="pt-lg-10 mb-10">

        @if (session('status'))
            <x-app.session-status class="mb-10" type="success"
                message="A new verification link has been sent to your email address." />
        @endif

        <h1 class="fw-bolder fs-2qx text-gray-800 mb-7">Verify Your Email</h1>
        <div class="fs-3 fw-bold text-muted mb-10">We have sent an email to
            <a href="#" class="link-primary fw-bolder">{{ auth()->user()->email }}</a>
            <br />pelase follow a link to verify your email.
        </div>
        <div class="text-center mb-10">
            <form ref="resendLinkForm" @submit.prevent="sendLink" method="POST" action="{{ route('verification.send') }}">
                @csrf
                <button type="submit" class="btn btn-lg btn-primary fw-bolder me-4" :disabled="loading">
                    <span class="indicator-label" v-show="!loading">Resend Verification Link</span>
                    <span class="indicator-label d-none" v-show="loading">Please wait...
                        <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                </button>
            </form>
        </div>
    </div>
@endsection

@push('extended-js')
    <script>
        $(function() {
            // Removing display none class to fix a glitch
            $(".indicator-label").removeClass('d-none')

            new Vue({
                el: "#root",
                data() {
                    return {
                        loading: false,
                    }
                },
                methods: {
                    sendLink() {
                        this.loading = true
                        this.$refs.resendLinkForm.submit()
                    }
                }
            })
        });
    </script>
@endpush
