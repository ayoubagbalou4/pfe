<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seance extends Model
{
    use HasFactory;
    protected $guarded = [];
    // protected $hidden = ['created_at', 'updated_at'];


    public function formateur()
    {
        return $this->belongsTo(Formateur::class, 'formateur_Matricule', 'Matricule');
    }

    public function module()
    {
        return $this->belongsTo(Module::class, 'Id_module', 'Id_module');
    }
    public function groupe()
    {
        return $this->belongsTo(Groupe::class, 'Code_Groupe', 'Code_Groupe');
    }
}
