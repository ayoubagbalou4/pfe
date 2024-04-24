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

    public function remplacer($id1,Request $request){
        $seance = Seance::find($id1);
        $seance->update([
            "Id_Salle" => $request->Id_Salle,
            "Code_Groupe" => $request->Code_Groupe,
            "formateur_Matricule" => $request->formateur_Matricule,
            "Id_module" => $request->Id_module,
            "code_seance" => $request->code_seance,
            "Date" => $request->Date,
            "Jour_de_semaine" => $request->Jour_de_semaine,
            "No_Semaine_Calendrier" => $request->No_Semaine_Calendrier,
            "No_Semaine_DRIF" => $request->No_Semaine_DRIF,
            "MH" => $request->MH,
            "Horaire_debut" => $request->Horaire_debut,
            "Horaire_fin" => $request->Horaire_fin,
            "Type_seance" => $request-> Type_seance,
        ]);
        return response()->json([], 200);
    }

    public function dupliquer(Request $request){
        Seance::create([
            "Id_Salle" => $request->Id_Salle,
            "Code_Groupe" => $request->Code_Groupe,
            "formateur_Matricule" => $request->formateur_Matricule,
            "Id_module" => $request->Id_module,
            "code_seance" => $request->code_seance,
            "Date" => $request->Date,
            "Jour_de_semaine" => $request->Jour_de_semaine,
            "No_Semaine_Calendrier" => $request->No_Semaine_Calendrier,
            "No_Semaine_DRIF" => $request->No_Semaine_DRIF,
            "MH" => $request->MH,
            "Horaire_debut" => $request->Horaire_debut,
            "Horaire_fin" => $request->Horaire_fin,
            "Type_seance" => $request->Id_Salle?"PRESENTIEL":"A DISTANCE",
        ]);
        return response()->json([], 200);
    }


    public function supprimer($Code_Groupe,$formateur_Matricule,$code_seance){
        Seance::where('Code_Groupe',$Code_Groupe)
        ->where('formateur_Matricule',$formateur_Matricule)
        ->where('code_seance',$code_seance)
        ->delete();
        return response()->json([], 200);
    }

}
