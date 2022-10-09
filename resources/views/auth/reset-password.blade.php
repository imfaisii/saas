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

                                <h4>Reset Password</h4>
                                <p class="subtitle mt-2">
                                    Please enter the new password your email address.
                                </p>
                                <form  ref="updatePasswordForm" @submit.prevent="updatePassword" method="POST" action="{{ route('password.update') }}">
                                    @csrf
                                    <!-- Password Reset Token -->
                                    <input type="hidden" name="token" value="{{ $request->route('token') }}">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Email Address</label>
                                            <input type="email" class="form-control @error('email') is-invalid @enderror"
                                                name="email" placeholder="johndoe@example.com"
                                                value="{{ old('email', $request->email) }}" readonly required>
                                            <x-input-error :messages="$errors->get('email')" class="mt-2" />
                                        </div>

                                        <div class="col-md-12">
                                            <label>Password</label>
                                            <input type="password"
                                                class="form-control @error('password') is-invalid @enderror" name="password"
                                                placeholder="******" required>
                                            <x-input-error :messages="$errors->get('password')" class="mt-2" />
                                        </div>

                                        <div class="col-md-12">
                                            <label>Confirm Password</label>
                                            <input type="password"
                                                class="form-control @error('password_confirmation') is-invalid @enderror"
                                                name="password_confirmation" placeholder="******" required>
                                            <x-input-error :messages="$errors->get('password_confirmation')" class="mt-2" />
                                        </div>

                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-primary mt-2" :disabled="loading">
                                                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                                @{{ btnText }}
                                            </button>
                                        </div>
                                    </div>
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

@push('extended-js')
    <script>
        $(function() {
            new Vue({
                el: "#root",
                data() {
                    return {
                        loading: false,
                        btnText: 'Reset Password'
                    }
                },
                methods: {
                    updatePassword() {
                        this.btnText = 'Please wait...'
                        this.loading = true
                        this.$refs.updatePasswordForm.submit();
                    }
                },
            });
        });
    </script>
@endpush
