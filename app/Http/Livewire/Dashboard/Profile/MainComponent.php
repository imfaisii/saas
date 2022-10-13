<?php

namespace App\Http\Livewire\Dashboard\Profile;

use Illuminate\Support\Arr;
use Illuminate\Validation\Rules\Password;
use Livewire\Component;

class MainComponent extends Component
{
    public $user;

    public function updated($property)
    {
        $this->validateOnly($property);
    }

    public function rules()
    {
        return [
            'user.name' => ['required', 'string', 'max:255'],
            'user.email' => ['required', 'string', 'email', 'max:255', 'exists:users,email'],
            'user.password' => ['required', 'confirmed', Password::defaults()],
            'user.user_details.phone' => ['nullable', 'string'],
            'user.user_details.country' => ['nullable', 'string'],
            'user.user_details.city' => ['nullable', 'required_if:country,1'],
            'user.user_details.company' => ['nullable', 'string'],
            'user.user_details.facebook_url' => ['nullable', 'url', 'regex:(facebook.com)'],
            'user.user_details.twitter_url' => ['nullable', 'url', 'regex:(twitter.com)'],
            'user.user_details.instagram_url' => ['nullable', 'url', 'regex:(instagram.com)'],
        ];
    }

    public function __construct()
    {
        $this->user = auth()->user();
    }

    public function updateProfile()
    {
        $this->validate();
    }

    public function render()
    {
        return view('livewire.dashboard.profile.main-component');
    }
}
