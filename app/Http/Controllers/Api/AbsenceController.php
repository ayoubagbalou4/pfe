<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Absence;
use Illuminate\Http\Request;

class AbsenceController extends Controller
{
    public function store( Request $request){
        Absence::create([
            "formateur_Matricule"=>$request->formateur_Matricule,
            "justification"=>$request->justification,
            "semaine"=>$request->semaine,
            "jour"=>$request->jour,
            "date"=>$request->date

        ]);
        return response()->json([], 200);

    }
    public function index($semaine)
    {
        $absences = Absence::where("semaine",$semaine)->with('formateur')->get();
        return response()->json([
            'absences' => $absences
        ], 200);
    }
}
