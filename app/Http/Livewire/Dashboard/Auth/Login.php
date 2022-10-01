<?php

namespace App\Http\Livewire\Dashboard\Auth;

use App\Traits\Loadable;
use Livewire\Component;

class Login extends Component
{
    use Loadable;
    
    public function render()
    {
        return view('livewire.dashboard.auth.login')
            ->extends('layouts.guest')
            ->section('content');
    }
}
