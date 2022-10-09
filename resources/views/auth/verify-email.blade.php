@extends('layouts.guest')
@section('content')
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 d-flex justify-content-center">
                <div class="min-vh-100 content-center w-50">
                    <div class="maintenance-page">
                        <div class="card">
                            <div class="card-header">
                                <img src="{{ asset('img/svg/logo_dark.svg') }}" alt="404" class="svg">
                            </div>
                            <div class="card-body">
                                <!-- Session Status -->
                                @if (session('status'))
                                    <x-session-status
                                        message="A new verification link has been sent to your email address." />
                                @endif

                                <h4>Hello {{ auth()->user()->name }} !</h4>
                                <p class="subtitle mt-2">
                                    Thanks for signing up! Before getting started, could you verify your email address by
                                    clicking on the link we just emailed to you? If you didn't receive the email, we will
                                    gladly send you another.
                                </p>
                                <p class="subtitle">Thank You.</p>
                            </div>
                            <div class="card-footer d-flex align-items-baseline justify-content-between">
                                <form ref="resendLinkForm" @submit.prevent="sendLink" method="POST"
                                    action="{{ route('verification.send') }}">
                                    @csrf
                                    <button type="submit" class="btn btn-primary" :disabled="loading">
                                        <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                        @{{ btnText }}
                                    </button>
                                </form>
                                {{-- <p>{{ date('Y') }} © {{ config('app.name') }}</p> --}}
                                <form method="POST" action="{{ route('logout') }}">
                                    @csrf
                                    <a href="#" class="text-decoration-underline" onclick="parentNode.submit()">
                                        <u>
                                            Log Out
                                        </u>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                        btnText: 'Verify Email Address'
                    }
                },
                methods: {
                    sendLink() {
                        this.btnText = 'Please wait...'
                        this.loading = true
                        this.$refs.resendLinkForm.submit();
                    }
                },
            });
        });
    </script>
@endpush
