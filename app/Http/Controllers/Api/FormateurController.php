<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Formateur;
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

    public function store(Request $request)
    {
        Formateur::create($request->all());
        return response()->json([], 200);
    }

    public function show($id)
    {
        $formateur = Formateur::where('Matricule',$id)->first();
        return response()->json([
            'formateur' => $formateur
        ], 200);
    }

    public function destroy($id)
    {
        Formateur::where('Matricule',$id)->delete();
        return response('', 200);
    }

    public function update(Request $request, $id)
    {
        $formateur = Formateur::where('Matricule',$id);
        $formateur->update([
            'Matricule' => $request->Matricule,
            'Nom_Formateur' => $request->Nom_Formateur,
            'Abreviation' => $request->Abreviation,
            'Telephone' => $request->Telephone,
            'MH_Statutaire' => $request->MH_Statutaire,
            'Statut' => $request->Statut,
            'Affectation' => $request->Affectation,
            'Mutualise' => $request->Mutualise,
            'EFP_mutualise' => $request->EFP_mutualise,
            'Email' => $request->Email,
            'Id_Salle' => $request->Id_Salle,
            'Color' => $request->Color,
            'Background_Color' => $request->Background_Color,
        ]);
        return response()->json([], 200);
    }
}
