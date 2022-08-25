<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_name',
        'price',
        'description',
        'image'
    ];

    public function keranjang() {
        return $this->belongsTo(Keranjang::class);
    }
}
