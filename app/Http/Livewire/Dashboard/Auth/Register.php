<?php

namespace App\Http\Livewire\Dashboard\Auth;

use App\Models\User;
use App\Traits\Toastify;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Livewire\Component;
use Spatie\Permission\Models\Role;

class Register extends Component
{
    use Toastify;

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
        $this->user['password'] = Hash::make($this->user['password']);
        try {
            $user = User::create($this->user)->assignRole(Role::whereName('user')->first());

            Auth::login($user);
        } catch (Exception $exception) {
            self::sendException($exception);
        } finally {
            return redirect()->route('dashboard.home');
        }
    }

    public function render()
    {
        return view('livewire.dashboard.auth.register')
            ->extends('layouts.guest')
            ->section('content');
    }
}
