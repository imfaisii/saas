<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use Webpatser\Uuid\Uuid;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            if (Hash::info($model->password)['algo'] == null)
                $model->password = Hash::make($model->password);

            /* This will create a uniqute api key
                $model->api_token = str_replace("-", "", (string)Uuid::generate());
            */
        });
    }

    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function user_details()
    {
        return $this->hasOne(UserDetail::class);
    }

    public function socialite()
    {
        return $this->hasOne(Socialite::class, 'user_id', 'id');
    }

    public function scopeDriver($query, $type)
    {
        return $query->withWhereHas('socialite', fn ($q) => $q->whereDriver($type));
    }
}
