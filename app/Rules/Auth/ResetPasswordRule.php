<?php

namespace App\Rules\Auth;

use App\Models\Socialite;
use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class ResetPasswordRule implements Rule
{
    public function passes($attribute, $value)
    {
        return !Hash::check('someencryptedtext', User::whereEmail($value)->first()?->password);
    }

    public function message()
    {
        return 'You have created an account with social links, please try to login with your social account.';
    }
}
