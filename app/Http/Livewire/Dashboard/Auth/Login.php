<?php

namespace App\Http\Livewire\Dashboard\Auth;

use App\Models\User;
use App\Traits\Toastify;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Livewire\Component;

class Login extends Component
{
    use Toastify;

    public $user;

    public function updated($property)
    {
        $this->validateOnly($property);
    }

    protected $validationAttributes = [
        'user.email' => 'email address',
        'user.password' => 'password',
    ];

    public function rules()
    {
        return [
            'user.email' => ['required', 'string', 'email', 'max:255', 'exists:users,email'],
            'user.password' => ['required', 'min:8'],
        ];
    }

    public function loginUser()
    {
        $this->validate();

        $db = User::whereEmail($this->user['email'])->first();

        if (Hash::check($this->user['password'], $db->password)) {
            Auth::loginUsingId($db->id);
            return redirect()->route('dashboard.home');
        }

        $this->addError('credentials', "Invalid credentials , please try again.");
    }
    public function render()
    {
        return view('livewire.dashboard.auth.login')
            ->extends('layouts.guest')
            ->section('content');
    }
}
