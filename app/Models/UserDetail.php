<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;

    public $fillable = ['user_id', 'country', 'city', 'phone', 'company', 'facebook_url', 'twitter_url', 'instagram_url'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
