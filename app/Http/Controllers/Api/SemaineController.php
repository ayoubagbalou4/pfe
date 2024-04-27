<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Seance;
use App\Models\Semaine;
use Illuminate\Http\Request;

class SemaineController extends Controller
{
    public function index()
    {
        $semaines = Semaine::all();
        return response()->json([
            'semaines' => $semaines
        ], 200);
    }

    public function destroy($id)
    {
        Semaine::find($id)->delete();
        return response('', 200);
    }

    public function store(Request $request)
    {
        Semaine::create($request->all());
        return response()->json([], 200);
    }

    public function show($id)
    {
        $semaine = Semaine::find($id);
        return response()->json([
            'semaine' => $semaine
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $semaine = Semaine::find($id);
        $semaine->update([
            'semaine' => $request->semaine,
            'firstDayOfWeek' => $request->firstDayOfWeek,
            'lastDayOfWeek' => $request->lastDayOfWeek,
            'Semaine_DRIF' => $request->Semaine_DRIF,
            'annee' => $request->annee,
        ]);
        return response()->json([], 200);
    }


    public function insertWeeks()
    {
        $year = date('Y');
        $startOfYear = strtotime("$year-01-01");
        $endOfYear = strtotime("$year-12-31");

        for ($weekStart = $startOfYear; $weekStart <= $endOfYear; $weekStart = strtotime('+1 week', $weekStart)) {
            $weekNumber = date('W', $weekStart);

            $firstDayOfWeek = date('Y-m-d', strtotime('monday', $weekStart));
            $lastDayOfWeek = date('Y-m-d', strtotime('sunday', $weekStart));

            Semaine::create([
                'semaine' => $weekNumber,
                'firstDayOfWeek' => $firstDayOfWeek,
                'lastDayOfWeek' => $lastDayOfWeek,
                'Semaine_DRIF' => $firstDayOfWeek,
                'annee' => $year,
            ]);
        }
        return response()->json([], 200);
    }
}
