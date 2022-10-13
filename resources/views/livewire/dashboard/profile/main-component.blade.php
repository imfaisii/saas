<div>
    <x-dashboard.master.bread-crumb-component />

    <div class="card position-relative user-member-card mb-4">
        <div class="card-body p-30">
            <div class="account-profile">
                <div class="account-profile d-flex align-items-center justify-content-center mb-4 ">
                    <div class="ap-img pro_img_wrapper">
                        <input id="file-upload" type="file" name="fileUpload" class="d-none">
                        <!-- Profile picture image-->
                        <label for="file-upload">
                            <img class="ap-img__main rounded-circle wh-120 bg-lighter d-flex"
                                src="https://ui-avatars.com/api/?background=random&name={{ auth()->user()->name }}"
                                alt="profile">
                            <span class="cross" id="remove_pro_pic">
                                <span data-feather="camera"></span>
                            </span>
                        </label>
                    </div>
                </div>
                <ul class="db-social-parent mb-0 justify-content-center">
                    <li class="db-social-parent__item">
                        <a class="color-facebook hover-facebook wh-38 fs-16 rounded-circle" href="#">
                            <i class="lab la-facebook-f"></i>
                        </a>
                    </li>
                    <li class="db-social-parent__item">
                        <a class="color-twitter hover-twitter wh-38 fs-16 rounded-circle" href="#">
                            <i class="lab la-twitter"></i>
                        </a>
                    </li>
                    <li class="db-social-parent__item">
                        <a class="color-instagram hover-instagram wh-38 fs-16 rounded-circle" href="#">
                            <i class="lab la-instagram"></i>
                        </a>
                    </li>
                </ul>
                <div class="edit-profile__body mt-4">
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group mb-25">
                                    <label>name <span class="text-danger">*</span></label>
                                    <x-input property='user.name' type="text" placeholder="John Doe" />
                                    <x-input-error :messages="$errors->get('user.name')" class="mt-2" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mb-25">
                                    <label>Email <span class="text-danger">*</span></label>
                                    <x-input property='user.email' type="email" placeholder="example.com" disabled />
                                    <x-input-error :messages="$errors->get('user.email')" class="mt-2" />
                                </div>
                            </div>
                            <div class="col-md-6 mb-1">
                                <div class="form-group mb-15">
                                    <label for="password-field">password</label>
                                    <div class="position-relative">
                                        <x-input property='user.password' type="password" placeholder="******" />
                                        <x-input-error :messages="$errors->get('user.password')" class="mt-2" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 mb-1">
                                <div class="form-group mb-15">
                                    <label for="password-field">
                                        confirm password</label>
                                    <div class="position-relative">
                                        <x-input property='user.password_confirmation' type="password"
                                            placeholder="******" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mb-25">
                                    <label>phone number </label>
                                    <x-input property='user.user_details.phone' type="tel" placeholder="+123456789" />
                                    <x-input-error :messages="$errors->get('user.phone')" class="mt-2" />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mb-25">
                                    <div wire:ignore>
                                        <label>country</label>
                                        <select data-pharaonic="select2" data-component-id="{{ $this->id }}"
                                            class="form-select @error('user.user_details.country') is-invalid @enderror"
                                            wire:model="user.user_details.country">
                                            <option value="EG">Egypt</option>
                                            <option value="TW">Taiwan</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mb-25">
                                    <div wire:ignore>
                                        <label>city</label>
                                        <select data-pharaonic="select2" data-component-id="{{ $this->id }}"
                                            class="form-control @error('user.user_details.city') is-invalid @enderror"
                                            wire:model="user.user_details.city">
                                            <option value="EG">Egypt</option>
                                            <option value="TW">Taiwan</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group mb-25">
                                    <label>company name</label>
                                    <x-input property='user.user_details.company' type="text"
                                        placeholder="Example Company" />
                                    <x-input-error :messages="$errors->get('user.user_details.company')" class="mt-2" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group mb-25">
                                    <label>Facebook URL</label>
                                    <x-input property='user.user_details.facebook_url' type="url"
                                        placeholder="https://facebook.com" />
                                    <x-input-error :messages="$errors->get('user.user_details.facebook_url')" class="mt-2" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group mb-25">
                                    <label>Twitter URL</label>
                                    <x-input property='user.user_details.twitter_url' type="text"
                                        placeholder="https://twitter.com" />
                                    <x-input-error :messages="$errors->get('user.user_details.twitter_url')" class="mt-2" />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group mb-25">
                                    <label>Instagram URL</label>
                                    <x-input property='user.user_details.instagram_url' type="text"
                                        placeholder="http://instagram.com" />
                                    <x-input-error :messages="$errors->get('user.user_details.instagram_url')" class="mt-2" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="button-group d-flex pt-25 justify-content-end">
                                    <button
                                        class="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2">Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
