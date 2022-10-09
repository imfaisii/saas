<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    public function redirect($to): RedirectResponse
    {
        Session::put('socialite_driver', $to);

        return Socialite::driver(session('socialite_driver'))->redirect();
    }

    public function callback(): void
    {
        $driver = session('socialite_driver');

        $data = Socialite::driver($driver)->user();

        $user = User::updateOrCreate(['email' => $data->email], self::getUserModel($data));

        $user->socialite()->updateOrCreate(['driver_id' => $data->id, 'email' => $data->email], self::getSubModel($data, $driver));

        self::loginUser($user);
    }

    public function loginUser($user): RedirectResponse
    {
        Auth::login($user);

        return redirect()->route('dashboard.home');
    }

    public function getUserModel(object $data): array
    {

        return [
            'name' => $data->name,
            'email' => $data->email,
            'password' => Hash::make('someencryptedtext'),
            'email_verified_at' => now()
        ];
    }

    public function getSubModel(object $data, $driver): array
    {
        return [
            'driver' => $driver,
            'driver_id' => $data->id,
            'name' => $data->name,
            'username' => $data->nickname,
            'email' => $data->email,
            'avatar' => $data->avatar,
            'token' => $data->token,
            'refresh_token' => $data->refreshToken,
            'expires_in' => $data->expiresIn,
        ];
    }
}
