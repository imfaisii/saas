<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class AdminSeeder extends Seeder
{
    public function run()
    {
        User::firstOrCreate([
            'name' => 'Super Admin',
            'email' => 'superadmin@saas.com',
            'password' => Hash::make('123qweasdzxc'),
            'email_verified_at' => now(),
        ])->assignRole(Role::whereName('super-admin')->first());
    }
}
