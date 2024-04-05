<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Seance;
use Illuminate\Http\Request;

class SeanceController extends Controller
{
    public function index()
    {
        $seances = Seance::with('formateur', 'module')->get();
        return response()->json([
            'seances' => $seances
        ], 200);
    }
    
    public function seanceParDate()
    {
        $seances = Seance::selectRaw('Date as date, No_Semaine_Calendrier as semaine')
            ->groupBy('Date', 'No_Semaine_Calendrier')
            ->get();

        return response()->json([
            'seanceParDate' => $seances
        ], 200);
    }
}
