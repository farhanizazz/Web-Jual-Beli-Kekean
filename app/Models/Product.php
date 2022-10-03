<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'size_id',
        'product_name',
        'price',
        'description',
        'has_3d',
        'image_detail1',
        'image_detail2',
        'image_detail3',
        'image_thumbnail',
        'model_3d'
    ];

    public function keranjang() {
        return $this->belongsTo(Keranjang::class);
    }
    public function size() {
        return $this->hasOne(Size::class);
    }
}
