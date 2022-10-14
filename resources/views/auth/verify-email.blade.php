@extends('layouts.guest')

@push('extended-css')
    <script src="{{ asset('vendor/js/vue2.6.0.min.js') }}"></script>
    <script src="{{ asset('vendor/js/vee-validate.min.js') }}"></script>
@endpush

@section('content')
    <div id="root" class="pt-lg-10 mb-10">

        @if (session('status'))
            <x-app.session-status type="primary" message="A new verification link has been sent to your email address."
                class="mb-10" />
        @endif

        <h1 class="fw-bolder fs-2qx text-gray-800 mb-7">Verify Your Email</h1>
        <div class="fs-3 fw-bold text-muted mb-10">We have sent an email to
            <a href="#" class="link-primary fw-bolder">{{ auth()->user()->email }}</a>
            <br />pelase follow a link to verify your email.
        </div>
        <div class="text-center mb-10">
            <form ref="resendLinkForm" @submit.prevent="sendLink" method="POST" action="{{ route('verification.send') }}">
                @csrf
                <button type="submit" class="btn btn-lg btn-primary fw-bolder">Resend Verification Link</button>
            </form>
        </div>
    </div>
@endsection

@push('extended-js')
    <script>
        $(function() {
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
