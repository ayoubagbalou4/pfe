<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absence extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function formateur()
    {
        return $this->belongsTo(Formateur::class, 'formateur_Matricule', 'Matricule');
    }

}
