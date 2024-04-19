<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Formateur;
use App\Models\Seance;
use Illuminate\Http\Request;

class FormateurController extends Controller
{
    public function index()
    {
        $formateurs = Formateur::all();
        return response()->json([
            'formateurs' => $formateurs
        ], 200);
    }
    public function formateurStatistiques($semaine)
    {
        $Seancesformateur = Seance::selectRaw('SUM(MH) as MHHebdoF ,formateur_Matricule')
            ->groupBy('formateur_Matricule')
            ->where('No_Semaine_Calendrier',$semaine)
            ->with('formateur')
            ->get();
        return response()->json([
            'Seancesformateur' => $Seancesformateur
        ], 200);
    }
}
