<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seance extends Model
{
    use HasFactory;

    public function formateur()
    {
        return $this->belongsTo(Formateur::class, 'formateur_Matricule', 'Matricule');
    }

    public function module()
    {
        return $this->belongsTo(Module::class, 'Id_module', 'Id_module');
    }
}
