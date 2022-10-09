@extends('layouts.guest')
@section('content')
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 d-flex justify-content-center">
                <div class="min-vh-100 content-center w-50">
                    <div class="maintenance-page">
                        <div class="card">
                            <div class="card-header">
                                <img src="img/svg/logo_dark.svg" alt="404" class="svg">
                            </div>
                            <div class="card-body">
                                <!-- Session Status -->
                                @if (session('status'))
                                    <x-session-status
                                        message="A new verification link has been sent to your email address." />
                                @endif

                                <h4>Forgot Password?</h4>
                                <p class="subtitle mt-2">
                                    No problem. Just let us know your email address and we will email
                                    you a password reset link that will allow you to choose a new one.
                                </p>
                                <p class="subtitle">Enter your email address below:</p>
                                <form class="w-100" method="POST" action="{{ route('password.email') }}">
                                    @csrf
                                    <input type="email" class="form-control @error('email') is-invalid @enderror"
                                        name="email" placeholder="johndoe@example.com" required>
                                    <x-input-error :messages="$errors->get('email')" class="mt-2" />
                                    <button type="submit" class="btn btn-primary mt-2">Resend Verification Link </button>
                                </form>
                            </div>
                            <div class="card-footer">
                                <p>{{ date('Y') }} © {{ config('app.name') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
