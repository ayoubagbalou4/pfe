<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Affectation extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function formateur()
    {
        return $this->belongsTo(Formateur::class, 'formateur_Matricule', 'Matricule');
    }

    public function module()
    {
        return $this->belongsTo(Module::class, 'Id_module', 'Id_module');
    }
}
