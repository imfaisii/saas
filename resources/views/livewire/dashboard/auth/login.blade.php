<div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
    <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form">
        <div class="text-center mb-10">
            <h1 class="text-dark mb-3">Sign In to {{ config('app.name') }}</h1>
            <div class="text-gray-400 fw-bold fs-4">New Here?
                <a href="{{ route('register') }}" class="link-primary fw-bolder">Create an Account</a>
            </div>
        </div>

        @if (session('status'))
            <x-app.session-status type="success" :dismissable="true" />
        @endif

        @error('credentials')
            <x-app.auth-validation-errors class="mb-10" />
        @enderror

        <div class="fv-row mb-10">
            <label class="form-label fs-6 fw-bolder text-dark">Email</label>
            <x-form.input property='user.email' type="email" placeholder="johndoe@example.com" />
            <x-form.input-error :messages="$errors->get('user.email')" class="mt-2" />
        </div>

        <div class="fv-row mb-10">
            <div class="d-flex flex-stack mb-2">
                <label class="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
                <a href="{{ route('password.request') }}" class="link-primary fs-6 fw-bolder">Forgot Password ?</a>
            </div>
            <x-form.input property='user.password' type="password" placeholder="******" />
            <x-form.input-error :messages="$errors->get('user.password')" class="mt-2" />
        </div>

        <div class="text-center">
            <x-form.submit-button type="primary" class="w-50" functionName="loginUser" btnText="Sign In" />

            <div class="text-center text-muted text-uppercase fw-bolder mb-5 mt-5">or</div>

            <a href="{{ route('socialite.redirect', ['to' => 'google']) }}"
                class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                <img alt="Logo" src="{{ asset('backend/assets/media/svg/brand-logos/google-icon.svg') }}"
                    class="h-20px me-3" />Continue with Google
            </a>
            <a href="{{ route('socialite.redirect', ['to' => 'facebook']) }}"
                class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                <img alt="Logo" src="{{ asset('backend/assets/media/svg/brand-logos/facebook-4.svg') }}"
                    class="h-20px me-3" />Continue with Facebook
            </a>
            <a href="{{ route('socialite.redirect', ['to' => 'github']) }}"
                class="btn btn-flex flex-center btn-light btn-lg w-100">
                <img alt="Logo" src="{{ asset('backend/assets/media/svg/brand-logos/github.svg') }}"
                    class="h-20px me-3" />Continue with Github
            </a>
        </div>
    </form>
</div>
