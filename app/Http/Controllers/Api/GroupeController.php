<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Groupe;
use App\Models\Seance;
use Illuminate\Http\Request;

class GroupeController extends Controller
{
    public function index()
    {
        $groupes = Groupe::all();
        return response()->json([
            'groupes' => $groupes
        ], 200);
    }
    
    public function groupeStatistiques($semaine)
    {
        $Seancesgroupe = Seance::selectRaw('SUM(MH) as MHHebdog ,Code_Groupe')
            ->groupBy('Code_Groupe')
            ->where('No_Semaine_Calendrier',$semaine)
            ->with('groupe')
            ->get();
        return response()->json([
            'Seancesgroupe' => $Seancesgroupe
        ], 200);
    }
}
