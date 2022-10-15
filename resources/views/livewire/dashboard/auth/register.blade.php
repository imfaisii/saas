<div class="w-lg-600px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <form class="form w-100" novalidate="novalidate">
        <div class="mb-10 text-center">
            <h1 class="text-dark mb-3">Create an Account</h1>
            <div class="text-gray-400 fw-bold fs-4">Already have an account?
                <a href="{{ route('login') }}" class="link-primary fw-bolder">Sign in here</a>
            </div>
        </div>
        <div class="d-flex justify-content-around mb-10 mx-10">
            <a href="{{ route('socialite.redirect', ['to' => 'github']) }}"
                class="btn btn-outline btn-outline-dashed btn-outline-default btn-active-light-dark btn-hover-scale">
                <img class="svg" src="{{ asset('backend/assets/media/svg/brand-logos/github.svg ') }}"
                    alt="img" />
            </a>
            <a href="{{ route('socialite.redirect', ['to' => 'facebook']) }}"
                class="btn btn-outline btn-outline-dashed btn-outline-default btn-active-light-dark btn-hover-scale">
                <img class="svg" height="24"
                    src="{{ asset('backend/assets/media/svg/brand-logos/facebook-2.svg ') }}" alt="img" />
            </a>
            <a href="{{ route('socialite.redirect', ['to' => 'google']) }}"
                class="btn btn-outline btn-outline-dashed btn-outline-default btn-active-light-dark btn-hover-scale">
                <img class="svg" src="{{ asset('backend/assets/media/svg/brand-logos/google-icon.svg') }}"
                    alt="img" />
            </a>
        </div>
        <div class="d-flex align-items-center mb-10">
            <div class="border-bottom border-gray-300 mw-50 w-100"></div>
            <span class="fw-bold text-gray-400 fs-7 mx-2">OR</span>
            <div class="border-bottom border-gray-300 mw-50 w-100"></div>
        </div>
        <div class="fv-row mb-7">
            <label class="form-label fw-bolder text-dark fs-6">Name</label>
            <x-form.input property='user.name' type="text" placeholder="John Doe" />
            <x-form.input-error :messages="$errors->get('user.name')" class="mt-2" />
        </div>
        <div class="fv-row mb-7">
            <label class="form-label fw-bolder text-dark fs-6">Email</label>
            <x-form.input property='user.email' type="email" placeholder="name@example.com" />
            <x-form.input-error :messages="$errors->get('user.email')" class="mt-2" />
        </div>
        <div class="mb-10 fv-row" data-kt-password-meter="true">
            <div class="mb-1">
                <label class="form-label fw-bolder text-dark fs-6">Password</label>
                <div class="position-relative mb-3">
                    <x-form.input property='user.password' type="password" placeholder="******" />
                    <span
                        class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2 
                        @error('user.password')
                            align-items-baseline
                        @enderror"
                        @error('user.password')
                        style="width: calc(3.3em + 1.1rem + 2px) !important;height: calc(1em + 1.1rem + 14px) !important;"
                        @enderror
                        data-kt-password-meter-control="visibility">
                        <i class="bi bi-eye-slash fs-2"></i>
                        <i class="bi bi-eye fs-2 d-none"></i>
                    </span>
                    <x-form.input-error :messages="$errors->get('user.password')" class="mt-2" />
                </div>
                <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                    <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                    <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                    <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                    <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                </div>
            </div>
            <div class="text-muted">Use 8 or more characters.</div>
        </div>
        <div class="fv-row mb-5">
            <label class="form-label fw-bolder text-dark fs-6">Confirm Password</label>
            <x-form.input property='user.password_confirmation' type="password" placeholder="******" />
        </div>
        <div class="fv-row mb-10">
            <label class="form-check form-check-custom form-check-solid form-check-inline">
                <input wire:model.lazy="user.terms" class="form-check-input" type="checkbox" name="toc"
                    value="1" />
                <span class="form-check-label fw-bold text-gray-700 fs-6">I Agree
                    <a href="#" class="ms-1 link-primary">Terms and conditions</a>.</span>
            </label>
            <x-form.input-error :messages="$errors->get('user.terms')" class="mt-2" />
        </div>
        <div class="text-center">
            <x-form.submit-button type="primary" class="w-50" functionName="storeUser" btnText="Create Account" />
        </div>
    </form>
</div>
