<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Seance;
use Illuminate\Http\Request;

class SeanceController extends Controller
{
    public function index()
    {
        $seances = Seance::with('formateur','module')->get();
        return response()->json([
            'seances' => $seances
        ], 200);
    }

    
}
