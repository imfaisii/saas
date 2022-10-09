<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Socialite extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'driver',
        'driver_id',
        'name',
        'username',
        'email',
        'avatar',
        'token',
        'refresh_token',
        'expires_at'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
