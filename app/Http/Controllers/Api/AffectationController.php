<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Affectation;
use Illuminate\Http\Request;

class AffectationController extends Controller
{
    public function index()
    {
        $affectations = Affectation::with('formateur', 'module')->get();
        return response()->json([
            'affectations' => $affectations
        ], 200);
    }

    public function destroy($Code_Groupe, $Id_module, $formateur_Matricule)
    {
        Affectation::where('Code_Groupe', $Code_Groupe)
            ->where('Id_module', $Id_module)
            ->where('formateur_Matricule', $formateur_Matricule)
            ->delete();
        return response('', 200);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        $existingRecord = Affectation::where('Code_Groupe', $data['Code_Groupe'])
            ->where('Id_module', $data['Id_module'])
            ->where('formateur_Matricule', $data['formateur_Matricule'])
            ->first();

        if ($existingRecord) {
            return response()->json(['error' => 'Duplicate entry'], 422);
        }

        Affectation::create($data);
        return response()->json([], 200);
    }

    public function show($Code_Groupe, $Id_module, $formateur_Matricule)
    {
        $affectation = Affectation::where('Code_Groupe', $Code_Groupe)
            ->where('Id_module', $Id_module)
            ->where('formateur_Matricule', $formateur_Matricule)
            ->first();
        return response()->json([
            'affectation' => $affectation
        ], 200);
    }


    public function update(Request $request, $Code_Groupe, $Id_module, $formateur_Matricule)
    {
        $affectation = Affectation::where('Code_Groupe', $Code_Groupe)
            ->where('Id_module', $Id_module)
            ->where('formateur_Matricule', $formateur_Matricule);

        $data = $request->all();
        $existingRecord = Affectation::where('Code_Groupe', $data['Code_Groupe'])
            ->where('Id_module', $data['Id_module'])
            ->where('formateur_Matricule', $data['formateur_Matricule'])
            ->first();

        if ($existingRecord) {
            return response()->json(['error' => 'Duplicate entry'], 422);
        }

        $affectation->update([
            'Code_Groupe' => $data['Code_Groupe'],
            'Id_module' => $data['Id_module'],
            'formateur_Matricule' => $data['formateur_Matricule'],
        ]);
        return response()->json([], 200);
    }
}
