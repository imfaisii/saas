<?php

namespace App\Http\Livewire\Dashboard\Auth;

use App\Traits\Loadable;
use Illuminate\Validation\Rules\Password;
use Livewire\Component;

class Register extends Component
{
    use Loadable;

    public $user;

    public function updated($property)
    {
        $this->validateOnly($property);
    }

    protected $validationAttributes = [
        'user.name' => 'name',
        'user.email' => 'email address',
        'user.password' => 'password',
        'user.terms' => 'policy and terms',
    ];

    public function rules()
    {
        return [
            'user.name' => ['required', 'string', 'max:255'],
            'user.email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'user.password' => ['required', 'confirmed', Password::defaults()],
            'user.terms' => ['accepted'],
        ];
    }

    public function storeUser()
    {
        $this->validate();

        dd("validated");
    }

    public function render()
    {
        return view('livewire.dashboard.auth.register')
            ->extends('layouts.guest')
            ->section('content');
    }
}
