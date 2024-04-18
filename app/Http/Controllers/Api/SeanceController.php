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
    
    public function seancesParSemaine($semaine)
    {
        $seancesParSemaine = Seance::where('No_Semaine_Calendrier',$semaine)->with('formateur', 'module')->get();
        return response()->json([
            'seancesParSemaine' => $seancesParSemaine
        ], 200);
    }

    public function seanceParDate()
    {
        $seances = Seance::selectRaw('No_Semaine_Calendrier as semaine,
                                  MIN(Date) AS firstDayOfWeek,
                                  MAX(Date) AS lastDayOfWeek')
            ->groupBy('No_Semaine_Calendrier')
            ->get();

        return response()->json([
            'seanceParDate' => $seances
        ], 200);
    }
    public function realisationModulesParGrp()
    {
        $seances = Seance::selectRaw('SUM(MH) as somme ,Code_Groupe,Id_module,
        SUM(CASE WHEN Type_seance = "PRESENTIEL" THEN MH ELSE 0 END) as sommeP,
        SUM(CASE WHEN Type_seance = "A DISTANCE" THEN MH ELSE 0 END) as sommeD')
            ->groupBy('Code_Groupe','Id_module')
            ->get();
        return response()->json([
            'realisationModulesParGrp' => $seances
        ], 200);
    }
    public function semaineNumber(){
        $semaine = Seance::selectRaw('No_Semaine_Calendrier as number')
            ->groupBy('No_Semaine_Calendrier')
            ->get();
        return response()->json([
            'semaineNumber' => $semaine
        ], 200);
    }

}
