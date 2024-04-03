<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FiliereModule extends Model
{
    use HasFactory;
    public function filiere()
    {
        return $this->belongsTo(Filiere::class, 'Code_filiere', 'Code_filiere');
    }

    public function module()
    {
        return $this->belongsTo(Module::class, 'Id_module', 'Id_module');
    }
}
